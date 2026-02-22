// "use server";

// import prisma from "@/lib/db";
// import { recalcPaymentStatus } from "./recalcPaymentStatus";

// export async function addPayment(applicationId: string, amount: number) {
//   amount = Number(amount);

//   if (!amount || amount <= 0) {
//     return { success: false, error: "Invalid amount" };
//   }

//   try {
//     // Store new payment
//     await prisma.paymentRecord.create({
//       data: {
//         applicationId,
//         amount,
//       },
//     });

//     // Update status & paidDate
//     await recalcPaymentStatus(applicationId);

//     return { success: true };
//   } catch (error) {
//     console.error("Add Payment Error:", error);
//     return { success: false, error: "Failed to add payment" };
//   }
// }


// export async function recalcPaymentStatus(applicationId: string) {
//   const pInfo = await prisma.paymentInfo.findUnique({
//     where: { applicationId },
//   });

//   if (!pInfo) return;

//   const extraPayments = await prisma.paymentRecord.findMany({
//     where: { applicationId },
//     select: { amount: true },
//   });

//   const extraTotal = extraPayments.reduce((a, b) => a + b.amount, 0);

//   const totalPaid = pInfo.advanceFee + extraTotal;

//   let status = "PENDING";
//   let paidDate: Date | null = null;

//   if (totalPaid >= pInfo.totalFee) {
//     status = "PAID";
//     paidDate = new Date();
//   } else if (totalPaid > 0) {
//     status = "PARTIAL";
//     paidDate = new Date();
//   }

//   await prisma.paymentInfo.update({
//     where: { applicationId },
//     data: {
//       status,
//       paidDate,
//     },
//   });

//   return status;
// }


// export async function getPaymentSummary(applicationId: string) {
//   const pInfo = await prisma.paymentInfo.findUnique({
//     where: { applicationId },
//   });

//   if (!pInfo) return null;

//   const extra = await prisma.paymentRecord.findMany({
//     where: { applicationId },
//     orderBy: { paidDate: "asc" },
//   });

//   const extraTotal = extra.reduce((a, b) => a + b.amount, 0);

//   const totalPaid = pInfo.advanceFee + extraTotal;
//   const due = pInfo.totalFee - totalPaid;

//   return {
//     totalFee: pInfo.totalFee,
//     advanceFee: pInfo.advanceFee,
//     extraPayments: extra,
//     totalPaid,
//     due,
//     status: pInfo.status,
//     paidDate: pInfo.paidDate,
//   };
// }


// export async function searchStudents(query: string) {
//   if (!query.trim()) {
//     return prisma.studentApplication.findMany({
//       include: { paymentInfo: true },
//       orderBy: { createdAt: "desc" },
//     });
//   }

//   const q = query.toLowerCase();

//   return prisma.studentApplication.findMany({
//     where: {
//       OR: [
//         { fullName: { contains: q, mode: "insensitive" } },
//         { referenceNo: { contains: q, mode: "insensitive" } },
//         { paymentInfo: { status: { equals: q.toUpperCase() } } },
//       ],
//     },
//     include: { paymentInfo: true },
//   });
// }


"use server";

import prisma from "@/lib/db";

type PaymentStatus = "PENDING" | "PARTIAL" | "PAID";

// --------------------
// Search students (name, referenceNo, status)
// --------------------
export async function searchPaymentStudents(query: string) {
  const q = (query || "").trim();

  // If empty -> return latest
  if (!q) {
    return prisma.studentApplication.findMany({
      select: {
        id: true,
        fullName: true,
        nic: true,
        referenceNo: true,
        paymentInfo: { select: { status: true } },
      },
      orderBy: { createdAt: "desc" },
      take: 30,
    });
  }

  const statusCandidate = q.toUpperCase();
  const isStatus =
    statusCandidate === "PENDING" ||
    statusCandidate === "PARTIAL" ||
    statusCandidate === "PAID";

  return prisma.studentApplication.findMany({
    where: {
      OR: [
        { fullName: { contains: q, mode: "insensitive" } },
        { referenceNo: { contains: q, mode: "insensitive" } },
        { nic: { contains: q, mode: "insensitive" } },
        ...(isStatus
          ? [{ paymentInfo: { is: { status: statusCandidate } } }]
          : []),
      ],
    },
    select: {
      id: true,
      fullName: true,
      nic: true,
      referenceNo: true,
      paymentInfo: { select: { status: true } },
    },
    orderBy: { createdAt: "desc" },
    take: 30,
  });
}

