"use client";

import { signIn } from "next-auth/react";
import { login, signup } from './actions'

export default function LoginPage() {

  return (
    <form>
      <label htmlFor="email">Email:</label>
      <input id="email" name="email" type="email" required />
      <label htmlFor="password">Password:</label>
      <input id="password" name="password" type="password" required />
      <button formAction={login}>Log in</button>
      <button formAction={signup}>Sign up</button>
      <div>
        <button onClick={() => signIn("google", { callbackUrl: "/dashboard" })}>Sign In with Google</button>
      </div>
    </form>
  );
}
