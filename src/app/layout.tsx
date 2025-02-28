"use client";
import { Toaster } from "@/ui/sonner";
import { SessionProvider } from "next-auth/react";


import "@/styles/globals.css";
import { Footer } from "@/atoms/Footer";
import { Header } from "@/atoms/header";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <html lang="en">
        <head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>My App</title>
        </head>
        <body className="relative min-h-screen flex flex-col">
          <Header/>
          <main className="flex-grow">
            {children}
          </main>
          <Toaster />
          <Footer/>
        </body>
      </html>
    </SessionProvider>
  );
}
