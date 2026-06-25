"use client";

import { useEffect, useState } from "react";

export function useKPIs() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    async function fetchKPIs() {
      const res = await fetch("/api/kpis");
      const json = await res.json();
      setData(json);
    }

    fetchKPIs();

    const interval = setInterval(fetchKPIs, 5000);

    return () => clearInterval(interval);
  }, []);

  return data;
}