"use client";

import { useState } from "react";
import { Button } from "@/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/ui/card";
import { Input } from "@/ui/input";
import { Badge } from "@/ui/badge";
import "@/styles/globals.css";
import { Alert } from "@/components/ui/alert";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

const colors = [
  "--background"
];

export default function ColorPick() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark", !isDarkMode);
  };

  return (
    <section className={`flex justify-center md:items-center md:pt-0 pt-8 h-screen ${isDarkMode ? "dark" : ""}`}>
      <div className="px-4">
        {colors.map(color => (
          <Card key={color}>
            <CardHeader>
              <CardTitle>Color Picker</CardTitle>
            </CardHeader>
            <CardDescription className="pl-6 pb-2">Description</CardDescription>
            <CardContent className="grid grid-cols-3 gap-4">
              <Button variant={"default"} onClick={toggleTheme}>default</Button>
              <Button variant={"secondary"} onClick={toggleTheme}>secondary</Button>
              <Button variant={"destructive"} onClick={toggleTheme}>destructive</Button>
              <Button variant={"ghost"} onClick={toggleTheme}>ghost</Button>
              <Button variant={"link"} onClick={toggleTheme}>link</Button>
              <Button variant={"outline"} onClick={toggleTheme}>outline</Button>
            </CardContent>
            <CardContent className="grid grid-cols-4 gap-4">
              <Button size={"lg"} onClick={toggleTheme}>lg</Button>
              <Button size={"default"} onClick={toggleTheme}>default</Button>
              <Button size={"sm"} onClick={toggleTheme}>sm</Button>
              <Button size={"icon"} onClick={toggleTheme}>icon</Button>
            </CardContent>
            <CardContent>
              <Input placeholder="Input" />
            </CardContent>
            <CardContent className="grid grid-cols-2 gap-4">
              <Badge variant={"default"}>default</Badge>
              <Badge variant={"secondary"}>secondary</Badge>
              <Badge variant={"destructive"}>destructive</Badge>
              <Badge variant={"outline"}>outline</Badge>
            </CardContent>
            <CardContent className="flex flex-col gap-2">
              <Alert variant={"default"}>default</Alert>
              <Alert variant={"destructive"}>destructive</Alert>
            </CardContent>
            <CardContent className="flex items-center gap-2">
              <Switch onClick={toggleTheme}/>
              <Label> Toggle Theme</Label>
            </CardContent>
            <CardFooter>Footer</CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
