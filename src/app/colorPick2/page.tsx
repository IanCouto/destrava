"use client";

import { useState } from "react";
import { Button } from "@/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/ui/card";
import { Input } from "@/ui/input";
import { Badge } from "@/ui/badge";
import "@/styles/globals.css";
import { Alert } from "@/components/ui/alert";
import { Label } from "@/components/ui/label";
import { ThemeToggle } from "@/components/atoms/ThemeToggle";

export default function ColorPick() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <section className={`flex justify-center md:items-center md:pt-0 pt-8 h-screen ${isDarkMode ? "dark" : ""}`}>
      <div className="px-4">
        <Card>
          <CardHeader>
            <CardTitle>Color Picker</CardTitle>
          </CardHeader>
          <CardDescription className="pl-6 pb-2">Description</CardDescription>
          <CardContent className="grid grid-cols-3 gap-4">
            <Button variant={"default"} onClick={ThemeToggle}>default</Button>
            <Button variant={"secondary"} onClick={ThemeToggle}>secondary</Button>
            <Button variant={"destructive"} onClick={ThemeToggle}>destructive</Button>
            <Button variant={"ghost"} onClick={ThemeToggle}>ghost</Button>
            <Button variant={"link"} onClick={ThemeToggle}>link</Button>
            <Button variant={"outline"} onClick={ThemeToggle}>outline</Button>
          </CardContent>
          <CardContent className="grid grid-cols-4 gap-4">
            <Button size={"lg"} onClick={ThemeToggle}>lg</Button>
            <Button size={"default"} onClick={ThemeToggle}>default</Button>
            <Button size={"sm"} onClick={ThemeToggle}>sm</Button>
            <Button size={"icon"} onClick={ThemeToggle}>icon</Button>
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
            <ThemeToggle/>
            <Label> Toggle Theme</Label>
          </CardContent>
          <CardFooter>Footer</CardFooter>
        </Card>
      </div>
    </section>
  );
}
