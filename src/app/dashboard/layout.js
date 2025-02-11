import { SessionProvider } from "next-auth/react";
import Dashboard from "@/app/dashboard/page";

export default function Administrator({ children }) {
  return (
    <html lang="en">
      <body>
        <SessionProvider>
          <Dashboard />
        </SessionProvider>
      </body>
    </html>
  );
}
