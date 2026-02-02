"use server";

import prisma from "@/lib/db";

export async function insertWrittenExam(data: {
  
  applicationId: string;
  barCode: string;
  examDate: string; // from input like "2026-02-01"
  result: "PASS" | "FAIL" | "ABSENT";
  attemptNo: number;
  notes?: string | null;
}) {
  try {
    const examDateObj = new Date(data.examDate);
    if (isNaN(examDateObj.getTime())) {
      return { success: false, error: "Invalid exam date" };
    }

    const result = await prisma.writtenExam.create({
      data: {
        applicationId: data.applicationId,
        barCode: data.barCode,
        examDate: examDateObj,
        result: data.result,
        attemptNo: data.attemptNo,
        notes: data.notes || null,
      },
    });

    return { success: true, examId: result.id };
  } catch (err) {
    console.error("Written Exam Insert Error:", err);
    return { success: false, error: "Failed to insert written exam" };
  }
}
