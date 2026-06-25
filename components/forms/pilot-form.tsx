"use client";

import { useState } from "react";

export default function PilotForm() {
  const [form, setForm] = useState({
    organization: "",
    email: "",
    phone: "",
    industry: "",
    meters: "",
    description: "",
  });

  return (
    <form className="card p-6 space-y-4">
      <h2 className="text-xl font-semibold">
        Pilot Project Application
      </h2>

      <input
        className="w-full p-3 bg-bg-secondary rounded-lg"
        placeholder="Organization"
      />

      <input
        className="w-full p-3 bg-bg-secondary rounded-lg"
        placeholder="Email"
      />

      <input
        className="w-full p-3 bg-bg-secondary rounded-lg"
        placeholder="Phone"
      />

      <textarea
        className="w-full p-3 bg-bg-secondary rounded-lg"
        placeholder="Project Description"
      />

      <button className="btn-primary w-full">
        Submit Application
      </button>
    </form>
  );
}