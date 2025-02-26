"use server";

// import { signIn } from "@/auth";

// export const handleEmailSignIn = async (email) => {
//   try {
//     await signIn("nodemailer", { email, callbackUrl: "/dashboard" });
//   } catch (error) {
//     throw error;
//   }
// };

"use server";

import { signIn } from "@/auth";
import { Pool } from "@neondatabase/serverless";

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

export const handleEmailSignIn = async (email) => {
  try {
    // Query the database to check if the email is already verified
    const { rows } = await pool.query(
      'SELECT "emailVerified" FROM users WHERE email = $1',
      [email]
    );

    // Check if emailVerified is null (meaning not verified)
    if (rows.length === 0) {
      throw new Error("User not found");
    }

    const user = rows[0];

    // If the email is already verified, redirect to the dashboard
    if (user.emailVerified) {
      // Redirect the user to the dashboard (assuming you have a redirection logic)
      return { redirect: "/dashboard" };
    }

    // If the email is not verified, send the verification link using nodemailer
    await signIn("nodemailer", { email, callbackUrl: "/dashboard" });
  } catch (error) {
    console.error(error);
    throw error;
  }
};
