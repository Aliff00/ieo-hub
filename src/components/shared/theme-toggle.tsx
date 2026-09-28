"use client";

import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/contexts/theme-context";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className={`h-9 w-9 text-muted-foreground hover:text-foreground transition-colors ${className || ""}`}
      title={mounted && theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
      aria-label="Toggle theme"
      type="button"
    >
      {mounted && theme === "light" ? (
        <Moon className="h-4 w-4" />
      ) : (
        <Sun className="h-4 w-4" />
      )}
    </Button>
  );
}
