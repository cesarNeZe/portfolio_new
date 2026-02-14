import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { MouseGlow } from "@/components/MouseGlow";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Elena Vance | Digital Designer & Creative Strategist",
  description: "Portfolio of Elena Vance, a Lead Digital Designer & Creative Strategist.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} antialiased bg-navy text-slate-400 selection:bg-accent/30 selection:text-white relative`}
      >
        <MouseGlow />
        {children}
      </body>
    </html>
  );
}
