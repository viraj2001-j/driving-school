"use server";

import prisma from "@/lib/db";

// Get matching students (lightweight for suggestions)
export async function suggestStudents(query: string) {
  return await prisma.studentApplication.findMany({
    where: {
      OR: [
        { fullName: { contains: query, mode: "insensitive" } },
        { nic: { contains: query, mode: "insensitive" } },
      ],
    },
    select: {
      id: true,
      fullName: true,
      nic: true,
    },
    take: 5,
  });
}


// Get full info of one student
export async function getStudentDetails(id: string) {
  return await prisma.studentApplication.findUnique({
    where: { id },
    include: {
      vehicleClasses: { include: { vehicleClass: true } },
      existingLicense: {
        include: { vehicleClasses: { include: { vehicleClass: true } } },
      },
      paymentInfo: true,
            writtenExams: {
        orderBy: { attemptNo: 'asc' } // Keep attempts in order
      },
      drivingExams: true,
    },
  });
}


//delete student by applicationId
export async function deleteStudent(id: string) {
  try {
    await prisma.studentApplication.delete({
      where: { id },
    });
    return { success: true };
  } catch (err: any) {
    console.error("Delete failed", err);
    return { success: false, message: err.message };
  }
}


//update student notes
export async function updateStudent(id: string, data: {
  fullName: string;
  nic: string;
  email?: string;
  phone1: string;
  phone2?: string;
  address: string;
  notes?: string;
}) {
  try {
    await prisma.studentApplication.update({
      where: { id },
      data,
    });
    return { success: true };
  } catch (err: any) {
    return { success: false, message: err.message };
  }
}

// export async function getStudentDetails(id: string) {
//   return await prisma.studentApplication.findUnique({
//     where: { id },
//   });
// }

// Example of what your fetch should look like
