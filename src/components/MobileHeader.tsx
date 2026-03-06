import { SlidersHorizontal, ArrowUpDown, ShoppingCart, Bell } from "lucide-react";

export default function MobileHeader() {
  return (
    <header className="flex md:hidden items-center justify-between px-4 py-3 bg-white dark:bg-[#0B1A33] border-b border-gray-100 dark:border-[#1C3058] shrink-0">
      {/* Left icons */}
      <div className="flex items-center gap-4">
        <button className="text-sc-text-muted" aria-label="Filters">
          <SlidersHorizontal className="h-5 w-5" />
        </button>
        <button className="text-sc-text-muted" aria-label="Sort">
          <ArrowUpDown className="h-5 w-5" />
        </button>
      </div>

      {/* Center title */}
      <h1 className="text-base font-semibold text-sc-text-dark">Properties</h1>

      {/* Right icons */}
      <div className="flex items-center gap-4">
        <button className="text-sc-text-muted" aria-label="Cart">
          <ShoppingCart className="h-5 w-5" />
        </button>
        <button className="text-sc-text-muted" aria-label="Notifications">
          <Bell className="h-5 w-5" />
        </button>
      </div>
    </header>
  );
}
