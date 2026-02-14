import type { Metadata } from "next";
import { Inter, Oswald, Playfair_Display } from "next/font/google";
import "./globals.css";
import { MouseGlow } from "@/components/MouseGlow";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const oswald = Oswald({
  variable: "--font-display",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-body",
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
        className={`${inter.variable} ${oswald.variable} ${playfair.variable} antialiased bg-navy text-slate-400 selection:bg-accent/30 selection:text-white relative`}
      >
        <MouseGlow />
        {children}
      </body>
    </html>
  );
}
