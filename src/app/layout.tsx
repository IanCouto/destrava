"use client";
import { Toaster } from "@/ui/sonner";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Footer } from "@/atoms/Footer";
import { Header } from "@/components/atoms/Header";

import "@/styles/globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
      <html lang="en">
        <head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>My App</title>
        </head>
        <body className="relative min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Toaster />
          <Footer />
          <SpeedInsights />
        </body>
      </html>
  );
}
