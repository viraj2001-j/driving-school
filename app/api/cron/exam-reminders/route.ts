// import { NextResponse } from "next/server";
// import { processExamReminders } from "@/lib/examReminders";

// export const dynamic = "force-dynamic";

// export async function GET() {
//   console.log("🔔 /api/cron/exam-reminders called");
//   try {
//     await processExamReminders();
//     return NextResponse.json({ ok: true });
//   } catch (error) {
//     console.error("💥 Error in exam reminders cron:", error);
//     return NextResponse.json(
//       { ok: false, error: String(error) },
//       { status: 500 }
//     );
//   }
// }


// app/api/cron/exam-reminders/route.ts
import { NextResponse } from "next/server";
import { processExamReminders } from "@/lib/examReminders";

export const dynamic = "force-dynamic";

export async function GET() {
  console.log("🔔 /api/cron/exam-reminders called");
  try {
    await processExamReminders();
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("💥 Error in exam reminders cron:", error);
    return NextResponse.json(
      { ok: false, error: String(error) },
      { status: 500 }
    );
  }
}