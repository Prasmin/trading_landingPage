"use client";

import { signIn } from "next-auth/react";
import { Button } from "./ui/button";
import { redirect } from "next/navigation";

export default function SignIn() {
  return (
    <button onClick={() => signIn("google", { callbackUrl: "/dashboard" })}>
      Sign In with Google
    </button>
  );
}
