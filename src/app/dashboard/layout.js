import { SessionProvider } from "next-auth/react";
import Dashboard from "@/app/dashboard/page";

export default function DashboardLayout({ children }) {
  return (
    <SessionProvider>
      <section>{children}</section>{" "}
      {/* This prevents inheriting global layout */}
    </SessionProvider>
  );
}
