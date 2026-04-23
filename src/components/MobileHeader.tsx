import Link from "next/link";
import { Bell, Settings } from "lucide-react";
import Logo from "./Logo";

export default function MobileHeader() {
  return (
    <header className="flex md:hidden items-center justify-between border-b border-hairline bg-paper px-4 py-3 shrink-0">
      <Link href="/" className="flex items-center" aria-label="Slice home">
        <Logo height={22} />
      </Link>

      <div className="flex items-center gap-1">
        <button
          className="relative flex h-9 w-9 items-center justify-center rounded-sm text-ink-600 hover:bg-sand-100"
          aria-label="Notifications"
        >
          <Bell className="h-[18px] w-[18px]" strokeWidth={1.6} />
          <span className="absolute top-1.5 right-2 h-1.5 w-1.5 rounded-full border-[1.5px] border-paper bg-terra-500" />
        </button>
        <button
          className="flex h-9 w-9 items-center justify-center rounded-sm text-ink-600 hover:bg-sand-100"
          aria-label="Settings"
        >
          <Settings className="h-[18px] w-[18px]" strokeWidth={1.6} />
        </button>
      </div>
    </header>
  );
}
