"use client";

import { Button } from "../../../components/ui/button";
import { handleGoogleSignIn } from "@/lib/googlesingaction";

export default function SignIn() {
  return (
    <div>
      <Button onClick={() => handleGoogleSignIn()}>SingIn with Google</Button>
    </div>
  );
}
