"use client";

import Link from "next/link";
import { ArrowLeft, CheckCircle2, Clock, GitCommit } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function LifecycleDetailPage({ params }: { params: { programId: string } }) {
  const stages = [
    { title: "Stage 1: Problem Definition & Sourcing", status: "COMPLETED", date: "Jan 2026" },
    { title: "Stage 2: Technical Feasibility & PoC", status: "COMPLETED", date: "Apr 2026" },
    { title: "Stage 3: Hub Testbed Validation (TRL 6)", status: "IN_PROGRESS", date: "Current" },
    { title: "Stage 4: Pilot Deployment & Enterprise Scale", status: "PENDING", date: "Nov 2026" },
  ];

  return (
    <div className="space-y-6 max-w-5xl">
      <Link href="/lifecycles" className="inline-flex items-center text-xs text-muted-foreground hover:text-foreground">
        <ArrowLeft className="h-3.5 w-3.5 mr-1" /> Back to Programs
      </Link>

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-border/60">
        <div>
          <Badge variant="success">ACCELERATION STAGE</Badge>
          <h1 className="text-2xl font-extrabold text-foreground mt-1.5">
            CleanTech Grid Resilience Acceleration ({params.programId})
          </h1>
          <p className="text-xs text-muted-foreground">
            Sponsor: National Energy Council • Lead Innovator: CleanTech Nexus
          </p>
        </div>

        <Button variant="gradient" size="sm">
          Submit Stage Deliverable
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="bg-card/60 p-4">
          <span className="text-[11px] text-muted-foreground block uppercase font-semibold">Budget Allocated</span>
          <span className="text-xl font-bold text-foreground">$1,800,000</span>
        </Card>
        <Card className="bg-card/60 p-4">
          <span className="text-[11px] text-muted-foreground block uppercase font-semibold">Contributing Innovators</span>
          <span className="text-xl font-bold text-foreground">14 Talent Units</span>
        </Card>
        <Card className="bg-card/60 p-4">
          <span className="text-[11px] text-muted-foreground block uppercase font-semibold">Target Launch Date</span>
          <span className="text-xl font-bold text-emerald-400">Nov 15, 2026</span>
        </Card>
      </div>

      <Card className="bg-card/70">
        <CardHeader>
          <CardTitle className="text-base font-bold">Innovation Stage-Gate Governance</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {stages.map((st, i) => (
            <div key={i} className="flex items-center justify-between p-3.5 rounded-lg border border-border/50 bg-secondary/20 text-xs">
              <div className="flex items-center space-x-3">
                {st.status === "COMPLETED" ? (
                  <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                ) : st.status === "IN_PROGRESS" ? (
                  <Clock className="h-4 w-4 text-blue-400 animate-pulse" />
                ) : (
                  <GitCommit className="h-4 w-4 text-muted-foreground" />
                )}
                <div>
                  <div className="font-semibold text-foreground">{st.title}</div>
                  <div className="text-[11px] text-muted-foreground">Scheduled Milestone: {st.date}</div>
                </div>
              </div>

              <Badge variant={st.status === "COMPLETED" ? "success" : st.status === "IN_PROGRESS" ? "info" : "secondary"}>
                {st.status}
              </Badge>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
