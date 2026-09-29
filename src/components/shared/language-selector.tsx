"use client";

import { useState, useRef, useEffect } from "react";
import { Globe, Check, ChevronDown } from "lucide-react";
import { useLanguage, Language } from "@/contexts/language-context";

interface LanguageOption {
  code: Language;
  label: string;
  nativeLabel: string;
}

const LANGUAGES: LanguageOption[] = [
  { code: "en", label: "English", nativeLabel: "English" },
  { code: "bm", label: "Bahasa Melayu", nativeLabel: "Melayu" },
  { code: "zh", label: "Mandarin", nativeLabel: "中文" },
];

export function LanguageSelector({ className = "" }: { className?: string }) {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const currentOption = LANGUAGES.find((l) => l.code === language) || LANGUAGES[0];

  return (
    <div className={`relative inline-block text-left ${className}`} ref={containerRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="true"
        aria-expanded={isOpen}
        className="flex items-center space-x-1.5 px-2.5 py-1.5 rounded-lg border border-border/70 bg-secondary/40 hover:bg-secondary/70 hover:border-border text-xs font-semibold text-foreground transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-primary/40 cursor-pointer shadow-xs"
        title="Select Language"
      >
        <Globe className="h-3.5 w-3.5 text-muted-foreground transition-colors group-hover:text-foreground" />
        <span className="uppercase tracking-wider">{currentOption.code}</span>
        <ChevronDown className={`h-3 w-3 text-muted-foreground transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-1.5 w-44 rounded-xl border border-border/80 bg-popover/95 backdrop-blur-md p-1.5 shadow-xl ring-1 ring-black/5 z-50 animate-in fade-in-0 zoom-in-95 duration-100">
          <div className="px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
            Language / Bahasa / 语言
          </div>
          <div className="space-y-0.5 mt-0.5">
            {LANGUAGES.map((item) => {
              const isSelected = item.code === language;
              return (
                <button
                  key={item.code}
                  type="button"
                  onClick={() => {
                    setLanguage(item.code);
                    setIsOpen(false);
                  }}
                  className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs font-medium transition-colors text-left ${
                    isSelected
                      ? "bg-primary/10 text-primary font-semibold"
                      : "text-foreground hover:bg-muted/80"
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    <span className="text-xs uppercase font-mono tracking-wider text-muted-foreground w-5">
                      {item.code}
                    </span>
                    <span>{item.nativeLabel}</span>
                  </div>
                  {isSelected && <Check className="h-3.5 w-3.5 text-primary shrink-0" />}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
