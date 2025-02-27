import { SessionProvider } from "next-auth/react";

export default function DashboardLayout({ children }) {
  return (
    <SessionProvider>
      <section>{children}</section>{" "}
      {/* This prevents inheriting global layout */}
    </SessionProvider>
  );
}
