"use client";
import { useEffect, useState } from "react";
import UsersManager from "@/components/molecules/UsersManager";
import "@/styles/globals.css";

export default function Home() {
  const [theme, setTheme] = useState(() => {
    return typeof window !== "undefined" && localStorage.getItem("theme") === "dark" ? "dark" : "light";
  });

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  return (
    <section className="flex flex-col min-h-screen bg-background">
      <header className="flex items-center justify-center h-24 bg-card">
        <button
          className="p-2 rounded bg-primary text-primary-foreground"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          Toggle Theme
        </button>
      </header>
      <main className="flex flex-grow items-center justify-center bg-background">
        <UsersManager />
      </main>
      <footer className="flex items-center justify-center h-48 bg-card">
        FOOTER
      </footer>
    </section>
  );
}
