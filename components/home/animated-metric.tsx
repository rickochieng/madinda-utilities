"use client";

import CountUp from "react-countup";

type Props = {
  end: number;
  suffix?: string;
};

export default function AnimatedMetric({
  end,
  suffix,
}: Props) {
  return (
    <CountUp
      end={end}
      duration={3}
      suffix={suffix}
    />
  );
}