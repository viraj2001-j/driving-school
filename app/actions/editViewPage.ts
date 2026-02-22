"use server";
import prisma  from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function updateStudentFull(id: string, data: any) {
  try {
    await prisma.$transaction(async (tx) => {
      // 1. Core Student, Medical, and Basic Fields
      await tx.studentApplication.update({
        where: { id },
        data: {
          fullName: data.fullName,
          nic: data.nic,
          address: data.address,
          email: data.email,
          phone1: data.phone1,
          phone2: data.phone2,
          dob: new Date(data.dob),
          age: parseInt(data.age),
          medicalDate: data.medicalDate ? new Date(data.medicalDate) : null,
          medicalTime: data.medicalTime ? new Date(`1970-01-01T${data.medicalTime}:00`) : null,
          medicalStatus: data.medicalStatus,
          notes: data.notes,
          // Vehicle Classes for the Application
          vehicleClasses: {
            deleteMany: {},
            create: data.vehicleClasses.map((vId: string) => ({
              vehicleClassId: parseInt(vId),
            })),
          },
        },
      });



      // 2. Existing License & its Vehicle Classes
      if (data.hasExistingLicense) {
        const license = await tx.existingLicense.upsert({
          where: { applicationId: id },
          create: {
            applicationId: id,
            licenseNumber: data.existingLicense.licenseNumber,
            issuedDate: data.existingLicense.issuedDate ? new Date(data.existingLicense.issuedDate) : null,
          },
          update: {
            licenseNumber: data.existingLicense.licenseNumber,
            issuedDate: data.existingLicense.issuedDate ? new Date(data.existingLicense.issuedDate) : null,
          },
        });

        await tx.existingLicenseVehicleClass.deleteMany({ where: { licenseId: license.id } });
        await tx.existingLicenseVehicleClass.createMany({
          data: data.existingLicense.vehicleClasses.map((vId: string) => ({
            licenseId: license.id,
            vehicleClassId: parseInt(vId),
          })),
        });
      } else {
        // If user unchecks, remove the existing license record
        await tx.existingLicense.delete({ where: { applicationId: id } }).catch(() => {});
      }

      // 3. Written Exams (Attempts)
      await tx.writtenExam.deleteMany({ where: { applicationId: id } });
      // Check if exams exist AND filter out any rows where examDate is empty
const validExams = data.writtenExams?.filter((exam: any) => exam.examDate && exam.examDate !== "");
      if (data.writtenExams?.length > 0) {
        await tx.writtenExam.createMany({
          data: validExams.map((exam: any) => ({
            applicationId: id,
            barCode: exam.barCode,
            examDate: new Date(exam.examDate),
            result: exam.result, // PASS, FAIL, ABSENT
            attemptNo: parseInt(exam.attemptNo),
            notes: exam.notes,
          })),
        });
      }

      // 4. Driving Exam
      // await tx.drivingExam.upsert({
      //   where: { applicationId: id },
      //   create: {
      //     applicationId: id,
      //     trainedDates: data.drivingExam.trainedDates,
      //     examDate: data.drivingExam.examDate ? new Date(data.drivingExam.examDate) : null,
      //     // examResult: data.drivingExam.examResult,
          
      //     notes: data.drivingExam.notes,
      //   },
      //   update: {
      //     trainedDates: data.drivingExam.trainedDates,
      //     // examResult: data.drivingExam.examResult,
      //     examDate: data.drivingExam.examDate ? new Date(data.drivingExam.examDate) : null,
      //     notes: data.drivingExam.notes,
      //   },
      // });

      // 4. Driving Exam Results (per vehicle)
await tx.drivingExamResult.deleteMany({ where: { applicationId: id } });

if (data.drivingExamResults?.length > 0) {
  await tx.drivingExamResult.createMany({
    data: data.drivingExamResults.map((r: any) => ({
      applicationId: id,
      vehicleClassId: parseInt(r.vehicleClassId),
      trainedDates: r.trainedDates || "",
      examDate: r.examDate ? new Date(r.examDate) : null,
      result: r.result, 
      notes: r.notes || "",
    })),
  });
}

      // 5. Payment Info
      await tx.paymentInfo.upsert({
        where: { applicationId: id },
        create: {
          applicationId: id,
          totalFee: parseInt(data.paymentInfo.totalFee),
          advanceFee: parseInt(data.paymentInfo.advanceFee),
          status: data.paymentInfo.status,
        },
        update: {
          totalFee: parseInt(data.paymentInfo.totalFee),
          advanceFee: parseInt(data.paymentInfo.advanceFee),
          status: data.paymentInfo.status,
        },
      });
    });

    revalidatePath("/view-students");
    return { success: true };
  } catch (error: any) {
    console.error(error);
    return { success: false, message: error.message };
  }
}


// @/app/actions/studentView.ts
