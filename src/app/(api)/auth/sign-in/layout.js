import "./globals.css";

export default function LoginLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex items-center justify-center bg-[radial-gradient(circle_at_center,_#ffffff,_#fdba74)] ">
        <main className="bg-white w-full max-w-sm p-6 md:p-8 rounded-lg shadow-lg min-h-80">
          {children}
        </main>
      </body>
    </html>
  );
}
