// // app/lib/sendExamReminder.ts
// import { sendEmail } from "./email";

// export type ExamReminderPayload = {
//   fullName: string;
//   email: string | null;
//   examType: "WRITTEN" | "DRIVING_RESULT" | "EXAM_ATTEMPT";
//   examDate: Date;
//   examTime?: Date | null;
//   extraInfo?: string; // e.g. vehicle class, attempt no, etc.
// };

// export async function sendExamReminder(payload: ExamReminderPayload) {
//   const { fullName, email, examType, examDate, examTime, extraInfo } = payload;

//   if (!email) {
//     console.log(`Skipping ${fullName} (no email set)`);
//     return;
//   }

//   const dateStr = examDate.toLocaleDateString("en-GB", {
//     year: "numeric",
//     month: "short",
//     day: "2-digit",
//     timeZone: "Asia/Colombo",
//   });

//   const timeStr = examTime
//     ? examTime.toLocaleTimeString("en-GB", {
//         hour: "2-digit",
//         minute: "2-digit",
//         timeZone: "Asia/Colombo",
//       })
//     : "N/A";

//   let examLabel = "";
//   if (examType === "WRITTEN") examLabel = "Written exam";
//   else if (examType === "DRIVING_RESULT") examLabel = "Driving exam";
//   else examLabel = "Exam attempt";

//   const subject = `Reminder: Your ${examLabel} on ${dateStr}`;

//   const extraLine = extraInfo ? `\nDetails: ${extraInfo}` : "";

//   const textBody = `
// Hi ${fullName},

// This is a reminder about your ${examLabel}.

// 📅 Date: ${dateStr}
// ⏰ Time: ${timeStr}${extraLine}

// Please be on time and bring the required documents.

// - Your Driving School
// `.trim();

//   const htmlBody = `
//   <p>Hi <strong>${fullName}</strong>,</p>
//   <p>This is a reminder about your <strong>${examLabel}</strong>.</p>
//   <ul>
//     <li><strong>Date:</strong> ${dateStr}</li>
//     <li><strong>Time:</strong> ${timeStr}</li>
//   </ul>
//   ${extraInfo ? `<p><strong>Details:</strong> ${extraInfo}</p>` : ""}
//   <p>Please be on time and bring the required documents.</p>
//   <p>- Your Driving School</p>
//   `;

//   await sendEmail({
//     to: email,
//     subject,
//     text: textBody,
//     html: htmlBody,
//   });

//   console.log(`📧 Exam reminder sent to ${fullName} (${examLabel})`);
// }


// // app/lib/sendExamReminder.ts
// import { sendEmail } from "./email";

// export type ExamReminderPayload = {
//   fullName: string;
//   email: string | null;
//   examType: "WRITTEN" | "DRIVING_RESULT" | "EXAM_ATTEMPT";
//   examDate: Date;              // non-null here
//   examTime?: Date | null;      // optional
//   extraInfo?: string;
// };

// export async function sendExamReminder(payload: ExamReminderPayload) {
//   const { fullName, email, examType, examDate, examTime, extraInfo } = payload;

//   if (!email) {
//     console.log(`Skipping ${fullName} (no email set)`);
//     return;
//   }

//   const dateStr = examDate.toLocaleDateString("en-GB", {
//     year: "numeric",
//     month: "short",
//     day: "2-digit",
//     timeZone: "Asia/Colombo",
//   });

//   const timeStr = examTime
//     ? examTime.toLocaleTimeString("en-GB", {
//         hour: "2-digit",
//         minute: "2-digit",
//         timeZone: "Asia/Colombo",
//       })
//     : "N/A";

//   let examLabel = "";
//   if (examType === "WRITTEN") examLabel = "Written exam";
//   else if (examType === "DRIVING_RESULT") examLabel = "Driving exam";
//   else examLabel = "Exam attempt";

//   const subject = `Reminder: Your ${examLabel} on ${dateStr}`;

//   const extraLine = extraInfo ? `\nDetails: ${extraInfo}` : "";

//   const textBody = `
// Hi ${fullName},

// This is a reminder about your ${examLabel}.

// 📅 Date: ${dateStr}
// ⏰ Time: ${timeStr}${extraLine}

// Please be on time and bring the required documents.

// - Your Driving School
// `.trim();

//   const htmlBody = `
//   <p>Hi <strong>${fullName}</strong>,</p>
//   <p>This is a reminder about your <strong>${examLabel}</strong>.</p>
//   <ul>
//     <li><strong>Date:</strong> ${dateStr}</li>
//     <li><strong>Time:</strong> ${timeStr}</li>
//   </ul>
//   ${extraInfo ? `<p><strong>Details:</strong> ${extraInfo}</p>` : ""}
//   <p>Please be on time and bring the required documents.</p>
//   <p>- Randika Driving School</p>
//   `;

//   await sendEmail({
//     to: email,
//     subject,
//     text: textBody,
//     html: htmlBody,
//   });

//   console.log(`📧 Exam reminder sent to ${fullName} (${examLabel})`);
// }


// app/lib/sendExamReminder.ts
import { sendEmail } from "./email";

export type ExamReminderPayload = {
  fullName: string;
  email: string | null;
  examType: "WRITTEN" | "DRIVING_RESULT" | "EXAM_ATTEMPT";
  examDate: Date;              // non-null
  examTime?: Date | null;      // optional
  extraInfo?: string;
};

export async function sendExamReminder(payload: ExamReminderPayload) {
  const { fullName, email, examType, examDate, examTime, extraInfo } = payload;

  if (!email) {
    console.log(`Skipping ${fullName} (no email set)`);
    return;
  }

  const dateStr = examDate.toLocaleDateString("en-GB", {
    year: "numeric",
    month: "short",
    day: "2-digit",
    timeZone: "Asia/Colombo",
  });

  // 👇 Use examTime if given, otherwise use examDate
  const timeSource = examTime ?? examDate;

  const timeStr = timeSource.toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "Asia/Colombo",
  });

  let examLabel = "";
  if (examType === "WRITTEN") examLabel = "Written exam";
  else if (examType === "DRIVING_RESULT") examLabel = "Driving exam";
  else examLabel = "Exam attempt";

  const subject = `Reminder: Your ${examLabel} on ${dateStr}`;

  const extraLine = extraInfo ? `\nDetails: ${extraInfo}` : "";

  const textBody = `
Hi ${fullName},

This is a reminder about your ${examLabel}.

📅 Date: ${dateStr}
⏰ Time: ${timeStr}${extraLine}

Please be on time and bring the required documents.

- Randika Driving School
`.trim();

  const htmlBody = `
  <p>Hi <strong>${fullName}</strong>,</p>
  <p>This is a reminder about your <strong>${examLabel}</strong>.</p>
  <ul>
    <li><strong>Date:</strong> ${dateStr}</li>
    <li><strong>Time:</strong> ${timeStr}</li>
  </ul>
  ${extraInfo ? `<p><strong>Details:</strong> ${extraInfo}</p>` : ""}
  <p>Please be on time and bring the required documents.</p>
  <p>- Your Driving School</p>
  `;

  await sendEmail({
    to: email,
    subject,
    text: textBody,
    html: htmlBody,
  });

  console.log(`📧 Exam reminder sent to ${fullName} (${examLabel})`);
}