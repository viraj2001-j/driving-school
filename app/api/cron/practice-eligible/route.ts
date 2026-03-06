// import { NextResponse } from "next/server";
// import prisma from "@/lib/db";
// import nodemailer from "nodemailer";

// export const runtime = "nodejs"; // ✅ nodemailer needs node runtime

// function startOfDaySL(date = new Date()) {
//   // Sri Lanka is UTC+5:30. If your server timezone differs, this avoids “wrong day” issues.
//   // Simple approach: treat date parts as local server time; if you want perfect TZ handling,
//   // use date-fns-tz. This is good enough for most SL deployments.
//   return new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0, 0);
// }

// function addDays(d: Date, days: number) {
//   const x = new Date(d);
//   x.setDate(x.getDate() + days);
//   return x;
// }

// function addYears(d: Date, years: number) {
//   const x = new Date(d);
//   x.setFullYear(x.getFullYear() + years);
//   return x;
// }

// // dob window for "turning 18 today":
// // if today is T, then DOB must be between (T - 18y) and ((T+1) - 18y)
// function dobWindowForTurningAgeToday(ageYears: number) {
//   const todayStart = startOfDaySL(new Date());
//   const tomorrowStart = addDays(todayStart, 1);

//   const startDob = addYears(todayStart, -ageYears);
//   const endDob = addYears(tomorrowStart, -ageYears);

//   return { todayStart, startDob, endDob };
// }

// function mailer() {
//   // ✅ Use your SMTP settings
//   return nodemailer.createTransport({
//     host: process.env.SMTP_HOST!,
//     port: Number(process.env.SMTP_PORT || 587),
//     secure: process.env.SMTP_SECURE === "true", // true for 465
//     auth: {
//       user: process.env.SMTP_USER!,
//       pass: process.env.SMTP_PASS!,
//     },
//   });
// }

// function buildEmail(name: string) {
//   const subject = "You can now practice vehicles ✅";
//   const html = `
//     <div style="font-family: ui-sans-serif, system-ui; line-height:1.6; color:#0f172a;">
//       <p>Hi <strong>${name}</strong>,</p>
//       <p>Good news — you are now <strong>18 years old</strong>, so you can start practicing vehicles.</p>
//       <p>If you need any help scheduling your practice sessions, contact the school.</p>
//       <p style="margin-top:18px;">- Randika Driving School</p>
//     </div>
//   `;
//   return { subject, html };
// }

// export async function GET(req: Request) {
//   // ✅ Protect this route
//   const secret = process.env.CRON_SECRET;
//   const header = req.headers.get("x-cron-secret");
//   if (!secret || header !== secret) {
//     return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });
//   }

//   const { todayStart, startDob, endDob } = dobWindowForTurningAgeToday(18);

//   // 1) Find students turning 18 today, having email, and not already allowed
//   const students = await prisma.studentApplication.findMany({
//     where: {
//       dob: { gte: startDob, lt: endDob },
//       email: { not: null },
//       canDriveVehicles: false,
//     },
//     select: { id: true, fullName: true, email: true },
//   });

//   if (students.length === 0) {
//     return NextResponse.json({ ok: true, sent: 0, updated: 0 });
//   }

//   // 2) Create logs + update flag in one transaction (avoid duplicates)
//   // We use createMany with skipDuplicates. Needs @@unique in PracticeEligibleLog.
//   const ids = students.map((s) => s.id);

//   const txResult = await prisma.$transaction(async (tx) => {
//     const logRes = await tx.practiceEligibleLog.createMany({
//       data: ids.map((id) => ({
//         applicationId: id,
//         eligibleDate: todayStart,
//       })),
//       skipDuplicates: true,
//     });

//     // Only update those we logged newly (best-effort: update all ids; harmless)
//     const updRes = await tx.studentApplication.updateMany({
//       where: { id: { in: ids } },
//       data: { canDriveVehicles: true },
//     });

//     return { createdLogs: logRes.count, updated: updRes.count };
//   });

//   // 3) Send emails (only to those who were newly logged)
//   // We re-check who has a log for today to avoid duplicate sending in race conditions.
//   const toSend = await prisma.practiceEligibleLog.findMany({
//     where: { eligibleDate: todayStart, applicationId: { in: ids } },
//     select: { applicationId: true },
//   });
//   const allowedIds = new Set(toSend.map((x) => x.applicationId));
//   const finalList = students.filter((s) => allowedIds.has(s.id));

//   const transport = mailer();

