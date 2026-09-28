"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
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
            Join EIP
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
