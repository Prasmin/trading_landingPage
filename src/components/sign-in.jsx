"use client";

import { signIn } from "next-auth/react";
import { Button } from "./ui/button";

export default function SignIn() {
  return (
    <Button onClick={() => signIn("google", { redirectTo: "/dashboard" })}>
      SingIn with Google
    </Button>
  );
}

/////===========Comment for later use ================////////////////////

// // <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
//       <div className="sm:mx-auto sm:w-full sm:max-w-sm">
//         {/* Sign-In Title */}
//         <h2 className="text-center text-2xl font-bold tracking-tight text-gray-900">
//           Sign in to your account
//         </h2>

//         {/* Google Sign-In Button */}
//         <div className="mt-6">
//           <button
//             onClick={() => signIn("google", { redirectTo: "/dashboard" })}
//             className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
//           >
//             Sign In with Google
//           </button>
//         </div>

//         {/* OR Divider */}
//         <div className="my-6 text-center">
//           <span className="text-sm text-gray-500">Or</span>
//         </div>

//         {/* Email and Password Sign-In Form */}
//         <form
//           action="/api/auth/callback/credentials"
//           method="POST"
//           className="space-y-6"
//         >
//           <div>
//             <label
//               htmlFor="email"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Email
//             </label>
//             <input
//               id="email"
//               name="email"
//               type="email"
//               required
//               className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//               placeholder="Email"
//             />
//           </div>

//           <div>
//             <label
//               htmlFor="password"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Password
//             </label>
//             <input
//               id="password"
//               name="password"
//               type="password"
//               required
//               className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//             />
//           </div>

//           <button
//             type="submit"
//             className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//           >
//             Sign In
//           </button>
//         </form>
//       </div>
//     </div>
