export interface Meter {
  id: string;
  serialNumber: string;
  type: "water" | "electricity";
  status: "online" | "offline" | "warning";
  location: string;
  consumption: number;
  lastReading: string;
}

export interface Alert {
  id: string;
  type: "leak" | "tamper" | "grid";
  severity: "low" | "medium" | "high";
  location: string;
  timestamp: string;
  message: string;
}

export interface KPI {
  activeMeters: number;
  waterMeters: number;
  electricityMeters: number;
  revenueProtected: number;
  leakEvents: number;
  tamperEvents: number;
  gridHealth: number;
}