"use client";

import { useEffect, useState } from "react";

export default function LiveClock() {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const date = now.toLocaleDateString("en-GB", {
    weekday: "short",
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  const time = now.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  return (
    <div className="px-4 py-2 rounded-xl bg-white/80  border-slate-300  shadow-sm flex flex-col items-center">
      <span className="text-xs font-medium text-slate-600">
        {date}
      </span>
      <span className="text-sm font-bold text-slate-900  tracking-wide">
        {time}
      </span>
    </div>
  );
}