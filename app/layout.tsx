import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GAF — Godavari Agenda Forum",
  description: "A modern public intelligence and governance platform designed to organize people's voices into structured, technology-driven public action.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        {children}
      </body>
    </html>
  );
}
