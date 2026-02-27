// app/api/auth/me/route.ts
import { NextResponse } from "next/server";
// import { getCurrentUser } from "@/lib/auth"; // your auth util

export async function GET() {
  // const user = await getCurrentUser(); // however you get user
  const user = { name: "Randhika", role: "ADMIN" }; // demo

  return NextResponse.json({ user });
}