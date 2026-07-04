"use client";

import { motion } from "framer-motion";

interface KPICardProps {
  title: string;
  value: string;
  color: string;
}

export default function KPICard({
  title,
  value,
  color,
}: KPICardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.04 }}
      className="rounded-2xl border border-white/10 bg-slate-900/70 backdrop-blur-xl p-5 shadow-2xl"
    >
      <p
        className="text-sm mb-2"
        style={{ color }}
      >
        {title}
      </p>

      <h2 className="text-3xl font-bold text-slate-900">
        {value}
      </h2>
    </motion.div>
  );
}