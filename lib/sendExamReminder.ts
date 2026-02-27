// app/lib/sendExamReminder.ts
import { sendEmail } from "./email";

type StudentInfo = {
  fullName: string;
  email: string | null;
};

type WrittenExamContext = {
  type: "WRITTEN";
  student: StudentInfo;
  examDate: Date;
  attemptNo: number;
  barCode: string;
};

type DrivingExamContext = {
  type: "DRIVING";
  student: StudentInfo;
  examDate: Date;
  vehicleClassName: string;
};

type AttemptContext = {
  type: "ATTEMPT";
  student: StudentInfo;
  examDate: Date;
  examTime?: Date | null;
  examTypeLabel: string; // e.g. "WRITTEN" | "DRIVING"
  vehicleClassName?: string | null;
  attemptNo: number;
};

export type ExamReminderContext =
  | WrittenExamContext
  | DrivingExamContext
  | AttemptContext;

function formatInColombo(date: Date) {
  return date.toLocaleString("en-US", {
    timeZone: "Asia/Colombo",
    year: "numeric",
    month: "short",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export async function sendExamReminderEmail(
  ctx: ExamReminderContext
): Promise<boolean> {
  const { student } = ctx;

  // 🔥 If no email, skip and return false
  if (!student.email) {
    console.log(
      `Skipping exam reminder for ${student.fullName} — no email set`
    );
    return false;
  }

  let subject = "";
  let htmlBody = "";
  let textBody = "";

  if (ctx.type === "WRITTEN") {
    const when = formatInColombo(ctx.examDate);

    subject = "Written Exam Reminder";
    textBody = `
Hi ${student.fullName},

This is a reminder for your WRITTEN exam.

Barcode: ${ctx.barCode}
Attempt: ${ctx.attemptNo}
Date & Time: ${when}

Please arrive on time and bring required documents.

- Randika Driving School
`.trim();

    htmlBody = `
      <p>Hi <strong>${student.fullName}</strong>,</p>
      <p>This is a reminder for your <strong>WRITTEN exam</strong>.</p>
      <ul>
        <li><strong>Barcode:</strong> ${ctx.barCode}</li>
        <li><strong>Attempt:</strong> ${ctx.attemptNo}</li>
        <li><strong>Date &amp; Time:</strong> ${when}</li>
      </ul>
      <p>Please arrive on time and bring required documents.</p>
      <p>- Randika Driving School</p>
    `;
  } else if (ctx.type === "DRIVING") {
    const when = formatInColombo(ctx.examDate);

    subject = "Driving Exam Reminder";
    textBody = `
Hi ${student.fullName},

This is a reminder for your DRIVING exam.

Vehicle Class: ${ctx.vehicleClassName}
Date & Time: ${when}

Please arrive early and be prepared.

- Randika Driving School
`.trim();

    htmlBody = `
      <p>Hi <strong>${student.fullName}</strong>,</p>
      <p>This is a reminder for your <strong>DRIVING exam</strong>.</p>
      <ul>
        <li><strong>Vehicle Class:</strong> ${ctx.vehicleClassName}</li>
        <li><strong>Date &amp; Time:</strong> ${when}</li>
      </ul>
      <p>Please arrive early and be prepared.</p>
      <p>- Randika Driving School</p>
    `;
  } else {
    // ATTEMPT
    const when = formatInColombo(ctx.examDate);

    subject = "Exam Attempt Reminder";
    textBody = `
Hi ${student.fullName},

This is a reminder for your exam attempt.

Type: ${ctx.examTypeLabel}
Attempt: ${ctx.attemptNo}
${ctx.vehicleClassName ? `Vehicle Class: ${ctx.vehicleClassName}\n` : ""}Date & Time: ${when}

Good luck!

- Randika Driving School
`.trim();

    htmlBody = `
      <p>Hi <strong>${student.fullName}</strong>,</p>
      <p>This is a reminder for your <strong>exam attempt</strong>.</p>
      <ul>
        <li><strong>Type:</strong> ${ctx.examTypeLabel}</li>
        <li><strong>Attempt:</strong> ${ctx.attemptNo}</li>
        ${
          ctx.vehicleClassName
            ? `<li><strong>Vehicle Class:</strong> ${ctx.vehicleClassName}</li>`
            : ""
        }
        <li><strong>Date &amp; Time:</strong> ${when}</li>
      </ul>
      <p>Good luck!</p>
      <p>- Randika Driving School</p>
    `;
  }

  try {
    await sendEmail({
      to: student.email,
      subject,
      text: textBody,
      html: htmlBody,
    });

    console.log(`✅ Exam reminder email sent to ${student.fullName}`);
    return true;
  } catch (err) {
    console.error(
      `❌ Failed to send exam reminder to ${student.fullName} <${student.email}>`,
      err
    );
    return false;
  }
}