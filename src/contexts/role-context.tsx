"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { useSession } from "next-auth/react";

export type UserRole = "INNOVATOR" | "PARTNER" | "ADMIN";

export interface RoleProfile {
  name: string;
  role: UserRole;
  title: string;
  organization: string;
  initials: string;
  badgeLabel: string;
  badgeColor: string;
}

export const ROLE_PROFILES: Record<UserRole, RoleProfile> = {
  INNOVATOR: {
    name: "Dr. Jordan Hayes",
    role: "INNOVATOR",
    title: "Lead DeepTech Innovator",
    organization: "NeuroMesh AI Labs",
    initials: "JH",
    badgeLabel: "Innovator Portal",
    badgeColor: "text-primary border-primary/20 bg-primary/10",
  },
  PARTNER: {
    name: "Dr. Alex Danvers",
    role: "PARTNER",
    title: "VP Technology Alliances",
    organization: "Global CleanTech Alliances",
    initials: "AD",
    badgeLabel: "Enterprise Partner Portal",
    badgeColor: "text-primary border-primary/20 bg-primary/10",
  },
  ADMIN: {
    name: "Sarah Lin",
    role: "ADMIN",
    title: "Hub Orchestration Director",
    organization: "IEO Ecosystem Command",
    initials: "SL",
    badgeLabel: "Hub Admin & Operator",
    badgeColor: "text-primary border-primary/20 bg-primary/10",
  },
};

interface RoleContextType {
  activeRole: UserRole;
  setActiveRole: (role: UserRole) => void;
  currentProfile: RoleProfile;
}

const RoleContext = createContext<RoleContextType | undefined>(undefined);

export function RoleProvider({ children }: { children: React.ReactNode }) {
  const { data: session } = useSession();
  const [activeRole, setActiveRole] = useState<UserRole>("PARTNER");

  useEffect(() => {
    if (session?.user?.role) {
      const sessionRole = (session.user.role as string).toUpperCase() as UserRole;
      if (ROLE_PROFILES[sessionRole]) {
        setActiveRole(sessionRole);
      }
    }
  }, [session]);

  const currentProfile = ROLE_PROFILES[activeRole];

  return (
    <RoleContext.Provider value={{ activeRole, setActiveRole, currentProfile }}>
      {children}
    </RoleContext.Provider>
  );
}

export function useRole() {
  const context = useContext(RoleContext);
  if (!context) {
    throw new Error("useRole must be used within a RoleProvider");
  }
  return context;
}
