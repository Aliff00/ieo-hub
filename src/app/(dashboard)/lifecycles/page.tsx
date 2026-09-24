"use client";

import Link from "next/link";
import { Plus, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ProgramItem } from "@/types/lifecycle";

const PROGRAMS: ProgramItem[] = [
  {
    id: "prog-1",
    name: "CleanTech Grid Resilience Acceleration",
    code: "CGR-2026",
    description: "Co-creation initiative dedicated to developing high-density microgrid load-balancing hardware.",
    stage: "ACCELERATION",
    progressPercentage: 75,
    budgetAllocated: "$1.8M",
    sponsor: "National Energy Council",
    targetDate: "Nov 2026",
    activeInnovators: 14,
  },
  {
    id: "prog-2",
    name: "Autonomous Logistics Mesh (Sub-surface)",
    code: "ALM-401",
    description: "Unifying multi-agent robotic fleets for automated deep-sea and sub-surface mineral exploration.",
    stage: "INCUBATION",
    progressPercentage: 45,
    budgetAllocated: "$2.4M",
    sponsor: "Global Port Alliance",
    targetDate: "Feb 2027",
    activeInnovators: 22,
  },
  {
    id: "prog-3",
    name: "Quantum Cryptographic Shielding for e-Health",
    code: "QCS-99",
    description: "Post-quantum secure key encapsulation mechanisms for biometric healthcare registries.",
    stage: "VALIDATION",
    progressPercentage: 30,
    budgetAllocated: "$950K",
    sponsor: "BioHealth Consortium",
    targetDate: "May 2027",
    activeInnovators: 9,
  },
];

export default function LifecyclesPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-border/60">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-foreground">Innovation Programs & Lifecycles</h1>
          <p className="text-xs text-muted-foreground mt-0.5">
            Stage-gate governance tracking projects through Ideation, Validation, Incubation, Acceleration, and Scale.
          </p>
        </div>
        <Link href="/lifecycles/prog-1">
          <Button variant="gradient" size="sm">
            <Plus className="h-4 w-4 mr-1.5" /> Launch New Program
          </Button>
        </Link>
      </div>

      <div className="space-y-4">
        {PROGRAMS.map((prog) => (
          <Card key={prog.id} className="bg-card/70 hover:border-primary/50 transition-all p-5">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
              <div className="space-y-1.5 flex-1">
                <div className="flex items-center space-x-2">
                  <span className="font-mono text-[10px] text-muted-foreground bg-secondary px-2 py-0.5 rounded">
                    {prog.code}
                  </span>
                  <Badge variant={prog.stage === "ACCELERATION" ? "success" : "info"}>
                    {prog.stage} STAGE
                  </Badge>
                </div>
                <h3 className="text-base font-bold text-foreground">{prog.name}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{prog.description}</p>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-6 lg:min-w-[340px] pt-3 lg:pt-0 border-t lg:border-t-0 border-border/40">
                <div className="flex-1 space-y-1">
                  <div className="flex justify-between text-xs font-semibold">
                    <span className="text-muted-foreground">Lifecycle Gate</span>
                    <span className="text-foreground">{prog.progressPercentage}%</span>
                  </div>
                  <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full" style={{ width: prog.progressPercentage + "%" }} />
                  </div>
                </div>

                <Link href={"/lifecycles/" + prog.id}>
                  <Button variant="outline" size="sm" className="text-xs w-full sm:w-auto">
                    Program Room <ArrowRight className="h-3.5 w-3.5 ml-1.5" />
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
