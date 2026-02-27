// "use server";

// import prisma from "@/lib/db";

// function startOfToday() {
//   const d = new Date();
//   d.setHours(0, 0, 0, 0);
//   return d;
// }

// export async function getDashboardData() {
//   const today = startOfToday();

//   // Students counts
//   const totalStudents = await prisma.studentApplication.count();

//   // Payment counts (adjust enums if your status strings differ)
//   const paidCount = await prisma.paymentInfo.count({ where: { status: "PAID" } });
//   const pendingCount = await prisma.paymentInfo.count({ where: { status: "PENDING" } });
//   const partialCount = await prisma.paymentInfo.count({ where: { status: "PARTIAL" } });

//   // Total pending amount (totalFee - advanceFee) for PENDING/PARTIAL
//   const paymentRows = await prisma.paymentInfo.findMany({
//     where: { status: { in: ["PENDING", "PARTIAL"] } },
//     select: { totalFee: true, advanceFee: true },
//   });

//   const totalToPay = paymentRows.reduce((sum, p) => {
//     const totalFee = Number(p.totalFee ?? 0);
//     const advance = Number(p.advanceFee ?? 0);
//     const balance = Math.max(totalFee - advance, 0);
//     return sum + balance;
//   }, 0);

//   // Upcoming exam attempts (from ExamAttempt table)
//   // ✅ If your model name is different (ExamAttempt / ExamAttemptTable), tell me and I’ll adjust.
//   const upcoming = await prisma.examAttempt.findMany({
//     where: {
//       examDate: { gte: today },
//     },
//     orderBy: [{ examDate: "asc" }, { examTime: "asc" }, { attemptNo: "asc" }],
//     take: 40,
//     select: {
//       id: true,
//       examType: true, // "WRITTEN" | "DRIVING"
//       examDate: true,
//       examTime: true,
//       attemptNo: true,
//       result: true,
//       application: {
//         select: { id: true, referenceNo: true, fullName: true },
//       },
//       vehicleClass: {
//         select: { id: true, name: true },
//       },
//     },
//   });

//   const upcomingWritten = upcoming
//     .filter((e) => String(e.examType).toUpperCase() === "WRITTEN")
//     .slice(0, 12);

//   const upcomingDriving = upcoming
//     .filter((e) => String(e.examType).toUpperCase() === "DRIVING")
//     .slice(0, 12);

//   return {
//     totalStudents,
//     paidCount,
//     pendingCount,
//     partialCount,
//     totalToPay,
//     upcomingWritten,
//     upcomingDriving,
//   };
// }


"use server";

import prisma from "@/lib/db";

function startOfToday() {
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  return d;
}

export async function getDashboardData() {
  const today = startOfToday();

  // Students
  const totalStudents = await prisma.studentApplication.count();

  // Payment status counts
  const paidCount = await prisma.paymentInfo.count({ where: { status: "PAID" } });
  const pendingCount = await prisma.paymentInfo.count({ where: { status: "PENDING" } });
  const partialCount = await prisma.paymentInfo.count({ where: { status: "PARTIAL" } });

  // Payment totals (amounts)
  const paidAgg = await prisma.paymentInfo.aggregate({
    where: { status: "PAID" },
    _sum: { totalFee: true, advanceFee: true },
  });

  const pendingAgg = await prisma.paymentInfo.aggregate({
    where: { status: "PENDING" },
    _sum: { totalFee: true, advanceFee: true },
  });

  const partialAgg = await prisma.paymentInfo.aggregate({
    where: { status: "PARTIAL" },
    _sum: { totalFee: true, advanceFee: true },
  });

  const paidTotal = Number(paidAgg._sum.totalFee ?? 0);

  const pendingTotalFee = Number(pendingAgg._sum.totalFee ?? 0);
  const pendingAdvance = Number(pendingAgg._sum.advanceFee ?? 0);
  const pendingBalanceTotal = Math.max(pendingTotalFee - pendingAdvance, 0);

  const partialTotalFee = Number(partialAgg._sum.totalFee ?? 0);
  const partialAdvance = Number(partialAgg._sum.advanceFee ?? 0);
  const partialBalanceTotal = Math.max(partialTotalFee - partialAdvance, 0);

  // Total outstanding to collect (Pending + Partial)
  const totalToPay = pendingBalanceTotal + partialBalanceTotal;

  // Driving PASSED student count (unique applications) using BOTH tables
  const passFromAttempts = await prisma.examAttempt.findMany({
    where: {
      examType: "DRIVING",
      result: "PASS",
    },
    distinct: ["applicationId"],
    select: { applicationId: true },
  });

  const passFromDrivingResults = await prisma.drivingExamResult.findMany({
    where: {
      result: "PASS",
    },
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
      application: {
        select: { id: true, referenceNo: true, fullName: true },
      },
      vehicleClass: {
        select: { id: true, name: true },
      },
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
  };
}