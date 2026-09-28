"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { signIn } from "next-auth/react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    await signIn("credentials", {
      email,
      password,
      callbackUrl: "/dashboard",
    });
    setIsLoading(false);
  };

  return (
    <div className="container flex min-h-screen max-w-md items-center justify-center py-12 px-4 mx-auto">
      <Card className="w-full border-border/80 bg-card/80 backdrop-blur shadow-xl">
        <CardHeader className="space-y-1 text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white p-2 shadow-lg border border-border/40 overflow-hidden">
            <Image
              src="/logo.jpg"
              alt="IEO Hub Logo"
              width={56}
              height={56}
              className="object-contain w-full h-full"
              priority
            />
          </div>
          <CardTitle className="text-2xl font-bold tracking-tight mt-3">
            IEO Hub Platform
          </CardTitle>
          <CardDescription className="text-xs">
            Innovation, Ecosystem, and Orchestration Portal
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-4">
          <form onSubmit={handleSubmit} className="space-y-3">
            <div className="space-y-1">
              <label className="text-xs font-semibold text-foreground">Partner Email</label>
              <Input
                type="email"
                placeholder="innovator@enterprise.org"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-semibold text-foreground">Password</label>
              <Input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <Button
              type="submit"
              variant="gradient"
              className="w-full mt-2 font-semibold"
              disabled={isLoading}
            >
              {isLoading ? "Authenticating..." : "Sign In to Orchestration OS"}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </form>

          {/* Quick Demo Persona Sign-In */}
          <div className="pt-2">
            <div className="relative flex py-2 items-center">
              <div className="flex-grow border-t border-border/60"></div>
              <span className="flex-shrink mx-2 text-[10px] uppercase font-semibold text-muted-foreground tracking-wider">
                Or Test By Role
              </span>
              <div className="flex-grow border-t border-border/60"></div>
            </div>

            <div className="grid grid-cols-3 gap-2 pt-1">
              <button
                type="button"
                onClick={() => {
                  setEmail("innovator@ieohub.org");
                  setPassword("password123");
                  signIn("credentials", {
                    email: "innovator@ieohub.org",
                    password: "password123",
                    callbackUrl: "/dashboard",
                  });
                }}
                className="p-2 rounded-lg border border-border bg-secondary/60 text-foreground hover:bg-primary hover:text-primary-foreground text-center transition-all text-xs font-medium"
              >
                🔬 Innovator
              </button>

              <button
                type="button"
                onClick={() => {
                  setEmail("partner@enterprise.org");
                  setPassword("password123");
                  signIn("credentials", {
                    email: "partner@enterprise.org",
                    password: "password123",
                    callbackUrl: "/dashboard",
                  });
                }}
                className="p-2 rounded-lg border border-border bg-secondary/60 text-foreground hover:bg-primary hover:text-primary-foreground text-center transition-all text-xs font-medium"
              >
                🤝 Partner
              </button>

              <button
                type="button"
                onClick={() => {
                  setEmail("admin@ieohub.org");
                  setPassword("password123");
                  signIn("credentials", {
                    email: "admin@ieohub.org",
                    password: "password123",
                    callbackUrl: "/dashboard",
                  });
                }}
                className="p-2 rounded-lg border border-border bg-secondary/60 text-foreground hover:bg-primary hover:text-primary-foreground text-center transition-all text-xs font-medium"
              >
                ⚙️ Admin
              </button>
            </div>
          </div>
        </CardContent>

        <CardFooter className="flex flex-col space-y-2 text-center text-xs text-muted-foreground border-t border-border/50 pt-4">
          <div>
            Need an enterprise account?{" "}
            <Link href="/register" className="font-semibold text-primary hover:underline">
              Request Partner Access
            </Link>
          </div>
          <div>
            <Link href="/" className="hover:underline text-[11px] text-muted-foreground">
              ← Return to Public Showcase
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
