import { SessionProvider } from "next-auth/react";

export default function DashboardLayout({ children }) {
  return (
    <SessionProvider>
      <html lang="en">
        <body>
          <header>{/* Global Header */}</header>
          <main>{children}</main>
          <footer>{/* Global Footer */}</footer>
        </body>
      </html>
      {/* This prevents inheriting global layout */}
    </SessionProvider>
  );
}
