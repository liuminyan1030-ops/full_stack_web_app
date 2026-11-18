/*
 * Name: 
 * Date: November 18, 2026
 * Description: Root layout for the IMR portal. Navbar and Footer wrap every page.
 * Input: page children
 * Processing: wrap children with site chrome
 * Output: full page shell
 */

import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "IMR Movie Portal",
  description: "Internet Movies Rental Company movie database",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-zinc-50">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
