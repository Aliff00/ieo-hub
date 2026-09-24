"use client";

import Link from "next/link";
import { 
  Lightbulb, 
  Building2, 
  GitBranch, 
  TrendingUp, 
  ArrowUpRight, 
  Clock, 
  Plus
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-border/60">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight text-foreground">
            Orchestration Dashboard
          </h1>
          <p className="text-sm text-muted-foreground mt-1">
            Real-time synthesis across innovation lifecycles, active facilities, and enterprise co-creation.
          </p>
        </div>

        <div className="flex items-center space-x-3">
          <Link href="/facilities/booking">
            <Button variant="outline" size="sm">
              <Building2 className="h-4 w-4 mr-2" /> Book Facility
            </Button>
          </Link>
          <Link href="/solutions">
            <Button variant="gradient" size="sm">
              <Plus className="h-4 w-4 mr-1.5" /> Submit Solution
            </Button>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="bg-card/60">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardDescription className="text-xs font-semibold uppercase tracking-wider">Active Solutions</CardDescription>
            <Lightbulb className="h-4 w-4 text-amber-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">42 Assets</div>
            <p className="text-xs text-emerald-400 font-medium mt-1">+8 new this quarter</p>
          </CardContent>
        </Card>

        <Card className="bg-card/60">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardDescription className="text-xs font-semibold uppercase tracking-wider">Hub Occupancy</CardDescription>
            <Building2 className="h-4 w-4 text-blue-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">88.4%</div>
            <p className="text-xs text-muted-foreground mt-1">14 booked spaces today</p>
          </CardContent>
        </Card>

        <Card className="bg-card/60">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardDescription className="text-xs font-semibold uppercase tracking-wider">Lifecycles in Flight</CardDescription>
            <GitBranch className="h-4 w-4 text-indigo-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">7 Programs</div>
            <p className="text-xs text-emerald-400 font-medium mt-1">3 ready for commercial scale</p>
          </CardContent>
        </Card>

        <Card className="bg-card/60">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardDescription className="text-xs font-semibold uppercase tracking-wider">Generated Value (ROI)</CardDescription>
            <TrendingUp className="h-4 w-4 text-emerald-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$12.4M</div>
            <p className="text-xs text-emerald-400 font-medium mt-1">+24% YoY impact</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="bg-card/60">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle className="text-base font-bold">Ongoing Innovation Lifecycles</CardTitle>
              <CardDescription className="text-xs">Structured milestone tracking from ideation to scale</CardDescription>
            </div>
            <Link href="/lifecycles" className="text-xs text-primary font-semibold hover:underline flex items-center">
              View all <ArrowUpRight className="h-3 w-3 ml-0.5" />
            </Link>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2 border border-border/60 p-3 rounded-lg bg-secondary/20">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-foreground">CleanTech Grid Acceleration</span>
                <Badge variant="success">ACCELERATION (TRL 7)</Badge>
              </div>
              <div className="h-1.5 w-full bg-secondary rounded-full overflow-hidden">
                <div className="h-full bg-emerald-500 rounded-full" style={{ width: "75%" }} />
              </div>
              <div className="flex justify-between text-[11px] text-muted-foreground">
                <span>Sponsor: National Energy Council</span>
                <span>Target: Nov 2026</span>
              </div>
            </div>

            <div className="space-y-2 border border-border/60 p-3 rounded-lg bg-secondary/20">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-foreground">Autonomous Logistics Mesh</span>
                <Badge variant="info">INCUBATION (TRL 5)</Badge>
              </div>
              <div className="h-1.5 w-full bg-secondary rounded-full overflow-hidden">
                <div className="h-full bg-blue-500 rounded-full" style={{ width: "50%" }} />
              </div>
              <div className="flex justify-between text-[11px] text-muted-foreground">
                <span>Sponsor: Global Port Authority</span>
                <span>Target: Jan 2027</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card/60">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle className="text-base font-bold">Upcoming Hub Reservations</CardTitle>
              <CardDescription className="text-xs">Physical facilities allocated for testing & prototyping</CardDescription>
            </div>
            <Link href="/facilities" className="text-xs text-primary font-semibold hover:underline flex items-center">
              Reserve Space <ArrowUpRight className="h-3 w-3 ml-0.5" />
            </Link>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center justify-between p-3 rounded-lg border border-border/50 bg-secondary/20 text-xs">
              <div className="space-y-1">
                <div className="font-semibold text-foreground">Rapid Prototyping MakerLab #2</div>
                <div className="text-[11px] text-muted-foreground flex items-center">
                  <Clock className="h-3 w-3 mr-1 text-muted-foreground" /> 09:00 - 13:00 (Today) • Team Robotics
                </div>
              </div>
              <Badge variant="success">Confirmed</Badge>
            </div>

            <div className="flex items-center justify-between p-3 rounded-lg border border-border/50 bg-secondary/20 text-xs">
              <div className="space-y-1">
                <div className="font-semibold text-foreground">Executive Demonstration Arena</div>
                <div className="text-[11px] text-muted-foreground flex items-center">
                  <Clock className="h-3 w-3 mr-1 text-muted-foreground" /> 14:00 - 17:00 (Tomorrow) • Enterprise Alliance
                </div>
              </div>
              <Badge variant="info">Setup In Progress</Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
