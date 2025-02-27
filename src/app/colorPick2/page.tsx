"use client";

import { useState } from "react";
import { Button } from "@/ui/button";
import { Card } from "@/ui/card";
import { Input } from "@/ui/input";
import { Badge } from "@/ui/badge";
import "@/styles/globals.css";

const colors = [
  "--background", "--foreground", "--card", "--card-foreground", "--popover", "--popover-foreground",
  "--primary", "--primary-foreground", "--secondary", "--secondary-foreground", "--muted", "--muted-foreground",
  "--accent", "--accent-foreground", "--destructive", "--destructive-foreground", "--border", "--input", "--ring",
  "--chart-1", "--chart-2", "--chart-3", "--chart-4", "--chart-5"
];

export default function ColorPick() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark", !isDarkMode);
  };

  return (
    <section className={`grid grid-cols-8 gap-4 w-full h-screen p-4 ${isDarkMode ? "dark" : ""}`}>
      {colors.map(color => (
        <Card key={color} className="col-span-1 p-4" style={{ backgroundColor: `hsl(var(${color}))` }}>
          <Button onClick={toggleTheme} className="mt-2">
            Button
          </Button>
          <Input className="mt-2" placeholder="Input" />
          <Badge className="mt-2">
            Badge
          </Badge>
          <h2 className="text-lg" style={{ color: 'black' }}>{color}</h2>
          <h2 className="text-lg" style={{ color: 'white' }}>{color}</h2>
        </Card>
      ))}
    </section>
  );
}
