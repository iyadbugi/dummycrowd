"use client";

import { useState, useRef, useEffect, useMemo } from "react";
import {
  liveProperties,
  fundedProperties,
  exitedProperties,
} from "@/data/properties";
import { Property } from "@/types/property";
import PropertyGrid from "@/components/PropertyGrid";
import { setCurrentTab } from "@/lib/dashboard-context";
import { Home, Wrench, ChevronDown } from "lucide-react";

type Tab = "live" | "funded" | "exited";
type TypeFilter = "ALL" | "HOLD" | "FLIP";

const tabs: { key: Tab; label: string; getData: () => Property[] }[] = [
  { key: "live", label: "Live", getData: () => liveProperties },
  { key: "funded", label: "Funded", getData: () => fundedProperties },
  { key: "exited", label: "Exited", getData: () => exitedProperties },
];

const typeFilterOptions: {
  value: TypeFilter;
  label: string;
  icon: typeof Home;
}[] = [
  { value: "ALL", label: "All", icon: Home },
  { value: "HOLD", label: "Hold", icon: Home },
  { value: "FLIP", label: "Flip", icon: Wrench },
];

export default function PropertyTabs() {
  const [activeTab, setActiveTab] = useState<Tab>("live");
  const [typeFilter, setTypeFilter] = useState<TypeFilter>("ALL");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [highlightedCode, setHighlightedCode] = useState<string | null>(null);

  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Reset type filter to ALL when switching tabs
  useEffect(() => {
    setTypeFilter("ALL");
    setCurrentTab(activeTab);
  }, [activeTab]);

  // Listen for navigate-to-property events from voice agent
  useEffect(() => {
    function handleNavigate(e: Event) {
      const { code, tab } = (e as CustomEvent).detail;
      setActiveTab(tab);
      setTypeFilter("ALL");
      setHighlightedCode(code);
      // Auto-clear highlight after 4 seconds
      setTimeout(() => setHighlightedCode(null), 4000);
    }

    window.addEventListener("navigate-to-property", handleNavigate);
    return () => window.removeEventListener("navigate-to-property", handleNavigate);
  }, []);

  // Dispatch tab change event for voice agent contextual updates
  useEffect(() => {
    window.dispatchEvent(
      new CustomEvent("dashboard-tab-change", { detail: { tab: activeTab } })
    );
  }, [activeTab]);

  // Compute filtered properties
  const filteredProperties = useMemo(() => {
    const tabData = tabs.find((t) => t.key === activeTab);
    const properties = tabData ? tabData.getData() : [];

    if (typeFilter === "ALL") {
      return properties;
    }

    return properties.filter((p) => p.investmentType === typeFilter);
  }, [activeTab, typeFilter]);

  // Get the current filter option for the button label
  const currentFilterOption = typeFilterOptions.find(
    (o) => o.value === typeFilter
  )!;

  return (
    <div>
      {/* Header row: tabs + type filter */}
      <div className="flex items-center justify-between mb-6">
        {/* Left: Tab pills */}
        <div className="flex items-center gap-1 rounded-full border border-gray-200 dark:border-[#1C3058] bg-white dark:bg-[#111F42] p-1">
          {tabs.map((tab) => {
            const count = tab.getData().length;
            const isActive = activeTab === tab.key;

            return (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={
                  isActive
                    ? "bg-sc-blue text-white rounded-full px-5 py-2 text-sm font-medium transition-colors"
                    : "text-sc-text-muted hover:text-sc-text-dark px-5 py-2 text-sm font-medium rounded-full transition-colors"
                }
              >
                {tab.label} ({count})
              </button>
            );
          })}
        </div>

        {/* Right: Type filter dropdown */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setDropdownOpen((prev) => !prev)}
            className="border border-gray-200 dark:border-[#1C3058] rounded-lg px-4 py-2 bg-white dark:bg-[#111F42] text-sc-text-dark text-sm flex items-center gap-2 hover:border-gray-300 dark:hover:border-white/20 transition-colors"
          >
            <currentFilterOption.icon className="h-4 w-4 text-sc-text-muted" />
            <span>{currentFilterOption.label}</span>
            <ChevronDown className="h-4 w-4 text-sc-text-muted" />
          </button>

          {dropdownOpen && (
            <div className="absolute right-0 top-full mt-1 bg-white dark:bg-[#111F42] border border-gray-200 dark:border-[#1C3058] rounded-lg shadow-lg py-1 z-10 min-w-[140px]">
              {typeFilterOptions.map((option) => {
                const Icon = option.icon;
                const isActive = typeFilter === option.value;

                return (
                  <button
                    key={option.value}
                    onClick={() => {
                      setTypeFilter(option.value);
                      setDropdownOpen(false);
                    }}
                    className={`w-full px-4 py-2.5 hover:bg-gray-50 dark:hover:bg-white/5 flex items-center gap-2 text-sm cursor-pointer transition-colors ${
                      isActive
                        ? "text-sc-blue font-medium"
                        : "text-sc-text-dark"
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    {option.label}
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* Property grid */}
      <PropertyGrid properties={filteredProperties} highlightedCode={highlightedCode} />
    </div>
  );
}
