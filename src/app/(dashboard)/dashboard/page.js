import { SignOut } from "@/components/sign-out";

import { redirect } from "next/navigation";
import React from "react";
import Dashboard from "./dashboard";
import { checkIsAuthenticated } from "@/lib/checkUserAuth";

export default async function DashboardPage() {
  const isAuthenticated = await checkIsAuthenticated();

  // If not authenticated, redirect to sign-in page
  if (!isAuthenticated) {
    redirect("/auth/sign-in");
  } else {
    // If authenticated, show the dashboard
    return (
      <div>
        <h1>Welcome!</h1>
        <SignOut />
        <Dashboard />
      </div>
    );
  }
}
