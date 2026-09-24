import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

const SPACES = [
  {
    id: "space-1",
    name: "Rapid Prototyping MakerLab #1",
    category: "MakerLab & Prototyping",
    capacity: 18,
    description: "Equipped with 5-axis CNC routers, industrial SLA 3D printing stations, and calibrated soldering benches.",
    equipment: ["Formlabs 4L", "Haas Mini Mill", "Tektronix Oscilloscopes"],
    available: true,
  },
  {
    id: "space-2",
    name: "Immersive Holographic & XR Studio",
    category: "Immersive AR/VR Studio",
    capacity: 12,
    description: "Spatial audio isolation chamber with optical motion capture ceiling rigs for mixed reality co-creation.",
    equipment: ["Vicon Motion Capture", "Apple Vision Pro Dev Kits", "Varjo XR-4"],
    available: true,
  },
  {
    id: "space-3",
    name: "Executive Alliance Arena",
    category: "Collaboration Arena",
    capacity: 50,
    description: "Tiered auditorium configured for enterprise partner pitches, commercialization showcases, and hybrid summits.",
    equipment: ["8K Video Wall", "Automated Beamforming Mics", "Simultaneous Interpretation"],
    available: false,
  },
  {
    id: "space-4",
    name: "Cleanroom Microfluidics Cell",
    category: "MakerLab & Prototyping",
    capacity: 6,
    description: "ISO Class 6 cleanroom environment for bio-sensing prototyping and nano-scale material validation.",
    equipment: ["Laminar Flow Hood", "Spin Coater", "Plasma Cleaner"],
    available: true,
  },
];

export async function GET() {
  return NextResponse.json(SPACES);
}
