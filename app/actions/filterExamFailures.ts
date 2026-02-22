// // "use server";

// // import prisma from "@/lib/db";

// // export async function filterExamFailures({
// //   examType,   // "WRITTEN" | "DRIVING"
// //   failType,   // "FAIL" | "ABSENT" | "BOTH"
// // }: {
// //   examType: "WRITTEN" | "DRIVING";
// //   failType: "FAIL" | "ABSENT" | "BOTH";
// // }) {
// //   try {
// //     const failArray =
// //       failType === "BOTH" ? ["FAIL", "ABSENT"] : [failType];

// //     // ============= WRITTEN EXAM FILTER =============
// //     if (examType === "WRITTEN") {
// //       const students = await prisma.studentApplication.findMany({
// //         where: {
// //           writtenExams: {
// //             some: {
// //               result: { in: failArray as any },
// //             },
// //           },
// //         },
// //         select: {
// //           id: true,
// //           fullName: true,
// //           nic: true,
// //           referenceNo: true,
// //           writtenExams: {
// //             where: { result: { in: failArray as any } },
// //             orderBy: { examDate: "desc" },
// //           },
// //         },
// //         orderBy: { fullName: "asc" },
// //       });

// //       return { success: true, students };
// //     }

// //     // ============= DRIVING EXAM FILTER =============
// //     if (examType === "DRIVING") {
// //       const students = await prisma.studentApplication.findMany({
// //         where: {
// //           drivingExamResults: {
// //             some: {
// //               result: { in: failArray as any },
// //             },
// //           },
// //         },
// //         select: {
// //           id: true,
// //           fullName: true,
// //           nic: true,
// //           referenceNo: true,
// //           drivingExamResults: {
// //             where: { result: { in: failArray as any } },
// //             include: { vehicleClass: true },
// //             orderBy: { vehicleClassId: "asc" },
// //           },
// //         },
// //         orderBy: { fullName: "asc" },
// //       });

// //       return { success: true, students };
// //     }

// //     return { success: false, error: "Invalid examType" };
// //   } catch (err) {
// //     console.error("filterExamFailures ERROR:", err);
// //     return { success: false, error: "Server error" };
// //   }
// // }


// "use server";

// import prisma from "@/lib/db";

// export async function filterExamFailures({
//   examType,   // "WRITTEN" | "DRIVING"
//   failType,   // "FAIL" | "ABSENT" | "BOTH"
//   searchQuery = "",
// }: {
//   examType: "WRITTEN" | "DRIVING";
//   failType: "FAIL" | "ABSENT" | "BOTH";
//   searchQuery?: string;
// }) {
//   try {
//     const failArray =
//       failType === "BOTH" ? ["FAIL", "ABSENT"] : [failType];

//     // ⭐ SEARCH FILTER
//     const searchFilter =
//       searchQuery.trim().length >= 2
//         ? {
//             OR: [
//               {
//                 fullName: {
//                   contains: searchQuery,
//                   mode: "insensitive" as const,
//                 },
//               },
//               {
//                 nic: {
//                   contains: searchQuery,
//                   mode: "insensitive" as const,
//                 },
//               },
//               {
//                 referenceNo: {
//                   contains: searchQuery,
//                   mode: "insensitive" as const,
//                 },
//               },
//             ],
//           }
//         : {};

//     // ⭐ MAIN WHERE CLAUSE
//     let whereClause: any = { ...searchFilter };

//     if (examType === "WRITTEN") {
//       whereClause.writtenExams = {
//         some: { result: { in: failArray as any } },
//       };
//     } else {
//       whereClause.drivingExamResults = {
//         some: { result: { in: failArray as any } },
//       };
//     }

//     // ⭐ RUN QUERY
//     const students = await prisma.studentApplication.findMany({
//       where: whereClause,
//       select:
//         examType === "WRITTEN"
//           ? {
//               id: true,
//               fullName: true,
//               nic: true,
//               referenceNo: true,
//               writtenExams: {
//                 where: { result: { in: failArray as any } },
//                 orderBy: { examDate: "desc" },
//               },
//             }
//           : {
//               id: true,
//               fullName: true,
//               nic: true,
//               referenceNo: true,
//               drivingExamResults: {
//                 where: { result: { in: failArray as any } },
//                 include: { vehicleClass: true },
//                 orderBy: { vehicleClassId: "asc" },
//               },
//             },
//       orderBy: { fullName: "asc" },
//     });

//     return { success: true, students };
//   } catch (err) {
//     console.error("filterExamFailures ERROR:", err);
//     return { success: false, error: "Server error" };
//   }
// }


// "use server";

// import prisma from "@/lib/db";

// export async function filterExamFailures({
//   examType,
//   failType,
//   searchQuery = "",
// }: {
//   examType: "WRITTEN" | "DRIVING";
//   failType: "FAIL" | "ABSENT" | "BOTH";
//   searchQuery?: string;
// }) {
//   try {
//     const failArray = failType === "BOTH" ? ["FAIL", "ABSENT"] : [failType];

//     const searchFilter =
//       searchQuery.trim().length >= 2
//         ? {
//             OR: [
//               { fullName: { contains: searchQuery, mode: "insensitive" } },
//               { nic: { contains: searchQuery, mode: "insensitive" } },
//               { referenceNo: { contains: searchQuery, mode: "insensitive" } },
//             ],
//           }
//         : {};

//     let whereClause: any = { ...searchFilter };

