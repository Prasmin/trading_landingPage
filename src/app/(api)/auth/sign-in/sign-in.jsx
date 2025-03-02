"use client";

import { handleEmailSignIn } from "@/lib/emailsingaction";

import { handleGoogleSignIn } from "@/lib/googlesingaction";
import { useState, useTransition } from "react";
import Image from "next/image";
import herotradingpicremovebgpreview from "@/public/herotradingpic-removebg-preview.png";
import { Button } from "@/components/ui/button";

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
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <Image
          alt="logo"
          src={herotradingpicremovebgpreview}
          className="mx-auto h-20 w-auto"
        />
        <h2 className="mt-3 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>
      <form className="m-10 email-signin-form" onSubmit={handleSubmit}>
        <div>
          <label
            htmlFor="email"
            className="block text-sm/6 font-medium text-gray-900"
          >
            Email*
          </label>
        </div>
        <div className="mt-2">
          <input
            className="form-input block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
            type="email"
            name="email"
            value={formData.email}
            maxLength={320}
            placeholder="Email Address"
            onChange={handleChange}
            disabled={isPending}
            required
          />
        </div>

        <Button
          type="submit"
          className="bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 flex w-full justify-center rounded-md px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs"
        >
          Sign in{" "}
        </Button>
        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-gray-50 text-gray-500">Or</span>
            </div>
          </div>
        </div>
      </form>
      {/* sign with email only */}
      <div className="mt-2 flex justify-center">
        <div>
          <button
            onClick={() => handleGoogleSignIn()}
            className="flex items-center   bg-white border border-gray-300 hover:bg-gray-100 text-gray-700 rounded-md px-3 py-1.5 text-sm/6 font-semibold shadow-md transition"
          >
            {/* Google SVG Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="20"
              height="20"
              viewBox="0 0 48 48"
            >
              <path
                fill="#FFC107"
                d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
              ></path>
              <path
                fill="#FF3D00"
                d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
              ></path>
              <path
                fill="#4CAF50"
                d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
              ></path>
              <path
                fill="#1976D2"
                d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
              ></path>
            </svg>
            Sign in with Google
          </button>
        </div>
      </div>
    </div>
  );
}
