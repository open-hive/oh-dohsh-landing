import type { Metadata } from "next";
import { Inter, Barlow } from "next/font/google";
import "./globals.css";
import Navbar from "./../components/layout/Navbar";
import Footer from "./../components/layout/Footer";
import LayoutShell from "./../components/layout/LayoutShell";

// Load Google Fonts
const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter", 
});

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-barlow", 
});

export const metadata: Metadata = {
  title: "DOHSH All Safety Consultancy | Jwaneng, Botswana",
  description: "Occupational Health, Safety, and Environmental Management solutions aligned with ISO standards.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${barlow.variable} antialiased`}>
        {/* Navbar and Footer are hidden on chrome-free routes (see LayoutShell) */}
        <LayoutShell navbar={<Navbar />} footer={<Footer />}>
          {/* Main Content Area */}
          <main className="min-h-screen flex flex-col">
            {children}
          </main>
        </LayoutShell>
      </body>
    </html>
  );
}