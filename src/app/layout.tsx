import type { Metadata, Viewport } from "next";
import { Geist, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import { Suspense } from "react";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import MobileHeader from "@/components/MobileHeader";
import MobileBottomNav from "@/components/MobileBottomNav";
import VoiceAgent from "@/components/VoiceAgent";
import InvestmentDialog from "@/components/InvestmentDialog";
import TopBar from "@/components/TopBar";
import { Analytics } from "@vercel/analytics/react";

const geistSans = Geist({
  variable: "--font-slice-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-slice-serif",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-slice-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Slice · Own a slice from AED 500",
  description:
    "Fractional real estate investing in Dubai. Shariah-compliant, DFSA-regulated.",
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
    <html lang="en">
      <body
        className={`${geistSans.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable} antialiased bg-paper text-ink-900`}
      >
        <div className="flex flex-col md:flex-row min-h-screen">
          {/* Desktop rail */}
          <div className="hidden md:block w-[220px] flex-shrink-0">
            <Sidebar />
          </div>
          {/* Mobile header */}
          <MobileHeader />
          <div className="flex-1 flex flex-col min-w-0">
            <div className="hidden md:block">
              <Suspense fallback={<div className="h-[60px] border-b border-hairline bg-paper" />}>
                <TopBar />
              </Suspense>
            </div>
            <main className="flex-1 overflow-y-auto px-4 pb-28 pt-4 md:px-7 md:pt-7 md:pb-20">
              {children}
            </main>
          </div>
        </div>
        <MobileBottomNav />
        <VoiceAgent />
        <InvestmentDialog />
        <Analytics />
      </body>
    </html>
  );
}
