"use client";

import { Toaster } from "@/ui/sonner";
import { SessionProvider } from "next-auth/react";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <html lang="en">
        <Toaster />
        <body>{children}</body>
      </html>
    </SessionProvider>
  );
}
