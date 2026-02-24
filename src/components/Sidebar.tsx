"use client";

import {
  Search,
  Wallet,
  PieChart,
  ShoppingCart,
  Bell,
  Headphones,
  Sun,
  ChevronRight,
  Smartphone,
} from "lucide-react";

const navItems = [
  { icon: Search, label: "Explore", active: true },
  { icon: Wallet, label: "Wallet", active: false },
  { icon: PieChart, label: "Portfolio", active: false },
  { icon: ShoppingCart, label: "Cart", active: false },
];

const secondaryNavItems = [
  { icon: Bell, label: "Notifications", active: false },
  { icon: Headphones, label: "Help & Support", active: false },
];

export default function Sidebar() {
  return (
    <aside className="flex flex-col w-[280px] h-screen bg-sc-navy text-white flex-shrink-0">
      {/* Logo Area */}
      <div className="px-6 pt-6 pb-2">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-xl font-bold tracking-tight">SmartCrowd</h1>
            <p className="text-xs text-gray-400 mt-0.5">a Nawy company</p>
          </div>
          <div className="flex items-center gap-1.5 bg-sc-navy-light rounded-full px-2.5 py-1 text-xs mt-1">
            <span>🇦🇪</span>
            <span className="text-gray-300 font-medium">EN</span>
          </div>
        </div>
      </div>

      {/* Navigation Items */}
      <nav className="flex-1 mt-8 px-3 overflow-y-auto">
        <div className="space-y-1">
          {navItems.map((item) => (
            <button
              key={item.label}
              className={`flex items-center gap-3 w-full py-3 px-4 rounded-lg text-sm font-medium transition-colors ${
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

        <div className="mt-4 pt-4 border-t border-white/10 space-y-1">
          {secondaryNavItems.map((item) => (
            <button
              key={item.label}
              className="flex items-center gap-3 w-full py-3 px-4 rounded-lg text-sm font-medium text-gray-300 hover:bg-sc-navy-light hover:text-white transition-colors"
            >
              <item.icon className="w-5 h-5 flex-shrink-0" />
              <span>{item.label}</span>
            </button>
          ))}
        </div>
      </nav>

      {/* Bottom Section */}
      <div className="mt-auto">
        {/* Light Mode Toggle */}
        <div className="px-6 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Sun className="w-5 h-5 text-gray-300" />
              <span className="text-sm text-gray-300">Light Mode</span>
            </div>
            {/* Decorative toggle switch - shown as "on" */}
            <div className="w-10 h-[22px] bg-sc-blue-light rounded-full relative cursor-pointer">
              <div className="absolute right-0.5 top-0.5 w-[18px] h-[18px] bg-white rounded-full shadow-sm transition-transform" />
            </div>
          </div>
        </div>

        {/* App Download Section */}
        <div className="px-6 py-4 text-center">
          <div className="mx-auto w-12 h-12 bg-sc-blue-light/20 rounded-xl flex items-center justify-center mb-3">
            <Smartphone className="w-6 h-6 text-sc-blue-light" />
          </div>
          <p className="text-sm font-medium text-white">
            Download our mobile app
          </p>
          <p className="text-sm text-sc-blue-light font-medium mt-1">
            iOS | Android
          </p>
          <p className="text-[11px] text-gray-500 mt-2">Regulated by DFSA</p>
        </div>

        {/* User Section */}
        <div className="px-4 py-4 border-t border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-sc-blue-light flex items-center justify-center flex-shrink-0">
              <span className="text-sm font-semibold text-white">IB</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-white truncate">
                Iyad Bugaighis
              </p>
            </div>
            <ChevronRight className="w-4 h-4 text-gray-400 flex-shrink-0" />
          </div>
        </div>
      </div>
    </aside>
  );
}