// --------------------
// Summary for one student
// --------------------
export async function getPaymentSummary(applicationId: string) {
  const info = await prisma.paymentInfo.findUnique({
    where: { applicationId },
    select: {
      totalFee: true,
      advanceFee: true,
      status: true,
      paidDate: true,
    },
  });

  if (!info) return null;

  const records = await prisma.paymentRecord.findMany({
    where: { applicationId },
    orderBy: { paidDate: "desc" },
    select: { id: true, amount: true, paidDate: true },
  });

  const extraTotal = records.reduce((sum, r) => sum + r.amount, 0);
  const totalPaid = info.advanceFee + extraTotal;
  const due = Math.max(info.totalFee - totalPaid, 0);

  return {
    totalFee: info.totalFee,
    advanceFee: info.advanceFee,
    status: info.status as PaymentStatus,
    paidDate: info.paidDate,
    totalPaid,
    due,
    records,
  };
}

// --------------------
// Add a new payment record and update status
// --------------------
export async function addPayment(applicationId: string, amount: number) {
  const amt = Number(amount);

  if (!applicationId) return { success: false, error: "Missing student id" };
  if (!amt || amt <= 0) return { success: false, error: "Invalid amount" };

  try {
    await prisma.$transaction(async (tx) => {
      // 1) Insert payment record (with date)
      await tx.paymentRecord.create({
        data: { applicationId, amount: amt },
      });

      // 2) Recalculate + update PaymentInfo.status + paidDate
      const info = await tx.paymentInfo.findUnique({
        where: { applicationId },
        select: { totalFee: true, advanceFee: true },
      });

      if (!info) {
        throw new Error("Payment info not found for this student");
      }

      const records = await tx.paymentRecord.findMany({
        where: { applicationId },
        select: { amount: true },
      });

      const extraTotal = records.reduce((sum: any, r: { amount: any; }) => sum + r.amount, 0);
      const totalPaid = info.advanceFee + extraTotal;

      let status: PaymentStatus = "PENDING";
      let paidDate: Date | null = null;

      if (totalPaid >= info.totalFee) {
        status = "PAID";
        paidDate = new Date();
      } else if (totalPaid > 0) {
        status = "PARTIAL";
        paidDate = new Date();
      }

      await tx.paymentInfo.update({
        where: { applicationId },
        data: { status, paidDate },
      });
    });

    return { success: true };
  } catch (err: any) {
    console.error("Add Payment Error:", err);
    return { success: false, error: err?.message || "Failed to add payment" };
  }
}


// --------------------
// DELETE PAYMENT RECORD
// --------------------
export async function deletePaymentRecord(recordId: number, applicationId: string) {
  try {
    await prisma.$transaction(async (tx) => {
      // 1) Delete the record
      await tx.paymentRecord.delete({
        where: { id: recordId },
      });

      // 2) Recalculate payment status after deletion
      const info = await tx.paymentInfo.findUnique({
        where: { applicationId },
        select: { totalFee: true, advanceFee: true },
      });

      if (!info) {
        throw new Error("Payment info not found");
      }

      const records = await tx.paymentRecord.findMany({
        where: { applicationId },
        select: { amount: true },
      });

      const extraTotal = records.reduce((sum: any, r: { amount: any; }) => sum + r.amount, 0);
      const totalPaid = info.advanceFee + extraTotal;

      let status: "PENDING" | "PARTIAL" | "PAID" = "PENDING";
      let paidDate: Date | null = null;

      if (totalPaid >= info.totalFee) {
        status = "PAID";
        paidDate = new Date();
      } else if (totalPaid > 0) {
        status = "PARTIAL";
        paidDate = new Date();
      }

      await tx.paymentInfo.update({
        where: { applicationId },
        data: { status, paidDate },
      });
    });

    return { success: true };
  } catch (err: any) {
    console.error("Delete Payment Error:", err);
    return { success: false, error: err?.message || "Failed to delete payment record" };
  }
}
