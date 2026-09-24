"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

export default function SettingsPage() {
  return (
    <div className="space-y-6 max-w-4xl">
      <div className="pb-4 border-b border-border/60">
        <h1 className="text-2xl font-bold tracking-tight text-foreground">Ecosystem & Account Settings</h1>
        <p className="text-xs text-muted-foreground mt-0.5">
          Manage partner credentials, API access keys, and hub notification channels.
        </p>
      </div>

      <Card className="bg-card/60">
        <CardHeader>
          <CardTitle className="text-base font-bold">Partner Profile</CardTitle>
          <CardDescription className="text-xs">Your organization's primary identity across the IEO network</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 text-xs">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="font-semibold text-foreground">Representative Name</label>
              <Input defaultValue="Dr. Alex Danvers" className="h-9 text-xs" />
            </div>
            <div className="space-y-1.5">
              <label className="font-semibold text-foreground">Work Email</label>
              <Input defaultValue="alex.danvers@enterprise-alliance.org" className="h-9 text-xs" />
            </div>
          </div>
          <div className="space-y-1.5">
            <label className="font-semibold text-foreground">Organization / Enterprise Unit</label>
            <Input defaultValue="Advanced Innovation Alliance (Tier-1 Partner)" className="h-9 text-xs" />
          </div>
          <Button variant="gradient" size="sm" className="text-xs">
            Save Profile Updates
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
