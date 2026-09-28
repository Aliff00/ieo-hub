import Link from "next/link";
import Image from "next/image";
import { 
  Lightbulb, 
  Building2, 
  GitBranch, 
  TrendingUp, 
  ArrowRight, 
  ShieldCheck, 
  ChevronDown,
  CheckCircle2,
  Cpu,
  Layers,
  Sparkles,
  ExternalLink,
  Users
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col scroll-smooth">
      {/* Public Navigation Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur px-6 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="relative h-10 w-10 rounded-xl bg-white p-1.5 flex items-center justify-center shadow-md border border-border/40 overflow-hidden">
            <Image
              src="/logo.jpg"
              alt="IEO Hub Logo"
              width={40}
              height={40}
              className="object-contain w-full h-full"
              priority
            />
          </div>
          <div>
            <span className="font-bold text-lg text-foreground tracking-tight">IEO Hub</span>
            <span className="text-[10px] block -mt-1 uppercase tracking-widest text-muted-foreground font-semibold">
              Innovation • Ecosystem • Orchestration
            </span>
          </div>
        </div>

        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-muted-foreground">
          <a href="#pillars" className="hover:text-foreground transition-colors">Core Pillars</a>
          <a href="#showcase" className="hover:text-foreground transition-colors">Technology Showcase</a>
          <a href="#personas" className="hover:text-foreground transition-colors">Ecosystem Roles</a>
        </nav>

        <div className="flex items-center space-x-3">
          <Link href="/login">
            <Button variant="ghost" size="sm">
              Sign In
            </Button>
          </Link>
          <Link href="/dashboard">
            <Button variant="gradient" size="sm">
              Enter Platform <ArrowRight className="h-4 w-4 ml-1.5" />
            </Button>
          </Link>
        </div>
      </header>

      {/* Full-Screen Hero Section (Above the fold) */}
      <section className="relative min-h-[calc(100vh-4rem)] flex flex-col justify-between items-center text-center px-4 pt-10 pb-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-full bg-gradient-to-b from-blue-600/15 via-indigo-600/10 to-transparent blur-3xl pointer-events-none" />

        {/* Top spacer for balance */}
        <div className="hidden md:block h-2" />

        <div className="container max-w-5xl mx-auto space-y-6 sm:space-y-8 relative my-auto">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-foreground leading-[1.12]">
            Connect Talent, Technology Assets, and Partners Through{" "}
            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Orchestrated Innovation
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
            The IEO Hub connects physical-to-digital facilities, structured co-creation lifecycles, and IP discovery into a single measurable ecosystem.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/dashboard">
              <Button size="lg" variant="gradient" className="w-full sm:w-auto font-semibold px-8 h-12 text-base shadow-lg shadow-blue-500/20">
                Launch Orchestration OS <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <a href="#showcase">
              <Button size="lg" variant="outline" className="w-full sm:w-auto px-8 h-12 text-base border-border/80">
                Explore Public Showcase
              </Button>
            </a>
          </div>
        </div>

        {/* Scroll indicator pinned at the bottom */}
        <div className="relative pt-4 pb-2 animate-bounce">
          <a
            href="#pillars"
            className="flex flex-col items-center space-y-1 text-muted-foreground hover:text-foreground transition-colors group cursor-pointer"
          >
            <span className="text-[11px] font-semibold tracking-widest uppercase text-muted-foreground group-hover:text-blue-400 transition-colors">
              Scroll to explore
            </span>
            <ChevronDown className="h-4 w-4 text-blue-400 group-hover:translate-y-0.5 transition-transform" />
          </a>
        </div>
      </section>

      {/* Four Pillars Section */}
      <section id="pillars" className="py-20 border-t border-border/40 bg-card/20 px-6">
        <div className="container max-w-7xl mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto">
            <Badge variant="outline" className="text-xs uppercase tracking-wider mb-2">Architectural Foundation</Badge>
            <h2 className="text-3xl font-bold tracking-tight">Four Pillars of the IEO Operating System</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="bg-card/60 border-border/60">
              <CardHeader className="space-y-2">
                <div className="h-10 w-10 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center">
                  <Lightbulb className="h-5 w-5" />
                </div>
                <CardTitle className="text-base font-bold">Solution Discovery</CardTitle>
                <CardDescription className="text-xs leading-relaxed">
                  Curated catalog of pre-commercial prototypes, verified IP, and technology assets indexed by TRL level.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-card/60 border-border/60">
              <CardHeader className="space-y-2">
                <div className="h-10 w-10 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center">
                  <Building2 className="h-5 w-5" />
                </div>
                <CardTitle className="text-base font-bold">Physical-to-Digital Hubs</CardTitle>
                <CardDescription className="text-xs leading-relaxed">
                  Smart space management for MakerLabs, cleanrooms, holographic studios, and alliance demo auditoriums.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-card/60 border-border/60">
              <CardHeader className="space-y-2">
                <div className="h-10 w-10 rounded-lg bg-indigo-500/10 text-indigo-400 flex items-center justify-center">
                  <GitBranch className="h-5 w-5" />
                </div>
                <CardTitle className="text-base font-bold">Structured Lifecycles</CardTitle>
                <CardDescription className="text-xs leading-relaxed">
                  Stage-gate progression guiding co-creation programs from ideation and validation through incubation to scale.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-card/60 border-border/60">
              <CardHeader className="space-y-2">
                <div className="h-10 w-10 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
                  <TrendingUp className="h-5 w-5" />
                </div>
                <CardTitle className="text-base font-bold">Measurable Impact</CardTitle>
                <CardDescription className="text-xs leading-relaxed">
                  Unified telemetry on commercialization yield, patent filings, and enterprise ROI across technology clusters.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Technology Showcase Section */}
      <section id="showcase" className="py-20 border-t border-border/40 px-6">
        <div className="container max-w-7xl mx-auto space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <Badge variant="outline" className="text-xs uppercase tracking-wider mb-2 text-primary border-primary/30">
                Verified DeepTech IP
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight">Public Technology Showcase</h2>
              <p className="text-sm text-muted-foreground mt-1 max-w-xl">
                Explore pre-commercial technology prototypes developed by participating research teams across our physical clusters.
              </p>
            </div>
            <Link href="/login">
              <Button variant="outline" size="sm">
                Sign In to Access Full Catalog <ArrowRight className="h-4 w-4 ml-1.5" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-card/60 border-border/60 hover:border-border transition-all">
              <CardHeader className="space-y-1">
                <div className="flex items-center justify-between text-xs text-muted-foreground pb-1">
                  <span>AI & Cognitive</span>
                  <Badge variant="outline" className="text-blue-400 border-blue-500/30 text-[10px]">TRL 7</Badge>
                </div>
                <CardTitle className="text-lg font-bold">NeuroMesh Edge AI</CardTitle>
                <CardDescription className="text-xs">Cognitive Systems Lab</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Distributed low-power inference engine optimizing real-time computer vision on edge devices without cloud dependence.
                </p>
                <div className="flex items-center justify-between pt-2 border-t border-border/40 text-xs">
                  <span className="text-emerald-400 font-medium">Pilot Ready</span>
                  <Link href="/login" className="text-primary hover:underline font-semibold flex items-center text-[11px]">
                    Request Partner Match <ArrowRight className="h-3 w-3 ml-0.5" />
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/60 border-border/60 hover:border-border transition-all">
              <CardHeader className="space-y-1">
                <div className="flex items-center justify-between text-xs text-muted-foreground pb-1">
                  <span>CleanTech & Energy</span>
                  <Badge variant="outline" className="text-emerald-400 border-emerald-500/30 text-[10px]">TRL 6</Badge>
                </div>
                <CardTitle className="text-lg font-bold">AquaPure HydroHarvest</CardTitle>
                <CardDescription className="text-xs">CleanTech Nexus</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Zero-emission atmospheric moisture capture utilizing metal-organic frameworks for decentralized potable water.
                </p>
                <div className="flex items-center justify-between pt-2 border-t border-border/40 text-xs">
                  <span className="text-emerald-400 font-medium">Validation Phase</span>
                  <Link href="/login" className="text-primary hover:underline font-semibold flex items-center text-[11px]">
                    Request Partner Match <ArrowRight className="h-3 w-3 ml-0.5" />
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/60 border-border/60 hover:border-border transition-all">
              <CardHeader className="space-y-1">
                <div className="flex items-center justify-between text-xs text-muted-foreground pb-1">
                  <span>Industry 4.0</span>
                  <Badge variant="outline" className="text-purple-400 border-purple-500/30 text-[10px]">TRL 7</Badge>
                </div>
                <CardTitle className="text-lg font-bold">HoloTwin Factory</CardTitle>
                <CardDescription className="text-xs">Robotics Institute</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Interactive spatial digital twin synchronizing real-time SCADA telemetry with multi-user holographic overlays.
                </p>
                <div className="flex items-center justify-between pt-2 border-t border-border/40 text-xs">
                  <span className="text-emerald-400 font-medium">Active Deployment</span>
                  <Link href="/login" className="text-primary hover:underline font-semibold flex items-center text-[11px]">
                    Request Partner Match <ArrowRight className="h-3 w-3 ml-0.5" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Ecosystem Roles Section */}
      <section id="personas" className="py-20 border-t border-border/40 bg-card/20 px-6">
        <div className="container max-w-7xl mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto">
            <Badge variant="outline" className="text-xs uppercase tracking-wider mb-2">Ecosystem Architecture</Badge>
            <h2 className="text-3xl font-bold tracking-tight">Dedicated Workspaces for Every Role</h2>
            <p className="text-sm text-muted-foreground mt-2">
              Once authenticated, your interface adapts specifically to your operational responsibilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl border border-amber-500/30 bg-amber-500/5 space-y-4">
              <div className="h-10 w-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center font-bold text-lg">
                🔬
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground">Innovators & Researchers</h3>
                <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                  Book physical MakerLabs, 3D printers, and cleanrooms. Submit prototypes, track TRL milestones, and connect with corporate sponsors.
                </p>
              </div>
              <ul className="text-xs space-y-2 text-muted-foreground pt-2">
                <li className="flex items-center"><CheckCircle2 className="h-3.5 w-3.5 text-amber-400 mr-2 shrink-0" /> Lab & Tool Slot Reservations</li>
                <li className="flex items-center"><CheckCircle2 className="h-3.5 w-3.5 text-amber-400 mr-2 shrink-0" /> Stage Gate Milestone Progress</li>
                <li className="flex items-center"><CheckCircle2 className="h-3.5 w-3.5 text-amber-400 mr-2 shrink-0" /> Intellectual Property Cataloging</li>
              </ul>
              <div className="pt-2">
                <Link href="/login">
                  <Button variant="outline" size="sm" className="w-full text-xs border-amber-500/30 hover:bg-amber-500/10">
                    Sign In as Innovator
                  </Button>
                </Link>
              </div>
            </div>

            <div className="p-6 rounded-2xl border border-emerald-500/30 bg-emerald-500/5 space-y-4">
              <div className="h-10 w-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-bold text-lg">
                🤝
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground">Enterprise Partners</h3>
                <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                  Scout verified solutions, book executive pitch arenas, initiate commercial pilot co-creation, and monitor realized corporate ROI.
                </p>
              </div>
              <ul className="text-xs space-y-2 text-muted-foreground pt-2">
                <li className="flex items-center"><CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 mr-2 shrink-0" /> Technology Scouting & Vetting</li>
                <li className="flex items-center"><CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 mr-2 shrink-0" /> Executive Arena Reservations</li>
                <li className="flex items-center"><CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 mr-2 shrink-0" /> Commercialization Yield Tracking</li>
              </ul>
              <div className="pt-2">
                <Link href="/login">
                  <Button variant="outline" size="sm" className="w-full text-xs border-emerald-500/30 hover:bg-emerald-500/10">
                    Sign In as Partner
                  </Button>
                </Link>
              </div>
            </div>

            <div className="p-6 rounded-2xl border border-blue-500/30 bg-blue-500/5 space-y-4">
              <div className="h-10 w-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center font-bold text-lg">
                ⚙️
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground">Hub Administrators</h3>
                <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                  Complete operational command over physical spaces, approval queues, cohort milestones, user roles, and macro impact reporting.
                </p>
              </div>
              <ul className="text-xs space-y-2 text-muted-foreground pt-2">
                <li className="flex items-center"><CheckCircle2 className="h-3.5 w-3.5 text-blue-400 mr-2 shrink-0" /> Space Booking Approvals</li>
                <li className="flex items-center"><CheckCircle2 className="h-3.5 w-3.5 text-blue-400 mr-2 shrink-0" /> Cohort Budget & Lifecycles</li>
                <li className="flex items-center"><CheckCircle2 className="h-3.5 w-3.5 text-blue-400 mr-2 shrink-0" /> Ecosystem-Wide KPI Audits</li>
              </ul>
              <div className="pt-2">
                <Link href="/login">
                  <Button variant="outline" size="sm" className="w-full text-xs border-blue-500/30 hover:bg-blue-500/10">
                    Sign In as Admin
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Public Footer */}
      <footer className="mt-auto border-t border-border/40 py-10 px-6 text-center text-xs text-muted-foreground bg-card/30">
        <div className="container max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-2">
            <span className="font-bold text-foreground">IEO Hub</span>
            <span>• Innovation, Ecosystem, and Orchestration Platform</span>
          </div>
          <div className="flex items-center space-x-6">
            <Link href="/login" className="hover:text-foreground">Partner Login</Link>
            <Link href="/register" className="hover:text-foreground">Request Access</Link>
            <a href="#showcase" className="hover:text-foreground">Public Showcase</a>
          </div>
        </div>
        <p className="mt-6 text-[11px] text-muted-foreground/60">© {new Date().getFullYear()} IEO Hub Platform. All rights reserved.</p>
      </footer>
    </div>
  );
}
