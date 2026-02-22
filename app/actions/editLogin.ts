// "use server";

// import prisma from "@/lib/db";
// import { revalidatePath } from "next/cache";

// type RoleType = "SUPERADMIN" | "ADMIN" | "RECEPTION" | "INSTRUCTOR";// adjust to match your enum

// export async function getUsers() {
//   const users = await prisma.user.findMany({
//     orderBy: { createdAt: "desc" },
//   });

//   // Make sure dates are serializable
//   return users.map((u) => ({
//     id: u.id,
//     name: u.name,
//     username: u.username,
//      role: u.role as RoleType,
//     createdAt: u.createdAt.toISOString(),
//     updatedAt: u.updatedAt.toISOString(),
//   }));
// }

// export async function createUser(data: {
//   name: string;
//   username: string;
//   password: string;
//   role: RoleType;
// }) {
//   if (!data.name || !data.username || !data.password) {
//     return { success: false, message: "Name, username, and password are required." };
//   }

//   try {
//     // TODO: hash password in real app
//     await prisma.user.create({
//       data: {
//         name: data.name,
//         username: data.username,
//         password: data.password,
//         role: data.role,
//       },
//     });

//     revalidatePath("/users");
//     return { success: true };
//   } catch (err: any) {
//     console.error(err);
//     return {
//       success: false,
//       message: err.code === "P2002"
//         ? "Username already exists."
//         : "Failed to create user.",
//     };
//   }
// }

// export async function updateUser(id: string, data: {
//   name: string;
//   username: string;
//   password?: string; // optional on update
//   role: RoleType;
// }) {
//   if (!id) {
//     return { success: false, message: "User ID is required." };
//   }

//   try {
//     const updateData: any = {
//       name: data.name,
//       username: data.username,
//       role: data.role,
//     };

//     // Only update password if provided
//     if (data.password && data.password.trim() !== "") {
//       updateData.password = data.password;
//     }

//     await prisma.user.update({
//       where: { id },
//       data: updateData,
//     });

//     revalidatePath("/users");
//     return { success: true };
//   } catch (err: any) {
//     console.error(err);
//     return {
//       success: false,
//       message: err.code === "P2002"
//         ? "Username already exists."
//         : "Failed to update user.",
//     };
//   }
// }

// export async function deleteUser(id: string) {
//   if (!id) {
//     return { success: false, message: "User ID is required." };
//   }

//   try {
//     await prisma.user.delete({
//       where: { id },
//     });

//     revalidatePath("/users");
//     return { success: true };
//   } catch (err) {
//     console.error(err);
//     return { success: false, message: "Failed to delete user." };
//   }
// }


"use server";

import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";
import bcrypt from "bcryptjs";

export type RoleType =
  | "SUPERADMIN"
  | "ADMIN"
  | "RECEPTION"
  | "INSTRUCTOR"; // adjust if you have more

export type UserDTO = {
  id: string;
  name: string;
  username: string;
  role: RoleType;
  createdAt: string;
  updatedAt: string;
};

export async function getUsers(): Promise<UserDTO[]> {
  const users = await prisma.user.findMany({
    orderBy: { createdAt: "desc" },
    // NOTE: we do NOT select password here on purpose
  });

  return users.map((u) => ({
    id: u.id,
    name: u.name,
    username: u.username,
    role: u.role as RoleType,
    createdAt: u.createdAt.toISOString(),
    updatedAt: u.updatedAt.toISOString(),
  }));
}

export async function createUser(data: {
  name: string;
  username: string;
  password: string;
  role: RoleType;
}) {
  if (!data.name || !data.username || !data.password) {
    return { success: false, message: "Name, username, and password are required." };
  }

  try {
    // 🔐 HASH password here
    const hashedPassword = await bcrypt.hash(data.password, 10);

    await prisma.user.create({
      data: {
        name: data.name,
        username: data.username,
        password: hashedPassword,
        role: data.role,
      },
    });

    revalidatePath("/users");
    return { success: true };
  } catch (err: any) {
    console.error(err);
    return {
      success: false,
      message:
        err.code === "P2002"
          ? "Username already exists."
          : "Failed to create user.",
    };
  }
}

export async function updateUser(
  id: string,
  data: {
    name: string;
    username: string;
    password?: string; // optional on update
    role: RoleType;
  }
) {
  if (!id) {
    return { success: false, message: "User ID is required." };
  }

  try {
    const updateData: any = {
      name: data.name,
      username: data.username,
      role: data.role,
    };

    // 🔐 Only hash and update password if user typed a new one
    if (data.password && data.password.trim() !== "") {
      const hashedPassword = await bcrypt.hash(data.password, 10);
      updateData.password = hashedPassword;
    }

    await prisma.user.update({
      where: { id },
      data: updateData,
    });

    revalidatePath("/users");
    return { success: true };
  } catch (err: any) {
    console.error(err);
    return {
      success: false,
      message:
        err.code === "P2002"
          ? "Username already exists."
          : "Failed to update user.",
    };
  }
}

export async function deleteUser(id: string) {
  if (!id) {
    return { success: false, message: "User ID is required." };
  }

  try {
    await prisma.user.delete({
      where: { id },
    });

    revalidatePath("/users");
    return { success: true };
  } catch (err) {
    console.error(err);
    return { success: false, message: "Failed to delete user." };
  }
}