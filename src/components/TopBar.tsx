"use client";

import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Bell, Search, Settings, X, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function TopBar() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const qParam = searchParams.get("q") ?? "";

  const [query, setQuery] = useState(qParam);
  const [focused, setFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  // Keep local state in sync when URL param changes (e.g. back/forward)
  useEffect(() => {
    setQuery(qParam);
  }, [qParam]);

  // Cmd+K / Ctrl+K focus
  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        inputRef.current?.focus();
        inputRef.current?.select();
      }
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  // Debounce URL update when user types (only on explore page)
  useEffect(() => {
    if (pathname !== "/") return;
    const id = setTimeout(() => {
      const params = new URLSearchParams(searchParams.toString());
      if (query.trim()) {
        params.set("q", query.trim());
      } else {
        params.delete("q");
      }
      const qs = params.toString();
      router.replace(qs ? `/?${qs}` : "/", { scroll: false });
    }, 180);
    return () => clearTimeout(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  const onDetail = pathname?.startsWith("/property/");
  const detailCode = onDetail ? pathname?.split("/")[2] : null;

  return (
    <div className="flex h-[60px] items-center justify-between gap-4 border-b border-hairline bg-paper px-7">
      {/* Breadcrumbs */}
      <div className="flex items-center gap-1.5 text-[13px] text-ink-600">
        <Link href="/" className="hover:text-ink-900 transition-colors">
          Explore
        </Link>
        {onDetail && detailCode && (
          <>
            <ChevronRight className="h-3.5 w-3.5 text-ink-400" />
            <span className="font-medium text-ink-900">{detailCode}</span>
          </>
        )}
      </div>

      {/* Search */}
      <div
        className={`flex max-w-[420px] flex-1 items-center gap-2.5 rounded-md border px-3 py-1.5 text-[12.5px] transition-[border-color,box-shadow,background] duration-150 ease-slice ${
          focused
            ? "border-forest-500 bg-white shadow-[0_0_0_3px_rgba(78,106,79,0.12)]"
            : "border-hairline bg-paper"
        }`}
      >
        <Search className="h-[14px] w-[14px] shrink-0 text-ink-400" strokeWidth={1.6} />
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          placeholder="Search properties, areas, codes…"
          className="flex-1 min-w-0 bg-transparent outline-none font-sans text-ink-900 placeholder:text-ink-400"
        />
        {query ? (
          <button
            type="button"
            onClick={() => {
              setQuery("");
              inputRef.current?.focus();
            }}
            className="flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full bg-sand-200 text-ink-600 hover:bg-sand-300 hover:text-ink-900"
            aria-label="Clear search"
          >
            <X className="h-3 w-3" strokeWidth={2} />
          </button>
        ) : (
          <kbd className="ml-auto shrink-0 rounded-[3px] border border-hairline-2 bg-paper-2 px-1.5 py-px font-mono text-[10px] text-ink-400">
            ⌘K
          </kbd>
        )}
      </div>

      {/* Actions */}
      <div className="flex items-center gap-1">
        <button
          className="relative flex h-[30px] w-[30px] items-center justify-center rounded-sm text-ink-600 hover:bg-sand-100"
          aria-label="Notifications"
        >
          <Bell className="h-[15px] w-[15px]" strokeWidth={1.6} />
          <span className="absolute top-1.5 right-2 h-1.5 w-1.5 rounded-full border-[1.5px] border-paper bg-terra-500" />
        </button>
        <button
          className="flex h-[30px] w-[30px] items-center justify-center rounded-sm text-ink-600 hover:bg-sand-100"
          aria-label="Settings"
        >
          <Settings className="h-[15px] w-[15px]" strokeWidth={1.6} />
        </button>
      </div>
    </div>
  );
}
