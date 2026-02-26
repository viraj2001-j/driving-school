// // app/lib/birthdays.ts
// import  prisma from "@/lib/db";
// import { sendBirthdayWish } from "./sendBirthdayWish";

// export async function processBirthdayWishes() {
//   const now = new Date();

//   // Convert to Sri Lanka time (Asia/Colombo)
//   const colomboNow = new Date(
//     now.toLocaleString("en-US", { timeZone: "Asia/Colombo" })
//   );

//   const month = colomboNow.getMonth() + 1; // 1-12
//   const day = colomboNow.getDate();        // 1-31
//   const year = colomboNow.getFullYear();

//   // 1️⃣ Get students whose birthday is today
//   const birthdayStudents = await prisma.$queryRaw<
//     { id: string; fullName: string; email: string | null }[]
//   >`
//     SELECT "id", "fullName", "email"
//     FROM "StudentApplication"
//     WHERE EXTRACT(MONTH FROM "dob") = ${month}
//       AND EXTRACT(DAY FROM "dob") = ${day}
//   `;

//   if (!birthdayStudents.length) {
//     console.log("No birthdays today 🎈");
//     return;
//   }

//   for (const student of birthdayStudents) {
//     // 2️⃣ Check if already sent this year
//     const alreadySent = await prisma.birthdayWishLog.findFirst({
//       where: {
//         applicationId: student.id,
//         year,
//       },
//     });

//     if (alreadySent) continue;

//     // 3️⃣ Send the wish
//     try {
//       await sendBirthdayWish(student);

//       // 4️⃣ Log it
//       await prisma.birthdayWishLog.create({
//         data: {
//           applicationId: student.id,
//           year,
//         },
//       });

//       console.log(
//         `✅ Birthday wish sent to ${student.fullName} for year ${year}`
//       );
//     } catch (error) {
//       console.error(
//         `❌ Failed to send birthday wish to ${student.fullName} (${student.id})`,
//         error
//       );
//     }
//   }
// }



// app/lib/birthdays.ts
import  prisma  from "@/lib/db";
import { sendBirthdayWish } from "./sendBirthdayWish";

export async function processBirthdayWishes() {
  console.log("🚀 processBirthdayWishes started");

  const now = new Date();

  const colomboNow = new Date(
    now.toLocaleString("en-US", { timeZone: "Asia/Colombo" })
  );

  const month = colomboNow.getMonth() + 1;
  const day = colomboNow.getDate();
  const year = colomboNow.getFullYear();

  console.log(
    `📅 Colombo date: ${colomboNow.toISOString()} (month=${month}, day=${day}, year=${year})`
  );

  const birthdayStudents = await prisma.$queryRaw<
    { id: string; fullName: string; email: string | null }[]
  >`
    SELECT "id", "fullName", "email"
    FROM "StudentApplication"
    WHERE EXTRACT(MONTH FROM "dob") = ${month}
      AND EXTRACT(DAY FROM "dob") = ${day}
  `;

  console.log(`🎂 Found ${birthdayStudents.length} birthday students`);

  if (!birthdayStudents.length) {
    console.log("No birthdays today 🎈");
    return;
  }

  for (const student of birthdayStudents) {
    console.log(`➡️ Processing ${student.fullName} (${student.id})`);

    const alreadySent = await prisma.birthdayWishLog.findFirst({
      where: {
        applicationId: student.id,
        year,
      },
    });

    if (alreadySent) {
      console.log(`⏭️ Already sent this year to ${student.fullName}`);
      continue;
    }

    try {
      await sendBirthdayWish(student);

      await prisma.birthdayWishLog.create({
        data: {
          applicationId: student.id,
          year,
        },
      });

      console.log(
        `✅ Birthday wish logged for ${student.fullName} (${student.id})`
      );
    } catch (error) {
      console.error(
        `❌ Failed to send birthday wish to ${student.fullName} (${student.id})`,
        error
      );
    }
  }
}