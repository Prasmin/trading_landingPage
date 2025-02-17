import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import Resend from "next-auth/providers/resend";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),

    Resend,
  ],
});
