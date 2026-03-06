// "use server";

// import prisma from "@/lib/db";

// // Get matching students (lightweight for suggestions)
// export async function suggestStudents(query: string) {
//   return await prisma.studentApplication.findMany({
//     where: {
//       OR: [
//         { fullName: { contains: query, mode: "insensitive" } },
//         { nic: { contains: query, mode: "insensitive" } },
//       ],
//     },
//     select: {
//       id: true,
//       fullName: true,
//       nic: true,
//     },
//     take: 5,
//   });
// }


// // Get full info of one student
// // export async function getStudentDetails(id: string) {
// //   return await prisma.studentApplication.findUnique({
// //     where: { id },
// //     include: {
// //       vehicleClasses: { include: { vehicleClass: true } },
// //       existingLicense: {
// //         include: { vehicleClasses: { include: { vehicleClass: true } } },
// //       },
// //       paymentInfo: true,
// //             writtenExams: {
// //         orderBy: { attemptNo: 'asc' } // Keep attempts in order
// //       },
// //       drivingExamResults: {
// //   include: { vehicleClass: true },
// //   orderBy: { vehicleClassId: "asc" }
// // }

// //     },
// //   });
// // }


// // Get full info of one student
// export async function getStudentDetails(id: string) {
//   return await prisma.studentApplication.findUnique({
//     where: { id },
//     include: {
//       vehicleClasses: { include: { vehicleClass: true } },
//       existingLicense: {
//         include: { vehicleClasses: { include: { vehicleClass: true } } },
//       },
//       paymentInfo: true,

//       paymentRecords: { select: { amount: true } }, // or include + orderBy if you need dates

//       writtenExams: {
//         orderBy: { attemptNo: "asc" },
//       },

//       drivingExamResults: {
//         include: { vehicleClass: true },
//         orderBy: { vehicleClassId: "asc" },
//       },

//       // ✅ NEW
//       examAttempts: {
//         include: { vehicleClass: true }, // so you can show vehicle name
//         orderBy: [
//           { examType: "asc" },
//           { vehicleClassId: "asc" },
//           { attemptNo: "asc" },
//         ],
//       },
//     },
//   });
// }


// //delete student by applicationId
// export async function deleteStudent(id: string) {
//   try {
//     await prisma.studentApplication.delete({
//       where: { id },
//     });
//     return { success: true };
//   } catch (err: any) {
//     console.error("Delete failed", err);
//     return { success: false, message: err.message };
//   }
// }


// //update student notes
// export async function updateStudent(id: string, data: {
//   fullName: string;
//   nic: string;
//   email?: string;
//   phone1: string;
//   phone2?: string;
//   address: string;
//   notes?: string;
// }) {
//   try {
//     await prisma.studentApplication.update({
//       where: { id },
//       data,
//     });
//     return { success: true };
//   } catch (err: any) {
//     return { success: false, message: err.message };
//   }
// }

// // export async function getStudentDetails(id: string) {
// //   return await prisma.studentApplication.findUnique({
// //     where: { id },
// //   });
// // }

// // Example of what your fetch should look like

// export async function getAllVehicleClasses() {
//   try {
//     const classes = await prisma.vehicleClass.findMany({
//       orderBy: { code: 'asc' }
//     });
//     return classes;
//   } catch (error) {
//     console.error("Failed to fetch vehicle classes:", error);
//     return [];
//   }
// }

// // ✅ Paginated students list for the empty-state table
// export async function getStudentsPage(opts?: {
//   page?: number;
//   pageSize?: number;
//   query?: string; // optional filter
// }) {
//   const page = Math.max(1, Number(opts?.page ?? 1));
//   const pageSize = Math.min(50, Math.max(5, Number(opts?.pageSize ?? 10)));
//   const q = (opts?.query ?? "").trim();

//   const where = q
//     ? {
//         OR: [
//           { fullName: { contains: q, mode: "insensitive" } },
//           { nic: { contains: q, mode: "insensitive" } },
//           { phone1: { contains: q, mode: "insensitive" } },
//           { referenceNo: { contains: q, mode: "insensitive" } },
//         ],
//       }
//     : {};

//   const [total, rows] = await Promise.all([
//     prisma.studentApplication.count({ where }),
//     prisma.studentApplication.findMany({
//       where,
//       orderBy: { createdAt: "desc" },
//       skip: (page - 1) * pageSize,
//       take: pageSize,
//       select: {
//         id: true,
//         referenceNo: true,
//         fullName: true,
//         nic: true,
//         phone1: true,
//         canDriveVehicles: true,
//         createdAt: true,
//         paymentInfo: { select: { status: true } },
//       },
//     }),
//   ]);

//   return {
//     page,
//     pageSize,
//     total,
//     totalPages: Math.max(1, Math.ceil(total / pageSize)),
//     rows,
//   };
// }


"use server";

import prisma from "@/lib/db";

// Get matching students (lightweight for suggestions)
export async function suggestStudents(query: string) {
  return await prisma.studentApplication.findMany({
    where: {
      OR: [
        { fullName: { contains: query, mode: "insensitive" as const } },
        { nic: { contains: query, mode: "insensitive" as const } },
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

      paymentRecords: { select: { amount: true } },

      writtenExams: {
        orderBy: { attemptNo: "asc" },
      },

      drivingExamResults: {
        include: { vehicleClass: true },
        orderBy: { vehicleClassId: "asc" },
      },

      examAttempts: {
        include: { vehicleClass: true },
        orderBy: [
          { examType: "asc" },
          { vehicleClassId: "asc" },
          { attemptNo: "asc" },
        ],
      },
    },
  });
}

// delete student by applicationId
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

// update student notes
export async function updateStudent(
  id: string,
  data: {
    fullName: string;
    nic: string;
    email?: string;
    phone1: string;
    phone2?: string;
    address: string;
    notes?: string;
  }
) {
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

export async function getAllVehicleClasses() {
  try {
    const classes = await prisma.vehicleClass.findMany({
      orderBy: { code: "asc" },
    });
    return classes;
  } catch (error) {
    console.error("Failed to fetch vehicle classes:", error);
    return [];
  }
}

// Paginated students list for the empty-state table
export async function getStudentsPage(opts?: {
  page?: number;
  pageSize?: number;
  query?: string; // optional filter
}) {
  const page = Math.max(1, Number(opts?.page ?? 1));
  const pageSize = Math.min(50, Math.max(5, Number(opts?.pageSize ?? 10)));
  const q = (opts?.query ?? "").trim();

  const where = q
    ? {
        OR: [
          { fullName: { contains: q, mode: "insensitive" as const } },
          { nic: { contains: q, mode: "insensitive" as const } },
          { phone1: { contains: q, mode: "insensitive" as const } },
          { referenceNo: { contains: q, mode: "insensitive" as const } },
        ],
      }
    : {};

  const [total, rows] = await Promise.all([
    prisma.studentApplication.count({ where }),
    prisma.studentApplication.findMany({
      where,
      orderBy: { createdAt: "desc" },
      skip: (page - 1) * pageSize,
      take: pageSize,
      select: {
        id: true,
        referenceNo: true,
        fullName: true,
        nic: true,
        phone1: true,
        canDriveVehicles: true,
        createdAt: true,
        paymentInfo: { select: { status: true } },
      },
    }),
  ]);

  return {
    page,
    pageSize,
    total,
    totalPages: Math.max(1, Math.ceil(total / pageSize)),
    rows,
  };
}