"use client";

import { useState } from "react";
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
  Users,
  ChevronRight,
  Plus,
  HelpCircle,
  FileText,
  Calendar,
  PhoneCall,
  Globe2,
  Radio,
  Eye,
  Bot,
  Plane
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function HomePage() {
  const [activeAboutTab, setActiveAboutTab] = useState<"what" | "do" | "for">("what");
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: "What is IEO Hub?",
      a: "The Innovation, Ecosystem, and Orchestration Hub (IEO Hub) is a strategic open innovation operating system designed to accelerate 5G-Advanced, AI, and physical-to-digital technology adoption for enterprise partners, startups, researchers, and government agencies."
    },
    {
      q: "Who is the IEO Hub platform for?",
      a: "IEO Hub is a playing ground for Malaysian and international visionaries: Startups, SMEs, Large Enterprises, Technology Providers, System Integrators, Universities, and Government Stakeholders looking to build and commercialize solutions."
    },
    {
      q: "How does the physical-to-digital facility booking work?",
      a: "Once registered with an Innovator or Partner account, you gain access to our smart facility scheduler. You can reserve MakerLab rapid prototyping stations, cleanrooms, optical XR studios, and executive alliance showcase arenas with real-time slot confirmation."
    },
    {
      q: "Do I need to be a corporate partner to access the technology showcase?",
      a: "The public technology showcase is open to browse general solution profiles. Full access to technical specifications, patent disclosures, and bilateral pilot matchmaking requires verified partner credentials."
    },
    {
      q: "How does IEO Hub protect Intellectual Property (IP)?",
      a: "Innovators retain ownership of their proprietary IP. Co-creation lifecycles operate under clear institutional sandbox agreements and non-disclosure frameworks overseen by ecosystem governance."
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col scroll-smooth selection:bg-primary/20">
      
      {/* Fixed Sticky Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/95 backdrop-blur px-4 sm:px-6 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-3 sm:space-x-4">
          <div className="relative h-10 w-10 rounded-xl bg-white p-1.5 flex items-center justify-center shadow-md border border-border/40 overflow-hidden shrink-0">
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
            <div className="flex items-center space-x-2">
              <span className="font-bold text-lg text-foreground tracking-tight">IEO Hub</span>
              <span className="hidden sm:inline-flex items-center text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <Radio className="h-2.5 w-2.5 mr-1 text-emerald-400 animate-pulse" /> Hub Active
              </span>
            </div>
            <span className="text-[10px] block -mt-0.5 uppercase tracking-widest text-muted-foreground font-semibold">
              Innovation • Ecosystem • Orchestration
            </span>
          </div>
        </div>

        {/* Right Actions: Language Selector + Booking / Auth CTA */}
        <div className="flex items-center space-x-2 sm:space-x-3">
          {/* Fixed Language Selector */}
          <div className="flex items-center space-x-1.5 px-2.5 py-1 rounded-lg border border-border/60 bg-secondary/30 text-xs font-semibold text-foreground">
            <Globe2 className="h-3.5 w-3.5 text-muted-foreground" />
            <span>EN</span>
          </div>

          <Link href="/facilities">
            <Button variant="outline" size="sm" className="hidden sm:inline-flex text-xs font-semibold">
              Book Now
            </Button>
          </Link>
          <Link href="/register">
            <Button variant="gradient" size="sm" className="text-xs font-semibold shadow-md">
              Join Now
            </Button>
          </Link>
          <Link href="/login">
            <Button variant="ghost" size="sm" className="text-xs font-semibold">
              Sign In
            </Button>
          </Link>
        </div>
      </header>

      {/* 3. Hero Section (Full Viewport on Desktop) */}
      <section className="relative min-h-[calc(100vh-4rem)] flex flex-col justify-between items-center text-center px-4 pt-12 pb-6 overflow-hidden">
        {/* Ambient Gradient Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-full bg-gradient-to-b from-blue-600/15 via-indigo-600/10 to-transparent blur-3xl pointer-events-none" />

        <div className="hidden md:block h-2" />

        <div className="container max-w-5xl mx-auto space-y-6 relative my-auto">
          {/* Eyebrow Tagline */}
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold text-primary">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Powering innovation & collaboration</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-foreground leading-[1.12]">
            Turn your ideas into reality with the power of{" "}
            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
              HYPER 5G and Neural AI.
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
            The Enterprise Innovation Platform (IEO Hub) connects physical facilities, structured co-creation lifecycles, and IP discovery into a single measurable operating system.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/register">
              <Button size="lg" variant="gradient" className="w-full sm:w-auto font-semibold px-8 h-12 text-base shadow-xl shadow-blue-500/20">
                Start your journey <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <a href="#about">
              <Button size="lg" variant="outline" className="w-full sm:w-auto px-8 h-12 text-base border-border/80">
                Discover IEO Framework
              </Button>
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="relative pt-4 pb-2 animate-bounce">
          <a
            href="#about"
            className="flex flex-col items-center space-y-1 text-muted-foreground hover:text-foreground transition-colors group cursor-pointer"
          >
            <span className="text-[11px] font-semibold tracking-widest uppercase text-muted-foreground group-hover:text-blue-400 transition-colors">
              Scroll to explore
            </span>
            <ChevronDown className="h-4 w-4 text-blue-400 group-hover:translate-y-0.5 transition-transform" />
          </a>
        </div>
      </section>

      {/* 4. "About IEO" Section (What is IEO / What We Do / Who IEO is For) */}
      <section id="about" className="py-20 border-t border-border/40 bg-card/20 px-6">
        <div className="container max-w-6xl mx-auto space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <Badge variant="outline" className="text-xs uppercase tracking-wider text-primary border-primary/30">
              About the Platform
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              A Strategic Foundation for Innovation
            </h2>
            <p className="text-sm text-muted-foreground">
              Built on 5G-Advanced and Neural AI to accelerate enterprise innovation and digital adoption in line with national technology mandates.
            </p>
          </div>

          {/* Interactive Selector Tabs */}
          <div className="flex justify-center">
            <div className="p-1 rounded-xl bg-card border border-border/60 flex space-x-1">
              <button
                onClick={() => setActiveAboutTab("what")}
                className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                  activeAboutTab === "what"
                    ? "bg-primary text-primary-foreground shadow"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                What is IEO Hub
              </button>
              <button
                onClick={() => setActiveAboutTab("do")}
                className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                  activeAboutTab === "do"
                    ? "bg-primary text-primary-foreground shadow"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                What We Do
              </button>
              <button
                onClick={() => setActiveAboutTab("for")}
                className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                  activeAboutTab === "for"
                    ? "bg-primary text-primary-foreground shadow"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Who It Is For
              </button>
            </div>
          </div>

          {/* Tab Content Display */}
          <div className="p-8 rounded-2xl border border-border/60 bg-card/80 backdrop-blur shadow-xl">
            {activeAboutTab === "what" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <div className="h-10 w-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center font-bold">
                    <Radio className="h-5 w-5" />
                  </div>
                  <h3 className="text-2xl font-bold">What is IEO Hub?</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    The Enterprise Innovation Platform (IEO Hub) is a strategic initiative designed to accelerate <strong>5G-Advanced (5G-A)</strong> and <strong>Artificial Intelligence (AI)</strong> adoption for Malaysian and regional enterprises.
                  </p>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    It acts as a digital and physical bridge linking real-world infrastructure (MakerLabs, cleanrooms, immersive XR arenas) with commercial industry opportunities.
                  </p>
                  <div className="pt-2">
                    <Link href="/register">
                      <Button variant="outline" size="sm" className="text-xs font-semibold">
                        Join Platform Ecosystem <ChevronRight className="h-3.5 w-3.5 ml-1" />
                      </Button>
                    </Link>
                  </div>
                </div>
                <div className="p-6 rounded-xl bg-secondary/30 border border-border/50 space-y-3">
                  <h4 className="text-xs uppercase font-bold tracking-wider text-primary">Core Tenets</h4>
                  <div className="space-y-2.5 text-xs text-muted-foreground">
                    <div className="flex items-start"><CheckCircle2 className="h-4 w-4 text-emerald-400 mr-2 shrink-0 mt-0.5" /> High-speed low-latency 5G-A edge connectivity</div>
                    <div className="flex items-start"><CheckCircle2 className="h-4 w-4 text-emerald-400 mr-2 shrink-0 mt-0.5" /> Physical testing labs for microelectronics & robotics</div>
                    <div className="flex items-start"><CheckCircle2 className="h-4 w-4 text-emerald-400 mr-2 shrink-0 mt-0.5" /> Stage-gate corporate incubation and pilot financing</div>
                  </div>
                </div>
              </div>
            )}

            {activeAboutTab === "do" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <div className="h-10 w-10 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center font-bold">
                    <Layers className="h-5 w-5" />
                  </div>
                  <h3 className="text-2xl font-bold">What We Do</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    IEO Hub serves as a <strong>neutral foundation</strong> that integrates physical tools, enterprise stakeholders, and funding resources, enabling friction-free collaboration and commercialization.
                  </p>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    We guide technological solutions through verification, live telemetry testing, and enterprise proof-of-concepts (PoC).
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-3 text-center">
                  <div className="p-4 rounded-xl border border-border/60 bg-secondary/20">
                    <div className="text-2xl font-bold text-foreground">42+</div>
                    <div className="text-[11px] text-muted-foreground mt-1">Pre-commercial Assets</div>
                  </div>
                  <div className="p-4 rounded-xl border border-border/60 bg-secondary/20">
                    <div className="text-2xl font-bold text-emerald-400">88.4%</div>
                    <div className="text-[11px] text-muted-foreground mt-1">Hub Space Utilization</div>
                  </div>
                  <div className="p-4 rounded-xl border border-border/60 bg-secondary/20">
                    <div className="text-2xl font-bold text-blue-400">128+</div>
                    <div className="text-[11px] text-muted-foreground mt-1">Ecosystem Partners</div>
                  </div>
                  <div className="p-4 rounded-xl border border-border/60 bg-secondary/20">
                    <div className="text-2xl font-bold text-amber-400">37+</div>
                    <div className="text-[11px] text-muted-foreground mt-1">Live Industry Pilots</div>
                  </div>
                </div>
              </div>
            )}

            {activeAboutTab === "for" && (
              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">A Playing Ground for Visionaries</h3>
                  <p className="text-sm text-muted-foreground">
                    IEO Hub unites stakeholders across Malaysia’s digital and industrial ecosystem:
                  </p>
                </div>
                <div className="flex flex-wrap gap-2.5 pt-2">
                  {[
                    "Startups",
                    "SMEs",
                    "Enterprises",
                    "Technology Companies",
                    "System Integrators",
                    "Universities & Academia",
                    "Government Agencies",
                    "Venture Investors"
                  ].map((category) => (
                    <div
                      key={category}
                      className="px-4 py-2 rounded-xl bg-secondary/50 border border-border/70 text-xs font-semibold text-foreground flex items-center space-x-2"
                    >
                      <CheckCircle2 className="h-3.5 w-3.5 text-blue-400" />
                      <span>{category}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 5. "We Drive 5G Innovation Journey" (Stage-Gate Pipeline) */}
      <section id="journey" className="py-20 border-t border-border/40 px-6">
        <div className="container max-w-6xl mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <Badge variant="outline" className="text-xs uppercase tracking-wider text-emerald-400 border-emerald-500/30">
              Structured Methodology
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              We Drive the Innovation Journey
            </h2>
            <p className="text-sm text-muted-foreground">
              A structured stage-gate approach that guides enterprises, agencies, and innovators from problem statements to refined, market-tested solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl border border-border/70 bg-card/60 relative space-y-3">
              <div className="h-8 w-8 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center font-bold text-xs">
                01
              </div>
              <h3 className="text-base font-bold text-foreground">Frame & Ideate</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Define commercial challenge statements with industry mentors, examine IP patents, and align architectural goals.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-border/70 bg-card/60 relative space-y-3">
              <div className="h-8 w-8 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center font-bold text-xs">
                02
              </div>
              <h3 className="text-base font-bold text-foreground">Develop</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Engineer rapid prototypes inside MakerLabs using industrial 5-axis CNCs, SLA 3D printers, and edge AI kits.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-border/70 bg-card/60 relative space-y-3">
              <div className="h-8 w-8 rounded-lg bg-indigo-500/10 text-indigo-400 flex items-center justify-center font-bold text-xs">
                03
              </div>
              <h3 className="text-base font-bold text-foreground">Test</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Validate low-latency wireless transmission, microfluidic sensing in Cleanrooms, and spatial audio in XR Studios.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-border/70 bg-card/60 relative space-y-3">
              <div className="h-8 w-8 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-bold text-xs">
                04
              </div>
              <h3 className="text-base font-bold text-foreground">Demo & Scale</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Showcase verified outcomes to enterprises, agencies, and investors in the Executive Alliance Arena for commercial contracts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. "Real World Use Case Development" */}
      <section id="use-cases" className="py-20 border-t border-border/40 bg-card/20 px-6">
        <div className="container max-w-6xl mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <Badge variant="outline" className="text-xs uppercase tracking-wider text-purple-400 border-purple-500/30">
              Live Demonstrations
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Real-World Use Case Development
            </h2>
            <p className="text-sm text-muted-foreground">
              Built and validated ahead of the IEO Hub physical launch to demonstrate technological proficiency and business value.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-card/70 border-border/70 hover:border-primary/50 transition-all">
              <CardHeader className="space-y-1">
                <div className="h-9 w-9 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center mb-2">
                  <Cpu className="h-5 w-5" />
                </div>
                <CardTitle className="text-lg font-bold">Digital Twin with 5G, IoT & Spatial AI</CardTitle>
                <CardDescription className="text-xs">Manufacturing & Logistics Sector</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Real-time synchronization between industrial SCADA telemetry and holographic visual twins, reducing unplanned downtime by up to 38%.
                </p>
                <div className="flex items-center space-x-2 text-[10px] font-mono text-muted-foreground">
                  <Badge variant="secondary">SCADA</Badge>
                  <Badge variant="secondary">OpenUSD</Badge>
                  <Badge variant="secondary">Sub-10ms Latency</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/70 border-border/70 hover:border-primary/50 transition-all">
              <CardHeader className="space-y-1">
                <div className="h-9 w-9 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-2">
                  <Eye className="h-5 w-5" />
                </div>
                <CardTitle className="text-lg font-bold">5G + AI-Driven Visual Intelligence</CardTitle>
                <CardDescription className="text-xs">Automated Quality Inspection</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-xs text-muted-foreground leading-relaxed">
                  High-speed optical defect recognition running on edge inference engines with immediate anomaly classification in high-yield assembly lines.
                </p>
                <div className="flex items-center space-x-2 text-[10px] font-mono text-muted-foreground">
                  <Badge variant="secondary">Computer Vision</Badge>
                  <Badge variant="secondary">TensorFlow Lite</Badge>
                  <Badge variant="secondary">99.8% Accuracy</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/70 border-border/70 hover:border-primary/50 transition-all">
              <CardHeader className="space-y-1">
                <div className="h-9 w-9 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center mb-2">
                  <Plane className="h-5 w-5" />
                </div>
                <CardTitle className="text-lg font-bold">5G Drone Patrolling & Data Capture</CardTitle>
                <CardDescription className="text-xs">Critical Infrastructure & Energy Grids</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Beyond Visual Line of Sight (BVLOS) autonomous aerial inspection streaming 4K thermal telemetry directly to hub operators for asset audits.
                </p>
                <div className="flex items-center space-x-2 text-[10px] font-mono text-muted-foreground">
                  <Badge variant="secondary">BVLOS</Badge>
                  <Badge variant="secondary">Thermal Imaging</Badge>
                  <Badge variant="secondary">Autonomous Docking</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/70 border-border/70 hover:border-primary/50 transition-all">
              <CardHeader className="space-y-1">
                <div className="h-9 w-9 rounded-lg bg-purple-500/10 text-purple-400 flex items-center justify-center mb-2">
                  <Bot className="h-5 w-5" />
                </div>
                <CardTitle className="text-lg font-bold">Humanoid Robotic Autonomous Intelligence</CardTitle>
                <CardDescription className="text-xs">Hazardous Cleanrooms & Precision Labs</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Bimanual manipulation and spatial navigation guided by cloud-orchestrated neural models for chemical handling and hazardous testing.
                </p>
                <div className="flex items-center space-x-2 text-[10px] font-mono text-muted-foreground">
                  <Badge variant="secondary">ROS 2</Badge>
                  <Badge variant="secondary">Spatial Audio</Badge>
                  <Badge variant="secondary">Cleanroom Certified</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 7. "What We Offer" Section */}
      <section id="offer" className="py-20 border-t border-border/40 px-6">
        <div className="container max-w-6xl mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <Badge variant="outline" className="text-xs uppercase tracking-wider text-primary border-primary/30">
              Ecosystem Enablement
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              What We Offer
            </h2>
            <p className="text-sm text-muted-foreground">
              Access comprehensive technical, industry, and funding support at every phase of your innovation lifecycle.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl border border-border/60 bg-card/60 space-y-2">
              <Building2 className="h-6 w-6 text-blue-400" />
              <h3 className="font-bold text-sm text-foreground">World-Class Facilities</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                ISO Class 6 Cleanrooms, rapid SLA 3D printing labs, spatial audio isolation chambers, and alliance pitch auditoriums.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-border/60 bg-card/60 space-y-2">
              <Users className="h-6 w-6 text-emerald-400" />
              <h3 className="font-bold text-sm text-foreground">Industry Mentors</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Direct advisory from telco network architects, enterprise CIOs, patent attorneys, and venture capital partners.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-border/60 bg-card/60 space-y-2">
              <ShieldCheck className="h-6 w-6 text-purple-400" />
              <h3 className="font-bold text-sm text-foreground">Regulatory Sandbox</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Safe testing zone conforming to MCMC, eIDAS 2.0, and national standards for rapid live compliance validation.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-border/60 bg-card/60 space-y-2">
              <TrendingUp className="h-6 w-6 text-amber-400" />
              <h3 className="font-bold text-sm text-foreground">Capital & Pilot Co-Creation</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Bilateral corporate matching, POC sponsorships, and direct procurement channels into enterprise supply chains.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. "Our Ecosystem & Partners" Section */}
      <section id="ecosystem" className="py-20 border-t border-border/40 bg-card/20 px-6">
        <div className="container max-w-6xl mx-auto space-y-10 text-center">
          <div className="max-w-2xl mx-auto space-y-2">
            <Badge variant="outline" className="text-xs uppercase tracking-wider text-foreground">
              Strategic Alliances
            </Badge>
            <h2 className="text-3xl font-extrabold tracking-tight">Our Ecosystem</h2>
            <p className="text-sm text-muted-foreground">
              IEO Hub collaborates with anchor technology partners, premier universities, ministries, and agencies to strengthen national innovation capabilities.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto pt-4">
            {[
              "Telecommunications Providers",
              "Industrial Robotics Institutes",
              "Cognitive Systems Labs",
              "CleanTech Research Centers",
              "Digital Economy Agencies",
              "Venture Capital Alliances",
              "University Science Parks",
              "Global Cloud Leaders"
            ].map((partner) => (
              <div
                key={partner}
                className="p-4 rounded-xl border border-border/60 bg-card/70 flex items-center justify-center text-xs font-semibold text-muted-foreground hover:text-foreground hover:border-primary/50 transition-colors"
              >
                {partner}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. "Latest Events & Case Studies" Section */}
      <section className="py-20 border-t border-border/40 px-6">
        <div className="container max-w-6xl mx-auto space-y-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <Badge variant="outline" className="text-xs uppercase tracking-wider text-primary border-primary/30">
                Newsroom & Milestones
              </Badge>
              <h2 className="text-3xl font-extrabold tracking-tight">Latest Events & Case Studies</h2>
            </div>
            <Link href="/login" className="text-xs font-semibold text-primary hover:underline flex items-center">
              View All Press Releases <ChevronRight className="h-4 w-4 ml-0.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-card/60 border-border/60">
              <CardHeader className="space-y-1">
                <span className="text-[11px] text-muted-foreground">Ecosystem Press Release • 2026</span>
                <CardTitle className="text-base font-bold">
                  IEO Hub Launches Open Innovation Operating System
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Introducing a unified physical-to-digital infrastructure to connect Malaysian talent, technology assets, and enterprise partners.
                </p>
                <div className="text-[11px] text-blue-400 font-semibold hover:underline cursor-pointer">
                  Read Announcement →
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/60 border-border/60">
              <CardHeader className="space-y-1">
                <span className="text-[11px] text-muted-foreground">Industry Pilot Case Study • 2026</span>
                <CardTitle className="text-base font-bold">
                  Deploying Spatial AI & Digital Twins in Advanced Manufacturing
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-xs text-muted-foreground leading-relaxed">
                  How high-speed edge telemetry reduced latency to 8ms across robotic assembly arms in our cluster MakerLab.
                </p>
                <div className="text-[11px] text-blue-400 font-semibold hover:underline cursor-pointer">
                  Read Case Study →
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/60 border-border/60">
              <CardHeader className="space-y-1">
                <span className="text-[11px] text-muted-foreground">Academic Research Alliance • 2026</span>
                <CardTitle className="text-base font-bold">
                  Accelerating CleanTech & Atmospheric Water Harvesting
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Validating advanced metal-organic framework (MOF) bio-sensing prototypes through ISO Class 6 Cleanroom facilities.
                </p>
                <div className="text-[11px] text-blue-400 font-semibold hover:underline cursor-pointer">
                  Read Case Study →
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 10. Frequently Asked Questions (FAQ) */}
      <section id="faqs" className="py-20 border-t border-border/40 bg-card/20 px-6">
        <div className="container max-w-4xl mx-auto space-y-10">
          <div className="text-center space-y-2">
            <Badge variant="outline" className="text-xs uppercase tracking-wider text-foreground">
              Knowledge Base
            </Badge>
            <h2 className="text-3xl font-extrabold tracking-tight">Frequently Asked Questions</h2>
            <p className="text-sm text-muted-foreground">
              Everything you need to know about joining, booking, and collaborating in the IEO Hub.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = expandedFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-xl border border-border/60 bg-card/70 overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setExpandedFaq(isOpen ? null : idx)}
                    className="w-full p-4 text-left flex items-center justify-between text-sm font-semibold text-foreground hover:text-primary transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`h-4 w-4 shrink-0 transition-transform ${isOpen ? "rotate-180 text-primary" : "text-muted-foreground"}`} />
                  </button>
                  {isOpen && (
                    <div className="px-4 pb-4 text-xs text-muted-foreground leading-relaxed border-t border-border/40 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 11. Pre-Footer Call to Action Banner */}
      <section className="py-16 border-t border-border/40 bg-gradient-to-r from-blue-950/40 via-card to-indigo-950/40 px-6 text-center">
        <div className="container max-w-4xl mx-auto space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
            Develop, test and demonstrate future-ready solutions.
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
            Join the IEO Ecosystem today to connect talent, technology assets, and enterprise partners through orchestrated innovation.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link href="/register">
              <Button size="lg" variant="gradient" className="w-full sm:w-auto font-semibold px-8 shadow-lg shadow-blue-500/20">
                Join Ecosystem Today
              </Button>
            </Link>
            <Link href="/facilities">
              <Button size="lg" variant="outline" className="w-full sm:w-auto px-8 border-border">
                Book Hub Facilities
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 12. Corporate Enterprise Footer */}
      <footer id="support" className="border-t border-border/40 py-14 px-6 bg-card/60 text-xs text-muted-foreground">
        <div className="container max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Col 1: Brand */}
          <div className="col-span-2 space-y-3">
            <div className="flex items-center space-x-3">
              <div className="h-8 w-8 rounded-lg bg-white p-1 flex items-center justify-center shadow-sm border border-border/40 overflow-hidden">
                <Image
                  src="/logo.jpg"
                  alt="IEO Hub Logo"
                  width={32}
                  height={32}
                  className="object-contain w-full h-full"
                />
              </div>
              <span className="font-bold text-base text-foreground">IEO Hub</span>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed max-w-sm">
              The Innovation, Ecosystem, and Orchestration Operating System powering 5G-Advanced and AI collaboration for visionary enterprises.
            </p>
          </div>

          {/* Col 2: About Platform */}
          <div className="space-y-2.5">
            <h4 className="font-semibold text-foreground text-xs uppercase tracking-wider">About IEO</h4>
            <ul className="space-y-1.5">
              <li><a href="#about" className="hover:text-foreground">Our Vision</a></li>
              <li><a href="#journey" className="hover:text-foreground">Innovation Journey</a></li>
              <li><a href="#ecosystem" className="hover:text-foreground">Anchor Partners</a></li>
              <li><Link href="/solutions" className="hover:text-foreground">Solutions Showcase</Link></li>
            </ul>
          </div>

          {/* Col 3: Facilities */}
          <div className="space-y-2.5">
            <h4 className="font-semibold text-foreground text-xs uppercase tracking-wider">Hub Facilities</h4>
            <ul className="space-y-1.5">
              <li><Link href="/facilities" className="hover:text-foreground">MakerLab & Prototyping</Link></li>
              <li><Link href="/facilities" className="hover:text-foreground">Cleanroom Microfluidics</Link></li>
              <li><Link href="/facilities" className="hover:text-foreground">Immersive XR Studio</Link></li>
              <li><Link href="/facilities" className="hover:text-foreground">Alliance Pitch Arena</Link></li>
            </ul>
          </div>

          {/* Col 4: Support & Legal */}
          <div className="space-y-2.5">
            <h4 className="font-semibold text-foreground text-xs uppercase tracking-wider">Support & Legal</h4>
            <ul className="space-y-1.5">
              <li><a href="#faqs" className="hover:text-foreground">Knowledge Base</a></li>
              <li><Link href="/login" className="hover:text-foreground">Partner Login</Link></li>
              <li><Link href="/register" className="hover:text-foreground">Request Access</Link></li>
              <li><span className="hover:text-foreground cursor-pointer">Terms & Conditions</span></li>
            </ul>
          </div>
        </div>

        <div className="container max-w-7xl mx-auto pt-8 border-t border-border/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px]">
          <p>© {new Date().getFullYear()} IEO Hub Platform (Innovation, Ecosystem, and Orchestration). All Rights Reserved.</p>
          <div className="flex space-x-4">
            <span className="hover:underline cursor-pointer">Privacy Notice</span>
            <span>•</span>
            <span className="hover:underline cursor-pointer">Regulatory Disclosures</span>
            <span>•</span>
            <span className="hover:underline cursor-pointer">Ecosystem Mandate</span>
          </div>
        </div>
      </footer>

    </div>
  );
}
