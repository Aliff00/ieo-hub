"use client";

import Link from "next/link";
import Image from "next/image";
import { signOut } from "next-auth/react";
import { 
  Bell, 
  ShieldCheck, 
  LogOut, 
  ChevronDown, 
  Sparkles, 
  Building2, 
  SlidersHorizontal 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useRole, UserRole } from "@/contexts/role-context";
import { LanguageSelector } from "@/components/shared/language-selector";
import { ThemeToggle } from "@/components/shared/theme-toggle";

export function Topbar() {
  const { activeRole, setActiveRole, currentProfile } = useRole();

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/95 backdrop-blur px-4 sm:px-6 h-16 flex items-center justify-between">
      {/* Brand & Workspace Indicator */}
      <div className="flex items-center space-x-4">
        <Link href="/dashboard" className="flex items-center space-x-3 group">
          <div className="relative h-9 w-9 rounded-lg bg-white p-1 flex items-center justify-center shadow-sm border border-border/40 overflow-hidden group-hover:scale-105 transition-transform">
            <Image
              src="/logo.jpg"
              alt="IEO Hub Logo"
              width={36}
              height={36}
              className="object-contain w-full h-full"
              priority
            />
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <span className="font-bold text-base text-foreground tracking-tight">IEO Hub</span>
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">
                ORCHESTRATION OS
              </span>
            </div>
            <span className="text-[10px] block -mt-0.5 uppercase tracking-wider text-muted-foreground font-semibold">
              Authenticated Workspace
            </span>
          </div>
        </Link>
      </div>

      {/* Center/Right: Role Switcher & Profile */}
      <div className="flex items-center space-x-3 sm:space-x-4">
        {/* Interactive Role Switcher for Testing/Demonstrating RBAC */}
        <div className="hidden lg:flex items-center space-x-1.5 p-1 rounded-xl bg-card border border-border/70 text-xs">
          <span className="text-[11px] font-semibold text-muted-foreground px-2 flex items-center">
            <SlidersHorizontal className="h-3 w-3 mr-1 text-primary" /> Active Persona:
          </span>
          {(["INNOVATOR", "PARTNER", "ADMIN"] as UserRole[]).map((r) => {
            const isActive = activeRole === r;
            const labels = {
              INNOVATOR: "🔬 Innovator",
              PARTNER: "🤝 Partner",
              ADMIN: "⚙️ Admin",
            };
            return (
              <button
                key={r}
                onClick={() => setActiveRole(r)}
                className={`px-2.5 py-1 rounded-lg font-medium text-xs transition-all ${
                  isActive
                    ? "bg-primary text-primary-foreground font-semibold shadow-sm"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/60"
                }`}
              >
                {labels[r]}
              </button>
            );
          })}
        </div>

        {/* Current Role Badge (Mobile & Tablet) */}
        <Badge variant="outline" className={`lg:hidden text-xs py-1 px-2.5 border ${currentProfile.badgeColor}`}>
          {currentProfile.badgeLabel}
        </Badge>

        {/* Language Selector */}
        <LanguageSelector />

        {/* Theme Toggle */}
        <ThemeToggle />

        {/* Public Showcase Link */}
        <Link href="/" className="hidden md:inline-flex">
          <Button variant="ghost" size="sm" className="text-xs text-muted-foreground hover:text-foreground">
            ← Public Portal
          </Button>
        </Link>

        {/* Notifications */}
        <Button variant="ghost" size="icon" aria-label="Notifications" className="text-muted-foreground hover:text-foreground">
          <Bell className="h-4 w-4" />
        </Button>

        {/* User Identity Display */}
        <Link href="/settings">
          <div className="flex items-center space-x-2.5 pl-2 border-l border-border cursor-pointer group">
            <div className="h-8 w-8 rounded-full bg-primary/20 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors flex items-center justify-center font-bold text-xs">
              {currentProfile.initials}
            </div>
            <div className="hidden xl:block text-left">
              <div className="text-xs font-semibold text-foreground leading-tight">{currentProfile.name}</div>
              <div className="text-[10px] text-muted-foreground">{currentProfile.organization}</div>
            </div>
          </div>
        </Link>

        {/* Sign Out Button */}
        <Button
          variant="ghost"
          size="icon"
          title="Sign Out to Public Showcase"
          onClick={() => signOut({ callbackUrl: "/" })}
          className="text-muted-foreground hover:text-rose-400 hover:bg-rose-500/10 transition-colors"
        >
          <LogOut className="h-4 w-4" />
        </Button>
      </div>
    </header>
  );
}
