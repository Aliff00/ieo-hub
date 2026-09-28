"use client";

import React, { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SessionProvider } from "next-auth/react";
import { RoleProvider } from "@/contexts/role-context";

export function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 60 * 1000,
            refetchOnWindowFocus: false,
          },
        },
      })
  );

  return (
    <SessionProvider basePath="/api/auth">
      <QueryClientProvider client={queryClient}>
        <RoleProvider>
          {children}
        </RoleProvider>
      </QueryClientProvider>
    </SessionProvider>
  );
}
