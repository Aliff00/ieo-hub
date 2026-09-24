"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, 
  Lightbulb, 
  Building2, 
  GitBranch, 
  TrendingUp, 
  Settings, 
  Layers,
  ArrowUpRight
} from "lucide-react";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Solutions Catalog", href: "/solutions", icon: Lightbulb },
  { name: "Hub Facilities", href: "/facilities", icon: Building2 },
  { name: "Innovation Lifecycles", href: "/lifecycles", icon: GitBranch },
  { name: "Impact & KPIs", href: "/impact", icon: TrendingUp },
  { name: "Settings", href: "/settings", icon: Settings },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 border-r border-border bg-card/60 flex flex-col h-[calc(100vh-4rem)] sticky top-16 select-none">
      <div className="p-4 border-b border-border/40">
        <div className="flex items-center space-x-2 px-2 py-1.5 rounded-lg bg-primary/10 text-primary border border-primary/20">
          <Layers className="h-4 w-4" />
          <div className="text-xs font-semibold">Orchestration OS v2.4</div>
        </div>
      </div>

      <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
        {navigation.map((item) => {
          const isActive = pathname === item.href || (item.href !== "/dashboard" && pathname.startsWith(item.href));
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex items-center space-x-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                isActive
                  ? "bg-primary text-primary-foreground font-semibold shadow-sm"
                  : "text-muted-foreground hover:bg-secondary hover:text-foreground"
              )}
            >
              <item.icon className="h-4 w-4 shrink-0" />
              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-border/40 space-y-3">
        <div className="rounded-lg bg-secondary/50 p-3 text-xs border border-border/50">
          <div className="font-semibold text-foreground flex items-center justify-between">
            <span>Enterprise Tier</span>
            <span className="text-[10px] bg-emerald-500/10 text-emerald-400 px-1.5 py-0.5 rounded font-mono">LIVE</span>
          </div>
          <p className="text-muted-foreground mt-1 text-[11px] leading-relaxed">
            Connected to IEO Physical Hub Cluster #4
          </p>
          <Link href="/" className="inline-flex items-center text-primary hover:underline text-[11px] font-semibold mt-2">
            View Public Showcase <ArrowUpRight className="h-3 w-3 ml-0.5" />
          </Link>
        </div>
      </div>
    </aside>
  );
}
