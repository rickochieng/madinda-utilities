import { Alert } from "@/types/utility";

export const alerts: Alert[] = [
  {
    id: "ALT001",
    type: "leak",
    severity: "high",
    location: "Zone A12",
    timestamp: new Date().toISOString(),
    message: "Potential water leak detected.",
  },
  {
    id: "ALT002",
    type: "tamper",
    severity: "medium",
    location: "Meter EM-20001",
    timestamp: new Date().toISOString(),
    message: "Possible meter tampering detected.",
  },
];