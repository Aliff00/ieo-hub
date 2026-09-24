"use client";

import Link from "next/link";
import { Users, CalendarCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FacilitySpaceItem } from "@/types/facility";

const SPACES: FacilitySpaceItem[] = [
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

export default function FacilitiesPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-border/60">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-foreground">Physical-to-Digital Hub Facilities</h1>
          <p className="text-xs text-muted-foreground mt-0.5">
            On-demand reservation of specialized fabrication labs, collaboration arenas, and digital testbeds.
          </p>
        </div>
        <Link href="/facilities/booking">
          <Button variant="gradient" size="sm">
            <CalendarCheck className="h-4 w-4 mr-1.5" /> Book a Space
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {SPACES.map((space) => (
          <Card key={space.id} className="bg-card/70 flex flex-col justify-between">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <Badge variant="outline" className="text-[10px]">
                  {space.category}
                </Badge>
                <Badge variant={space.available ? "success" : "secondary"}>
                  {space.available ? "Available Now" : "Currently Reserved"}
                </Badge>
              </div>
              <CardTitle className="text-lg font-bold text-foreground mt-2">{space.name}</CardTitle>
              <CardDescription className="text-xs text-muted-foreground leading-relaxed">
                {space.description}
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-2 text-xs">
              <div className="flex items-center text-muted-foreground space-x-2">
                <Users className="h-4 w-4 text-primary" />
                <span>Max Capacity: <strong className="text-foreground">{space.capacity} innovators</strong></span>
              </div>
              <div className="pt-2">
                <span className="text-[11px] font-semibold text-muted-foreground block mb-1">Standard Equipment:</span>
                <div className="flex flex-wrap gap-1.5">
                  {space.equipment.map((eq) => (
                    <span key={eq} className="text-[10px] bg-secondary/80 text-foreground px-2 py-0.5 rounded border border-border/50">
                      {eq}
                    </span>
                  ))}
                </div>
              </div>
            </CardContent>

            <CardFooter className="pt-2 border-t border-border/40">
              <Link href="/facilities/booking" className="w-full">
                <Button variant={space.available ? "outline" : "ghost"} size="sm" className="w-full text-xs font-semibold" disabled={!space.available}>
                  {space.available ? "Proceed to Space Reservation" : "Join Waitlist"}
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
