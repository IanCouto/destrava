"use client";

import { signIn } from "next-auth/react";
import { login, signup } from './actions'
import { Button } from "@/components/ui/button";

export default function LoginPage() {

  return (
    <form>
      <label htmlFor="email">Email:</label>
      <input id="email" name="email" type="email" required />
      <label htmlFor="password">Password:</label>
      <input id="password" name="password" type="password" required />
      <button formAction={login}>Log in</button>
      <Button formAction={signup}>Sign up</Button>
      <div>
        <button onClick={() => signIn("google", { callbackUrl: "/dashboard" })}>Sign In with Google</button>
      </div>
    </form>
  );
}
