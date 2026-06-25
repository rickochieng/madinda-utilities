"use client";

import { useEffect, useState } from "react";

export default function MeterTable() {

  const [meters, setMeters] = useState<any[]>([]);

  useEffect(() => {

    fetch("/api/meters")
      .then((r) => r.json())
      .then(setMeters);

  }, []);

  return (
    <div className="card overflow-hidden">

      <table className="w-full">

        <thead>
          <tr>
            <th>Serial</th>
            <th>Type</th>
            <th>Status</th>
            <th>Location</th>
          </tr>
        </thead>

        <tbody>

          {meters.map((meter) => (
            <tr key={meter.id}>
              <td>{meter.serialNumber}</td>
              <td>{meter.type}</td>
              <td>{meter.status}</td>
              <td>{meter.location}</td>
            </tr>
          ))}

        </tbody>

      </table>

    </div>
  );
}