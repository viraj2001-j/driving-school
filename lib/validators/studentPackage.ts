import { z } from "zod";

/**
 * Assign package to student validation
 */
export const assignPackageSchema = z.object({
  packageId: z.string().min(1, "packageId is required"),
  note: z.string().trim().min(2, "Note too short").optional(),
});

export type AssignPackageInput = z.infer<typeof assignPackageSchema>;
