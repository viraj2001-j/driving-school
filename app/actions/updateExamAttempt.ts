"use server";

import prisma from "@/lib/db";

export async function updateExamAttempt(data: {
  id: number;
  result: "PASS" | "FAIL" | "ABSENT";
}) {
  try {
    const updated = await prisma.examAttempt.update({
      where: { id: Number(data.id) },
      data: { result: data.result as any },
    });

    return { success: true, updated };
  } catch (err) {
    console.error("updateExamAttempt ERROR:", err);
    return { success: false, error: "Server Error" };
  }
}
