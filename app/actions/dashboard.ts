"use server";

import prisma from "@/lib/db";

function startOfToday() {
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  return d;
}

function addYears(d: Date, years: number) {
  const x = new Date(d);
  x.setFullYear(x.getFullYear() + years);
  return x;
}

export async function getDashboardData() {
  const today = startOfToday();

  // ✅ DOB cutoff for age >= 18
  const dobCutoff18 = addYears(today, -18); // born on or before this date => age 18+

  // Students
  const totalStudents = await prisma.studentApplication.count();

  // ✅ 18+ students count
  const eligible18Count = await prisma.studentApplication.count({
    where: { dob: { lte: dobCutoff18 } },
  });

  // ✅ Show list (latest created first or oldest first - choose one)
  const eligible18Students = await prisma.studentApplication.findMany({
    where: { dob: { lte: dobCutoff18 } },
    orderBy: { createdAt: "desc" },
    take: 12,
    select: {
      id: true,
      referenceNo: true,
      fullName: true,
      dob: true,
      canDriveVehicles: true,
    },
  });

  // Payment status counts
  const paidCount = await prisma.paymentInfo.count({ where: { status: "PAID" } });
  const pendingCount = await prisma.paymentInfo.count({ where: { status: "PENDING" } });
  const partialCount = await prisma.paymentInfo.count({ where: { status: "PARTIAL" } });

  // ✅ Payment totals using PaymentRecord + advanceFee (correct)
  const [infos, recordsAgg] = await Promise.all([
    prisma.paymentInfo.findMany({
      select: { applicationId: true, totalFee: true, advanceFee: true, status: true },
    }),
    prisma.paymentRecord.groupBy({
      by: ["applicationId"],
      _sum: { amount: true },
    }),
  ]);

  const extraMap = new Map<string, number>();
  for (const r of recordsAgg) extraMap.set(r.applicationId, Number(r._sum.amount ?? 0));

  // totals for charts/cards
  let paidTotal = 0;
  let pendingBalanceTotal = 0;
  let partialBalanceTotal = 0;

  for (const p of infos) {
    const extra = extraMap.get(p.applicationId) ?? 0;
    const totalPaid = Number(p.advanceFee ?? 0) + extra;
    const due = Math.max(Number(p.totalFee ?? 0) - totalPaid, 0);

    if (p.status === "PAID") {
      paidTotal += Number(p.totalFee ?? 0);
    } else if (p.status === "PENDING") {
      pendingBalanceTotal += due;
    } else if (p.status === "PARTIAL") {
      partialBalanceTotal += due;
    }
  }

  const totalToPay = pendingBalanceTotal + partialBalanceTotal;

  // Driving PASSED student count (unique applications) using BOTH tables
  const passFromAttempts = await prisma.examAttempt.findMany({
    where: { examType: "DRIVING", result: "PASS" },
    distinct: ["applicationId"],
    select: { applicationId: true },
  });

  const passFromDrivingResults = await prisma.drivingExamResult.findMany({
    where: { result: "PASS" },
    distinct: ["applicationId"],
    select: { applicationId: true },
  });

  const passedSet = new Set<string>();
  passFromAttempts.forEach((r) => passedSet.add(r.applicationId));
  passFromDrivingResults.forEach((r) => passedSet.add(r.applicationId));
  const drivingPassedStudents = passedSet.size;

  // Upcoming exam attempts
  const upcoming = await prisma.examAttempt.findMany({
    where: { examDate: { gte: today } },
    orderBy: [{ examDate: "asc" }, { examTime: "asc" }, { attemptNo: "asc" }],
    take: 40,
    select: {
      id: true,
      examType: true,
      examDate: true,
      examTime: true,
      attemptNo: true,
      result: true,
      application: { select: { id: true, referenceNo: true, fullName: true } },
      vehicleClass: { select: { id: true, name: true } },
    },
  });

  const upcomingWritten = upcoming
    .filter((e) => String(e.examType).toUpperCase() === "WRITTEN")
    .slice(0, 12);

  const upcomingDriving = upcoming
    .filter((e) => String(e.examType).toUpperCase() === "DRIVING")
    .slice(0, 12);

  return {
    totalStudents,

    paidCount,
    pendingCount,
    partialCount,

    paidTotal,
    pendingBalanceTotal,
    partialBalanceTotal,
    totalToPay,

    drivingPassedStudents,

    upcomingWritten,
    upcomingDriving,

    // ✅ new
    eligible18Count,
    eligible18Students,
  };
}