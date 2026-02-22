// "use server";

// import prisma from "@/lib/db";

// export async function insertTrainingRecord(data: {
//   applicationId: string;
//   trainedDates: string;
//   examResult: string;
//   notes?: string;
// }) {
//   try {
//     const created = await prisma.drivingExam.upsert({
//       where: { applicationId: data.applicationId },
//       update: {
//         trainedDates: data.trainedDates,
//         examResult: data.examResult,
//         notes: data.notes || null,
//       },
//       create: {
//         applicationId: data.applicationId,
//         trainedDates: data.trainedDates,
//         examResult: data.examResult,
//         notes: data.notes || null,
//       },
//     });

//     return { success: true, id: created.id };
//   } catch (err) {
//     console.error("Training Record Insert Error:", err);
//     return { success: false, error: "Failed to insert training record" };
//   }
// }


// "use server";

// import prisma from "@/lib/db";

// const RESULT_OPTIONS = ["PASS", "FAIL", "ABSENT"] as const;
// type Result = (typeof RESULT_OPTIONS)[number];

// function isValidResult(val: any): val is Result {
//   return RESULT_OPTIONS.includes(val);
// }

// // --------------------------------------
// // 1) Fetch selected vehicle classes for student application
// // --------------------------------------
// export async function getApplicationVehicleClasses(applicationId: string) {
//   const rows = await prisma.applicationVehicleClass.findMany({
//     where: { applicationId },
//     include: { vehicleClass: true },
//     orderBy: { vehicleClassId: "asc" },
//   });

//   return rows.map((r) => ({
//     vehicleClassId: r.vehicleClassId,
//     name: r.vehicleClass.name,
//     code: r.vehicleClass.code,
//   }));
// }

// // --------------------------------------
// // 2) Get Driving Exam Overview (trainedDates, examDate, notes)
// // --------------------------------------
// export async function getDrivingExamOverview(applicationId: string) {
//   const exam = await prisma.drivingExamResult.findUnique({
//     where: { applicationId },
//     select: {
//       trainedDates: true,
//       examDate: true,
//       notes: true,
      
//     },
//   });

//   return exam; // can be null
// }

// // --------------------------------------
// // 3) Save Driving Exam Overview
// // (Upsert: update if exists, else create)
// // --------------------------------------
// export async function saveDrivingExamOverview(data: {
//   applicationId: string;
//   trainedDates: string;
//   examDate?: string; // "YYYY-MM-DD" (optional)
//   notes?: string;
// }) {
//   try {
//     const examDate =
//       data.examDate && data.examDate.trim()
//         ? new Date(`${data.examDate}T00:00:00`)
//         : null;

//     if (examDate && isNaN(examDate.getTime())) {
//       return { success: false, error: "Invalid exam date" };
//     }

//     await prisma.drivingExam.upsert({
//       where: { applicationId: data.applicationId },
//       update: {
//         trainedDates: data.trainedDates,
//         examDate,
//         notes: data.notes?.trim() ? data.notes.trim() : null,
//         // keep this field stable in DB (since per-vehicle results are stored elsewhere)
//         examResult: "PER_VEHICLE",
//       },
//       create: {
//         applicationId: data.applicationId,
//         trainedDates: data.trainedDates,
//         examDate,
//         notes: data.notes?.trim() ? data.notes.trim() : null,
//         examResult: "PER_VEHICLE",
//       },
//     });

//     return { success: true };
//   } catch (err) {
//     console.error("saveDrivingExamOverview error:", err);
//     return { success: false, error: "Failed to save driving exam overview" };
//   }
// }

// // --------------------------------------
// // 4) Get per-vehicle driving results already saved
// // --------------------------------------
// export async function getDrivingExamResults(applicationId: string) {
//   const rows = await prisma.drivingExamResult.findMany({
//     where: { applicationId },
//     select: {
//       vehicleClassId: true,
//       result: true,
//       notes: true,
//       createdAt: true,
//     },
//   });

//   return rows.map((r) => ({
//     vehicleClassId: r.vehicleClassId,
//     result: r.result as Result,
//     notes: r.notes ?? "",
//     createdAt: r.createdAt,
//   }));
// }

// // --------------------------------------
// // 5) Save per-vehicle result (upsert)
// // --------------------------------------
// export async function saveDrivingExamResult(data: {
//   applicationId: string;
//   vehicleClassId: number;
//   result: "PASS" | "FAIL" | "ABSENT";
//   notes?: string;
// }) {
//   try {
//     if (!data.applicationId) return { success: false, error: "Missing applicationId" };
//     if (!data.vehicleClassId) return { success: false, error: "Missing vehicleClassId" };
//     if (!isValidResult(data.result)) return { success: false, error: "Invalid result value" };

