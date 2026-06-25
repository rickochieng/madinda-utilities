"use client";

import { motion } from "framer-motion";

const nodes = [
  { id: 1, name: "Water Meters" },
  { id: 2, name: "Electric Meters" },
  { id: 3, name: "AMI Gateway" },
  { id: 4, name: "Cloud Platform" },
  { id: 5, name: "AI Analytics" },
  { id: 6, name: "Operator Dashboard" },
];

export default function UtilityNetwork() {
  return (
    <section className="section network-bg">

      <h2 className="text-4xl font-bold mb-10">
        Connected Utility Ecosystem
      </h2>

      <div className="grid md:grid-cols-3 gap-6">

        {nodes.map((node) => (
          <motion.div
            key={node.id}
            whileHover={{ scale: 1.05 }}
            className="card p-6 text-center"
          >
            {node.name}
          </motion.div>
        ))}

      </div>

    </section>
  );
}