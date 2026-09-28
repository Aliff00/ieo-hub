"use client";

import Link from "next/link";
import { 
  Lightbulb, 
  Building2, 
  GitBranch, 
  TrendingUp, 
  ArrowUpRight, 
  Clock, 
  Plus,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  Layers,
  ArrowRight,
  SlidersHorizontal,
  Flame,
  FileCheck2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useRole } from "@/contexts/role-context";

export default function DashboardPage() {
  const { activeRole, currentProfile } = useRole();

  return (
    <div className="space-y-8">
      {/* Dynamic Header depending on persona */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-border/60">
        <div>
          <div className="flex items-center space-x-2">
            <Badge variant="outline" className={`text-xs py-0.5 px-2 border font-medium ${currentProfile.badgeColor}`}>
              {currentProfile.badgeLabel}
            </Badge>
            <span className="text-xs text-muted-foreground font-mono">Workspace Active</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground mt-2">
            Welcome, {currentProfile.name}
          </h1>
          <p className="text-sm text-muted-foreground mt-1">
            {activeRole === "INNOVATOR" && "Track prototype progression, laboratory reservations, and IP commercial readiness."}
            {activeRole === "PARTNER" && "Scout validated DeepTech IP, initiate commercial pilots, and book executive innovation arenas."}
            {activeRole === "ADMIN" && "Ecosystem telemetry, space booking approvals, and multi-tenant innovation governance."}
          </p>
        </div>

        {/* Action Buttons tailored by role */}
        <div className="flex items-center space-x-3">
          {activeRole === "INNOVATOR" && (
            <>
              <Link href="/facilities">
                <Button variant="outline" size="sm">
                  <Building2 className="h-4 w-4 mr-2" /> Book Lab & Tools
                </Button>
              </Link>
              <Link href="/solutions">
                <Button variant="gradient" size="sm">
                  <Plus className="h-4 w-4 mr-1.5" /> Submit Prototype
                </Button>
              </Link>
            </>
          )}

          {activeRole === "PARTNER" && (
            <>
              <Link href="/facilities">
                <Button variant="outline" size="sm">
                  <Building2 className="h-4 w-4 mr-2" /> Reserve Arena
                </Button>
              </Link>
              <Link href="/solutions">
                <Button variant="gradient" size="sm">
                  <Sparkles className="h-4 w-4 mr-1.5" /> Scout Solutions
                </Button>
              </Link>
            </>
          )}

          {activeRole === "ADMIN" && (
            <>
              <Link href="/facilities">
                <Button variant="outline" size="sm">
                  <Building2 className="h-4 w-4 mr-2" /> Approve Facilities
                </Button>
              </Link>
              <Link href="/solutions">
                <Button variant="gradient" size="sm">
                  <FileCheck2 className="h-4 w-4 mr-1.5" /> Verify IP Submissions
                </Button>
              </Link>
            </>
          )}
        </div>
      </div>

      {/* Role-Specific Metric Cards */}
      {activeRole === "INNOVATOR" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="bg-card/60 border-border/70">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardDescription className="text-xs font-semibold uppercase tracking-wider">My Active Prototypes</CardDescription>
              <Lightbulb className="h-4 w-4 text-amber-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3 Solutions</div>
              <p className="text-xs text-amber-400 font-medium mt-1">Average TRL: 6.8</p>
            </CardContent>
          </Card>

          <Card className="bg-card/60 border-border/70">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardDescription className="text-xs font-semibold uppercase tracking-wider">Lab Slots Booked</CardDescription>
              <Building2 className="h-4 w-4 text-blue-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">4 Sessions</div>
              <p className="text-xs text-muted-foreground mt-1">Next: CNC MakerLab #1 (Tomorrow)</p>
            </CardContent>
          </Card>

          <Card className="bg-card/60 border-border/70">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardDescription className="text-xs font-semibold uppercase tracking-wider">Milestone Progress</CardDescription>
              <GitBranch className="h-4 w-4 text-indigo-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">Phase 3</div>
              <p className="text-xs text-emerald-400 font-medium mt-1">Validation & Pre-Scale</p>
            </CardContent>
          </Card>

          <Card className="bg-card/60 border-border/70">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardDescription className="text-xs font-semibold uppercase tracking-wider">Commercial Interest</CardDescription>
              <TrendingUp className="h-4 w-4 text-emerald-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">5 Inquiries</div>
              <p className="text-xs text-emerald-400 font-medium mt-1">2 enterprise pilot discussions</p>
            </CardContent>
          </Card>
        </div>
      )}

      {activeRole === "PARTNER" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="bg-card/60 border-border/70">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardDescription className="text-xs font-semibold uppercase tracking-wider">Vetted Tech Catalog</CardDescription>
              <Lightbulb className="h-4 w-4 text-amber-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">42 Solutions</div>
              <p className="text-xs text-emerald-400 font-medium mt-1">+8 new verified this month</p>
            </CardContent>
          </Card>

          <Card className="bg-card/60 border-border/70">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardDescription className="text-xs font-semibold uppercase tracking-wider">Corporate Arena Access</CardDescription>
              <Building2 className="h-4 w-4 text-blue-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">Executive Tier</div>
              <p className="text-xs text-muted-foreground mt-1">Alliance Arena reserved Friday</p>
            </CardContent>
          </Card>

          <Card className="bg-card/60 border-border/70">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardDescription className="text-xs font-semibold uppercase tracking-wider">Active Co-Creations</CardDescription>
              <GitBranch className="h-4 w-4 text-indigo-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">4 Programs</div>
              <p className="text-xs text-emerald-400 font-medium mt-1">CleanTech & Edge AI cohorts</p>
            </CardContent>
          </Card>

          <Card className="bg-card/60 border-border/70">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardDescription className="text-xs font-semibold uppercase tracking-wider">Realized Pilot Value</CardDescription>
              <TrendingUp className="h-4 w-4 text-emerald-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$12.4M</div>
              <p className="text-xs text-emerald-400 font-medium mt-1">+24% YoY return</p>
            </CardContent>
          </Card>
        </div>
      )}

      {activeRole === "ADMIN" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="bg-card/60 border-border/70 border-l-4 border-l-blue-500">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardDescription className="text-xs font-semibold uppercase tracking-wider">Hub Occupancy Rate</CardDescription>
              <Building2 className="h-4 w-4 text-blue-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">88.4%</div>
              <p className="text-xs text-blue-400 font-medium mt-1">14 booked spaces across cluster</p>
            </CardContent>
          </Card>

          <Card className="bg-card/60 border-border/70 border-l-4 border-l-amber-500">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardDescription className="text-xs font-semibold uppercase tracking-wider">Pending Space Approvals</CardDescription>
              <Clock className="h-4 w-4 text-amber-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3 Requests</div>
              <p className="text-xs text-amber-400 font-medium mt-1">Cleanroom & XR Studio</p>
            </CardContent>
          </Card>

          <Card className="bg-card/60 border-border/70 border-l-4 border-l-indigo-500">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardDescription className="text-xs font-semibold uppercase tracking-wider">Active Cohorts</CardDescription>
              <GitBranch className="h-4 w-4 text-indigo-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">7 Programs</div>
              <p className="text-xs text-emerald-400 font-medium mt-1">128 registered innovators</p>
            </CardContent>
          </Card>

          <Card className="bg-card/60 border-border/70 border-l-4 border-l-emerald-500">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardDescription className="text-xs font-semibold uppercase tracking-wider">Ecosystem Capital</CardDescription>
              <TrendingUp className="h-4 w-4 text-emerald-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$28.4M</div>
              <p className="text-xs text-emerald-400 font-medium mt-1">+31.2% aggregate value</p>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Main Content Area Tailored to Persona */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column */}
        <Card className="bg-card/60 border-border/70">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle className="text-base font-bold">
                {activeRole === "INNOVATOR" && "My Prototype Lifecycle Pipeline"}
                {activeRole === "PARTNER" && "Ongoing Innovation Cohorts"}
                {activeRole === "ADMIN" && "Hub Program Lifecycle Health"}
              </CardTitle>
              <CardDescription className="text-xs">
                {activeRole === "INNOVATOR" && "Stage gate milestones from ideation to scale"}
                {activeRole === "PARTNER" && "Corporate sponsored co-creation programs"}
                {activeRole === "ADMIN" && "All tracked programs across innovation cohorts"}
              </CardDescription>
            </div>
            <Link href="/lifecycles" className="text-xs text-primary font-semibold hover:underline flex items-center">
              View all <ArrowUpRight className="h-3 w-3 ml-0.5" />
            </Link>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-3 rounded-lg border border-border/60 bg-secondary/30 space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-sm">CleanTech Decarbonization Sprint 2026</span>
                <Badge className="bg-blue-500/20 text-blue-400 hover:bg-blue-500/20 text-[10px]">
                  Validation
                </Badge>
              </div>
              <div className="w-full bg-secondary rounded-full h-1.5 overflow-hidden">
                <div className="bg-blue-500 h-1.5 rounded-full" style={{ width: "65%" }}></div>
              </div>
              <div className="flex justify-between text-[11px] text-muted-foreground pt-1">
                <span>Milestone: Pilot Validation Gate</span>
                <span>Target: Nov 2026</span>
              </div>
            </div>

            <div className="p-3 rounded-lg border border-border/60 bg-secondary/30 space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-sm">Industrial Edge AI Acceleration</span>
                <Badge className="bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500/20 text-[10px]">
                  Acceleration
                </Badge>
              </div>
              <div className="w-full bg-secondary rounded-full h-1.5 overflow-hidden">
                <div className="bg-emerald-500 h-1.5 rounded-full" style={{ width: "88%" }}></div>
              </div>
              <div className="flex justify-between text-[11px] text-muted-foreground pt-1">
                <span>Milestone: Factory SCADA Integration</span>
                <span>Target: Dec 2026</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Right Column */}
        <Card className="bg-card/60 border-border/70">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle className="text-base font-bold">
                {activeRole === "INNOVATOR" && "My Facility & Tool Schedule"}
                {activeRole === "PARTNER" && "Top Matched Solutions Ready for Pilot"}
                {activeRole === "ADMIN" && "Pending Approval Queue"}
              </CardTitle>
              <CardDescription className="text-xs">
                {activeRole === "INNOVATOR" && "Upcoming maker lab bookings & equipment reservations"}
                {activeRole === "PARTNER" && "Vetted technologies ready for corporate adoption"}
                {activeRole === "ADMIN" && "Actions requiring orchestration authorization"}
              </CardDescription>
            </div>
            <Link href={activeRole === "PARTNER" ? "/solutions" : "/facilities"} className="text-xs text-primary font-semibold hover:underline flex items-center">
              View all <ArrowUpRight className="h-3 w-3 ml-0.5" />
            </Link>
          </CardHeader>
          <CardContent className="space-y-3">
            {activeRole === "INNOVATOR" && (
              <>
                <div className="flex items-center justify-between p-3 rounded-lg border border-border/60 bg-secondary/20">
                  <div className="flex items-center space-x-3">
                    <div className="h-8 w-8 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center">
                      <Building2 className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold">Rapid Prototyping MakerLab #1</div>
                      <div className="text-[11px] text-muted-foreground">Tomorrow • 10:00 AM - 02:00 PM (Formlabs 4L)</div>
                    </div>
                  </div>
                  <Badge variant="outline" className="text-emerald-400 border-emerald-500/30 text-[10px]">CONFIRMED</Badge>
                </div>

                <div className="flex items-center justify-between p-3 rounded-lg border border-border/60 bg-secondary/20">
                  <div className="flex items-center space-x-3">
                    <div className="h-8 w-8 rounded-lg bg-purple-500/10 text-purple-400 flex items-center justify-center">
                      <Building2 className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold">Cleanroom Microfluidics Cell</div>
                      <div className="text-[11px] text-muted-foreground">Thursday • 01:00 PM - 05:00 PM</div>
                    </div>
                  </div>
                  <Badge variant="outline" className="text-amber-400 border-amber-500/30 text-[10px]">PENDING APPROVAL</Badge>
                </div>
              </>
            )}

            {activeRole === "PARTNER" && (
              <>
                <div className="p-3 rounded-lg border border-border/60 bg-secondary/20 flex items-center justify-between">
                  <div>
                    <span className="text-xs font-semibold text-primary uppercase tracking-wider">AI & Cognitive</span>
                    <h4 className="text-sm font-bold">NeuroMesh Edge AI</h4>
                    <p className="text-[11px] text-muted-foreground">Low-power real-time inference engine • TRL 7</p>
                  </div>
                  <Link href="/solutions">
                    <Button variant="outline" size="sm" className="text-xs">
                      Scout IP
                    </Button>
                  </Link>
                </div>

                <div className="p-3 rounded-lg border border-border/60 bg-secondary/20 flex items-center justify-between">
                  <div>
                    <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">CleanTech & Energy</span>
                    <h4 className="text-sm font-bold">AquaPure HydroHarvest</h4>
                    <p className="text-[11px] text-muted-foreground">Zero-emission atmospheric moisture capture • TRL 6</p>
                  </div>
                  <Link href="/solutions">
                    <Button variant="outline" size="sm" className="text-xs">
                      Scout IP
                    </Button>
                  </Link>
                </div>
              </>
            )}

            {activeRole === "ADMIN" && (
              <>
                <div className="p-3 rounded-lg border border-amber-500/30 bg-amber-500/5 flex items-center justify-between">
                  <div className="space-y-0.5">
                    <div className="flex items-center space-x-2">
                      <span className="text-xs font-semibold text-foreground">Cleanroom Cell #2 Booking</span>
                      <Badge className="text-[9px] bg-amber-500/20 text-amber-400 border-amber-500/30">PENDING</Badge>
                    </div>
                    <p className="text-[11px] text-muted-foreground">Dr. Jordan Hayes (NeuroMesh) • 4 hours requested</p>
                  </div>
                  <div className="flex items-center space-x-1.5">
                    <Button size="sm" variant="outline" className="h-7 text-xs text-emerald-400 hover:text-emerald-300">
                      Approve
                    </Button>
                  </div>
                </div>

                <div className="p-3 rounded-lg border border-blue-500/30 bg-blue-500/5 flex items-center justify-between">
                  <div className="space-y-0.5">
                    <div className="flex items-center space-x-2">
                      <span className="text-xs font-semibold text-foreground">New Prototype Submission</span>
                      <Badge className="text-[9px] bg-blue-500/20 text-blue-400 border-blue-500/30">VERIFY IP</Badge>
                    </div>
                    <p className="text-[11px] text-muted-foreground">BioSensing Nanowires • Cognitive Systems Lab</p>
                  </div>
                  <div className="flex items-center space-x-1.5">
                    <Button size="sm" variant="outline" className="h-7 text-xs text-primary">
                      Review
                    </Button>
                  </div>
                </div>
              </>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
