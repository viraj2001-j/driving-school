"use server";

import prisma from "@/lib/db";

export async function getStudentVehicles(applicationId: string) {
  try {
    const classes = await prisma.applicationVehicleClass.findMany({
      where: { applicationId },
      include: { vehicleClass: true },
    });

    return classes.map((c) => c.vehicleClass.name);
  } catch (err) {
    console.error("Error fetching student vehicles:", err);
    return [];
  }
}
