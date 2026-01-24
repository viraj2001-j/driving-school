import { z } from "zod";

/**
 * Package validation schema
 */
export const packageCreateSchema = z.object({
  name: z.string().trim().min(3, "Package name must be at least 3 characters."),
  description: z.string().trim().min(3, "Description too short.").optional(),
  totalFee: z.coerce.number().int().min(0, "Total fee must be >= 0."),
  lessonCount: z.coerce.number().int().min(0, "Lesson count must be >= 0.").optional(),
});

export type PackageCreateInput = z.infer<typeof packageCreateSchema>;
