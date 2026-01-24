"use client";

import { cn } from "@/lib/utils";
import { AlertTriangle } from "lucide-react";

export default function Alert11({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex items-center gap-3 rounded-md border border-red-300 bg-red-50 px-3 py-2 text-sm text-red-700",
        className
      )}
    >
      <AlertTriangle className="h-4 w-4 text-red-500" />
      <span>{children}</span>
    </div>
  );
}
