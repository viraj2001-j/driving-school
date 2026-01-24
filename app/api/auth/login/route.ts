import { NextResponse } from "next/server";
import  prisma  from "@/lib/db";
import { verifyPassword } from "@/lib/auth";
import { getSession } from "@/lib/session";
import { z } from "zod";

const loginSchema = z.object({
  username: z.string().min(1),
  password: z.string().min(1),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { username, password } = loginSchema.parse(body);

    // 1) Find user by username
    const user = await prisma.user.findUnique({
      where: { username },
      select: { id: true, name: true, username: true, password: true, role: true },
    });

    if (!user) {
      return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });
    }

    // 2) Verify password
    const ok = await verifyPassword(password, user.password);
    if (!ok) {
      return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });
    }

    // 3) Create session cookie (httpOnly)
    const session = await getSession();
    session.user = {
      id: user.id,
      name: user.name,
      username: user.username,
      role: user.role,
    };
    await session.save();

    return NextResponse.json({ message: "Login success" }, { status: 200 });
  } catch (err: any) {
    return NextResponse.json(
      { message: err?.message ?? "Login failed" },
      { status: 400 }
    );
  }
}
