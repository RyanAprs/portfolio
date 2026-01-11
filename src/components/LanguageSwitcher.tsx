"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Globe } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState, useRef, useEffect } from "react";

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLanguageChange = (lang: "en" | "id") => {
    setLanguage(lang);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Dropdown Menu - Positioned Above */}
      {isOpen && (
        <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-background border rounded-lg shadow-lg overflow-hidden min-w-[100px] z-50">
          <button
            onClick={() => handleLanguageChange("en")}
            className={cn(
              "w-full px-4 py-2.5 text-sm font-medium transition-colors hover:bg-muted flex items-center gap-2",
              language === "en" && "bg-muted"
            )}
          >
            <span className="text-base">🇬🇧</span>
            <span>English</span>
            {language === "en" && (
              <span className="ml-auto text-primary">✓</span>
            )}
          </button>
          <div className="h-px bg-border" />
          <button
            onClick={() => handleLanguageChange("id")}
            className={cn(
              "w-full px-4 py-2.5 text-sm font-medium transition-colors hover:bg-muted flex items-center gap-2",
              language === "id" && "bg-muted"
            )}
          >
            <span className="text-base">🇮🇩</span>
            <span>Indonesia</span>
            {language === "id" && (
              <span className="ml-auto text-primary">✓</span>
            )}
          </button>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          buttonVariants({ variant: "ghost", size: "icon" }),
          "size-12 relative"
        )}
        aria-label="Change Language"
      >
        <Globe className="size-4" />
        {/* Current Language Indicator */}
        <span className="absolute bottom-1 right-1 text-[8px] font-bold uppercase bg-primary text-primary-foreground rounded-full w-4 h-4 flex items-center justify-center">
          {language}
        </span>
      </button>
    </div>
  );
}

export function LanguageSwitcherAnimated() {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLanguageChange = (lang: "en" | "id") => {
    setLanguage(lang);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Animated Dropdown */}
      <div
        className={cn(
          "absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-background border rounded-lg shadow-lg overflow-hidden min-w-[120px] z-50 transition-all duration-200",
          isOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-2 pointer-events-none"
        )}
      >
        <button
          onClick={() => handleLanguageChange("en")}
          className={cn(
            "w-full px-4 py-2.5 text-sm font-medium transition-colors hover:bg-muted flex items-center gap-2",
            language === "en" && "bg-muted"
          )}
        >
          <span className="text-base">🇬🇧</span>
          <span>EN</span>
          {language === "en" && (
            <span className="ml-auto text-primary text-xs">✓</span>
          )}
        </button>
        <div className="h-px bg-border" />
        <button
          onClick={() => handleLanguageChange("id")}
          className={cn(
            "w-full px-4 py-2.5 text-sm font-medium transition-colors hover:bg-muted flex items-center gap-2",
            language === "id" && "bg-muted"
          )}
        >
          <span className="text-base">🇮🇩</span>
          <span>ID</span>
          {language === "id" && (
            <span className="ml-auto text-primary text-xs">✓</span>
          )}
        </button>
      </div>

      {/* Toggle Button with Pulse Effect */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          buttonVariants({ variant: "ghost", size: "icon" }),
          "size-12 relative group"
        )}
        aria-label="Change Language"
      >
        <Globe
          className={cn(
            "size-4 transition-transform duration-200",
            isOpen && "rotate-12 scale-110"
          )}
        />
        <span className="absolute bottom-1.5 right-1.5 text-[9px] font-bold uppercase bg-primary text-primary-foreground rounded-full w-3.5 h-3.5 flex items-center justify-center">
          {language}
        </span>
      </button>
    </div>
  );
}
