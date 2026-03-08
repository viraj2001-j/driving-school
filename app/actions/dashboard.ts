"use server";

import prisma from "@/lib/db";
import { unstable_noStore as noStore } from "next/cache";

function startOfToday() {
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  return d;
}

function addYearsSafe(date: Date, years: number) {
  const d = new Date(date);
  const month = d.getMonth();
  const day = d.getDate();

  d.setFullYear(d.getFullYear() + years);

  if (d.getMonth() !== month || d.getDate() !== day) {
    d.setDate(0);
  }

  d.setHours(0, 0, 0, 0);
  return d;
}

function addDays(date: Date, days: number) {
  const d = new Date(date);
  d.setDate(d.getDate() + days);
  d.setHours(0, 0, 0, 0);
  return d;
}

function addMonthsSafe(date: Date, months: number) {
  const d = new Date(date);
  const originalDate = d.getDate();

  d.setMonth(d.getMonth() + months);

  if (d.getDate() !== originalDate) {
    d.setDate(0);
  }

  d.setHours(0, 0, 0, 0);
  return d;
}

export async function getDashboardData() {
  noStore();

  const today = startOfToday();
  const sevenDaysAgo = addDays(today, -7);

  const totalStudents = await prisma.studentApplication.count();

  const allStudentsFor18Window = await prisma.studentApplication.findMany({
    select: {
      id: true,
      referenceNo: true,
      fullName: true,
      dob: true,
      email: true,
      phone1: true,
      canDriveVehicles: true,
      createdAt: true,
    },
  });

  const eligible18Students = allStudentsFor18Window
    .map((s) => {
      const birthday18 = addYearsSafe(new Date(s.dob), 18);
      return {
        ...s,
        birthday18,
      };
    })
    .filter((s) => s.birthday18 >= sevenDaysAgo && s.birthday18 <= today)
    .sort((a, b) => b.birthday18.getTime() - a.birthday18.getTime())
    .slice(0, 12);

  const eligible18Count = eligible18Students.length;

  // NEW: 3 months completed from written exam date, show for 7 days only, exclude FAIL
  const writtenExamStudents = await prisma.writtenExam.findMany({
    where: {
      result: {
        not: "FAIL",
      },
    },
    orderBy: {
      examDate: "desc",
    },
    select: {
      id: true,
      examDate: true,
      result: true,
      attemptNo: true,
      barCode: true,
      application: {
        select: {
          id: true,
          referenceNo: true,
          fullName: true,
          email: true,
          phone1: true,
        },
      },
    },
  });

  const writtenThreeMonthStudents = writtenExamStudents
    .map((w) => {
      const completedDate = addMonthsSafe(new Date(w.examDate), 3);
      return {
        ...w,
        completedDate,
      };
    })
    .filter((w) => w.completedDate >= sevenDaysAgo && w.completedDate <= today)
    .sort((a, b) => b.completedDate.getTime() - a.completedDate.getTime())
    .slice(0, 12);

  const writtenThreeMonthCount = writtenThreeMonthStudents.length;

  const paidCount = await prisma.paymentInfo.count({ where: { status: "PAID" } });
  const pendingCount = await prisma.paymentInfo.count({ where: { status: "PENDING" } });
  const partialCount = await prisma.paymentInfo.count({ where: { status: "PARTIAL" } });

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
    eligible18Count,
    eligible18Students,

    // NEW
    writtenThreeMonthCount,
    writtenThreeMonthStudents,
  };
}