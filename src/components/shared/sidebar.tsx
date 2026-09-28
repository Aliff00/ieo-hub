"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, 
  Lightbulb, 
  Building2, 
  GitBranch, 
  TrendingUp, 
  Settings, 
  ArrowUpRight,
  ShieldCheck,
  CheckCircle2,
  Cpu,
  FolderKanban,
  FileCheck2,
  Users
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useRole, UserRole } from "@/contexts/role-context";

interface NavItem {
  name: string;
  href: string;
  icon: any;
  badge?: string;
}

const ROLE_NAVIGATION: Record<UserRole, NavItem[]> = {
  INNOVATOR: [
    { name: "My Innovations", href: "/dashboard", icon: LayoutDashboard },
    { name: "Prototype Catalog", href: "/solutions", icon: Lightbulb, badge: "Submit IP" },
    { name: "Lab & Tool Booking", href: "/facilities", icon: Building2 },
    { name: "Stage Progression", href: "/lifecycles", icon: GitBranch },
    { name: "Patents & Impact", href: "/impact", icon: TrendingUp },
    { name: "Innovator Profile", href: "/settings", icon: Settings },
  ],
  PARTNER: [
    { name: "Ecosystem Dashboard", href: "/dashboard", icon: LayoutDashboard },
    { name: "Solutions Discovery", href: "/solutions", icon: Lightbulb, badge: "Scout" },
    { name: "Executive Hub Booking", href: "/facilities", icon: Building2 },
    { name: "Co-Creation Programs", href: "/lifecycles", icon: GitBranch },
    { name: "Impact & Value Board", href: "/impact", icon: TrendingUp },
    { name: "Enterprise Settings", href: "/settings", icon: Settings },
  ],
  ADMIN: [
    { name: "Hub Command Center", href: "/dashboard", icon: LayoutDashboard },
    { name: "Solution Verification", href: "/solutions", icon: FileCheck2, badge: "Review" },
    { name: "Facility Orchestration", href: "/facilities", icon: Building2, badge: "Approve" },
    { name: "Program Orchestration", href: "/lifecycles", icon: FolderKanban },
    { name: "Macro Ecosystem KPI", href: "/impact", icon: TrendingUp },
    { name: "System Admin", href: "/settings", icon: Settings },
  ],
};

export function Sidebar() {
  const pathname = usePathname();
  const { activeRole, currentProfile } = useRole();

  const navigation = ROLE_NAVIGATION[activeRole] || ROLE_NAVIGATION.PARTNER;

  return (
    <aside className="w-64 border-r border-border bg-card/60 flex flex-col h-[calc(100vh-4rem)] sticky top-16 select-none shrink-0">
      {/* Role Indicator Banner */}
      <div className="p-4 border-b border-border/40">
        <div className={`flex items-center justify-between space-x-2 px-3 py-2 rounded-xl border text-xs shadow-sm ${currentProfile.badgeColor}`}>
          <div className="flex items-center space-x-2">
            <span className="font-semibold">{currentProfile.badgeLabel}</span>
          </div>
          <span className="text-[10px] font-mono uppercase bg-background/60 px-1.5 py-0.5 rounded border border-current">
            {activeRole}
          </span>
        </div>
      </div>

      {/* Role Navigation Items */}
      <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
        {navigation.map((item) => {
          const isActive = pathname === item.href || (item.href !== "/dashboard" && pathname.startsWith(item.href));
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                isActive
                  ? "bg-primary text-primary-foreground font-semibold shadow-sm"
                  : "text-muted-foreground hover:bg-secondary hover:text-foreground"
              )}
            >
              <div className="flex items-center space-x-3">
                <item.icon className="h-4 w-4 shrink-0" />
                <span>{item.name}</span>
              </div>
              {item.badge && (
                <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-medium ${
                  isActive ? "bg-white/20 text-white" : "bg-primary/10 text-primary"
                }`}>
                  {item.badge}
                </span>
              )}
            </Link>
          );
        })}
      </nav>

      {/* Bottom Sandbox / Context Info */}
      <div className="p-4 border-t border-border/40 space-y-3">
        <div className="rounded-lg bg-secondary/50 p-3 text-xs border border-border/50">
          <div className="font-semibold text-foreground flex items-center justify-between">
            <span>{currentProfile.name}</span>
            <span className="text-[9px] bg-emerald-500/10 text-emerald-400 px-1.5 py-0.5 rounded font-mono">ONLINE</span>
          </div>
          <p className="text-muted-foreground mt-1 text-[11px] leading-relaxed truncate">
            {currentProfile.title}
          </p>
          <div className="pt-2 mt-2 border-t border-border/40 flex items-center justify-between text-[11px]">
            <Link href="/" className="inline-flex items-center text-primary hover:underline font-semibold">
              Public Portal <ArrowUpRight className="h-3 w-3 ml-0.5" />
            </Link>
            <span className="text-[10px] text-muted-foreground">Cluster #4</span>
          </div>
        </div>
      </div>
    </aside>
  );
}
