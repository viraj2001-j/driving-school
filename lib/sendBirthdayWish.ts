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
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <title>Happy Birthday!</title>
</head>
<body style="margin:0; padding:0; background-color:#f4f4f4; font-family:Arial, sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#f4f4f4; padding:20px 0;">
    <tr>
      <td align="center">
        <table width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width:600px; background-color:#ffffff; border-radius:10px; overflow:hidden; box-shadow:0 4px 10px rgba(0,0,0,0.06);">
          
          <!-- Header bar -->
          <tr>
            <td align="center" style="background:linear-gradient(135deg,#ff9a9e,#fad0c4); padding:18px 20px;">
              <h1 style="margin:0; font-size:22px; color:#ffffff; font-weight:bold;">
                🎉 Happy Birthday!
              </h1>
            </td>
          </tr>

          <!-- Main content -->
          <tr>
            <td style="padding:24px 24px 10px 24px; color:#333333; font-size:15px; line-height:1.6;">
              <p style="margin:0 0 12px 0;">Hi <strong>${student.fullName}</strong>,</p>
              <p style="margin:0 0 12px 0;">
                Wishing you a very happy birthday and a year ahead filled with
                good health, safe journeys, and wonderful memories on the road. 🎂🥳
              </p>
              <p style="margin:0 0 12px 0;">
                Thank you for being part of our driving school family. We’re excited
                to see you grow in confidence and skill every day.
              </p>
              <p style="margin:0;">
                Enjoy your special day! 🎈
              </p>
            </td>
          </tr>

          <!-- Divider -->
          <tr>
            <td style="padding:0 24px;">
              <hr style="border:none; border-top:1px solid #eeeeee; margin:16px 0 10px;" />
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:0 24px 20px 24px; color:#777777; font-size:13px; line-height:1.5;">
              <p style="margin:0 0 4px 0;">
                With warm wishes,
              </p>
              <p style="margin:0 0 12px 0; font-weight:bold; color:#444444;">
                Randhika Learners
              </p>
              <p style="margin:0; font-size:12px; color:#999999;">
                This is an automated message. Please do not reply to this email.
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