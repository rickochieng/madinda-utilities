import { NextResponse } from "next/server";
import { generateKPIs } from "@/lib/kpi-engine";

export async function GET() {
  return NextResponse.json(generateKPIs());
}