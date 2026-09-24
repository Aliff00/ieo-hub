import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  return NextResponse.json({
    commercializedRevenue: 28400000,
    activePatents: 64,
    ecosystemPartners: 128,
    activePilots: 37,
    generatedValueYoy: "+31.2%",
  });
}
