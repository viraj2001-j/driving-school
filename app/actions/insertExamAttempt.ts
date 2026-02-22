// "use server";

// import prisma from "@/lib/db";

// export async function insertExamAttempt(data: {
//   applicationId: string;
//   examType: "WRITTEN" | "DRIVING";
//   vehicleClassId?: number | null;
//   attemptNo: number;
//   examDate: string;
//   examTime?: string;
//   notes?: string;
// }) {
//   try {
//     const { applicationId, examType, vehicleClassId, attemptNo, examDate, examTime, notes } = data;

//     const fullDate = examTime
//       ? new Date(`${examDate}T${examTime}`)
//       : new Date(`${examDate}T00:00`);

//     const record = await prisma.examAttempt.create({
//       data: {
//         applicationId,
//         examType,
//         vehicleClassId: examType === "DRIVING" ? vehicleClassId ?? null : null,
//         attemptNo,
//         examDate: fullDate,
//         examTime: examTime ? fullDate : null,
//         notes: notes || "",
//       },
//     });

//     return { success: true, record };
//   } catch (err) {
//     console.error("insertExamAttempt ERROR:", err);
//     return { success: false, error: "Server Error" };
//   }
// }


// "use server";

// import prisma from "@/lib/db";

// export async function insertExamAttempt(data: {
//   applicationId: string;
//   examType: "WRITTEN" | "DRIVING";
//   vehicleClassId?: number | null;
//   attemptNo: number;
//   examDate: string;
//   examTime?: string;
//   notes?: string;
// }) {
//   try {
//     const { applicationId, examType, vehicleClassId, attemptNo, examDate, examTime, notes } = data;

//     const fullDate = examTime
//       ? new Date(`${examDate}T${examTime}`)
//       : new Date(`${examDate}T00:00`);

//     const record = await prisma.examAttempt.create({
//       data: {
//         applicationId,
//         examType,
//         vehicleClassId:
//           examType === "DRIVING" && vehicleClassId
//             ? Number(vehicleClassId)
//             : null,
//         attemptNo,
//         examDate: fullDate,
//         examTime: examTime ? fullDate : null,
//         notes: notes || "",
//       },
//     });

//     return { success: true, record };
//   } catch (err) {
//     console.error("insertExamAttempt ERROR:", err);
//     return { success: false, error: "Server Error" };
//   }
// }




"use server";

import prisma from "@/lib/db";

export async function insertExamAttempt(data: {
  applicationId: string;
  examType: "WRITTEN" | "DRIVING";
  vehicleClassId?: number | null;
  attemptNo: number;
  examDate: string;   // "YYYY-MM-DD"
  examTime?: string;  // "HH:mm"
  notes?: string;
  result?: "PASS" | "FAIL" | "ABSENT"; // optional, default ABSENT
}) {
  try {
    if (!data.examDate || !data.examDate.trim()) {
      return { success: false, error: "Exam date is required" };
    }

    const fullDate = data.examTime?.trim()
      ? new Date(`${data.examDate}T${data.examTime}:00`)
      : new Date(`${data.examDate}T00:00:00`);

    if (isNaN(fullDate.getTime())) {
      return { success: false, error: "Invalid exam date/time" };
    }

    // FK safety: if DRIVING, vehicleClassId must exist
    const vcId =
      data.examType === "DRIVING" && data.vehicleClassId
        ? Number(data.vehicleClassId)
        : null;

    const record = await prisma.examAttempt.create({
      data: {
        applicationId: data.applicationId,
        examType: data.examType,
        vehicleClassId: vcId,
        attemptNo: Number(data.attemptNo),
        examDate: fullDate,
        examTime: data.examTime?.trim() ? fullDate : null,
        notes: data.notes?.trim() ? data.notes : null,
        result: (data.result ?? "ABSENT") as any, // default ABSENT
      },
    });

    return { success: true, record };
  } catch (err) {
    console.error("insertExamAttempt ERROR:", err);
    return { success: false, error: "Server Error" };
  }
}