//     if (examType === "WRITTEN") {
//       whereClause.writtenExams = {
//         some: { result: { in: failArray as any } },
//       };
//     } else {
//       whereClause.drivingExamResults = {
//         some: { result: { in: failArray as any } },
//       };
//     }

//     const students = await prisma.studentApplication.findMany({
//       where: whereClause,
//       select:
//         examType === "WRITTEN"
//           ? {
//               id: true,
//               fullName: true,
//               nic: true,
//               referenceNo: true,

//               vehicleClasses: { include: { vehicleClass: true } },

//               writtenExams: {
//                 where: { result: { in: failArray as any } },
//                 orderBy: { examDate: "desc" },
//               },

//               examAttempts: {
//                 include: { vehicleClass: true },
//                 orderBy: { attemptNo: "asc" },
//               },
//             }
//           : {
//               id: true,
//               fullName: true,
//               nic: true,
//               referenceNo: true,

//               vehicleClasses: { include: { vehicleClass: true } },

//               drivingExamResults: {
//                 where: { result: { in: failArray as any } },
//                 include: { vehicleClass: true },
//                 orderBy: { vehicleClassId: "asc" },
//               },

//               examAttempts: {
//                 include: { vehicleClass: true },
//                 orderBy: { attemptNo: "asc" },
//               },
//             },
//       orderBy: { fullName: "asc" },
//     });

//     return { success: true, students };
//   } catch (err) {
//     console.error("filterExamFailures ERROR:", err);
//     return { success: false, error: "Server error" };
//   }
// }


// "use server";

// import prisma from "@/lib/db";

// export async function filterExamFailures({
//   examType,
//   failType,
//   searchQuery = "",
// }: {
//   examType: "WRITTEN" | "DRIVING";
//   failType: "FAIL" | "ABSENT" | "BOTH";
//   searchQuery?: string;
// }) {
//   try {
//     const failArray =
//       failType === "BOTH" ? ["FAIL", "ABSENT"] : [failType];

//     const searchFilter =
//       searchQuery.trim().length >= 2
//         ? {
//             OR: [
//               { fullName: { contains: searchQuery, mode: "insensitive" } },
//               { nic: { contains: searchQuery, mode: "insensitive" } },
//               { referenceNo: { contains: searchQuery, mode: "insensitive" } },
//             ],
//           }
//         : {};

//     let whereClause: any = { ...searchFilter };

//     if (examType === "WRITTEN") {
//       whereClause.writtenExams = {
//         some: { result: { in: failArray as any } },
//       };
//     } else {
//       whereClause.drivingExamResults = {
//         some: { result: { in: failArray as any } },
//       };
//     }

//     const students = await prisma.studentApplication.findMany({
//       where: whereClause,
//       select: {
//         id: true,
//         fullName: true,
//         nic: true,
//         referenceNo: true,

//         vehicleClasses: { include: { vehicleClass: true } },

//         writtenExams:
//           examType === "WRITTEN"
//             ? {
//                 where: { result: { in: failArray as any } },
//                 orderBy: { examDate: "desc" },
//               }
//             : false,

//         drivingExamResults:
//           examType === "DRIVING"
//             ? {
//                 where: { result: { in: failArray as any } },
//                 include: { vehicleClass: true },
//                 orderBy: { vehicleClassId: "asc" },
//               }
//             : false,

//         examAttempts: {
//           include: { vehicleClass: true },
//           orderBy: { attemptNo: "asc" },
//         },
//       },
//       orderBy: { fullName: "asc" },
//     });

//     return { success: true, students };
//   } catch (err) {
//     console.error("filterExamFailures ERROR:", err);
//     return { success: false, error: "Server error" };
//   }
// }


"use server";

import prisma from "@/lib/db";

export async function filterExamFailures({
  examType,
  failType,
  searchQuery = "",
}: {
  examType: "WRITTEN" | "DRIVING";
  failType: "FAIL" | "ABSENT" | "BOTH";
  searchQuery?: string;
}) {
  try {
    const failArray = failType === "BOTH" ? ["FAIL", "ABSENT"] : [failType];

    const searchFilter =
      searchQuery.trim().length >= 2
        ? {
            OR: [
              { fullName: { contains: searchQuery, mode: "insensitive" } },
              { nic: { contains: searchQuery, mode: "insensitive" } },
              { referenceNo: { contains: searchQuery, mode: "insensitive" } },
            ],
          }
        : {};

    let whereClause: any = { ...searchFilter };

    if (examType === "WRITTEN") {
      whereClause.writtenExams = {
        some: { result: { in: failArray as any } },
      };
    } else {
      whereClause.drivingExamResults = {
        some: { result: { in: failArray as any } },
      };
    }

    const students = await prisma.studentApplication.findMany({
      where: whereClause,
      select: {
        id: true,
        fullName: true,
        nic: true,
        referenceNo: true,

        writtenExams:
          examType === "WRITTEN"
            ? {
                where: { result: { in: failArray as any } },
                orderBy: { examDate: "desc" },
              }
            : false,

        drivingExamResults:
          examType === "DRIVING"
            ? {
                where: { result: { in: failArray as any } },
                include: { vehicleClass: true },
                orderBy: { vehicleClassId: "asc" },
              }
            : false,

        // includes result automatically
        examAttempts: {
          include: { vehicleClass: true },
          orderBy: [{ examType: "asc" }, { attemptNo: "asc" }],
        },
      },
      orderBy: { fullName: "asc" },
    });

    return { success: true, students };
  } catch (err) {
    console.error("filterExamFailures ERROR:", err);
    return { success: false, error: "Server error" };
  }
}
