import NextAuth from "next-auth";

import Google from "next-auth/providers/google";
import Nodemailer from "next-auth/providers/nodemailer";

import PostgresAdapter from "@auth/pg-adapter";

import { Pool } from "@neondatabase/serverless";
import { setName } from "./lib/setNameServerAction";

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PostgresAdapter(pool),
  providers: [
    Google({
      allowDangerousEmailAccountLinking: true,
    }),
    Nodemailer({
      server: process.env.EMAIL_SERVER,
      from: process.env.EMAIL_FROM,
    }),
  ],

  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days in seconds (this value is also the default)
  },

  pages: {
    signIn: "/auth/sign-in",
  },

  // callbacks: {
  //   async jwt({ token, session, trigger }) {
  //     console.log("Session:", session);
  //     if (trigger === "update" && session?.name !== token.name) {
  //       token.name = session.name;

  //       try {
  //         await setName(token.name);
  //       } catch (error) {
  //         console.error("Failed to set user name:", error);
  //       }
  //     }
  //   },
  //   async session({ session, token }) {
  //     console.log("session callback", { session, token });
  //     return {
  //       ...session,
  //       user: {
  //         ...session.user,
  //         id: token.id,
  //       },
  //     };
  //   },
  // },
});
