import NextAuth from "next-auth";

import Google from "next-auth/providers/google";

import PostgresAdapter from "@auth/pg-adapter";

import { Pool } from "@neondatabase/serverless";

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PostgresAdapter(pool),
  providers: [
    Google({
      allowDangerousEmailAccountLinking: true,
    }),
  ],

  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days in seconds (this value is also the default)
  },

  pages: {
    signIn: "/auth/sign-in",
  },

  secret: process.env.NEXTAUTH_SECRET,
});
