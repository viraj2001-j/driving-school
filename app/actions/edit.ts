// app/actions/vehicleClasses.ts
"use server";

import prisma from "@/lib/db";

export async function getVehicleClassNames(applicationId: string) {
  if (!applicationId) return [];

  const classes = await prisma.applicationVehicleClass.findMany({
    where: { applicationId },
    include: { vehicleClass: true },
  });

  return classes.map((c) => c.vehicleClass.name);
}

export async function getExistingLicenseInfo(applicationId: string) {
  const license = await prisma.existingLicense.findUnique({
    where: { applicationId },
    include: {
      vehicleClasses: {
        include: {
          vehicleClass: true,
        },
      },
    },
  });

  return license;
}

export async function getPaymentInfo(applicationId: string) {
  return await prisma.paymentInfo.findUnique({
    where: { applicationId },
  });
}

export async function updateDrivingExamInfo(applicationId: string, data: { trainedDates: string; examResult: string; notes?: string }) {
  try {
    await prisma.drivingExam.update({
      where: { applicationId },
      data,
    });
    return { success: true };
  } catch (err: any) {
    console.error("Update Driving Exam Info failed:", err);
    return { success: false, message: err.message };
  }
}