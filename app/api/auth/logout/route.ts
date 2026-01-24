import { NextResponse } from "next/server";
import { getSession } from "@/lib/session";

export async function POST() {
  const session = await getSession();

  // ✅ remove user from session
  session.destroy();

  return NextResponse.json({ message: "Logged out" }, { status: 200 });
}
