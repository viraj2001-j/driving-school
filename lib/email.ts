// app/lib/email.ts
import nodemailer from "nodemailer";

const host = process.env.SMTP_HOST;
const port = process.env.SMTP_PORT
  ? parseInt(process.env.SMTP_PORT, 10)
  : 465;
const user = process.env.SMTP_USER;
const pass = process.env.SMTP_PASS;
const from = process.env.SMTP_FROM || process.env.SMTP_USER;

if (!host || !user || !pass) {
  console.warn(
    "⚠️ SMTP config is missing. Check SMTP_HOST, SMTP_USER, SMTP_PASS env vars."
  );
}

const transporter = nodemailer.createTransport({
  host,
  port,
  secure: true, // Gmail with 465 uses SSL
  auth: {
    user,
    pass,
  },
});

type SendEmailOptions = {
  to: string;
  subject: string;
  text?: string;
  html?: string;
};

export async function sendEmail(options: SendEmailOptions) {
  if (!host || !user || !pass) {
    console.error("SMTP not configured. Cannot send email.");
    return;
  }

  try {
    const info = await transporter.sendMail({
      from,
      to: options.to,
      subject: options.subject,
      text: options.text,
      html: options.html,
    });

    console.log("✉️ Email sent:", info.messageId);
  } catch (error) {
    console.error("❌ Error sending email:", error);
    throw error;
  }
}