//   let sent = 0;
//   for (const s of finalList) {
//     if (!s.email) continue;
//     const { subject, html } = buildEmail(s.fullName);
//     await transport.sendMail({
//       from: process.env.MAIL_FROM || process.env.SMTP_USER!,
//       to: s.email,
//       subject,
//       html,
//     });
//     sent++;
//   }

//   return NextResponse.json({
//     ok: true,
//     turning18Today: students.length,
//     createdLogs: txResult.createdLogs,
//     updatedCanDrive: txResult.updated,
//     emailsSent: sent,
//   });
// }



import { NextResponse } from "next/server";
import prisma from "@/lib/db";
import nodemailer from "nodemailer";

export const runtime = "nodejs"; // ✅ nodemailer needs Node runtime

function startOfDaySL(date = new Date()) {
  // If your Vercel project timezone isn't SL, this still works *mostly*,
  // but best is to run cron at a safe time (e.g., morning SL).
  return new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0, 0);
}

function addDays(d: Date, days: number) {
  const x = new Date(d);
  x.setDate(x.getDate() + days);
  return x;
}

function addYears(d: Date, years: number) {
  const x = new Date(d);
  x.setFullYear(x.getFullYear() + years);
  return x;
}

// DOB window for "turning 18 today"
function dobWindowForTurningAgeToday(ageYears: number) {
  const todayStart = startOfDaySL(new Date());
  const tomorrowStart = addDays(todayStart, 1);
  const startDob = addYears(todayStart, -ageYears);
  const endDob = addYears(tomorrowStart, -ageYears);
  return { todayStart, startDob, endDob };
}

function mailer() {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST!,
    port: Number(process.env.SMTP_PORT || 587),
    secure: process.env.SMTP_SECURE === "true", // true for 465
    auth: {
      user: process.env.SMTP_USER!,
      pass: process.env.SMTP_PASS!,
    },
  });
}

function buildEmail(name: string) {
  return {
    subject: "You can now practice vehicles ✅",
    html: `
      <div style="font-family: ui-sans-serif, system-ui; line-height:1.6; color:#0f172a;">
        <p>Hi <strong>${name}</strong>,</p>
        <p>Good news — you are now <strong>18 years old</strong>, so you can start practicing vehicles.</p>
        <p>- Randika Driving School</p>
      </div>
    `,
  };
}

export async function GET(req: Request) {
  const url = new URL(req.url);

  // ✅ Vercel Cron secure check using query param
  const secret = url.searchParams.get("secret");
  if (!process.env.CRON_SECRET || secret !== process.env.CRON_SECRET) {
    return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });
  }

  const { todayStart, startDob, endDob } = dobWindowForTurningAgeToday(18);

  // Find students turning 18 today (and have email)
  const students = await prisma.studentApplication.findMany({
    where: {
      dob: { gte: startDob, lt: endDob },
      email: { not: null },
      canDriveVehicles: false,
    },
    select: { id: true, fullName: true, email: true },
  });

  if (students.length === 0) {
    return NextResponse.json({ ok: true, turning18Today: 0, updated: 0, emailsSent: 0 });
  }

  // ✅ IMPORTANT: You should add this table (PracticeEligibleLog) to avoid duplicates
  // If you already added it, keep this code. If not, tell me and I’ll give no-log fallback.
  const ids = students.map((s) => s.id);

  const tx = await prisma.$transaction(async (tx) => {
    const logRes = await tx.practiceEligibleLog.createMany({
      data: ids.map((id) => ({ applicationId: id, eligibleDate: todayStart })),
      skipDuplicates: true,
    });

    const updRes = await tx.studentApplication.updateMany({
      where: { id: { in: ids } },
      data: { canDriveVehicles: true },
    });

    return { createdLogs: logRes.count, updated: updRes.count };
  });

  // send only to those that have a log for today
  const logged = await prisma.practiceEligibleLog.findMany({
    where: { eligibleDate: todayStart, applicationId: { in: ids } },
    select: { applicationId: true },
  });
  const allowedIds = new Set(logged.map((x) => x.applicationId));
  const toSend = students.filter((s) => allowedIds.has(s.id));

  const transport = mailer();
  let sent = 0;

  for (const s of toSend) {
    if (!s.email) continue;
    const { subject, html } = buildEmail(s.fullName);
    await transport.sendMail({
      from: process.env.MAIL_FROM || process.env.SMTP_USER!,
      to: s.email,
      subject,
      html,
    });
    sent++;
  }

  return NextResponse.json({
    ok: true,
    turning18Today: students.length,
    createdLogs: tx.createdLogs,
    updatedCanDrive: tx.updated,
    emailsSent: sent,
  });
}