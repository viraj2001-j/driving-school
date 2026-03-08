// "use server";
// import prisma  from "@/lib/db";
// import { revalidatePath } from "next/cache";

// export async function updateStudentFull(id: string, data: any) {
//   try {
//     await prisma.$transaction(async (tx) => {
//       // 1. Core Student, Medical, and Basic Fields
//       await tx.studentApplication.update({
//         where: { id },
//         data: {
//           fullName: data.fullName,
//           nic: data.nic,
//           address: data.address,
//           email: data.email,
//           phone1: data.phone1,
//           phone2: data.phone2,
//           dob: new Date(data.dob),
//           age: parseInt(data.age),
//           medicalDate: data.medicalDate ? new Date(data.medicalDate) : null,
//           medicalTime: data.medicalTime ? new Date(`1970-01-01T${data.medicalTime}:00`) : null,
//           medicalStatus: data.medicalStatus,
//           notes: data.notes,
//           // Vehicle Classes for the Application
//           vehicleClasses: {
//             deleteMany: {},
//             create: data.vehicleClasses.map((vId: string) => ({
//               vehicleClassId: parseInt(vId),
//             })),
//           },
//         },
//       });



//       // 2. Existing License & its Vehicle Classes
//       if (data.hasExistingLicense) {
//         const license = await tx.existingLicense.upsert({
//           where: { applicationId: id },
//           create: {
//             applicationId: id,
//             licenseNumber: data.existingLicense.licenseNumber,
//             issuedDate: data.existingLicense.issuedDate ? new Date(data.existingLicense.issuedDate) : null,
//           },
//           update: {
//             licenseNumber: data.existingLicense.licenseNumber,
//             issuedDate: data.existingLicense.issuedDate ? new Date(data.existingLicense.issuedDate) : null,
//           },
//         });

//         await tx.existingLicenseVehicleClass.deleteMany({ where: { licenseId: license.id } });
//         await tx.existingLicenseVehicleClass.createMany({
//           data: data.existingLicense.vehicleClasses.map((vId: string) => ({
//             licenseId: license.id,
//             vehicleClassId: parseInt(vId),
//           })),
//         });
//       } else {
//         // If user unchecks, remove the existing license record
//         await tx.existingLicense.delete({ where: { applicationId: id } }).catch(() => {});
//       }

//       // 3. Written Exams (Attempts)
//       await tx.writtenExam.deleteMany({ where: { applicationId: id } });
//       // Check if exams exist AND filter out any rows where examDate is empty
// const validExams = data.writtenExams?.filter((exam: any) => exam.examDate && exam.examDate !== "");
//       if (data.writtenExams?.length > 0) {
//         await tx.writtenExam.createMany({
//           data: validExams.map((exam: any) => ({
//             applicationId: id,
//             barCode: exam.barCode,
//             examDate: new Date(exam.examDate),
//             result: exam.result, // PASS, FAIL, ABSENT
//             attemptNo: parseInt(exam.attemptNo),
//             notes: exam.notes,
//           })),
//         });
//       }

//       // 4. Driving Exam
//       // await tx.drivingExam.upsert({
//       //   where: { applicationId: id },
//       //   create: {
//       //     applicationId: id,
//       //     trainedDates: data.drivingExam.trainedDates,
//       //     examDate: data.drivingExam.examDate ? new Date(data.drivingExam.examDate) : null,
//       //     // examResult: data.drivingExam.examResult,
          
//       //     notes: data.drivingExam.notes,
//       //   },
//       //   update: {
//       //     trainedDates: data.drivingExam.trainedDates,
//       //     // examResult: data.drivingExam.examResult,
//       //     examDate: data.drivingExam.examDate ? new Date(data.drivingExam.examDate) : null,
//       //     notes: data.drivingExam.notes,
//       //   },
//       // });

//       // 4. Driving Exam Results (per vehicle)
// // 4. Driving Exam Results (per vehicle)
// await tx.drivingExamResult.deleteMany({ where: { applicationId: id } });

// // 1. Filter out rows that don't have a vehicleClassId (empty rows from UI)
// const validDrivingResults = data.drivingExamResults?.filter(
//   (r: any) => r.vehicleClassId && r.vehicleClassId !== ""
// ) || [];

// if (validDrivingResults.length > 0) {
//   await tx.drivingExamResult.createMany({
//     data: validDrivingResults.map((r: any) => ({
//       applicationId: id,
//       // 2. Use a fallback for parseInt to avoid NaN
//       vehicleClassId: parseInt(r.vehicleClassId) || 0,
//       trainedDates: r.trainedDates || "",
//       examDate: r.examDate ? new Date(r.examDate) : null,
//       // 3. Ensure 'result' is never undefined. 
//       // Replace "PENDING" with whatever your default Enum value is.
//       result: r.result ?? "PENDING", 
//       notes: r.notes || "",
//     })),
//   });
// }

//       // 5. Payment Info
//       await tx.paymentInfo.upsert({
//         where: { applicationId: id },
//         create: {
//           applicationId: id,
//           totalFee: parseInt(data.paymentInfo.totalFee),
//           advanceFee: parseInt(data.paymentInfo.advanceFee),
//           status: data.paymentInfo.status,
//         },
//         update: {
//           totalFee: parseInt(data.paymentInfo.totalFee),
//           advanceFee: parseInt(data.paymentInfo.advanceFee),
//           status: data.paymentInfo.status,
//         },
//       });
//     });

