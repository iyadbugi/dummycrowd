"use client";

import {
  Search,
  Wallet,
  PieChart,
  ShoppingCart,
  Bell,
  Sun,
  Moon,
  Smartphone,
  LogOut,
} from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";

const navItems = [
  { icon: Search, label: "Explore", active: true },
  { icon: Wallet, label: "Wallet", active: false },
  { icon: PieChart, label: "Portfolio", active: false },
  { icon: ShoppingCart, label: "Cart", active: false },
];

const secondaryNavItems = [
  { icon: Bell, label: "Notifications", active: false },
];

export default function Sidebar() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <aside className="flex flex-col w-[260px] h-full bg-sc-navy text-white rounded-2xl overflow-hidden">
      {/* Logo Area */}
      <div className="px-6 pt-6 pb-2">
        <div className="flex items-center justify-between">
          <img
            src="/smartcrowd-logo.svg"
            alt="SmartCrowd"
            className="h-8 w-auto"
          />
          <div className="flex items-center gap-1.5 bg-sc-navy-light rounded-full px-2.5 py-1 text-xs">
            <span>🇦🇪</span>
            <span className="text-gray-300 font-medium">EN</span>
          </div>
        </div>
      </div>

      {/* Navigation Items */}
      <nav className="flex-1 mt-6 px-3 overflow-y-auto">
        <div className="space-y-0.5">
          {navItems.map((item) => (
            <button
              key={item.label}
              className={`flex items-center gap-3 w-full py-3 px-4 rounded-xl text-sm font-medium transition-colors ${
                item.active
                  ? "bg-sc-blue-light text-white"
                  : "text-gray-300 hover:bg-sc-navy-light hover:text-white"
              }`}
            >
              <item.icon className="w-5 h-5 flex-shrink-0" />
              <span>{item.label}</span>
            </button>
          ))}
        </div>

        <div className="mt-3 pt-3 border-t border-white/10 space-y-0.5">
          {secondaryNavItems.map((item) => (
            <button
              key={item.label}
              className="flex items-center gap-3 w-full py-3 px-4 rounded-xl text-sm font-medium text-gray-300 hover:bg-sc-navy-light hover:text-white transition-colors"
            >
              <item.icon className="w-5 h-5 flex-shrink-0" />
              <span>{item.label}</span>
            </button>
          ))}
        </div>

        {/* Theme Toggle */}
        <div className="mt-1">
          <button
            onClick={toggleTheme}
            className="flex items-center justify-between w-full py-3 px-4 rounded-xl text-sm font-medium text-gray-300 hover:bg-sc-navy-light hover:text-white transition-colors"
          >
            <div className="flex items-center gap-3">
              {isDark ? (
                <Moon className="w-5 h-5 flex-shrink-0" />
              ) : (
                <Sun className="w-5 h-5 flex-shrink-0" />
              )}
              <span>{isDark ? "Dark Mode" : "Light Mode"}</span>
            </div>
            {/* Toggle switch */}
            <div
              className={`w-10 h-[22px] rounded-full relative transition-colors duration-200 ${
                isDark ? "bg-white/20" : "bg-sc-blue-light"
              }`}
            >
              <div
                className={`absolute top-0.5 w-[18px] h-[18px] bg-white rounded-full shadow-sm transition-all duration-200 ${
                  isDark ? "left-0.5" : "left-[calc(100%-20px)]"
                }`}
              />
            </div>
          </button>
        </div>
      </nav>

      {/* Bottom Section */}
      <div className="mt-auto">
        {/* App Download Section */}
        <div className="mx-3 mb-3 py-4 text-center bg-sc-blue/20 rounded-xl">
          <div className="mx-auto w-10 h-10 bg-sc-blue-light/30 rounded-xl flex items-center justify-center mb-2">
            <Smartphone className="w-5 h-5 text-sc-blue-light" />
          </div>
          <p className="text-sm font-medium text-white">
            Download our mobile app
          </p>
          <p className="text-sm text-sc-blue-light font-medium mt-0.5">
            iOS | Android
          </p>
          <p className="text-[11px] text-gray-500 mt-1.5">Regulated by DFSA</p>
        </div>

        {/* Logout */}
        <div className="px-3 pb-4">
          <button className="flex items-center gap-3 w-full py-3 px-4 rounded-xl text-sm font-medium text-gray-300 hover:bg-sc-navy-light hover:text-white transition-colors">
            <LogOut className="w-5 h-5 flex-shrink-0" />
            <span>Logout</span>
          </button>
        </div>
      </div>
    </aside>
  );
}
