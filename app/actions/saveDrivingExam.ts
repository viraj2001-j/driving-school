"use server";

import prisma from "@/lib/db";

export async function insertTrainingRecord(data: {
  applicationId: string;
  trainedDates: string;
  examResult: string;
  notes?: string;
}) {
  try {
    const created = await prisma.drivingExam.upsert({
      where: { applicationId: data.applicationId },
      update: {
        trainedDates: data.trainedDates,
        examResult: data.examResult,
        notes: data.notes || null,
      },
      create: {
        applicationId: data.applicationId,
        trainedDates: data.trainedDates,
        examResult: data.examResult,
        notes: data.notes || null,
      },
    });

    return { success: true, id: created.id };
  } catch (err) {
    console.error("Training Record Insert Error:", err);
    return { success: false, error: "Failed to insert training record" };
  }
}
