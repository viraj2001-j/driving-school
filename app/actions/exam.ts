// // app/actions/filterFailedExams.ts
// "use server";

// import prisma from "@/lib/db";

// export type ExamResultString = "PASS" | "FAIL" | "ABSENT";
// export type ExamType = "WRITTEN" | "DRIVING";

// export type FailedExamStudent = {
//   applicationId: string;
//   referenceNo: string;
//   fullName: string;
//   nic: string;
//   writtenExams: {
//     id: number;
//     barCode: string;
//     examDate: Date;
//     result: ExamResultString;
//     attemptNo: number;
//     notes: string | null;
//   }[];
//   drivingExams: {
//     id: number;
//     vehicleClassId: number;
//     result: ExamResultString;
//     notes: string | null;
//     examDate: Date | null;
//     vehicleClass: {
//       code: string;
//       name: string;
//     };
//   }[];
//   examAttempts: {
//     id: number;
//     examType: ExamType;
//     vehicleClassId: number | null;
//     attemptNo: number;
//     examDate: Date;
//     examTime: Date | null;
//     notes: string | null;
//     result: ExamResultString;
//     vehicleClass: {
//       code: string;
//       name: string;
//     } | null;
//   }[];
// };

// type ActionError = { success: false; error: string };

// // ────────────────────────────────────────────
// // 1) SEARCH: only FAIL / ABSENT exams shown
// //    + return all ExamAttempt rows for that student
// // ────────────────────────────────────────────

// export async function searchFailedStudentsWithExams(
//   query: string
// ): Promise<FailedExamStudent[]> {
//   const q = query.trim();
//   if (!q) return [];

//   const students = await prisma.studentApplication.findMany({
//     where: {
//       AND: [
//         {
//           OR: [
//             { fullName: { contains: q, mode: "insensitive" } },
//             { nic: { contains: q, mode: "insensitive" } },
//             { referenceNo: { contains: q, mode: "insensitive" } },
//           ],
//         },
//         {
//           OR: [
//             {
//               writtenExams: {
//                 some: { result: { in: ["FAIL", "ABSENT"] } },
//               },
//             },
//             {
//               drivingExamResults: {
//                 some: { result: { in: ["FAIL", "ABSENT"] } },
//               },
//             },
//           ],
//         },
//       ],
//     },
//     select: {
//       id: true,
//       referenceNo: true,
//       fullName: true,
//       nic: true,
//       writtenExams: {
//         where: { result: { in: ["FAIL", "ABSENT"] } },
//         orderBy: { examDate: "desc" },
//         select: {
//           id: true,
//           barCode: true,
//           examDate: true,
//           result: true,
//           attemptNo: true,
//           notes: true,
//         },
//       },
//       drivingExamResults: {
//         where: { result: { in: ["FAIL", "ABSENT"] } },
//         orderBy: { examDate: "desc" },
//         select: {
//           id: true,
//           vehicleClassId: true,
//           result: true,
//           notes: true,
//           examDate: true,
//           vehicleClass: {
//             select: {
//               code: true,
//               name: true,
//             },
//           },
//         },
//       },
//       examAttempts: {
//         orderBy: { examDate: "desc" },
//         select: {
//           id: true,
//           examType: true,
//           vehicleClassId: true,
//           attemptNo: true,
//           examDate: true,
//           examTime: true,
//           notes: true,
//           result: true,
//           vehicleClass: {
//             select: {
//               code: true,
//               name: true,
//             },
//           },
//         },
//       },
//     },
//     take: 50,
//   });

//   return students.map((s) => ({
//     applicationId: s.id,
//     referenceNo: s.referenceNo,
//     fullName: s.fullName,
//     nic: s.nic,
//     writtenExams: s.writtenExams,
//     drivingExams: s.drivingExamResults,
//     examAttempts: s.examAttempts as any,
//   }));
// }

// // ────────────────────────────────────────────
// // Helper: build Date from "YYYY-MM-DD" + "HH:mm"
// // ────────────────────────────────────────────

