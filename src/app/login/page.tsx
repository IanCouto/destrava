"use client";

import { signIn } from "next-auth/react";
import { login, signup } from './actions'
import { Button } from "@/components/ui/button";

import "@/styles/globals.css";

export default function LoginPage() {

  return (
    <form>
      <label htmlFor="email">Email:</label>
      <input id="email" name="email" type="email" required />
      <label htmlFor="password">Password:</label>
      <input id="password" name="password" type="password" required />
      <Button formAction={login}>Log in</Button>
      <Button formAction={signup}>Sign up</Button>
      <div>
        <Button onClick={() => signIn("google", { callbackUrl: "/dashboard" })}>Sign In with Google</Button>
      </div>
    </form>
  );
}
