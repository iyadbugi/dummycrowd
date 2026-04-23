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
import { useState } from "react";
import { createPortal } from "react-dom";
import Logo from "./Logo";

type NavItem = {
  href: string;
  icon: LucideIcon;
  label: string;
  soon?: boolean;
};

const primaryNav: NavItem[] = [
  { href: "/", icon: Compass, label: "Explore" },
  { href: "/portfolio", icon: PieChart, label: "Portfolio", soon: true },
  { href: "/wallet", icon: Wallet, label: "Wallet", soon: true },
  { href: "/watchlist", icon: Bookmark, label: "Watchlist", soon: true },
];

const secondaryNav: NavItem[] = [
  { href: "/activity", icon: Activity, label: "Activity", soon: true },
];

function SoonNavItem({ icon: Icon, label }: { icon: LucideIcon; label: string }) {
  const [pos, setPos] = useState<{ x: number; y: number } | null>(null);

  return (
    <>
      <span
        aria-disabled="true"
        onMouseMove={(e) => setPos({ x: e.clientX, y: e.clientY })}
        onMouseLeave={() => setPos(null)}
        className="flex cursor-not-allowed items-center gap-2.5 rounded-sm px-2.5 py-1.5 text-[13px] text-ink-400"
      >
        <Icon className="h-[14px] w-[14px] shrink-0" strokeWidth={1.6} />
        <span>{label}</span>
      </span>
      {pos &&
        createPortal(
          <div
            style={{
              position: "fixed",
              left: pos.x + 14,
              top: pos.y + 14,
              pointerEvents: "none",
            }}
            className="z-50 rounded-sm bg-ink-900 px-2 py-1 text-[11px] font-medium text-paper shadow-md"
          >
            Coming soon
          </div>,
          document.body
        )}
    </>
  );
}

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="sticky top-0 flex h-screen w-[220px] flex-col gap-0.5 border-r border-hairline bg-paper px-[14px] pb-[14px]">
      {/* Brand */}
      <div className="mb-1 flex h-[60px] shrink-0 items-center px-2">
        <Logo height={34} />
      </div>

      {/* Primary nav */}
      <div className="flex flex-col gap-px pt-2.5">
        <div className="px-2.5 pt-2.5 pb-1.5 text-[10px] font-medium uppercase tracking-[0.08em] text-ink-400">
          Browse
        </div>
        {primaryNav.map((item) => {
          const Icon = item.icon;
          const active =
            pathname === item.href ||
            (item.href === "/" && pathname?.startsWith("/property"));
          if (item.soon) {
            return (
              <SoonNavItem key={item.label} icon={Icon} label={item.label} />
            );
          }
          return (
            <Link
              key={item.label}
              href={item.href}
              className={`flex items-center gap-2.5 rounded-sm px-2.5 py-1.5 text-[13px] transition-colors duration-[120ms] ease-slice ${
                active
                  ? "bg-sand-100 font-medium text-ink-900"
                  : "text-ink-600 hover:bg-sand-100"
              }`}
            >
              <Icon className="h-[14px] w-[14px] shrink-0" strokeWidth={1.6} />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </div>

      {/* Secondary nav */}
      <div className="flex flex-col gap-px pt-2.5">
        <div className="px-2.5 pt-2.5 pb-1.5 text-[10px] font-medium uppercase tracking-[0.08em] text-ink-400">
          Account
        </div>
        {secondaryNav.map((item) => {
          const Icon = item.icon;
          if (item.soon) {
            return (
              <SoonNavItem key={item.label} icon={Icon} label={item.label} />
            );
          }
          return (
            <Link
              key={item.label}
              href={item.href}
              className="flex items-center gap-2.5 rounded-sm px-2.5 py-1.5 text-[13px] text-ink-600 transition-colors duration-[120ms] ease-slice hover:bg-sand-100"
            >
              <Icon className="h-[14px] w-[14px] shrink-0" strokeWidth={1.6} />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </div>

      {/* Foot */}
      <div className="mt-auto flex flex-col gap-2 border-t border-hairline-2 pt-[14px]">
        <div className="flex flex-wrap gap-1">
          <span className="inline-flex items-center gap-1 rounded-[3px] bg-[#E4EAF2] px-1.5 py-[3px] font-mono text-[9.5px] tracking-[0.02em] text-regulator">
            DFSA
          </span>
          <span className="inline-flex items-center gap-1 rounded-[3px] bg-forest-100 px-1.5 py-[3px] font-mono text-[9.5px] tracking-[0.02em] text-forest-900">
            SHARIAH
          </span>
        </div>
        <div className="flex items-center gap-2 px-1 py-1.5">
          <div className="flex h-[26px] w-[26px] items-center justify-center rounded-full bg-forest-700 text-[11px] font-medium text-paper">
            IB
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-[12px] font-medium leading-[1.2] text-ink-900">
              Iyad Bugaighis
            </span>
            <span className="font-mono text-[10px] text-ink-400">
              AED 12,480
            </span>
          </div>
        </div>
      </div>
    </aside>
  );
}
