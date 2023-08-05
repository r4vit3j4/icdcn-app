import { cn } from "@/lib/utils";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar/Navbar";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "ICDCN 2024 - The International Workshop on Ideas, Algorithms, Models, Libraries and Tools for Leveraging Heterogeneity in Computing Paradigms",
  description:
    "The International Workshop on Ideas, Algorithms, Models, Libraries and Tools for Leveraging Heterogeneity in Computing Paradigms",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "antialiased")}>
        <Navbar />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
