"use client";

import { DollarSign, Globe, FileCheck } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

export default function ImpactPage() {
  return (
    <div className="space-y-6">
      <div className="pb-4 border-b border-border/60">
        <h1 className="text-2xl font-bold tracking-tight text-foreground">Measurable Impact & KPI Observatory</h1>
        <p className="text-xs text-muted-foreground mt-0.5">
          Comprehensive synthesis of commercialization yield, IP filings, and ecosystem acceleration metrics.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card className="bg-card/60 p-5">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase text-muted-foreground">Commercialized Revenue</span>
            <DollarSign className="h-4 w-4 text-emerald-400" />
          </div>
          <div className="text-2xl font-extrabold text-foreground mt-2">$28.4M</div>
          <p className="text-xs text-emerald-400 mt-1 font-medium">+31.2% over previous fiscal year</p>
        </Card>

        <Card className="bg-card/60 p-5">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase text-muted-foreground">Registered Patents & IP</span>
            <FileCheck className="h-4 w-4 text-blue-400" />
          </div>
          <div className="text-2xl font-extrabold text-foreground mt-2">64 Assets</div>
          <p className="text-xs text-emerald-400 mt-1 font-medium">18 pending international PCT review</p>
        </Card>

        <Card className="bg-card/60 p-5">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase text-muted-foreground">Active Ecosystem Partners</span>
            <Globe className="h-4 w-4 text-purple-400" />
          </div>
          <div className="text-2xl font-extrabold text-foreground mt-2">128 Entities</div>
          <p className="text-xs text-muted-foreground mt-1 font-medium">Including 42 tier-1 enterprise sponsors</p>
        </Card>
      </div>

      <Card className="bg-card/60">
        <CardHeader>
          <CardTitle className="text-base font-bold">Innovation Domain Performance</CardTitle>
          <CardDescription className="text-xs">Aggregated output by technology cluster</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-secondary/40 uppercase tracking-wider text-muted-foreground border-b border-border">
                <tr>
                  <th className="px-4 py-3">Domain Cluster</th>
                  <th className="px-4 py-3">Pilots Completed</th>
                  <th className="px-4 py-3">Commercialized</th>
                  <th className="px-4 py-3">Average Acceleration Speed</th>
                  <th className="px-4 py-3">Hub Hours Utilized</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/60">
                <tr>
                  <td className="px-4 py-3 font-semibold text-foreground">AI & Cognitive Edge</td>
                  <td className="px-4 py-3">16 Pilots</td>
                  <td className="px-4 py-3 text-emerald-400 font-semibold">$9.2M</td>
                  <td className="px-4 py-3">4.2 Months</td>
                  <td className="px-4 py-3">1,420 hrs</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-foreground">CleanTech & Energy Grid</td>
                  <td className="px-4 py-3">12 Pilots</td>
                  <td className="px-4 py-3 text-emerald-400 font-semibold">$11.8M</td>
                  <td className="px-4 py-3">6.1 Months</td>
                  <td className="px-4 py-3">2,180 hrs</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-foreground">Industry 4.0 Robotics</td>
                  <td className="px-4 py-3">9 Pilots</td>
                  <td className="px-4 py-3 text-emerald-400 font-semibold">$7.4M</td>
                  <td className="px-4 py-3">5.0 Months</td>
                  <td className="px-4 py-3">1,890 hrs</td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
