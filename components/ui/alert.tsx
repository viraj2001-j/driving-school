"use client";

import Alert11 from "@/components/ss/alert-11";
import Alert12 from "@/components/ss/alert-12";

export function Alert({
  message,
  variant = "11",
  className,
}: {
  message: string;
  variant?: "11" | "12";
  className?: string;
}) {
  if (variant === "12") return <Alert12 className={className}>{message}</Alert12>;
  return <Alert11 className={className}>{message}</Alert11>;
}