// function buildDate(dateStr: string, timeStr?: string): Date | null {
//   const d = dateStr?.trim();
//   const t = timeStr?.trim();

//   if (!d) return null;

//   const iso = t ? `${d}T${t}:00` : `${d}T00:00:00`;
//   const dt = new Date(iso);
//   if (isNaN(dt.getTime())) return null;
//   return dt;
// }

// // ────────────────────────────────────────────
// // 2) RESCHEDULE: create ExamAttempt row
// //    - auto-calculates next attemptNo
// // ────────────────────────────────────────────

// type RescheduleInput = {
//   applicationId: string;
//   examType: ExamType;
//   vehicleClassId?: number | null; // for DRIVING only
//   examDate: string; // "YYYY-MM-DD"
//   examTime?: string; // "HH:mm"
//   notes?: string;
// };

// export async function rescheduleExamAttempt(
//   input: RescheduleInput
// ): Promise<{ success: true; record: any } | ActionError> {
//   try {
//     const examDate = buildDate(input.examDate, input.examTime);
//     if (!examDate) {
//       return { success: false, error: "Invalid or missing exam date/time" };
//     }

//     if (!input.applicationId?.trim()) {
//       return { success: false, error: "Application ID is required" };
//     }

//     if (input.examType === "DRIVING" && !input.vehicleClassId) {
//       return {
//         success: false,
//         error: "Vehicle class is required for driving exams",
//       };
//     }

//     // Auto-calc next attempt number based on existing ExamAttempt
//     const lastAttempt = await prisma.examAttempt.findFirst({
//       where: {
//         applicationId: input.applicationId,
//         examType: input.examType,
//         ...(input.examType === "DRIVING" && input.vehicleClassId
//           ? { vehicleClassId: input.vehicleClassId }
//           : {}),
//       },
//       orderBy: { attemptNo: "desc" },
//     });

//     const nextAttemptNo = (lastAttempt?.attemptNo ?? 0) + 1;

//     const record = await prisma.examAttempt.create({
//       data: {
//         applicationId: input.applicationId,
//         examType: input.examType,
//         vehicleClassId:
//           input.examType === "DRIVING" ? input.vehicleClassId! : null,
//         attemptNo: nextAttemptNo,
//         examDate,
//         examTime: input.examTime ? examDate : null,
//         notes: input.notes?.trim() || null,
//         result: "ABSENT",
//       },
//     });

//     return { success: true, record };
//   } catch (e) {
//     console.error("rescheduleExamAttempt ERROR:", e);
//     return { success: false, error: "Server error while rescheduling exam" };
//   }
// }

// // ────────────────────────────────────────────
// // 3) UPDATE an existing ExamAttempt schedule
// //    - update date, time, notes, result
// //    - if result = PASS, fill pass-summary columns
// //      in WrittenExam / DrivingExamResult
// //      (do NOT change original FAIL/ABSENT result there)
// // ────────────────────────────────────────────

// type UpdateAttemptInput = {
//   id: number;
//   examDate: string; // "YYYY-MM-DD"
//   examTime?: string; // "HH:mm"
//   notes?: string;
//   result: ExamResultString;
// };

// export async function updateExamAttemptFull(
//   input: UpdateAttemptInput
// ): Promise<{ success: true; updated: any } | ActionError> {
//   try {
//     const allowed: ExamResultString[] = ["PASS", "FAIL", "ABSENT"];
//     if (!allowed.includes(input.result)) {
//       return { success: false, error: "Invalid result value" };
//     }

//     const attemptBefore = await prisma.examAttempt.findUnique({
//       where: { id: input.id },
//     });

//     if (!attemptBefore) {
//       return { success: false, error: "Attempt not found" };
//     }

//     const newExamDate = buildDate(input.examDate, input.examTime);
//     if (!newExamDate) {
//       return { success: false, error: "Invalid or missing exam date/time" };
//     }

