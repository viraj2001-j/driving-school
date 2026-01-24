import { NextResponse } from "next/server";
import  prisma  from "@/lib/db";
import { hashPassword } from "@/lib/auth";
import { z } from "zod";

/**
 * ✅ Validate request body (server-side)
 */
const signupSchema = z.object({
  name: z.string().min(2, "Name is too short"),
  username: z.string().min(3, "Username is too short"),
  password: z.string().min(6, "Password must be 6+ chars"),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const data = signupSchema.parse(body);

    // 1) Check if username already exists
    const existing = await prisma.user.findUnique({
      where: { username: data.username },
      select: { id: true },
    });

    if (existing) {
      return NextResponse.json(
        { message: "Username already taken" },
        { status: 409 }
      );
    }

    // 2) Hash password before saving
    const hashed = await hashPassword(data.password);

    // 3) Create user (default role from schema: RECEPTION)
    await prisma.user.create({
      data: {
        name: data.name,
        username: data.username,
        password: hashed,
      },
    });

    return NextResponse.json({ message: "Signup success" }, { status: 201 });
  } catch (err: any) {
    // Zod error or other
    return NextResponse.json(
      { message: err?.message ?? "Signup failed" },
      { status: 400 }
    );
  }
}
