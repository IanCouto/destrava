"use client";

import { signOut } from "app/login/actions";
import { Button } from "../ui/button";

export default function LogoutButton() {
  return (
    <Button onClick={() => signOut()}>Logout</Button>
  );
}