//     // Update attempt fields
//     const updated = await prisma.examAttempt.update({
//       where: { id: input.id },
//       data: {
//         examDate: newExamDate,
//         examTime: input.examTime ? newExamDate : null,
//         notes: input.notes?.trim() || null,
//         result: input.result,
//       },
//     });

//     // If not PASS → nothing more to do
//     if (input.result !== "PASS") {
//       return { success: true, updated };
//     }

//     // PASS → fill summary columns
//     const attemptText =
//       updated.attemptNo === 1
//         ? "1st ATTEMPT"
//         : updated.attemptNo === 2
//         ? "2nd ATTEMPT"
//         : `${updated.attemptNo}th ATTEMPT`;

//     const passWithText = `PASS WITH ${attemptText}`;
//     const passDate = updated.examDate;

//     if (updated.examType === "WRITTEN") {
//       // We don't know which WrittenExam row is the pass one,
//       // so we only use these fields as application-level summary.
//       await prisma.writtenExam.updateMany({
//         where: { applicationId: updated.applicationId },
//         data: {
//           passAttemptNo: updated.attemptNo,
//           passDate,
//           passWithText,
//         },
//       });
//     } else if (updated.examType === "DRIVING" && updated.vehicleClassId) {
//       // For driving, summary is per vehicle class
//       await prisma.drivingExamResult.upsert({
//         where: {
//           applicationId_vehicleClassId: {
//             applicationId: updated.applicationId,
//             vehicleClassId: updated.vehicleClassId,
//           },
//         },
//         update: {
//           // do NOT change original result (FAIL/ABSENT)
//           passAttemptNo: updated.attemptNo,
//           passDate,
//           passWithText,
//           notes: updated.notes ?? undefined,
//           examDate: passDate ?? undefined,
//         },
//         create: {
//           applicationId: updated.applicationId,
//           vehicleClassId: updated.vehicleClassId,
//           result: "ABSENT", // keep original result style, summary is separate
//           trainedDates: "",
//           notes: updated.notes ?? undefined,
//           examDate: passDate,
//           passAttemptNo: updated.attemptNo,
//           passDate,
//           passWithText,
//         },
//       });
//     }

//     return { success: true, updated };
//   } catch (e: any) {
//     console.error("updateExamAttemptFull ERROR:", e);

//     if (e?.code === "P2025") {
//       return { success: false, error: "Attempt not found" };
//     }

//     return { success: false, error: "Server error while updating attempt" };
//   }
// }

"use server";

import prisma  from "@/lib/db";

// ----- Shared Types -----

export type ExamResultString = "PASS" | "FAIL" | "ABSENT";
export type ExamType = "WRITTEN" | "DRIVING";

export type FailedExamStudent = {
  applicationId: string;
  referenceNo: string;
  fullName: string;
  nic: string;
  writtenExams: {
    id: number;
    barCode: string;
    examDate: Date;
    result: ExamResultString;
    attemptNo: number;
    notes: string | null;
  }[];
  drivingExams: {
    id: number;
    vehicleClassId: number;
    result: ExamResultString;
    notes: string | null;
    examDate: Date | null;
    vehicleClass: {
      code: string;
      name: string;
    };
  }[];
  examAttempts: {
    id: number;
    examType: ExamType;
    vehicleClassId: number | null;
    attemptNo: number;
    examDate: Date;
    examTime: Date | null;
    notes: string | null;
    result: ExamResultString;
    vehicleClass: {
      code: string;
      name: string;
    } | null;
  }[];
};

type ActionError = { success: false; error: string };

// ----- Search Failed Students (Written / Driving) -----

