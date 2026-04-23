"use client";

import { useState, useRef, useEffect, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import {
  liveProperties,
  fundedProperties,
  exitedProperties,
} from "@/data/properties";
import { Property } from "@/types/property";
import PropertyGrid from "@/components/PropertyGrid";
import { setCurrentTab } from "@/lib/dashboard-context";
import { Check, ChevronDown, MapPin } from "lucide-react";

type Tab = "live" | "funded" | "exited";
type TypeFilter = "ALL" | "HOLD" | "FLIP";

const tabs: { key: Tab; label: string; data: Property[] }[] = [
  { key: "live", label: "Live", data: liveProperties },
  { key: "funded", label: "Funded", data: fundedProperties },
  { key: "exited", label: "Exited", data: exitedProperties },
];

function matchesSearch(p: Property, q: string): boolean {
  if (!q) return true;
  const needle = q.toLowerCase();
  return (
    p.code.toLowerCase().includes(needle) ||
    p.title.toLowerCase().includes(needle) ||
    (p.location.area?.displayName ?? "").toLowerCase().includes(needle) ||
    p.investmentType.toLowerCase().includes(needle)
  );
}

function areaOptions(properties: Property[]): string[] {
  const set = new Set<string>();
  properties.forEach((p) => {
    if (p.location.area?.displayName) set.add(p.location.area.displayName);
  });
  return Array.from(set).sort();
}

export default function PropertyTabs() {
  const [activeTab, setActiveTab] = useState<Tab>("live");
  const [typeFilter, setTypeFilter] = useState<TypeFilter>("ALL");
  const [areaFilter, setAreaFilter] = useState<string | null>(null);
  const [areaOpen, setAreaOpen] = useState(false);
  const [highlightedCode, setHighlightedCode] = useState<string | null>(null);
  const areaRef = useRef<HTMLDivElement>(null);

  const searchParams = useSearchParams();
  const query = searchParams.get("q") ?? "";

  // Close area dropdown on outside click
  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (areaRef.current && !areaRef.current.contains(e.target as Node)) {
        setAreaOpen(false);
      }
    }
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  // Reset filters on tab switch + notify dashboard context
  useEffect(() => {
    setTypeFilter("ALL");
    setAreaFilter(null);
    setCurrentTab(activeTab);
  }, [activeTab]);

  // Listen for navigate-to-property events from voice agent
  useEffect(() => {
    function handleNavigate(e: Event) {
      const { code, tab } = (e as CustomEvent).detail;
      setActiveTab(tab);
      setTypeFilter("ALL");
      setAreaFilter(null);
      setHighlightedCode(code);
      setTimeout(() => setHighlightedCode(null), 4000);
    }
    window.addEventListener("navigate-to-property", handleNavigate);
    return () =>
      window.removeEventListener("navigate-to-property", handleNavigate);
  }, []);

  // Dispatch dashboard-tab-change for voice agent contextual updates
  useEffect(() => {
    window.dispatchEvent(
      new CustomEvent("dashboard-tab-change", { detail: { tab: activeTab } })
    );
  }, [activeTab]);

  const activeAreas = useMemo(() => {
    const tabData = tabs.find((t) => t.key === activeTab)!;
    return areaOptions(tabData.data);
  }, [activeTab]);

  const filteredProperties = useMemo(() => {
    const tabData = tabs.find((t) => t.key === activeTab);
    let properties = tabData ? tabData.data : [];
    if (typeFilter !== "ALL") {
      properties = properties.filter((p) => p.investmentType === typeFilter);
    }
    if (areaFilter) {
      properties = properties.filter(
        (p) => p.location.area?.displayName === areaFilter
      );
    }
    if (query) {
      properties = properties.filter((p) => matchesSearch(p, query));
    }
    return properties;
  }, [activeTab, typeFilter, areaFilter, query]);

  // Cross-tab hint for search results
  const crossTabHint = useMemo(() => {
    if (!query) return null;
    const counts = tabs.map((t) => ({
      key: t.key,
      label: t.label,
      count: t.data.filter((p) => matchesSearch(p, query)).length,
    }));
    const others = counts.filter(
      (c) => c.key !== activeTab && c.count > 0
    );
    return { total: counts.find((c) => c.key === activeTab)?.count ?? 0, others };
  }, [query, activeTab]);

  const typeChips: { value: TypeFilter; label: string }[] = [
    { value: "ALL", label: "All" },
    { value: "HOLD", label: "Hold" },
    { value: "FLIP", label: "Flip" },
  ];

  return (
    <div className="flex flex-col gap-[14px]">
      {/* Section head */}
      <div className="flex items-end justify-between gap-4 border-b border-hairline pb-[14px]">
        <div>
          <h2 className="text-[18px] font-medium tracking-[-0.01em] text-ink-900">
            Own a slice from AED 500
          </h2>
          <p className="mt-[3px] text-[12px] text-ink-600">
            Vetted properties · AED 500 minimum · DFSA-regulated
          </p>
        </div>
        {/* Desktop tabs */}
        <div className="hidden md:flex gap-[22px]">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.key;
            return (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`relative py-1.5 text-[13px] font-medium transition-colors ${
                  isActive
                    ? "text-ink-900"
                    : "text-ink-600 hover:text-ink-800"
                }`}
              >
                {tab.label}
                <span className="ml-1 font-mono text-[11px] font-normal text-ink-400">
                  {tab.data.length}
                </span>
                {isActive && (
                  <span className="absolute -bottom-[15px] left-0 right-0 h-px bg-ink-900" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Mobile tabs */}
      <div className="flex md:hidden border-b border-hairline">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.key;
          return (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`relative flex-1 py-3 text-center text-[13px] font-medium transition-colors ${
                isActive ? "text-ink-900" : "text-ink-600"
              }`}
            >
              {tab.label}{" "}
              <span className="font-mono text-[11px] text-ink-400">
                {tab.data.length}
              </span>
              {isActive && (
                <span className="absolute bottom-0 left-0 right-0 h-px bg-ink-900" />
              )}
            </button>
          );
        })}
      </div>

      {/* Cross-tab search banner */}
      {query && crossTabHint && (
        <div className="-my-1.5 flex items-center justify-between gap-3 rounded-md border border-hairline-2 bg-paper-2 px-3.5 py-2.5 text-[12.5px] text-ink-600">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-medium text-ink-900">
              {crossTabHint.total}
            </span>
            <span>results for</span>
            <span className="font-mono font-medium text-ink-900">
              “{query}”
            </span>
            <span className="text-ink-500">in {activeTab}</span>
            {crossTabHint.others.length > 0 && (
              <span className="text-ink-500">
                · also in{" "}
                {crossTabHint.others.map((o, i) => (
                  <span key={o.key}>
                    <button
                      type="button"
                      onClick={() => setActiveTab(o.key as Tab)}
                      className="text-forest-700 underline decoration-hairline underline-offset-2 hover:decoration-forest-500"
                    >
                      {o.label.toLowerCase()} ({o.count})
                    </button>
                    {i < crossTabHint.others.length - 1 ? ", " : ""}
                  </span>
                ))}
              </span>
            )}
          </div>
        </div>
      )}

      {/* Toolbar */}
      <div className="flex flex-wrap items-center gap-2">
        {typeChips.map((chip) => {
          const isActive = typeFilter === chip.value;
          return (
            <button
              key={chip.value}
              onClick={() => setTypeFilter(chip.value)}
              className={`inline-flex items-center gap-1.5 rounded-md border px-3 py-1.5 text-[12px] font-medium leading-none transition-all duration-[120ms] ease-slice ${
                isActive
                  ? "border-ink-900 bg-ink-900 text-paper"
                  : "border-hairline bg-paper text-ink-900 hover:bg-sand-100"
              }`}
            >
              {chip.label}
            </button>
          );
        })}

        <span className="mx-0.5 h-[18px] w-px bg-hairline" />

        {/* Area dropdown */}
        <div className="relative" ref={areaRef}>
          <button
            type="button"
            onClick={() => setAreaOpen((v) => !v)}
            className={`inline-flex items-center gap-1.5 rounded-md border px-3 py-1.5 text-[12px] font-medium leading-none transition-colors ease-slice ${
              areaFilter
                ? "border-ink-900 bg-ink-900 text-paper"
                : "border-hairline bg-paper text-ink-900 hover:bg-sand-100"
            }`}
          >
            <MapPin className="h-3.5 w-3.5" strokeWidth={1.6} />
            {areaFilter ?? "All areas"}
            <ChevronDown className="h-3.5 w-3.5" strokeWidth={1.6} />
          </button>
          {areaOpen && (
            <div className="absolute left-0 top-[calc(100%+6px)] z-30 min-w-[220px] max-h-[300px] overflow-y-auto rounded-md border border-hairline bg-paper p-1.5 shadow-pop">
              <button
                type="button"
                onClick={() => {
                  setAreaFilter(null);
                  setAreaOpen(false);
                }}
                className={`flex w-full items-center justify-between gap-2.5 rounded-sm px-2.5 py-1.5 text-[12.5px] leading-tight hover:bg-sand-100 ${
                  !areaFilter ? "font-medium text-ink-900" : "text-ink-800"
                }`}
              >
                All areas
                {!areaFilter && (
                  <Check className="h-3.5 w-3.5 text-forest-700" />
                )}
              </button>
              <div className="my-1 h-px bg-hairline-2" />
              {activeAreas.map((area) => {
                const isActive = areaFilter === area;
                return (
                  <button
                    key={area}
                    type="button"
                    onClick={() => {
                      setAreaFilter(area);
                      setAreaOpen(false);
                    }}
                    className={`flex w-full items-center justify-between gap-2.5 rounded-sm px-2.5 py-1.5 text-[12.5px] leading-tight hover:bg-sand-100 ${
                      isActive ? "font-medium text-ink-900" : "text-ink-800"
                    }`}
                  >
                    {area}
                    {isActive && (
                      <Check className="h-3.5 w-3.5 text-forest-700" />
                    )}
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* Grid */}
      <PropertyGrid
        properties={filteredProperties}
        highlightedCode={highlightedCode}
      />
    </div>
  );
}
