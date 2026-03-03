// src/lib/dashboard-context.ts
import { liveProperties } from "@/data/properties";

export type Tab = "live" | "funded" | "exited";

let currentTab: Tab = "live";

export function getCurrentTab(): Tab {
  return currentTab;
}

export function setCurrentTab(tab: Tab): void {
  currentTab = tab;
}

export function getTimeOfDay(): "morning" | "afternoon" | "evening" {
  const hour = new Date().getHours();
  if (hour < 12) return "morning";
  if (hour < 17) return "afternoon";
  return "evening";
}

export function getLivePropertyCount(): number {
  return liveProperties.length;
}
