"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { login, signup } from "./actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Loader2, LockKeyhole, Mail } from "lucide-react";

export default function LoginPage() {
  const [loading, setLoading] = useState(false);

  const handleGoogleSignIn = async () => {
    setLoading(true);
    await signIn("google", { callbackUrl: "/dashboard" });
    setLoading(false);
  };

  return (
    <div className="flex items-center justify-center">
      <Card className="w-80 max-w-md p-6 shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl text-center">Login</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            {/* Email Field */}
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-2 text-gray-500" size={20} />
                <Input id="email" name="email" type="email" required className="pl-10" />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <LockKeyhole className="absolute left-3 top-2 text-gray-500" size={20} />
                <Input id="password" name="password" type="password" required className="pl-10" />
              </div>
            </div>

            {/* Login & Signup Buttons */}
            <div className="flex flex-col gap-2">
              <Button type="submit" formAction={login} className="w-full">
                Log in
              </Button>
              <Button type="submit" formAction={signup} variant="outline" className="w-full">
                Sign up
              </Button>
            </div>

            {/* Google Auth Button */}
            <div className="mt-4 text-center">
              <Button
                type="button"
                onClick={handleGoogleSignIn}
                className="w-full flex items-center gap-2"
                disabled={loading}
              >
                {loading ? <Loader2 className="animate-spin" size={20} /> : null}
                {loading ? "Signing in..." : "Sign In with Google"}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
