"use client";

import { useState } from "react";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);

  async function submit(
    e: React.FormEvent
  ) {
    e.preventDefault();

    setLoading(true);

    await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify({
        company: "Example",
      }),
    });

    setLoading(false);
  }

  return (
    <form
      onSubmit={submit}
      className="space-y-4"
    >
      <input
        placeholder="Company"
        className="w-full p-4 rounded-xl bg-bg-card"
      />

      <button
        className="btn-primary"
      >
        {loading ? "Sending..." : "Submit"}
      </button>
    </form>
  );
}