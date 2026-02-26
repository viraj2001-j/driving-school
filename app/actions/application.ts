"use server";

import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

function calculateAge(dob: Date) {
  const today = new Date();
  let age = today.getFullYear() - dob.getFullYear();
  const m = today.getMonth() - dob.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) age--;
  return age;
}

// combine a date input + time input -> Date (or null)
// medicalTime is DateTime in your schema, so we store time with the same date.
function combineDateAndTime(dateStr?: string | null, timeStr?: string | null) {
  if (!dateStr || !dateStr.trim()) return null;
  const safeTime = timeStr && timeStr.trim() ? timeStr : "00:00";
  return new Date(`${dateStr}T${safeTime}:00`);
}

export async function updateStudentInfoAction(formData: FormData) {
  const applicationId = String(formData.get("applicationId") || "");

  const fullName = String(formData.get("fullName") || "");
  const nic = String(formData.get("nic") || "");
  const address = String(formData.get("address") || "");
  const emailRaw = formData.get("email");
  const email = emailRaw && String(emailRaw).trim() ? String(emailRaw).trim() : null;

  const phone1 = String(formData.get("phone1") || "");
  const phone2Raw = formData.get("phone2");
  const phone2 = phone2Raw && String(phone2Raw).trim() ? String(phone2Raw).trim() : null;

  const dobStr = String(formData.get("dob") || "");
  const dob = new Date(`${dobStr}T00:00:00`);
  const age = calculateAge(dob);

  const notesRaw = formData.get("notes");
  const notes = notesRaw && String(notesRaw).trim() ? String(notesRaw).trim() : null;

  const medicalDateStr = formData.get("medicalDate") ? String(formData.get("medicalDate")) : null;
  const medicalTimeStr = formData.get("medicalTime") ? String(formData.get("medicalTime")) : null;

  // medicalDate is DateTime? (you have DateTime?) -> store midnight of that date
  const medicalDate = medicalDateStr ? new Date(`${medicalDateStr}T00:00:00`) : null;
  const medicalTime = combineDateAndTime(medicalDateStr, medicalTimeStr);

  const medicalStatus = String(formData.get("medicalStatus") || "PENDING");

  await prisma.studentApplication.update({
    where: { id: applicationId },
    data: {
      fullName,
      nic,
      address,
      email,
      phone1,
      phone2,
      dob,
      age,
      notes,
      medicalDate,
      medicalTime,
      medicalStatus,
    },
  });

  revalidatePath(`/applications/${applicationId}`);
  redirect(`/applications/${applicationId}`);
}

export async function updateVehicleClassesAction(formData: FormData) {
  const applicationId = String(formData.get("applicationId") || "");
  const selected = formData.getAll("vehicleClassIds").map((v) => Number(v));

  await prisma.$transaction(async (tx) => {
    // remove old
    await tx.applicationVehicleClass.deleteMany({ where: { applicationId } });

    // add new
    if (selected.length) {
      await tx.applicationVehicleClass.createMany({
        data: selected.map((vehicleClassId) => ({ applicationId, vehicleClassId })),
      });
    }
  });

  revalidatePath(`/applications/${applicationId}`);
  redirect(`/applications/${applicationId}?tab=vehicle`);
}

export async function updateExistingLicenseAction(formData: FormData) {
  const applicationId = String(formData.get("applicationId") || "");

  const enabled = String(formData.get("hasLicense") || "off") === "on";

  const licenseNumberRaw = formData.get("licenseNumber");
  const licenseNumber = licenseNumberRaw && String(licenseNumberRaw).trim() ? String(licenseNumberRaw).trim() : null;

  const issuedDateStr = formData.get("issuedDate") ? String(formData.get("issuedDate")) : "";
  const issuedDate = issuedDateStr ? new Date(`${issuedDateStr}T00:00:00`) : null;

  const selectedClassIds = formData.getAll("licenseVehicleClassIds").map((v) => Number(v));

  await prisma.$transaction(async (tx) => {
    const existing = await tx.existingLicense.findUnique({ where: { applicationId } });

    if (!enabled) {
      // remove license if exists
      if (existing) {
        await tx.existingLicenseVehicleClass.deleteMany({ where: { licenseId: existing.id } });
        await tx.existingLicense.delete({ where: { applicationId } });
      }
      return;
    }

    // ensure license exists
    const license =
      existing ??
      (await tx.existingLicense.create({
        data: { applicationId },
      }));

    // update main fields
    await tx.existingLicense.update({
      where: { id: license.id },
      data: {
        licenseNumber,
        issuedDate,
      },
    });

    // update vehicle classes (replace)
    await tx.existingLicenseVehicleClass.deleteMany({ where: { licenseId: license.id } });

    if (selectedClassIds.length) {
      await tx.existingLicenseVehicleClass.createMany({
        data: selectedClassIds.map((vehicleClassId) => ({
          licenseId: license.id,
          vehicleClassId,
        })),
      });
    }
  });

  revalidatePath(`/applications/${applicationId}`);
  redirect(`/applications/${applicationId}?tab=license`);
}

