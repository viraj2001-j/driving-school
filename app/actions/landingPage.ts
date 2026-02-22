// "use server";

// import prisma from "@/lib/db";

// export type ResultBreakdown = {
//   total: number;
//   pass: number;
//   fail: number;
//   absent: number;
// };

// export type UpcomingExamItem = {
//   id: number;
//   examType: string;
//   vehicleClassName: string | null;
//   examDate: string;
//   examTime: string | null;
//   applicationId: string;
//   applicantName: string;
// };

// export type RecentApplicationItem = {
//   id: string;
//   referenceNo: string;
//   fullName: string;
//   createdAt: string;
//   medicalStatus: string;
// };

// export type DashboardStats = {
//   totalApplications: number;
//   canDriveCount: number;
//   pendingMedicalCount: number;

//   payment: {
//     pending: number;
//     partial: number;
//     paid: number;
//   };

//   writtenExams: ResultBreakdown;
//   drivingExams: ResultBreakdown;

//   upcomingExamAttempts: {
//     count: number;
//     items: UpcomingExamItem[];
//   };

//   revenue: {
//     totalPaid: number;
//     paymentsCount: number;
//   };

//   recentApplications: RecentApplicationItem[];
// };

// export async function getDashboardStats(): Promise<DashboardStats> {
//   // ===== BASIC COUNTS =====
//   const totalApplications = await prisma.studentApplication.count();

//   const canDriveCount = await prisma.studentApplication.count({
//     where: { canDriveVehicles: true },
//   });

//   const pendingMedicalCount = await prisma.studentApplication.count({
//     where: { medicalStatus: "PENDING" },
//   });

//   // ===== PAYMENT STATUS COUNTS =====
//   const [pendingPay, partialPay, paidPay] = await Promise.all([
//     prisma.paymentInfo.count({ where: { status: "PENDING" } }),
//     prisma.paymentInfo.count({ where: { status: "PARTIAL" } }),
//     prisma.paymentInfo.count({ where: { status: "PAID" } }),
//   ]);

//   // ===== WRITTEN EXAM RESULTS =====
//   const writtenGroup = await prisma.writtenExam.groupBy({
//     by: ["result"],
//     _count: { _all: true },
//   });

//   const written: ResultBreakdown = {
//     total: 0,
//     pass: 0,
//     fail: 0,
//     absent: 0,
//   };

//   for (const row of writtenGroup) {
//     written.total += row._count._all;
//     if (row.result === "PASS") written.pass = row._count._all;
//     if (row.result === "FAIL") written.fail = row._count._all;
//     if (row.result === "ABSENT") written.absent = row._count._all;
//   }

//   // ===== DRIVING EXAM RESULTS =====
//   const drivingGroup = await prisma.drivingExamResult.groupBy({
//     by: ["result"],
//     _count: { _all: true },
//   });

//   const driving: ResultBreakdown = {
//     total: 0,
//     pass: 0,
//     fail: 0,
//     absent: 0,
//   };

//   for (const row of drivingGroup) {
//     driving.total += row._count._all;
//     if (row.result === "PASS") driving.pass = row._count._all;
//     if (row.result === "FAIL") driving.fail = row._count._all;
//     if (row.result === "ABSENT") driving.absent = row._count._all;
//   }

//   // ===== UPCOMING EXAM ATTEMPTS =====
//   const today = new Date();
//   today.setHours(0, 0, 0, 0);

//   const upcomingAttempts = await prisma.examAttempt.findMany({
//     where: {
//       examDate: {
//         gte: today,
//       },
//     },
//     orderBy: { examDate: "asc" },
//     take: 10,
//     include: {
//       vehicleClass: true,
//       application: {
//         select: {
//           fullName: true,
//         },
//       },
//     },
//   });

//   const upcomingItems: UpcomingExamItem[] = upcomingAttempts.map((e) => ({
//     id: e.id,
//     examType: e.examType,
//     vehicleClassName: e.vehicleClass ? e.vehicleClass.name : null,
//     examDate: e.examDate.toISOString(),
//     examTime: e.examTime ? e.examTime.toISOString() : null,
//     applicationId: e.applicationId,
//     applicantName: e.application.fullName,
//   }));

