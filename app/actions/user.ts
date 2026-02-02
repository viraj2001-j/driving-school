"use server";

import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function createUser(formData: FormData): Promise<void> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim().toLowerCase();

  if (!name || !email) return;

  await prisma.user1.create({
    data: { name, email },
  });

  revalidatePath("/users");
}

export async function getUsers() {
  return prisma.user1.findMany({
    orderBy: { createdAt: "desc" },
  });
}