export async function addWrittenExamAction(formData: FormData) {
  const applicationId = String(formData.get("applicationId") || "");

  const barCode = String(formData.get("barCode") || "");
  const examDateStr = String(formData.get("examDate") || "");
  const examDate = new Date(`${examDateStr}T00:00:00`);
  const result = String(formData.get("result") || "FAIL") as any;

  const attemptNo = Number(formData.get("attemptNo") || 1);

  const notesRaw = formData.get("notes");
  const notes = notesRaw && String(notesRaw).trim() ? String(notesRaw).trim() : null;

  await prisma.writtenExam.create({
    data: { applicationId, barCode, examDate, result, attemptNo, notes },
  });

  revalidatePath(`/applications/${applicationId}`);
  redirect(`/applications/${applicationId}?tab=written`);
}

export async function updateWrittenExamAction(formData: FormData) {
  const applicationId = String(formData.get("applicationId") || "");
  const id = Number(formData.get("id"));

  const barCode = String(formData.get("barCode") || "");
  const examDateStr = String(formData.get("examDate") || "");
  const examDate = new Date(`${examDateStr}T00:00:00`);
  const result = String(formData.get("result") || "FAIL") as any;

  const notesRaw = formData.get("notes");
  const notes = notesRaw && String(notesRaw).trim() ? String(notesRaw).trim() : null;

  await prisma.writtenExam.update({
    where: { id },
    data: { barCode, examDate, result, notes },
  });

  revalidatePath(`/applications/${applicationId}`);
  redirect(`/applications/${applicationId}?tab=written`);
}

export async function deleteWrittenExamAction(formData: FormData) {
  const applicationId = String(formData.get("applicationId") || "");
  const id = Number(formData.get("id"));

  await prisma.writtenExam.delete({ where: { id } });

  revalidatePath(`/applications/${applicationId}`);
  redirect(`/applications/${applicationId}?tab=written`);
}

export async function updateDrivingExamAction(formData: FormData) {
  const applicationId = String(formData.get("applicationId") || "");

  const trainedDates = String(formData.get("trainedDates") || "");
  const examResult = String(formData.get("examResult") || "");
  const notesRaw = formData.get("notes");
  const notes = notesRaw && String(notesRaw).trim() ? String(notesRaw).trim() : null;

  // await prisma.drivingExam.upsert({
  //   where: { applicationId }, // because applicationId is @unique
  //   create: { applicationId, trainedDates, examResult, notes },
  //   update: { trainedDates, examResult, notes },
  // });

  revalidatePath(`/applications/${applicationId}`);
  redirect(`/applications/${applicationId}?tab=driving`);
}

export async function updatePaymentInfoAction(formData: FormData) {
  const applicationId = String(formData.get("applicationId") || "");

  const totalFee = Number(formData.get("totalFee") || 0);
  const advanceFee = Number(formData.get("advanceFee") || 0);
  const status = String(formData.get("status") || "PENDING");

  const paidDateStr = formData.get("paidDate") ? String(formData.get("paidDate")) : "";
  const paidDate = paidDateStr ? new Date(`${paidDateStr}T00:00:00`) : null;

  await prisma.paymentInfo.upsert({
    where: { applicationId },
    create: { applicationId, totalFee, advanceFee, status, paidDate },
    update: { totalFee, advanceFee, status, paidDate },
  });

  revalidatePath(`/applications/${applicationId}`);
  redirect(`/applications/${applicationId}?tab=payment`);
}

export async function deleteApplicationAction(formData: FormData) {
  const applicationId = String(formData.get("applicationId") || "");

  await prisma.$transaction(async (tx) => {
    // 1) Written exams will cascade (you have onDelete: Cascade) — ok
    // 2) DrivingExam cascades — ok
    // But these need manual deletes:
    await tx.applicationVehicleClass.deleteMany({ where: { applicationId } });

    const lic = await tx.existingLicense.findUnique({ where: { applicationId } });
    if (lic) {
      await tx.existingLicenseVehicleClass.deleteMany({ where: { licenseId: lic.id } });
      await tx.existingLicense.delete({ where: { applicationId } });
    }

    await tx.paymentInfo.deleteMany({ where: { applicationId } });

    // finally delete application (writtenExams + drivingExam cascades)
    await tx.studentApplication.delete({ where: { id: applicationId } });
  });

  revalidatePath(`/applications`);
  redirect(`/applications`);
}
