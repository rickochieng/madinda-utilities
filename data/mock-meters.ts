import { Meter } from "@/types/utility";

export const meters: Meter[] = [
  {
    id: "MTR001",
    serialNumber: "WM-10001",
    type: "water",
    status: "online",
    location: "Pretoria East",
    consumption: 135,
    lastReading: new Date().toISOString(),
  },
  {
    id: "MTR002",
    serialNumber: "EM-20001",
    type: "electricity",
    status: "online",
    location: "Hatfield",
    consumption: 420,
    lastReading: new Date().toISOString(),
  },
];