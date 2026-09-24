"use client";

import Link from "next/link";
import { Bell, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function Topbar() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/95 backdrop-blur px-6 h-16 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <Link href="/" className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold text-sm shadow">
            IEO
          </div>
          <div>
            <span className="font-bold text-base text-foreground tracking-tight">IEO Hub</span>
            <span className="text-[10px] block -mt-1 uppercase tracking-widest text-muted-foreground font-semibold">
              Innovation & Orchestration
            </span>
          </div>
        </Link>
      </div>

      <div className="flex items-center space-x-4">
        <Badge variant="outline" className="hidden sm:inline-flex items-center text-xs py-1 px-2.5 bg-secondary/40 border-border">
          <ShieldCheck className="h-3.5 w-3.5 text-emerald-400 mr-1.5" />
          Partner Ecosystem Gateway
        </Badge>

        <Button variant="ghost" size="icon" aria-label="Notifications" className="text-muted-foreground hover:text-foreground">
          <Bell className="h-4 w-4" />
        </Button>

        <Link href="/settings">
          <div className="flex items-center space-x-2.5 pl-2 border-l border-border cursor-pointer">
            <div className="h-8 w-8 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-xs">
              AD
            </div>
            <div className="hidden md:block text-left">
              <div className="text-xs font-semibold text-foreground">Dr. Alex Danvers</div>
              <div className="text-[10px] text-muted-foreground">Chief Innovation Officer</div>
            </div>
          </div>
        </Link>
      </div>
    </header>
  );
}
