// app/lib/examReminders.ts
import  prisma  from "@/lib/db";
import { sendExamReminder } from "./sendExamReminder";

export async function processExamReminders() {
  console.log("🚀 processExamReminders started");

  const now = new Date();
  const colomboNow = new Date(
    now.toLocaleString("en-US", { timeZone: "Asia/Colombo" })
  );

  const year = colomboNow.getFullYear();
  const month = colomboNow.getMonth() + 1;
  const day = colomboNow.getDate();

  console.log(
    `📅 Colombo date: ${colomboNow.toISOString()} (year=${year}, month=${month}, day=${day})`
  );

  // We'll use a simple day range (00:00 to next day 00:00)
  const dayStart = new Date(year, month - 1, day);
  const dayEnd = new Date(year, month - 1, day + 1);

  // 1️⃣ WRITTEN EXAMS
  const writtenExams = await prisma.writtenExam.findMany({
    where: {
      examDate: {
        gte: dayStart,
        lt: dayEnd,
      },
    },
    include: {
      application: true,
    },
  });

  console.log(`📝 Written exams today: ${writtenExams.length}`);

  for (const w of writtenExams) {
    if (!w.application) continue;

    // If examDate is nullable in your schema, guard it here:
    if (!w.examDate) {
      console.log(`⚠️ WrittenExam #${w.id} has no examDate, skipping`);
      continue;
    }

    const already = await prisma.examReminderLog.findFirst({
      where: {
        examType: "WRITTEN",
        examRecordId: w.id,
      },
    });

    if (already) {
      console.log(`⏭️ Reminder already sent for WrittenExam #${w.id}`);
      continue;
    }

    await sendExamReminder({
      fullName: w.application.fullName,
      email: w.application.email,
      examType: "WRITTEN",
      examDate: w.examDate,
      examTime: null,
      extraInfo:
        typeof w.attemptNo === "number"
          ? `Attempt no: ${w.attemptNo}`
          : undefined,
    });

    await prisma.examReminderLog.create({
      data: {
        applicationId: w.applicationId,
        examType: "WRITTEN",
        examRecordId: w.id,
      },
    });
  }

  // 2️⃣ DRIVING EXAMS (DrivingExamResult)
  const drivingResults = await prisma.drivingExamResult.findMany({
    where: {
      examDate: {
        gte: dayStart,
        lt: dayEnd,
      },
    },
    include: {
      application: true,
      vehicleClass: true,
    },
  });

  console.log(`🚗 Driving exam results today: ${drivingResults.length}`);

  for (const d of drivingResults) {
    if (!d.application) continue;

    // if examDate is nullable in your schema, guard it:
    if (!d.examDate) {
      console.log(`⚠️ DrivingExamResult #${d.id} has no examDate, skipping`);
      continue;
    }

    const already = await prisma.examReminderLog.findFirst({
      where: {
        examType: "DRIVING_RESULT",
        examRecordId: d.id,
      },
    });

    if (already) {
      console.log(`⏭️ Reminder already sent for DrivingExamResult #${d.id}`);
      continue;
    }

    await sendExamReminder({
      fullName: d.application.fullName,
      email: d.application.email,
      examType: "DRIVING_RESULT",
      examDate: d.examDate,
      // DrivingExamResult in your schema does NOT have examTime,
      // so we don't touch it here:
      examTime: null,
      extraInfo: d.vehicleClass
        ? `Vehicle class: ${d.vehicleClass.code ?? d.vehicleClass.name}`
        : undefined,
    });

    await prisma.examReminderLog.create({
      data: {
        applicationId: d.applicationId,
        examType: "DRIVING_RESULT",
        examRecordId: d.id,
      },
    });
  }

  // 3️⃣ GENERIC EXAM ATTEMPTS (ExamAttempt)
  const attempts = await prisma.examAttempt.findMany({
    where: {
      examDate: {
        gte: dayStart,
        lt: dayEnd,
      },
    },
    include: {
      application: true,
      vehicleClass: true,
    },
  });

  console.log(`📘 Exam attempts today: ${attempts.length}`);

  for (const a of attempts) {
    if (!a.application) continue;

    if (!a.examDate) {
      console.log(`⚠️ ExamAttempt #${a.id} has no examDate, skipping`);
      continue;
    }

    const already = await prisma.examReminderLog.findFirst({
      where: {
        examType: "EXAM_ATTEMPT",
        examRecordId: a.id,
      },
    });

    if (already) {
      console.log(`⏭️ Reminder already sent for ExamAttempt #${a.id}`);
      continue;
    }

    const extraPieces: string[] = [];
    if (a.examType) extraPieces.push(`Type: ${a.examType}`);
    if (typeof a.attemptNo === "number")
      extraPieces.push(`Attempt no: ${a.attemptNo}`);
    if (a.vehicleClass)
      extraPieces.push(
        `Vehicle class: ${a.vehicleClass.code ?? a.vehicleClass.name}`
      );

    await sendExamReminder({
      fullName: a.application.fullName,
      email: a.application.email,
      examType: "EXAM_ATTEMPT",
      examDate: a.examDate,
      examTime: a.examTime ?? null, // ExamAttempt has examTime? -> Date | null
      extraInfo: extraPieces.length ? extraPieces.join(" | ") : undefined,
    });

    await prisma.examReminderLog.create({
      data: {
        applicationId: a.applicationId,
        examType: "EXAM_ATTEMPT",
        examRecordId: a.id,
      },
    });
  }

  console.log("✅ processExamReminders finished");
}