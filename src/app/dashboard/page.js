"use client";
import { auth } from "@/auth";
import { SignOut } from "@/components/sign-out";
import { useSession } from "next-auth/react";

import { redirect } from "next/navigation";
import React from "react";

export default function Dashboard() {
  const { data: session, status } = useSession();
  console.log({ data: status });

  return (
    <div>
      <h1>Welcome, {session?.user?.name}!</h1>
      <SignOut />
      <p>my name is prasmin gurung</p>
    </div>
  );
}