export async function searchFailedStudentsWithExams(
  query: string
): Promise<FailedExamStudent[]> {
  const q = query.trim();
  if (!q) return [];

  const students = await prisma.studentApplication.findMany({
    where: {
      AND: [
        {
          OR: [
            { fullName: { contains: q, mode: "insensitive" } },
            { nic: { contains: q, mode: "insensitive" } },
            { referenceNo: { contains: q, mode: "insensitive" } },
          ],
        },
        {
          OR: [
            {
              writtenExams: {
                some: {
                  result: { in: ["FAIL", "ABSENT"] },
                },
              },
            },
            {
              drivingExamResults: {
                some: {
                  result: { in: ["FAIL", "ABSENT"] },
                },
              },
            },
          ],
        },
      ],
    },
    select: {
      id: true,
      referenceNo: true,
      fullName: true,
      nic: true,
      writtenExams: {
        where: {
          result: { in: ["FAIL", "ABSENT"] },
        },
        orderBy: { examDate: "desc" },
        select: {
          id: true,
          barCode: true,
          examDate: true,
          result: true,
          attemptNo: true,
          notes: true,
        },
      },
      drivingExamResults: {
        where: {
          result: { in: ["FAIL", "ABSENT"] },
        },
        orderBy: { examDate: "desc" },
        select: {
          id: true,
          vehicleClassId: true,
          result: true,
          notes: true,
          examDate: true,
          vehicleClass: {
            select: {
              code: true,
              name: true,
            },
          },
        },
      },
      examAttempts: {
        orderBy: { examDate: "desc" },
        select: {
          id: true,
          examType: true,
          vehicleClassId: true,
          attemptNo: true,
          examDate: true,
          examTime: true,
          notes: true,
          result: true,
          vehicleClass: {
            select: {
              code: true,
              name: true,
            },
          },
        },
      },
    },
    take: 50,
  });

  return students.map((s) => ({
    applicationId: s.id,
    referenceNo: s.referenceNo,
    fullName: s.fullName,
    nic: s.nic,
    writtenExams: s.writtenExams as any,
    drivingExams: s.drivingExamResults as any,
    examAttempts: s.examAttempts as any,
  }));
}

// ----- Helpers -----

function buildDate(dateStr: string, timeStr?: string): Date | null {
  const d = dateStr?.trim();
  const t = timeStr?.trim();

  if (!d) return null;

  const iso = t ? `${d}T${t}:00` : `${d}T00:00:00`;
  const dt = new Date(iso);
  if (isNaN(dt.getTime())) return null;
  return dt;
}

// 🔥 NEW HELPER: clear reminder logs for a specific ExamAttempt
async function clearExamAttemptReminderLogs(attemptId: number) {
  await prisma.examReminderLog.deleteMany({
    where: {
      examType: "EXAM_ATTEMPT",
      examRecordId: attemptId,
    },
  });
}

// ----- Reschedule Exam Attempt (Written / Driving) -----

type RescheduleInput = {
  applicationId: string;
  examType: ExamType; // "WRITTEN" | "DRIVING"
  vehicleClassId?: number | null; // driving only
  examDate: string; // "YYYY-MM-DD"
  examTime?: string; // "HH:mm"
  notes?: string;
};

export async function rescheduleExamAttempt(
  input: RescheduleInput
): Promise<{ success: true; record: any } | ActionError> {
  try {
    const examDate = buildDate(input.examDate, input.examTime);
    if (!examDate) {
      return {
        success: false,
        error: "Invalid or missing exam date/time",
      };
    }

    if (!input.applicationId?.trim()) {
      return { success: false, error: "Application ID is required" };
    }

    if (input.examType === "DRIVING" && !input.vehicleClassId) {
      return {
        success: false,
        error: "Vehicle class is required for driving exams",
      };
    }

    // Find last attempt for this examType (+ vehicleClass for driving)
    const lastAttempt = await prisma.examAttempt.findFirst({
      where: {
        applicationId: input.applicationId,
        examType: input.examType,
        ...(input.examType === "DRIVING" && input.vehicleClassId
          ? { vehicleClassId: input.vehicleClassId }
          : { vehicleClassId: null }),
      },
      orderBy: { attemptNo: "desc" },
    });

    const nextAttemptNo = lastAttempt ? lastAttempt.attemptNo + 1 : 1;

    const record = await prisma.examAttempt.create({
      data: {
        applicationId: input.applicationId,
        examType: input.examType,
        vehicleClassId:
          input.examType === "DRIVING" ? input.vehicleClassId! : null,
        attemptNo: nextAttemptNo,
        examDate,
        examTime: input.examTime ? examDate : null,
        notes: input.notes?.trim() || null,
        result: "ABSENT",
      },
    });

    return { success: true, record };
  } catch (e) {
    console.error("rescheduleExamAttempt ERROR:", e);
    return {
      success: false,
      error: "Server error while rescheduling exam",
    };
  }
}

