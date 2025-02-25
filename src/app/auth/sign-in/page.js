import SignIn from "@/app/auth/sign-in/sign-in";
import { checkIsAuthenticated } from "@/lib/checkUserAuth";
import { redirect } from "next/navigation";

import React from "react";

export default async function LoginPage() {
  const isAuthenticated = await checkIsAuthenticated();

  if (isAuthenticated) {
    redirect("/dashboard");
  } else {
    return <SignIn />;
  }
}
