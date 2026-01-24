"use server";

import prisma from "@/lib/db";

// Reference like: APP-20260124-AB12CD
function generateReference() {
  const rand = Math.random().toString(36).substring(2, 8).toUpperCase();
  const date = new Date().toISOString().slice(0, 10).replace(/-/g, "");
  return `APP-${date}-${rand}`;
}

function calculateAge(dob: Date) {
  const today = new Date();
  let age = today.getFullYear() - dob.getFullYear();
  const m = today.getMonth() - dob.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) age--;
  return age;
}

// Combine date + time safely -> DateTime (or null)
function combineDateAndTime(dateStr?: string, timeStr?: string) {
  if (!dateStr || !dateStr.trim()) return null;
  const safeTime = timeStr && timeStr.trim() ? timeStr : "00:00";
  const dt = new Date(`${dateStr}T${safeTime}:00`);
  if (isNaN(dt.getTime())) return null;
  return dt;
}

export async function insertApplication(data: {
  fullName: string;
  nic: string;
  address: string;
  email?: string;
  phone1: string;
  phone2?: string;

  dob: string;

  // Vehicle class IDs selected for new application
  vehicleClassIds: number[];

  // Medical
  medicalDate?: string; // "YYYY-MM-DD"
  medicalTime?: string; // "HH:MM"

  notes?: string;

  // Payment
  totalFee: number;
  advanceFee: number;

  // Existing license
  hasExistingLicense: boolean;
  licenseNumber?: string;
  licenseIssuedDate?: string;
  licenseClassIds?: number[];
}) {
  try {
    const referenceNo = generateReference();

    const dobDate = new Date(data.dob);
    if (isNaN(dobDate.getTime())) {
      return { success: false, error: "Invalid date of birth" };
    }

    const age = calculateAge(dobDate);

    const medicalDT = combineDateAndTime(data.medicalDate, data.medicalTime);

    // Simple medical status:
    // if medicalDT exists => BOOKED else PENDING
    const medicalStatus = medicalDT ? "BOOKED" : "PENDING";

    // Simple payment status:
    let payStatus = "PENDING";
    if (data.advanceFee >= data.totalFee) payStatus = "PAID";
    else if (data.advanceFee > 0) payStatus = "PARTIAL";

    const result = await prisma.$transaction(async (tx) => {
      // 1) Create application
      const application = await tx.studentApplication.create({
        data: {
          referenceNo,
          fullName: data.fullName,
          nic: data.nic,
          address: data.address,
          email: data.email?.trim() ? data.email : null,
          phone1: data.phone1,
          phone2: data.phone2?.trim() ? data.phone2 : null,
          dob: dobDate,
          age,
          notes: data.notes?.trim() ? data.notes : null,

          medicalDate: medicalDT,
          medicalTime: medicalDT,
          medicalStatus,
        },
      });

      // 2) Application vehicle classes
      if (data.vehicleClassIds.length > 0) {
        await tx.applicationVehicleClass.createMany({
          data: data.vehicleClassIds.map((id) => ({
            applicationId: application.id,
            vehicleClassId: id,
          })),
          skipDuplicates: true,
        });
      }

      // 3) Payment info
      await tx.paymentInfo.create({
        data: {
          applicationId: application.id,
          totalFee: data.totalFee,
          advanceFee: data.advanceFee,
          status: payStatus,
        },
      });

      // 4) Existing License (optional)
      if (data.hasExistingLicense) {
        const lic = await tx.existingLicense.create({
          data: {
            applicationId: application.id,
            licenseNumber: data.licenseNumber?.trim()
              ? data.licenseNumber
              : null,
            issuedDate: data.licenseIssuedDate?.trim()
              ? new Date(data.licenseIssuedDate)
              : null,
          },
        });

        const ids = data.licenseClassIds || [];
        if (ids.length > 0) {
          await tx.existingLicenseVehicleClass.createMany({
            data: ids.map((id) => ({
              licenseId: lic.id,
              vehicleClassId: id,
            })),
            skipDuplicates: true,
          });
        }
      }

      return application;
    });

    return { success: true, referenceNo: result.referenceNo };
  } catch (err) {
    console.error("Insert Error:", err);
    return { success: false, error: "Failed to insert application" };
  }
}
