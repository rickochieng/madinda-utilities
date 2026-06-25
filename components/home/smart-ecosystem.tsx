"use client";

import { motion } from "framer-motion";

const ecosystem = [
  "Smart Water Meter",
  "Smart Electricity Meter",
  "Secure Cloud",
  "AI Analytics",
  "Operator Dashboard",
  "Consumer App",
];

export default function SmartEcosystem() {
  return (
    <div className="space-y-4">

      {ecosystem.map((item, index) => (
        <motion.div
          key={item}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            delay: index * 0.2,
          }}
          className="card p-5"
        >
          {item}
        </motion.div>
      ))}

    </div>
  );
}