//   // ===== REVENUE (PAYMENT RECORDS) =====
//   const revenueAgg = await prisma.paymentRecord.aggregate({
//     _sum: { amount: true },
//     _count: { _all: true },
//   });

//   const totalPaid = revenueAgg._sum.amount ?? 0;
//   const paymentsCount = revenueAgg._count._all;

//   // ===== RECENT APPLICATIONS =====
//   const recentApps = await prisma.studentApplication.findMany({
//     orderBy: { createdAt: "desc" },
//     take: 8,
//     select: {
//       id: true,
//       referenceNo: true,
//       fullName: true,
//       createdAt: true,
//       medicalStatus: true,
//     },
//   });

//   const recentApplicationItems: RecentApplicationItem[] = recentApps.map((a) => ({
//     id: a.id,
//     referenceNo: a.referenceNo,
//     fullName: a.fullName,
//     createdAt: a.createdAt.toISOString(),
//     medicalStatus: a.medicalStatus,
//   }));

//   return {
//     totalApplications,
//     canDriveCount,
//     pendingMedicalCount,
//     payment: {
//       pending: pendingPay,
//       partial: partialPay,
//       paid: paidPay,
//     },
//     writtenExams: written,
//     drivingExams: driving,
//     upcomingExamAttempts: {
//       count: upcomingItems.length,
//       items: upcomingItems,
//     },
//     revenue: {
//       totalPaid,
//       paymentsCount,
//     },
//     recentApplications: recentApplicationItems,
//   };
// }




"use server";

import prisma from "@/lib/db";

export type SimpleUpcomingExam = {
  id: number;
  examDate: string;
  examTime: string | null;
};

export type DashboardStats = {
  totalStudents: number;

  totalPendingStudents: number;
  totalPartialStudents: number;
  totalPaidStudents: number;

  totalPaidAmount: number;
  totalOutstandingAmount: number;

  upcomingWrittenExams: SimpleUpcomingExam[];
  upcomingDrivingExams: SimpleUpcomingExam[];
};

export async function getDashboardStats(): Promise<DashboardStats> {
  // ---------- TOTAL STUDENTS ----------
  const totalStudents = await prisma.studentApplication.count();

  // ---------- PAYMENT STATUS COUNTS ----------
  const [pendingCount, partialCount, paidCount] = await Promise.all([
    prisma.paymentInfo.count({ where: { status: "PENDING" } }),
    prisma.paymentInfo.count({ where: { status: "PARTIAL" } }),
    prisma.paymentInfo.count({ where: { status: "PAID" } }),
  ]);

  // ---------- TOTAL PAID & OUTSTANDING AMOUNTS ----------
  const totalFeeAgg = await prisma.paymentInfo.aggregate({
    _sum: { totalFee: true },
  });
  const totalFee = totalFeeAgg._sum.totalFee ?? 0;

  const paidAgg = await prisma.paymentRecord.aggregate({
    _sum: { amount: true },
  });
  const totalPaidAmount = paidAgg._sum.amount ?? 0;

  let totalOutstandingAmount = totalFee - totalPaidAmount;
  if (totalOutstandingAmount < 0) {
    totalOutstandingAmount = 0;
  }

  // ---------- UPCOMING EXAMS (ONLY ExamAttempt) ----------
  // Use the current moment, not just "today 00:00"
  const now = new Date();

  const upcomingAttempts = await prisma.examAttempt.findMany({
    where: {
      examDate: {
        gt: now,          // ✅ only strictly future date-times
      },
    },
    orderBy: { examDate: "asc" },
    take: 50,
  });

  const written: SimpleUpcomingExam[] = [];
  const driving: SimpleUpcomingExam[] = [];

  for (const a of upcomingAttempts) {
    const item: SimpleUpcomingExam = {
      id: a.id,
      examDate: a.examDate.toISOString(),
      examTime: a.examTime ? a.examTime.toISOString() : null,
    };

    if (a.examType === "WRITTEN") {
      written.push(item);
    } else if (a.examType === "DRIVING") {
      driving.push(item);
    }
  }

  return {
    totalStudents,

    totalPendingStudents: pendingCount,
    totalPartialStudents: partialCount,
    totalPaidStudents: paidCount,

    totalPaidAmount,
    totalOutstandingAmount,

    upcomingWrittenExams: written,
    upcomingDrivingExams: driving,
  };
}