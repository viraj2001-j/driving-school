"use client";

import { useEffect, useState } from "react";

function formatDateTime(date: Date) {
  const formattedDate = date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  const formattedTime = date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  return {
    date: formattedDate,
    time: formattedTime.toLowerCase(),
  };
}

export default function LiveClock() {
  const [mounted, setMounted] = useState(false);
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setMounted(true);

    const update = () => setNow(new Date());

    update();
    const interval = setInterval(update, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!mounted || !now) {
    return (
      <div className="px-4 py-2 rounded-xl border border-slate-700/50 bg-slate-800/60 backdrop-blur-sm">
        <div className="flex flex-col">
          <span className="text-xs text-slate-400 tracking-wide">
            -- --- ----
          </span>
          <span className="text-sm font-bold text-white tracking-wide">
            --:--:--
          </span>
        </div>
      </div>
    );
  }

  const { date, time } = formatDateTime(now);

  return (
    <div className="px-4 py-2 rounded-xl border border-slate-700/50 bg-slate-800/60 backdrop-blur-sm">
      <div className="flex flex-col">
        <span className="text-xs text-slate-400 tracking-wide">{date}</span>
        <span className="text-sm font-bold text-white tracking-wide">
          {time}
        </span>
      </div>
    </div>
  );
}