import Link from "next/link";
import { 
  Layers, 
  Lightbulb, 
  Building2, 
  GitBranch, 
  TrendingUp, 
  ArrowRight, 
  ShieldCheck, 
  Sparkles
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur px-6 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2.5">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold shadow-md shadow-blue-500/20">
            <Layers className="h-5 w-5" />
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
          <Link href="/solutions" className="hover:text-foreground transition-colors">Solutions</Link>
          <Link href="/facilities" className="hover:text-foreground transition-colors">Hub Facilities</Link>
          <Link href="/impact" className="hover:text-foreground transition-colors">Impact & KPIs</Link>
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

      <section className="relative pt-20 pb-16 sm:pt-28 sm:pb-24 text-center px-4 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-96 bg-gradient-to-b from-blue-600/15 via-indigo-600/10 to-transparent blur-3xl pointer-events-none" />

        <div className="container max-w-5xl mx-auto space-y-6 relative">
          <div className="inline-flex items-center space-x-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1 text-xs font-medium text-blue-400 backdrop-blur">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Unified Digital Operating System for Enterprise Innovation</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-foreground leading-[1.12]">
            Connect Talent, Technology Assets, and Partners Through{" "}
            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Orchestrated Innovation
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-base sm:text-lg text-muted-foreground leading-relaxed">
            The IEO Hub connects physical-to-digital facilities, structured co-creation lifecycles, and IP discovery into a single measurable ecosystem.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link href="/dashboard">
              <Button size="lg" variant="gradient" className="w-full sm:w-auto font-semibold">
                Launch Orchestration OS <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/solutions">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                Explore Solutions Catalog
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section id="pillars" className="py-16 border-t border-border/40 bg-card/20 px-6">
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

      <footer className="mt-auto border-t border-border/40 py-8 px-6 text-center text-xs text-muted-foreground">
        <p>© {new Date().getFullYear()} IEO Hub (Innovation, Ecosystem, and Orchestration Hub). All rights reserved.</p>
      </footer>
    </div>
  );
}
