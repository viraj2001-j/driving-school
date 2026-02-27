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

const htmlBody = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <title>Exam Reminder</title>
</head>
<body style="margin:0; padding:0; background-color:#f4f4f4; font-family:Arial, sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#f4f4f4; padding:20px 0;">
    <tr>
      <td align="center">
        <table width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width:600px; background-color:#ffffff; border-radius:10px; overflow:hidden; box-shadow:0 4px 10px rgba(0,0,0,0.06);">

          <!-- HEADER -->
          <tr>
            <td align="center" style="background:linear-gradient(135deg,#6a11cb,#2575fc); padding:18px 20px;">
              <h1 style="margin:0; font-size:22px; color:#ffffff; font-weight:bold;">
                📘 Exam Reminder
              </h1>
            </td>
          </tr>

          <!-- BODY CONTENT -->
          <tr>
            <td style="padding:24px 24px 10px 24px; color:#333333; font-size:15px; line-height:1.6;">
              
              <p style="margin:0 0 12px 0;">Hi <strong>${student.fullName}</strong>,</p>
              <p style="margin:0 0 14px 0;">
                This is a friendly reminder regarding your upcoming exam attempt.
              </p>

              <table cellpadding="8" cellspacing="0" border="0" style="background-color:#f7f9fc; width:100%; border-radius:8px; font-size:14px; margin-bottom:16px;">
                <tr>
                  <td><strong>Exam Type:</strong></td>
                  <td>${ctx.examTypeLabel}</td>
                </tr>
                <tr>
                  <td><strong>Attempt No:</strong></td>
                  <td>${ctx.attemptNo}</td>
                </tr>
                ${
                  ctx.vehicleClassName
                    ? `
                <tr>
                  <td><strong>Vehicle Class:</strong></td>
                  <td>${ctx.vehicleClassName}</td>
                </tr>
                `
                    : ""
                }
                <tr>
                  <td><strong>Date & Time:</strong></td>
                  <td>${when}</td>
                </tr>
              </table>

              <p style="margin:0 0 12px 0;">
                Please make sure to arrive on time and bring all required documents.
              </p>

              <p style="margin:0;">
                Good luck — you've got this! 💪🚗📘
              </p>
            </td>
          </tr>

          <!-- DIVIDER -->
          <tr>
            <td style="padding:0 24px;">
              <hr style="border:none; border-top:1px solid #eeeeee; margin:16px 0 10px;" />
            </td>
          </tr>

          <!-- FOOTER -->
          <tr>
            <td style="padding:0 24px 20px 24px; color:#777777; font-size:13px; line-height:1.5;">
              <p style="margin:0 0 4px 0;">
                With regards,
              </p>
              <p style="margin:0 0 12px 0; font-weight:bold; color:#444444;">
                Randhika Driving School
              </p>
              <p style="margin:0; font-size:12px; color:#999999;">
                This is an automated reminder. Please do not reply to this email.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
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