//     revalidatePath("/view-students");
//     return { success: true };
//   } catch (error: any) {
//     console.error(error);
//     return { success: false, message: error.message };
//   }
// }


// // @/app/actions/studentView.ts


"use server";

import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";

function toInt(value: any, fallback = 0) {
  const n = Number(value);
  return Number.isFinite(n) ? n : fallback;
}

function toDate(value: any) {
  if (!value) return null;
  const d = new Date(value);
  return Number.isNaN(d.getTime()) ? null : d;
}

function toTime(value: any) {
  if (!value) return null;
  const d = new Date(`1970-01-01T${value}:00`);
  return Number.isNaN(d.getTime()) ? null : d;
}

export async function updateStudentFull(id: string, data: any) {
  try {
    await prisma.$transaction(
      async (tx) => {
        // ---------- normalize ----------
        const applicationVehicleClasses =
          data.vehicleClasses
            ?.map((vId: string) => ({
              vehicleClassId: toInt(vId),
            }))
            .filter((v: any) => v.vehicleClassId > 0) ?? [];

        const existingLicenseVehicleClasses =
          data.existingLicense?.vehicleClasses
            ?.map((vId: string) => ({
              vehicleClassId: toInt(vId),
            }))
            .filter((v: any) => v.vehicleClassId > 0) ?? [];

        const validWrittenExams =
          data.writtenExams
            ?.filter((exam: any) => exam.examDate && exam.examDate !== "")
            .map((exam: any) => ({
              applicationId: id,
              barCode: exam.barCode || "",
              examDate: new Date(exam.examDate),
              result: exam.result || "ABSENT",
              attemptNo: toInt(exam.attemptNo, 1),
              notes: exam.notes || null,
            })) ?? [];

        const validDrivingResults =
          data.drivingExamResults
            ?.filter((r: any) => r.vehicleClassId && r.vehicleClassId !== "")
            .map((r: any) => ({
              applicationId: id,
              vehicleClassId: toInt(r.vehicleClassId),
              trainedDates: r.trainedDates || "",
              examDate: r.examDate ? new Date(r.examDate) : null,
              result: r.result || "ABSENT",
              notes: r.notes || null,
            }))
            .filter((r: any) => r.vehicleClassId > 0) ?? [];

        // ---------- 1. core student ----------
        await tx.studentApplication.update({
          where: { id },
          data: {
            fullName: data.fullName || "",
            nic: data.nic || "",
            address: data.address || "",
            email: data.email || null,
            phone1: data.phone1 || "",
            phone2: data.phone2 || null,
            dob: toDate(data.dob) ?? new Date(),
            age: toInt(data.age, 0),
            medicalDate: toDate(data.medicalDate),
            medicalTime: toTime(data.medicalTime),
            medicalStatus: data.medicalStatus || "PENDING",
            notes: data.notes || null,

            vehicleClasses: {
              deleteMany: {},
              ...(applicationVehicleClasses.length > 0
                ? { create: applicationVehicleClasses }
                : {}),
            },
          },
        });

        // ---------- 2. existing license ----------
        if (data.hasExistingLicense) {
          const license = await tx.existingLicense.upsert({
            where: { applicationId: id },
            create: {
              applicationId: id,
              licenseNumber: data.existingLicense?.licenseNumber || null,
              issuedDate: toDate(data.existingLicense?.issuedDate),
            },
            update: {
              licenseNumber: data.existingLicense?.licenseNumber || null,
              issuedDate: toDate(data.existingLicense?.issuedDate),
            },
          });

          await tx.existingLicenseVehicleClass.deleteMany({
            where: { licenseId: license.id },
          });

          if (existingLicenseVehicleClasses.length > 0) {
            await tx.existingLicenseVehicleClass.createMany({
              data: existingLicenseVehicleClasses.map((v: any) => ({
                licenseId: license.id,
                vehicleClassId: v.vehicleClassId,
              })),
            });
          }
        } else {
          await tx.existingLicenseVehicleClass.deleteMany({
            where: {
              license: { applicationId: id },
            },
          });

          await tx.existingLicense.deleteMany({
            where: { applicationId: id },
          });
        }

        // ---------- 3. written exams ----------
        await tx.writtenExam.deleteMany({
          where: { applicationId: id },
        });

        if (validWrittenExams.length > 0) {
          await tx.writtenExam.createMany({
            data: validWrittenExams,
          });
        }

        // ---------- 4. driving exam results ----------
        await tx.drivingExamResult.deleteMany({
          where: { applicationId: id },
        });

        if (validDrivingResults.length > 0) {
          await tx.drivingExamResult.createMany({
            data: validDrivingResults,
          });
        }

        // ---------- 5. payment info ----------
        await tx.paymentInfo.upsert({
          where: { applicationId: id },
          create: {
            applicationId: id,
            totalFee: toInt(data.paymentInfo?.totalFee, 0),
            advanceFee: toInt(data.paymentInfo?.advanceFee, 0),
            status: data.paymentInfo?.status || "PENDING",
          },
          update: {
            totalFee: toInt(data.paymentInfo?.totalFee, 0),
            advanceFee: toInt(data.paymentInfo?.advanceFee, 0),
            status: data.paymentInfo?.status || "PENDING",
          },
        });
      },
      {
        maxWait: 10000,
        timeout: 20000,
      }
    );

    revalidatePath("/forms/view-students");
    return { success: true };
  } catch (error: any) {
    console.error("updateStudentFull error:", error);
    return {
      success: false,
      message: error?.message || "Failed to update student",
    };
  }
}