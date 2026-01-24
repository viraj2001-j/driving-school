import { z } from "zod";

/**
 * Student create validation schema.
 * We validate on the server (important) and can also reuse on client if needed.
 */
export const studentCreateSchema = z.object({
  // refNo optional because server will generate it if user doesn't provide
  refNo: z.string().trim().min(3, "Ref No must be at least 3 characters.").optional(),

  fullName: z.string().trim().min(3, "Full name must be at least 3 characters."),

  // Sri Lanka phone numbers often 10 digits like 07XXXXXXXX
  phone: z
    .string()
    .trim()
    .regex(/^0\d{9}$/, "Phone must be 10 digits and start with 0 (e.g., 0771234567)."),

  // NIC can be old or new format (we keep it loose to avoid blocking real users)
  nic: z.string().trim().min(8, "NIC looks too short.").max(20, "NIC looks too long.").optional(),

  address: z.string().trim().min(3, "Address must be at least 3 characters.").optional(),
});



export type StudentCreateInput = z.infer<typeof studentCreateSchema>;
