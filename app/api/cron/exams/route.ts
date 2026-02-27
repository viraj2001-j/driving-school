// app/api/cron/exams/route.ts
import { NextResponse } from "next/server";
import { processExamReminders } from "@/lib/examReminders";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    await processExamReminders();
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Error in exam reminder cron:", error);
    return NextResponse.json(
      { ok: false, error: "Internal error" },
      { status: 500 }
    );
  }
}