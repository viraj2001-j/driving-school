import { z } from "zod";

/**
 * Payment creation validation
 * - amount must be >= 1
 * - method must be valid enum
 */
export const paymentCreateSchema = z.object({
  amount: z.coerce.number().int().min(1, "Amount must be at least 1."),
  method: z.enum(["CASH", "BANK", "CARD", "ONLINE"]),
  paidAt: z.string().optional(), // optional date string (if you want custom date later)
  note: z.string().trim().min(2, "Note too short").optional(),
});

export type PaymentCreateInput = z.infer<typeof paymentCreateSchema>;
