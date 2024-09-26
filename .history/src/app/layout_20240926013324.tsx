import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "E-code Form",
  description: "Platform for learning computer science",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-r from-pink-200 bg-ecode">
        {children}
      </body>
    </html>
  );
}
