"use client";

import { useEffect, useRef, useState } from "react";
import { ThemeToggle } from "@/atoms/ThemeToggle";
import { User } from "lucide-react";

export function Header() {
  const [showHeader, setShowHeader] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 bg-background shadow-md transition-transform duration-300 ${
          showHeader ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex items-center justify-between p-4">
          <ThemeToggle />
          <User className="h-6 w-6 text-gray-600" />
        </div>
      </header>
      {/* Placeholder div to push page content below the fixed header */}
      <div className="h-16" />
    </>
  );
}
