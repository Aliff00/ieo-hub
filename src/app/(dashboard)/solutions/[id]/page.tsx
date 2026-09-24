"use client";

import Link from "next/link";
import { ArrowLeft, CheckCircle2, FileText, Share2, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function SolutionDetailPage({ params }: { params: { id: string } }) {
  return (
    <div className="space-y-6 max-w-5xl">
      <Link href="/solutions" className="inline-flex items-center text-xs text-muted-foreground hover:text-foreground">
        <ArrowLeft className="h-3.5 w-3.5 mr-1" /> Back to Solutions Catalog
      </Link>

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-border/60">
        <div>
          <div className="flex items-center space-x-2">
            <Badge variant="info">AI & Cognitive Systems</Badge>
            <Badge variant="success">TRL 7 - Prototype Demonstrated</Badge>
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight text-foreground mt-2">
            NeuroMesh Edge AI (Ref: {params.id})
          </h1>
          <p className="text-xs text-muted-foreground mt-1">
            Engineered by Cognitive Systems Lab • Partner Program: Next-Gen Industrial Autonomy
          </p>
        </div>

        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm">
            <Share2 className="h-4 w-4 mr-1.5" /> Share Asset
          </Button>
          <Button variant="gradient" size="sm">
            <Mail className="h-4 w-4 mr-1.5" /> Request Co-Creation Pilot
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-6">
          <Card className="bg-card/60">
            <CardHeader>
              <CardTitle className="text-base font-bold">Executive Technology Summary</CardTitle>
            </CardHeader>
            <CardContent className="text-xs text-muted-foreground space-y-3 leading-relaxed">
              <p>
                NeuroMesh Edge AI provides high-frequency low-overhead model quantization and sharding across embedded microcontroller clusters. It enables offline visual defect detection without reliance on centralized cloud APIs.
              </p>
              <p>
                The solution has completed rigorous testbed benchmarks at Physical Hub MakerLab #2, exhibiting a 99.4% detection accuracy at 12ms per frame inference speeds.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card/60">
            <CardHeader>
              <CardTitle className="text-base font-bold">Architecture & Integration Readiness</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-xs">
              <div className="flex items-center space-x-2 text-foreground">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                <span>Compatible with standard ONNX, TensorRT, and OpenVINO runtimes</span>
              </div>
              <div className="flex items-center space-x-2 text-foreground">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                <span>Zero-trust cryptographic device attestation baked into firmware</span>
              </div>
              <div className="flex items-center space-x-2 text-foreground">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                <span>Enterprise SDK available in Rust, C++, and Python</span>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card className="bg-card/60">
            <CardHeader>
              <CardTitle className="text-base font-bold">Intellectual Property & Audit</CardTitle>
            </CardHeader>
            <CardContent className="text-xs space-y-3">
              <div>
                <span className="text-muted-foreground block text-[11px]">Patent Status</span>
                <span className="font-semibold text-foreground">PCT Application #2026-9041A</span>
              </div>
              <div>
                <span className="text-muted-foreground block text-[11px]">License Model</span>
                <span className="font-semibold text-foreground">Joint Commercial / Enterprise Royalty</span>
              </div>
              <div className="pt-2 border-t border-border/40">
                <Button variant="outline" size="sm" className="w-full text-xs">
                  <FileText className="h-3.5 w-3.5 mr-1.5" /> Download Technical Whitepaper
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
