"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SolutionItem } from "@/types/solution";

const SAMPLE_SOLUTIONS: SolutionItem[] = [
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

export default function SolutionsPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("ALL");

  const filtered = SAMPLE_SOLUTIONS.filter((sol) => {
    const matchesSearch = sol.title.toLowerCase().includes(search.toLowerCase()) || 
                          sol.summary.toLowerCase().includes(search.toLowerCase()) ||
                          sol.tags.some(t => t.toLowerCase().includes(search.toLowerCase()));
    const matchesCategory = category === "ALL" || sol.category === category;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-border/60">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-foreground">Solutions & Technology Catalog</h1>
          <p className="text-xs text-muted-foreground mt-0.5">
            Discover verified intellectual property, pre-commercial prototypes, and deployable ecosystem assets.
          </p>
        </div>
        <Link href="/solutions/sol-1">
          <Button variant="gradient" size="sm">
            Publish New Solution
          </Button>
        </Link>
      </div>

      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input 
            placeholder="Search solutions by keyword, domain, or technology tag..."
            className="pl-9 h-9 text-xs"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <select
          className="h-9 px-3 rounded-lg border border-border bg-card text-xs text-foreground focus:outline-none"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="ALL">All Categories</option>
          <option value="AI & Cognitive">AI & Cognitive</option>
          <option value="CleanTech & Energy">CleanTech & Energy</option>
          <option value="Industry 4.0">Industry 4.0</option>
          <option value="Smart Cities">Smart Cities</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
        {filtered.map((sol) => (
          <Card key={sol.id} className="bg-card/70 hover:border-primary/50 transition-all flex flex-col justify-between">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between gap-2">
                <Badge variant="outline" className="text-[10px] font-mono">
                  {sol.category}
                </Badge>
                <Badge variant={sol.status === "Commercialized" ? "success" : "info"}>
                  TRL {sol.trlLevel} • {sol.status}
                </Badge>
              </div>
              <CardTitle className="text-lg font-bold text-foreground mt-2">{sol.title}</CardTitle>
              <CardDescription className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                {sol.summary}
              </CardDescription>
            </CardHeader>

            <CardContent className="pb-3 space-y-3">
              <div className="flex flex-wrap gap-1.5">
                {sol.tags.map((tag) => (
                  <span key={tag} className="text-[10px] bg-secondary/80 text-muted-foreground px-2 py-0.5 rounded-full border border-border/40">
                    #{tag}
                  </span>
                ))}
              </div>
              <div className="text-[11px] text-muted-foreground pt-1 border-t border-border/40 flex justify-between">
                <span>By {sol.creatorName}</span>
                <span className="font-medium text-foreground">{sol.organization}</span>
              </div>
            </CardContent>

            <CardFooter className="pt-2 border-t border-border/40">
              <Link href={"/solutions/" + sol.id} className="w-full">
                <Button variant="outline" size="sm" className="w-full text-xs font-semibold">
                  Inspect Technology & Architecture <ArrowRight className="h-3.5 w-3.5 ml-1.5" />
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
