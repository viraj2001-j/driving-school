"use client";

import { cn } from "@/lib/utils";
import { AlertCircle } from "lucide-react";

export default function Alert12({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex items-start gap-3 rounded-lg border border-red-500 bg-red-600/10 p-3 text-sm text-red-800 shadow-sm",
        className
      )}
    >
      <AlertCircle className="h-5 w-5 text-red-600" />
      <span>{children}</span>
    </div>
  );
}