//     await prisma.drivingExamResult.upsert({
//       where: {
//         applicationId_vehicleClassId: {
//           applicationId: data.applicationId,
//           vehicleClassId: data.vehicleClassId,
//         },
//       },
//       update: {
//         result: data.result,
//         notes: data.notes?.trim() ? data.notes.trim() : null,
//       },
//       create: {
//         applicationId: data.applicationId,
//         vehicleClassId: data.vehicleClassId,
//         result: data.result,
//         notes: data.notes?.trim() ? data.notes.trim() : null,
//       },
//     });

//     return { success: true };
//   } catch (err) {
//     console.error("saveDrivingExamResult error:", err);
//     return { success: false, error: "Failed to save driving exam result" };
//   }
// }



"use server";

import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";

const RESULT_OPTIONS = ["PASS", "FAIL", "ABSENT"] as const;
type ResultType = (typeof RESULT_OPTIONS)[number];

function safeParseDate(dateStr?: string | null) {
  if (!dateStr) return null;
  const dt = new Date(dateStr);
  return isNaN(dt.getTime()) ? null : dt;
}

export async function getStudentDrivingExamBundle(applicationId: string) {
  try {
    const student = await prisma.studentApplication.findUnique({
      where: { id: applicationId },
      select: {
        id: true,
        fullName: true,
        nic: true,
        referenceNo: true,

        // ✅ vehicle classes selected in application
        vehicleClasses: {
          include: { vehicleClass: true },
          orderBy: { id: "asc" },
        },

        // ✅ existing driving results
        drivingExamResults: {
          include: { vehicleClass: true },
          orderBy: { vehicleClassId: "asc" },
        },
      },
    });

    return { success: true, student };
  } catch (err) {
    console.error("getStudentDrivingExamBundle error:", err);
    return { success: false, student: null, error: "Failed to load student data" };
  }
}

export async function upsertDrivingExamResult(data: {
  applicationId: string;
  vehicleClassId: number;
  result: string; // PASS/FAIL/ABSENT
  trainedDates: string;
  examDate?: string; // yyyy-mm-dd
  notes?: string;
}) {
  try {
    if (!data.applicationId) return { success: false, error: "Missing applicationId" };
    if (!data.vehicleClassId) return { success: false, error: "Missing vehicleClassId" };

    const result = (data.result || "").toUpperCase().trim();
    if (!RESULT_OPTIONS.includes(result as ResultType)) {
      return { success: false, error: "Invalid result. Use PASS / FAIL / ABSENT" };
    }

    const trainedDates = (data.trainedDates || "").trim();
    if (!trainedDates) {
      return { success: false, error: "Trained dates are required" };
    }

    const examDate = safeParseDate(data.examDate);

    // ✅ Upsert by @@unique([applicationId, vehicleClassId])
    await prisma.drivingExamResult.upsert({
      where: {
        applicationId_vehicleClassId: {
          applicationId: data.applicationId,
          vehicleClassId: data.vehicleClassId,
        },
      },
      create: {
        applicationId: data.applicationId,
        vehicleClassId: data.vehicleClassId,
        result: result as any,
        trainedDates,
        examDate,
        notes: data.notes?.trim() ? data.notes.trim() : null,
      },
      update: {
        result: result as any,
        trainedDates,
        examDate,
        notes: data.notes?.trim() ? data.notes.trim() : null,
      },
    });

    // ✅ change this to your page path
    revalidatePath("/forms/driving-exam");

    return { success: true };
  } catch (err) {
    console.error("upsertDrivingExamResult error:", err);
    return { success: false, error: "Failed to save driving exam result" };
  }
}

export async function deleteDrivingExamResult(data: {
  applicationId: string;
  vehicleClassId: number;
}) {
  try {
    await prisma.drivingExamResult.delete({
      where: {
        applicationId_vehicleClassId: {
          applicationId: data.applicationId,
          vehicleClassId: data.vehicleClassId,
        },
      },
    });

    revalidatePath("/driving-exam-results");
    return { success: true };
  } catch (err) {
    // if record doesn't exist, treat as success (safe)
    console.error("deleteDrivingExamResult error:", err);
    return { success: false, error: "Failed to delete record" };
  }
}


