"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

export default function FacilityBookingPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <Link href="/facilities" className="inline-flex items-center text-xs text-muted-foreground hover:text-foreground">
        <ArrowLeft className="h-3.5 w-3.5 mr-1" /> Back to Facilities
      </Link>

      <Card className="bg-card/80 border-border/80">
        <CardHeader>
          <CardTitle className="text-xl font-bold">Reserve Hub Facility or Testbed</CardTitle>
          <CardDescription className="text-xs">
            Reserve collaborative labs and equipment under your enterprise partner agreement.
          </CardDescription>
        </CardHeader>

        <CardContent>
          {submitted ? (
            <div className="text-center py-8 space-y-3">
              <div className="h-12 w-12 rounded-full bg-emerald-500/10 text-emerald-400 mx-auto flex items-center justify-center">
                <CheckCircle2 className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-foreground">Reservation Request Submitted</h3>
              <p className="text-xs text-muted-foreground max-w-sm mx-auto">
                Facility Orchestration has received your request. Confirmation and digital smart-lock credentials will be issued to your account.
              </p>
              <Link href="/dashboard">
                <Button variant="outline" size="sm" className="mt-4">
                  Return to Dashboard
                </Button>
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div className="space-y-1.5">
                <label className="font-semibold text-foreground">Select Facility Space</label>
                <select className="w-full h-9 rounded-md border border-input bg-card px-3 text-xs text-foreground focus:outline-none" required>
                  <option value="1">Rapid Prototyping MakerLab #1 (Capacity: 18)</option>
                  <option value="2">Immersive Holographic & XR Studio (Capacity: 12)</option>
                  <option value="4">Cleanroom Microfluidics Cell (Capacity: 6)</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="font-semibold text-foreground">Reservation Date</label>
                  <Input type="date" required className="h-9 text-xs" />
                </div>
                <div className="space-y-1.5">
                  <label className="font-semibold text-foreground">Expected Attendees</label>
                  <Input type="number" min="1" max="50" defaultValue="4" required className="h-9 text-xs" />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="font-semibold text-foreground">Program or Innovation Purpose</label>
                <Input placeholder="e.g., CleanTech Grid sensor fabrication and stress testing" required className="h-9 text-xs" />
              </div>

              <Button type="submit" variant="gradient" className="w-full text-xs font-semibold mt-4">
                Confirm Reservation Request
              </Button>
            </form>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
