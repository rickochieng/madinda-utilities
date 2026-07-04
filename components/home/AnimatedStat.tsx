"use client";

import CountUp from "react-countup";

interface Props {
  end: number;
  suffix?: string;
  title: string;
  color: string;
  decimals?: number;
}

export default function AnimatedStat({
  end,
  suffix = "",
  title,
  color,
  decimals = 0,
}: Props) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <h2 className={`text-4xl font-black ${color}`}>
        <CountUp
          end={end}
          decimals={decimals}
          duration={2.8}
          separator=","
        />
        {suffix}
      </h2>

      <p className="mt-2 text-slate-600 font-medium">
        {title}
      </p>
    </div>
  );
}