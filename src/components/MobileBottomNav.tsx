"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Compass,
  PieChart,
  Wallet,
  Bookmark,
  Activity,
  LucideIcon,
} from "lucide-react";

type NavItem = {
  href: string;
  icon: LucideIcon;
  label: string;
  soon?: boolean;
};

const navItems: NavItem[] = [
  { href: "/", icon: Compass, label: "Explore" },
  { href: "/portfolio", icon: PieChart, label: "Portfolio", soon: true },
  { href: "/wallet", icon: Wallet, label: "Wallet", soon: true },
  { href: "/watchlist", icon: Bookmark, label: "Watch", soon: true },
  { href: "/activity", icon: Activity, label: "Activity", soon: true },
];

export default function MobileBottomNav() {
  const pathname = usePathname();
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 md:hidden border-t border-hairline bg-paper pb-[env(safe-area-inset-bottom)]">
      <div className="flex items-center justify-around px-2 py-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const active =
            pathname === item.href ||
            (item.href === "/" && pathname?.startsWith("/property"));
          if (item.soon) {
            return (
              <span
                key={item.label}
                aria-disabled="true"
                className="flex cursor-not-allowed flex-col items-center gap-1 px-3 py-1 text-ink-300"
              >
                <Icon className="h-[18px] w-[18px]" strokeWidth={1.6} />
                <span className="text-[10px] font-medium">{item.label}</span>
              </span>
            );
          }
          return (
            <Link
              key={item.label}
              href={item.href}
              className={`flex flex-col items-center gap-1 px-3 py-1 ${
                active ? "text-ink-900" : "text-ink-500"
              }`}
            >
              <Icon className="h-[18px] w-[18px]" strokeWidth={1.6} />
              <span className="text-[10px] font-medium">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
