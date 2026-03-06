import { Search, CreditCard, Home, BarChart3, User } from "lucide-react";

const navItems = [
  { icon: Search, label: "Explore", active: true },
  { icon: CreditCard, label: "Wallet", active: false },
  { icon: Home, label: "Home", active: false },
  { icon: BarChart3, label: "Portfolio", active: false },
  { icon: User, label: "Profile", active: false },
];

export default function MobileBottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white dark:bg-[#0B1A33] border-t border-gray-100 dark:border-[#1C3058] pb-[env(safe-area-inset-bottom)]">
      <div className="flex items-center justify-around px-2 py-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.label}
              className={`flex flex-col items-center gap-1 px-3 py-1 relative ${
                item.active
                  ? "text-sc-blue"
                  : "text-sc-text-muted"
              }`}
            >
              {item.active && (
                <span className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-sc-blue rounded-full" />
              )}
              <Icon className="h-5 w-5" />
              <span className="text-[10px] font-medium">{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
