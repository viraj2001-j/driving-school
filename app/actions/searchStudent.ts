"use server";

import prisma from "@/lib/db";

// Search by name or NIC
export async function searchStudents(query: string) {
  return await prisma.studentApplication.findMany({
    where: {
      OR: [
        { fullName: { contains: query, mode: "insensitive" } },
        { nic: { contains: query, mode: "insensitive" } }
      ]
    },
    select: {
      id: true,
      fullName: true,
      nic: true,
      referenceNo: true
    },
    take: 10
  });
}
