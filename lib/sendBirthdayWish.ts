// // app/lib/sendBirthdayWish.ts

// type Student = {
//   id: string;
//   fullName: string;
//   email: string | null;
// };

// export async function sendBirthdayWish(student: Student) {
//   // If no email, just skip for now
//   if (!student.email) {
//     console.log(
//       `Skipping ${student.fullName} — no email set for birthday wish`
//     );
//     return;
//   }

//   const subject = "Happy Birthday! 🎉";
//   const body = `
// Hi ${student.fullName},

// Wishing you a very happy birthday and a fantastic year ahead! 🎂🥳

// - Your Driving School
// `;

//   // TODO: connect your real email sender here.
//   // Example if you use something like Resend / Nodemailer:
//   //
//   // await sendEmail({
//   //   to: student.email,
//   //   subject,
//   //   text: body,
//   // });

//   console.log(
//     `Simulating birthday email to ${student.fullName} <${student.email}>`
//   );
// }


// app/lib/sendBirthdayWish.ts
import { sendEmail } from "./email";

type Student = {
  id: string;
  fullName: string;
  email: string | null;
};

export async function sendBirthdayWish(student: Student) {
  if (!student.email) {
    console.log(
      `Skipping ${student.fullName} — no email set for birthday wish`
    );
    return;
  }

  const subject = "Happy Birthday! 🎉";

  const textBody = `
Hi ${student.fullName},

Wishing you a very happy birthday and a fantastic year ahead! 🎂🥳

- Randika Driving School
`.trim();

  const htmlBody = `
  <p>Hi <strong>${student.fullName}</strong>,</p>
  <p>Wishing you a very happy birthday and a fantastic year ahead! 🎂🥳</p>
  <p>- Your Driving School</p>
  `;

  await sendEmail({
    to: student.email,
    subject,
    text: textBody,
    html: htmlBody,
  });

  console.log(
    `✅ Birthday email sent to ${student.fullName} <${student.email}>`
  );
}