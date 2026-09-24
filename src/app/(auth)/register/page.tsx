"use client";

import { useState } from "react";
import Link from "next/link";
import { Layers, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [org, setOrg] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = "/login";
  };

  return (
    <div className="container flex min-h-screen max-w-md items-center justify-center py-12 px-4 mx-auto">
      <Card className="w-full border-border/80 bg-card/80 backdrop-blur shadow-xl">
        <CardHeader className="space-y-1 text-center">
          <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white shadow-md">
            <Layers className="h-5 w-5" />
          </div>
          <CardTitle className="text-2xl font-bold tracking-tight mt-2">
            Join the IEO Ecosystem
          </CardTitle>
          <CardDescription className="text-xs">
            Connect your talent, assets, and enterprise partner unit
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-4">
          <form onSubmit={handleSubmit} className="space-y-3">
            <div className="space-y-1">
              <label className="text-xs font-semibold text-foreground">Full Name</label>
              <Input
                type="text"
                placeholder="Dr. Jordan Hayes"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-semibold text-foreground">Organization / Lab</label>
              <Input
                type="text"
                placeholder="CleanTech Research Foundation"
                value={org}
                onChange={(e) => setOrg(e.target.value)}
                required
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-semibold text-foreground">Institutional Email</label>
              <Input
                type="email"
                placeholder="j.hayes@cleantech.org"
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

            <Button type="submit" variant="gradient" className="w-full mt-2 font-semibold">
              Register Partner Account
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </form>
        </CardContent>

        <CardFooter className="flex flex-col space-y-2 text-center text-xs text-muted-foreground border-t border-border/50 pt-4">
          <div>
            Already registered?{" "}
            <Link href="/login" className="font-semibold text-blue-400 hover:underline">
              Sign In
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
