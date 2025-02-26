"use client";

import { handleEmailSignIn } from "@/lib/emailsingaction";
import { Button } from "../../../components/ui/button";
import { handleGoogleSignIn } from "@/lib/googlesingaction";
import { useState, useTransition } from "react";

export default function SignIn() {
  const [isPending, startTransition] = useTransition();

  const [formData, setFormData] = useState({ email: "" });
  console.log(formData);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = formData.email; // Get email from formData

    // Simple validation to ensure the email field is not empty
    if (!email) {
      console.error("Email is required");
      return;
    }

    // Call your sign-in function here with the email
    try {
      await handleEmailSignIn(email); // Assuming handleEmailSignIn is your function
    } catch (error) {
      console.error("Error during sign-in:", error);
    }
    console.log(email);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div>
      <form className="email-signin-form" onSubmit={handleSubmit}>
        <input
          className="form-input"
          type="email"
          name="email"
          value={formData.email}
          maxLength={320}
          placeholder="Email Address"
          onChange={handleChange}
          disabled={isPending}
          required
        />
        <Button type="submit">Sign in with email</Button>
      </form>
      <div>
        <Button onClick={() => handleGoogleSignIn()}>SingIn with Google</Button>
      </div>
    </div>
  );
}
