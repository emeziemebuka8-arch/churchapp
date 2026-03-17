"use client";

import React, { useState, useEffect } from "react";

interface TimeLeft {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
}

interface CountdownTimerProps {
  targetDate: string;
}

export function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const target = new Date(targetDate).getTime();
      const now = new Date().getTime();
      const distance = target - now;

      if (distance < 0) {
        clearInterval(timer);
        setTimeLeft({ days: "00", hours: "00", minutes: "00", seconds: "00" });
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({
        days: days.toString().padStart(2, "0"),
        hours: hours.toString().padStart(2, "0"),
        minutes: minutes.toString().padStart(2, "0"),
        seconds: seconds.toString().padStart(2, "0"),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const items = [
    { number: timeLeft.days, label: "Days" },
    { number: timeLeft.hours, label: "Hours" },
    { number: timeLeft.minutes, label: "Minutes" },
    { number: timeLeft.seconds, label: "Seconds" },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4 md:gap-6">
      {items.map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl shadow-xl shadow-black/5 flex flex-col items-center justify-center w-[120px] h-[120px] md:w-[140px] md:h-[130px] border border-white/40 backdrop-blur-md transition-all hover:scale-105"
        >
          <span className="text-4xl md:text-5xl font-extrabold text-blue-600 mb-2 font-mono tracking-tighter">
            {item.number}
          </span>
          <span className="text-xs md:text-sm font-bold text-slate-400 tracking-widest uppercase">
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
}
