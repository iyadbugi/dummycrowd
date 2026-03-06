import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import MobileHeader from "@/components/MobileHeader";
import MobileBottomNav from "@/components/MobileBottomNav";
import VoiceAgent from "@/components/VoiceAgent";
import InvestmentDialog from "@/components/InvestmentDialog";
import ThemeProvider from "@/components/ThemeProvider";
import { Analytics } from "@vercel/analytics/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SmartCrowd - Explore Properties",
  description:
    "Browse fractional real estate investment opportunities in Dubai",
};

export const viewport: Viewport = {
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <div className="flex flex-col md:flex-row h-screen bg-sc-gray-bg dark:bg-[#0B1A33] transition-colors duration-300">
            {/* Sidebar: desktop only */}
            <div className="hidden md:block p-3 flex-shrink-0">
              <Sidebar />
            </div>
            {/* Mobile header */}
            <MobileHeader />
            <main className="flex-1 overflow-y-auto p-4 pb-28 md:p-6 md:pb-6">
              {children}
            </main>
          </div>
          <MobileBottomNav />
          <VoiceAgent />
          <InvestmentDialog />
        </ThemeProvider>
      </body>
    </html>
  );
}
