"use client";

import { useEffect, useState } from "react";

type AnimatedNumberProps = {
  value: number;
  duration?: number; // ms
  isMoney?: boolean;
};

export default function AnimatedNumber({
  value,
  duration = 800,
  isMoney = false,
}: AnimatedNumberProps) {
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    let frame: number;
    const start = performance.now();
    const initial = display;
    const delta = value - initial;

    if (delta === 0) return;

    const animate = (time: number) => {
      const progress = Math.min((time - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
      const current = initial + delta * eased;
      setDisplay(current);

      if (progress < 1) {
        frame = requestAnimationFrame(animate);
      }
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, duration]);

  const rounded = Math.round(display);

  const shown = isMoney
    ? `Rs. ${rounded.toLocaleString()}`
    : rounded.toLocaleString();

  return <span>{shown}</span>;
}