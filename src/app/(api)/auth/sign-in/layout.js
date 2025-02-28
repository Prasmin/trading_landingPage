export default function LoginLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>{/* Global Header */}</header>
        <main>{children}</main>
        <footer>{/* Global Footer */}</footer>
      </body>
    </html>
  );
}
