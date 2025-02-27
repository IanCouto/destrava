"use client";

import { Toaster } from "@/ui/sonner";
import { SessionProvider } from "next-auth/react";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <html lang="en">
        <head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>My App</title>
        </head>
        <body><Toaster />{children}</body>
      </html>
    </SessionProvider>
  );
}
