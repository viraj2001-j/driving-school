// app/lib/examReminders.ts
import prisma from "@/lib/db";
import { sendExamReminderEmail } from "./sendExamReminder";

/**
 * Get start and end of a Colombo calendar day.
 * daysFromToday = 0 -> today
 * daysFromToday = 1 -> tomorrow
 * ...
 */
function colomboDayRange(daysFromToday = 0) {
  const now = new Date();

  // Extract Colombo year-month-day
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Colombo",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(now);

  const y = parts.find((p) => p.type === "year")!.value;
  const m = parts.find((p) => p.type === "month")!.value;
  const d = parts.find((p) => p.type === "day")!.value;

  // Explicitly build a Colombo time ISO with offset +05:30
  const start = new Date(`${y}-${m}-${d}T00:00:00+05:30`);
  start.setDate(start.getDate() + daysFromToday);

  const end = new Date(start.getTime() + 24 * 60 * 60 * 1000);

  return { start, end };
}

export async function processExamReminders() {
  console.log("🚀 processExamReminders started");

  // 🔧 NEW BEHAVIOUR:
  // Consider all exams from TODAY (Colombo) up to 7 days ahead.
  const { start: todayStart } = colomboDayRange(0);
  const { end: weekEnd } = colomboDayRange(7);

  const windowStart = todayStart;
  const windowEnd = weekEnd;

  console.log(
    `📅 Exam reminder window (Colombo 7 days): ${windowStart.toISOString()} to ${windowEnd.toISOString()}`
  );

  // 1️⃣ WRITTEN EXAMS
  const writtenExams = await prisma.writtenExam.findMany({
    where: {
      examDate: {
        gte: windowStart,
        lt: windowEnd,
      },
    },
    include: {
      application: true,
    },
  });

  console.log(`✏️ Upcoming written exams in window: ${writtenExams.length}`);

  for (const exam of writtenExams) {
    try {
      const already = await prisma.examReminderLog.findFirst({
        where: {
          examType: "WRITTEN",
          examRecordId: exam.id,
        },
      });

      if (already) {
        console.log(
          `⏭️ Skipping written exam ${exam.id} (reminder already sent)`
        );
        continue;
      }

      const sent = await sendExamReminderEmail({
        type: "WRITTEN",
        student: {
          fullName: exam.application.fullName,
          email: exam.application.email,
        },
        examDate: exam.examDate,
        attemptNo: exam.attemptNo,
        barCode: exam.barCode,
      });

      // Only log if email was actually sent
      if (!sent) continue;

      await prisma.examReminderLog.create({
        data: {
          applicationId: exam.applicationId,
          examType: "WRITTEN",
          examRecordId: exam.id,
        },
      });

      console.log(`✅ Logged written exam reminder for examId=${exam.id}`);
    } catch (error) {
      console.error(`❌ Error handling written exam ${exam.id}`, error);
    }
  }

  // 2️⃣ DRIVING EXAMS (DrivingExamResult)
  const drivingExams = await prisma.drivingExamResult.findMany({
    where: {
      examDate: {
        not: null,
        gte: windowStart,
        lt: windowEnd,
      },
    },
    include: {
      application: true,
      vehicleClass: true,
    },
  });

  console.log(`🚗 Upcoming driving exams in window: ${drivingExams.length}`);

  for (const exam of drivingExams) {
    if (!exam.examDate) continue;

    try {
      const already = await prisma.examReminderLog.findFirst({
        where: {
          examType: "DRIVING_RESULT",
          examRecordId: exam.id,
        },
      });

      if (already) {
        console.log(
          `⏭️ Skipping driving exam ${exam.id} (reminder already sent)`
        );
        continue;
      }

      const sent = await sendExamReminderEmail({
        type: "DRIVING",
        student: {
          fullName: exam.application.fullName,
          email: exam.application.email,
        },
        examDate: exam.examDate,
        vehicleClassName: exam.vehicleClass.name,
      });

      if (!sent) continue;

      await prisma.examReminderLog.create({
        data: {
          applicationId: exam.applicationId,
          examType: "DRIVING_RESULT",
          examRecordId: exam.id,
        },
      });

      console.log(`✅ Logged driving exam reminder for examId=${exam.id}`);
    } catch (error) {
      console.error(`❌ Error handling driving exam ${exam.id}`, error);
    }
  }

  // 3️⃣ EXAM ATTEMPTS (ExamAttempt)
  const attempts = await prisma.examAttempt.findMany({
    where: {
      examDate: {
        gte: windowStart,
        lt: windowEnd,
      },
    },
    include: {
      application: true,
      vehicleClass: true,
    },
  });

  console.log(`📘 Upcoming exam attempts in window: ${attempts.length}`);

  for (const attempt of attempts) {
    try {
      const already = await prisma.examReminderLog.findFirst({
        where: {
          examType: "EXAM_ATTEMPT",
          examRecordId: attempt.id,
        },
      });

      if (already) {
        console.log(
          `⏭️ Skipping exam attempt ${attempt.id} (reminder already sent)`
        );
        continue;
      }

      const sent = await sendExamReminderEmail({
        type: "ATTEMPT",
        student: {
          fullName: attempt.application.fullName,
          email: attempt.application.email,
        },
        examDate: attempt.examDate,
        examTime: attempt.examTime ?? null,
        examTypeLabel: attempt.examType,
        vehicleClassName: attempt.vehicleClass?.name ?? null,
        attemptNo: attempt.attemptNo,
      });

      if (!sent) continue;

      await prisma.examReminderLog.create({
        data: {
          applicationId: attempt.applicationId,
          examType: "EXAM_ATTEMPT",
          examRecordId: attempt.id,
        },
      });

      console.log(
        `✅ Logged exam attempt reminder for attemptId=${attempt.id}`
      );
    } catch (error) {
      console.error(`❌ Error handling exam attempt ${attempt.id}`, error);
    }
  }

  console.log("✅ processExamReminders finished");
}