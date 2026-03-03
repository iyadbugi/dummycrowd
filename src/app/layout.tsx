import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import VoiceAgent from "@/components/VoiceAgent";
import InvestmentDialog from "@/components/InvestmentDialog";
import ThemeProvider from "@/components/ThemeProvider";

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
          <div className="flex h-screen bg-sc-gray-bg dark:bg-[#0B1A33] transition-colors duration-300">
            {/* Sidebar wrapper: adds padding so the sidebar floats */}
            <div className="p-3 flex-shrink-0">
              <Sidebar />
            </div>
            <main className="flex-1 overflow-y-auto p-6">
              {children}
            </main>
          </div>
          <VoiceAgent />
          <InvestmentDialog />
        </ThemeProvider>
      </body>
    </html>
  );
}
