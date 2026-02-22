// app/api/cron/birthdays/route.ts
import { NextResponse } from "next/server";
import { processBirthdayWishes } from "@/lib/birthdays";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    await processBirthdayWishes();
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Error in birthday cron:", error);
    return NextResponse.json(
      { ok: false, error: "Internal error" },
      { status: 500 }
    );
  }
}