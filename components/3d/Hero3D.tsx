"use client";

import dynamic from "next/dynamic";

const InfrastructureScene = dynamic(
  () => import("./InfrastructureScene"),
  {
    ssr: false,
  }
);

export default function Hero3D() {
  return (
    <div className="
h-[650px]
rounded-3xl
overflow-hidden
border border-white/10
bg-black/20
backdrop-blur-xl
shadow-glow">
      <InfrastructureScene />
    </div>
  );
}