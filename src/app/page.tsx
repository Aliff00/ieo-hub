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
  Plane,
  Leaf,
  Landmark,
  GraduationCap,
  Cloud
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ThemeToggle } from "@/components/shared/theme-toggle";
import { LanguageSelector } from "@/components/shared/language-selector";
import { useLanguage } from "@/contexts/language-context";

export default function HomePage() {
  const { t } = useLanguage();
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

  const ecosystemPartners = [
    { name: "Telecommunications Providers", category: "Core 5G-A Network", icon: Radio },
    { name: "Industrial Robotics Institutes", category: "Advanced Automation", icon: Bot },
    { name: "Cognitive Systems Labs", category: "Edge AI & Compute", icon: Cpu },
    { name: "CleanTech Research Centers", category: "Sustainable Tech", icon: Leaf },
    { name: "Digital Economy Agencies", category: "Public Sector", icon: Landmark },
    { name: "Venture Capital Alliances", category: "Growth Capital", icon: TrendingUp },
    { name: "University Science Parks", category: "Academic Research", icon: GraduationCap },
    { name: "Global Cloud Leaders", category: "Hyperscale Cloud", icon: Cloud },
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
            </div>
            <span className="text-[10px] block -mt-0.5 uppercase tracking-widest text-muted-foreground font-semibold">
              Innovation • Ecosystem • Orchestration
            </span>
          </div>
        </div>

        {/* Right Actions: Language Selector + Theme Toggle + Booking / Auth CTA */}
        <div className="flex items-center space-x-2 sm:space-x-3">
          {/* Interactive Language Selector with Globe icon */}
          <LanguageSelector />

          {/* Theme Toggle */}
          <ThemeToggle />

          <Link href="/facilities">
            <Button variant="outline" size="sm" className="hidden sm:inline-flex text-xs font-semibold">
              {t("bookNow")}
            </Button>
          </Link>
          <Link href="/register">
            <Button variant="gradient" size="sm" className="text-xs font-semibold shadow-md">
              {t("joinNow")}
            </Button>
          </Link>
          <Link href="/login">
            <Button variant="ghost" size="sm" className="text-xs font-semibold">
              {t("signIn")}
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
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold text-primary uppercase tracking-wider">
            <Sparkles className="h-3.5 w-3.5" />
            <span>{t("tagline")}</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-foreground leading-[1.12]">
            {t("heroTitlePrefix")}{" "}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
              {t("heroTitleAccent")}
            </span>
          </h1>

          <p className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
            {t("heroDesc")}
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/facilities">
              <Button size="lg" variant="gradient" className="w-full sm:w-auto font-semibold px-8 h-12 text-base shadow-xl shadow-blue-500/20">
                {t("startJourney")} <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <a href="#journey">
              <Button size="lg" variant="outline" className="w-full sm:w-auto px-8 h-12 text-base border-border">
                {t("discoverFramework")}
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
            <span className="text-[11px] font-semibold tracking-widest uppercase text-muted-foreground group-hover:text-primary transition-colors">
              {t("scrollToExplore")}
            </span>
            <ChevronDown className="h-4 w-4 text-primary group-hover:translate-y-0.5 transition-transform" />
          </a>
        </div>
      </section>

      {/* 4. "About IEO" Section (What is IEO / What We Do / Who IEO is For) */}
      <section id="about" className="py-20 border-t border-border/40 bg-card/20 px-6">
        <div className="container max-w-6xl mx-auto space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <Badge variant="outline" className="text-xs uppercase tracking-wider text-primary border-primary/30">
              {t("aboutBadge")}
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              {t("aboutTitle")}
            </h2>
            <p className="text-sm text-muted-foreground">
              {t("aboutDesc")}
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
                {t("tabWhat")}
              </button>
              <button
                onClick={() => setActiveAboutTab("do")}
                className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                  activeAboutTab === "do"
                    ? "bg-primary text-primary-foreground shadow"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {t("tabDo")}
              </button>
              <button
                onClick={() => setActiveAboutTab("for")}
                className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                  activeAboutTab === "for"
                    ? "bg-primary text-primary-foreground shadow"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {t("tabFor")}
              </button>
            </div>
          </div>

          {/* Tab Content Display */}
          <div className="p-8 rounded-2xl border border-border/60 bg-card/80 backdrop-blur shadow-xl">
            {activeAboutTab === "what" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <div className="h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold">
                    <Radio className="h-5 w-5" />
                  </div>
                  <h3 className="text-2xl font-bold">{t("whatTitle")}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {t("whatDesc1")}
                  </p>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {t("whatDesc2")}
                  </p>
                  <div className="pt-2">
                    <Link href="/register">
                      <Button variant="outline" size="sm" className="text-xs font-semibold">
                        {t("joinEip")} <ChevronRight className="h-3.5 w-3.5 ml-1" />
                      </Button>
                    </Link>
                  </div>
                </div>
                <div className="p-6 rounded-xl bg-secondary/30 border border-border/50 space-y-3">
                  <h4 className="text-xs uppercase font-bold tracking-wider text-primary">{t("coreTenets")}</h4>
                  <div className="space-y-2.5 text-xs text-muted-foreground">
                    <div className="flex items-start"><CheckCircle2 className="h-4 w-4 text-primary mr-2 shrink-0 mt-0.5" /> {t("tenet1")}</div>
                    <div className="flex items-start"><CheckCircle2 className="h-4 w-4 text-primary mr-2 shrink-0 mt-0.5" /> {t("tenet2")}</div>
                    <div className="flex items-start"><CheckCircle2 className="h-4 w-4 text-primary mr-2 shrink-0 mt-0.5" /> {t("tenet3")}</div>
                  </div>
                </div>
              </div>
            )}

            {activeAboutTab === "do" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <div className="h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold">
                    <Layers className="h-5 w-5" />
                  </div>
                  <h3 className="text-2xl font-bold">{t("doTitle")}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {t("doDesc1")}
                  </p>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {t("doDesc2")}
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-3 text-center">
                  <div className="p-4 rounded-xl border border-border/60 bg-secondary/20">
                    <div className="text-2xl font-bold text-foreground">42+</div>
                    <div className="text-[11px] text-muted-foreground mt-1">{t("statAssets")}</div>
                  </div>
                  <div className="p-4 rounded-xl border border-border/60 bg-secondary/20">
                    <div className="text-2xl font-bold text-primary">88.4%</div>
                    <div className="text-[11px] text-muted-foreground mt-1">{t("statUtilization")}</div>
                  </div>
                  <div className="p-4 rounded-xl border border-border/60 bg-secondary/20">
                    <div className="text-2xl font-bold text-primary">128+</div>
                    <div className="text-[11px] text-muted-foreground mt-1">{t("statPartners")}</div>
                  </div>
                  <div className="p-4 rounded-xl border border-border/60 bg-secondary/20">
                    <div className="text-2xl font-bold text-primary">37+</div>
                    <div className="text-[11px] text-muted-foreground mt-1">{t("statPilots")}</div>
                  </div>
                </div>
              </div>
            )}

            {activeAboutTab === "for" && (
              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">{t("forTitle")}</h3>
                  <p className="text-sm text-muted-foreground">
                    {t("forDesc")}
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
            <Badge variant="outline" className="text-xs uppercase tracking-wider text-primary border-primary/30">
              {t("journeyBadge")}
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              {t("journeyTitle")}
            </h2>
            <p className="text-sm text-muted-foreground">
              {t("journeyDesc")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl border border-border/70 bg-card/60 relative space-y-3">
              <div className="h-8 w-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-bold text-xs">
                01
              </div>
              <h3 className="text-base font-bold text-foreground">{t("stage1Title")}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {t("stage1Desc")}
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-border/70 bg-card/60 relative space-y-3">
              <div className="h-8 w-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-bold text-xs">
                02
              </div>
              <h3 className="text-base font-bold text-foreground">{t("stage2Title")}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {t("stage2Desc")}
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-border/70 bg-card/60 relative space-y-3">
              <div className="h-8 w-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-bold text-xs">
                03
              </div>
              <h3 className="text-base font-bold text-foreground">{t("stage3Title")}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {t("stage3Desc")}
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-border/70 bg-card/60 relative space-y-3">
              <div className="h-8 w-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-bold text-xs">
                04
              </div>
              <h3 className="text-base font-bold text-foreground">{t("stage4Title")}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {t("stage4Desc")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. "Real World Use Case Development" */}
      <section id="use-cases" className="py-20 border-t border-border/40 bg-card/20 px-6">
        <div className="container max-w-6xl mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <Badge variant="outline" className="text-xs uppercase tracking-wider text-primary border-primary/30">
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
                <div className="h-9 w-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-2">
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
                <div className="h-9 w-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-2">
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
                <div className="h-9 w-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-2">
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
                <div className="h-9 w-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-2">
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
              {t("offerBadge")}
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              {t("offerTitle")}
            </h2>
            <p className="text-sm text-muted-foreground">
              {t("offerDesc")}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl border border-border/60 bg-card/60 space-y-2">
              <Building2 className="h-6 w-6 text-primary" />
              <h3 className="font-bold text-sm text-foreground">{t("offer1Title")}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {t("offer1Desc")}
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-border/60 bg-card/60 space-y-2">
              <Users className="h-6 w-6 text-primary" />
              <h3 className="font-bold text-sm text-foreground">{t("offer2Title")}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {t("offer2Desc")}
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-border/60 bg-card/60 space-y-2">
              <ShieldCheck className="h-6 w-6 text-primary" />
              <h3 className="font-bold text-sm text-foreground">{t("offer3Title")}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {t("offer3Desc")}
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-border/60 bg-card/60 space-y-2">
              <TrendingUp className="h-6 w-6 text-primary" />
              <h3 className="font-bold text-sm text-foreground">{t("offer4Title")}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {t("offer4Desc")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. "Our Ecosystem & Partners" Section */}
      <section id="ecosystem" className="py-20 border-t border-border/40 bg-card/20 overflow-hidden">
        <div className="container max-w-6xl mx-auto space-y-10 text-center px-6">
          <div className="max-w-2xl mx-auto space-y-2">
            <Badge variant="outline" className="text-xs uppercase tracking-wider text-foreground">
              {t("ecosystemBadge")}
            </Badge>
            <h2 className="text-3xl font-extrabold tracking-tight">{t("ecosystemTitle")}</h2>
            <p className="text-sm text-muted-foreground">
              {t("ecosystemDesc")}
            </p>
          </div>
        </div>

        {/* Continuous Moving Horizontal Logos Track (Right to Left) */}
        <div className="relative w-full overflow-hidden mt-10">
          {/* Subtle gradient edge masks for smooth fade in/out */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-background via-background/80 to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-background via-background/80 to-transparent z-10" />

          {/* Marquee Row */}
          <div className="flex animate-marquee gap-4 sm:gap-6 py-3">
            {[...ecosystemPartners, ...ecosystemPartners].map((partner, idx) => {
              const Icon = partner.icon;
              return (
                <div
                  key={`${partner.name}-${idx}`}
                  className="group flex items-center space-x-3.5 px-5 py-3.5 rounded-2xl border border-border/70 bg-card/85 backdrop-blur-sm shadow-xs hover:border-primary/60 hover:bg-card hover:shadow-lg hover:shadow-primary/5 transition-all duration-200 shrink-0 cursor-default select-none"
                >
                  <div className="h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-200">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs font-bold text-foreground group-hover:text-primary transition-colors whitespace-nowrap">
                      {partner.name}
                    </div>
                    <div className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold">
                      {partner.category}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 9. "Latest Events & Case Studies" Section */}
      <section className="py-20 border-t border-border/40 px-6">
        <div className="container max-w-6xl mx-auto space-y-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <Badge variant="outline" className="text-xs uppercase tracking-wider text-primary border-primary/30">
                {t("newsroomBadge")}
              </Badge>
              <h2 className="text-3xl font-extrabold tracking-tight">{t("newsroomTitle")}</h2>
            </div>
            <Link href="/login" className="text-xs font-semibold text-primary hover:underline flex items-center">
              {t("viewAllPress")} <ChevronRight className="h-4 w-4 ml-0.5" />
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
                <div className="text-[11px] text-primary font-semibold hover:underline cursor-pointer">
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
                <div className="text-[11px] text-primary font-semibold hover:underline cursor-pointer">
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
                <div className="text-[11px] text-primary font-semibold hover:underline cursor-pointer">
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
              {t("faqBadge")}
            </Badge>
            <h2 className="text-3xl font-extrabold tracking-tight">{t("faqTitle")}</h2>
            <p className="text-sm text-muted-foreground">
              {t("faqDesc")}
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
      <section className="py-16 border-t border-border/40 bg-gradient-to-r from-blue-600/10 via-purple-600/5 to-indigo-600/10 dark:from-blue-950/40 dark:via-card dark:to-purple-950/40 px-6 text-center">
        <div className="container max-w-4xl mx-auto space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
            {t("ctaTitle")}
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
            {t("ctaDesc")}
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link href="/register">
              <Button size="lg" variant="gradient" className="w-full sm:w-auto font-semibold px-8 shadow-xl shadow-blue-500/20">
                {t("joinEip")}
              </Button>
            </Link>
            <Link href="/facilities">
              <Button size="lg" variant="outline" className="w-full sm:w-auto px-8 border-border">
                {t("bookFacilities")}
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