// ----- Update Exam Attempt (and clear reminders, and summary when PASS) -----

type UpdateAttemptInput = {
  id: number;
  examDate: string; // "YYYY-MM-DD"
  examTime?: string; // "HH:mm"
  notes?: string;
  result: ExamResultString; // "PASS" | "FAIL" | "ABSENT"
};

export async function updateExamAttemptFull(
  input: UpdateAttemptInput
): Promise<{ success: true; updated: any } | ActionError> {
  try {
    const allowed: ExamResultString[] = ["PASS", "FAIL", "ABSENT"];
    if (!allowed.includes(input.result)) {
      return { success: false, error: "Invalid result value" };
    }

    const attemptBefore = await prisma.examAttempt.findUnique({
      where: { id: input.id },
    });

    if (!attemptBefore) {
      return { success: false, error: "Attempt not found" };
    }

    const newExamDate = buildDate(input.examDate, input.examTime);
    if (!newExamDate) {
      return {
        success: false,
        error: "Invalid or missing exam date/time",
      };
    }

    // 1) Update the ExamAttempt itself
    const updated = await prisma.examAttempt.update({
      where: { id: input.id },
      data: {
        examDate: newExamDate,
        examTime: input.examTime ? newExamDate : null,
        notes: input.notes?.trim() || null,
        result: input.result,
      },
    });

    // 🔥 2) After updating, clear any reminder logs for THIS attempt
    await clearExamAttemptReminderLogs(updated.id);

    // 3) If NOT PASS → done (we already cleared reminder log)
    if (input.result !== "PASS") {
      return { success: true, updated };
    }

    // 4) If PASS → fill summary columns
    const attemptText =
      updated.attemptNo === 1
        ? "1st ATTEMPT"
        : updated.attemptNo === 2
        ? "2nd ATTEMPT"
        : `${updated.attemptNo}th ATTEMPT`;

    const passWithText = `PASS WITH ${attemptText}`;
    const passDate = updated.examDate;

    if (updated.examType === "WRITTEN") {
      // Application-level written summary
      await prisma.writtenExam.updateMany({
        where: { applicationId: updated.applicationId },
        data: {
          passAttemptNo: updated.attemptNo,
          passDate,
          passWithText,
        },
      });
    } else if (updated.examType === "DRIVING" && updated.vehicleClassId) {
      // Per-vehicle driving summary
      await prisma.drivingExamResult.upsert({
        where: {
          applicationId_vehicleClassId: {
            applicationId: updated.applicationId,
            vehicleClassId: updated.vehicleClassId,
          },
        },
        update: {
          // do NOT change original result (FAIL/ABSENT)
          passAttemptNo: updated.attemptNo,
          passDate,
          passWithText,
          notes: updated.notes ?? undefined,
          examDate: passDate ?? undefined,
        },
        create: {
          applicationId: updated.applicationId,
          vehicleClassId: updated.vehicleClassId,
          result: "ABSENT", // keep original result style, summary is separate
          trainedDates: "",
          notes: updated.notes ?? undefined,
          examDate: passDate,
          passAttemptNo: updated.attemptNo,
          passDate,
          passWithText,
        },
      });
    }

    return { success: true, updated };
  } catch (e: any) {
    console.error("updateExamAttemptFull ERROR:", e);

    if (e?.code === "P2025") {
      return { success: false, error: "Attempt not found" };
    }

    return {
      success: false,
      error: "Server error while updating attempt",
    };
  }
}
