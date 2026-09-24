import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

const SOLUTIONS = [
  {
    id: "sol-1",
    title: "NeuroMesh Edge AI",
    slug: "neuromesh-edge-ai",
    summary: "Distributed low-power inference engine optimizing real-time computer vision on edge devices.",
    description: "Built for industrial automation environments requiring microsecond latency and offline operation.",
    category: "AI & Cognitive",
    status: "Pilot Ready",
    trlLevel: 7,
    tags: ["Edge AI", "Computer Vision", "TensorFlow Lite"],
    creatorName: "Dr. Elena Vance",
    organization: "Cognitive Systems Lab",
    createdAt: "2026-08-15",
  },
  {
    id: "sol-2",
    title: "AquaPure HydroHarvest",
    slug: "aquapure-hydroharvest",
    summary: "Zero-emission atmospheric moisture capture leveraging advanced metal-organic frameworks (MOFs).",
    description: "Provides scalable decentralized potable water generation for off-grid communities and arid industrial hubs.",
    category: "CleanTech & Energy",
    status: "Active",
    trlLevel: 6,
    tags: ["MOF", "Clean Water", "Solar Powered"],
    creatorName: "Marcus Sterling",
    organization: "CleanTech Nexus",
    createdAt: "2026-09-02",
  },
  {
    id: "sol-3",
    title: "SovereignLedger Identity",
    slug: "sovereignledger-identity",
    summary: "Decentralized verifiable credential management compliant with W3C DID & eIDAS 2.0 standards.",
    description: "Enables instant multi-partner KYC, zero-knowledge attribute verification, and cross-border digital passports.",
    category: "Smart Cities",
    status: "Commercialized",
    trlLevel: 8,
    tags: ["ZKP", "DID", "Enterprise Security"],
    creatorName: "Kavita Rao",
    organization: "GovTech Foundry",
    createdAt: "2026-07-20",
  },
  {
    id: "sol-4",
    title: "HoloTwin Factory Orchestrator",
    slug: "holotwin-factory",
    summary: "Interactive digital twin environment synchronizing SCADA telemetry with real-time holographic rendering.",
    description: "Predictive maintenance platform reducing unplanned manufacturing downtime by up to 38%.",
    category: "Industry 4.0",
    status: "Active",
    trlLevel: 7,
    tags: ["Digital Twin", "SCADA", "IoT Sensors"],
    creatorName: "Lars Lindqvist",
    organization: "Robotics Institute",
    createdAt: "2026-09-12",
  },
];

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const search = searchParams.get("search")?.toLowerCase();
  const category = searchParams.get("category");

  let result = [...SOLUTIONS];
  if (category && category !== "ALL") {
    result = result.filter(s => s.category.toLowerCase() === category.toLowerCase());
  }
  if (search) {
    result = result.filter(s => 
      s.title.toLowerCase().includes(search) ||
      s.summary.toLowerCase().includes(search) ||
      s.tags.some(t => t.toLowerCase().includes(search))
    );
  }

  return NextResponse.json(result);
}
