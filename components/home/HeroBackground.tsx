"use client";

import { motion } from "framer-motion";

const circles = [
  { size: 28, left: 8, top: 15, duration: 5 },
  { size: 42, left: 20, top: 65, duration: 6 },
  { size: 36, left: 35, top: 30, duration: 7 },
  { size: 55, left: 52, top: 12, duration: 8 },
  { size: 30, left: 70, top: 40, duration: 6 },
  { size: 48, left: 82, top: 22, duration: 9 },
  { size: 40, left: 12, top: 82, duration: 7 },
  { size: 60, left: 28, top: 88, duration: 8 },
  { size: 38, left: 48, top: 72, duration: 5 },
  { size: 52, left: 66, top: 84, duration: 9 },
  { size: 34, left: 84, top: 62, duration: 6 },
  { size: 46, left: 92, top: 90, duration: 7 },
];

export default function HeroBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">

      {/* Blue Glow */}
      <motion.div
        className="absolute -top-40 -left-40 h-[650px] w-[650px] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(37,99,235,.14), rgba(59,130,246,.05), transparent 70%)",
        }}
        animate={{
          x: [0, 40, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Cyan Glow */}
      <motion.div
        className="absolute bottom-[-250px] right-[-250px] h-[700px] w-[700px] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(6,182,212,.10), rgba(6,182,212,.03), transparent 70%)",
        }}
        animate={{
          x: [0, -50, 0],
          y: [0, -40, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Enterprise Grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(15,23,42,.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(15,23,42,.03) 1px, transparent 1px)
          `,
          backgroundSize: "70px 70px",
        }}
      />

      {/* Floating Circles */}
      {circles.map((circle, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-blue-500/5"
          style={{
            width: `${circle.size}px`,
            height: `${circle.size}px`,
            left: `${circle.left}%`,
            top: `${circle.top}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: circle.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}