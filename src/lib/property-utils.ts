import { Property } from "@/types/property";

const KNOWN_AREAS = [
  "Palm Jumeirah", "Downtown Dubai", "Downtown", "DIFC", "Dubai Marina",
  "Business Bay", "JVC", "JVT", "JLT", "Sports City", "IMPZ",
  "Discovery Gardens", "Arjan", "Dubai Hills", "Old Town",
  "Silicon Oasis", "Al Furjan", "Jumeirah Village",
];

function extractAreaFromTitle(title: string): string | null {
  for (const area of KNOWN_AREAS) {
    if (title.toLowerCase().includes(area.toLowerCase())) {
      return area;
    }
  }
  return null;
}

/**
 * Formats a price amount with commas and 2 decimal places.
 * Example: 578000 -> "578,000.00"
 */
export function formatPrice(amount: number): string {
  return amount.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

/**
 * Formats a price in compact form.
 * Example: 578000 -> "578K", 1290000 -> "1.29M"
 */
export function formatPriceShort(amount: number): string {
  if (amount >= 1_000_000) {
    const millions = amount / 1_000_000;
    // Remove trailing zeros after decimal
    const formatted = millions.toFixed(2).replace(/\.?0+$/, "");
    return `${formatted}M`;
  }
  if (amount >= 1_000) {
    const thousands = amount / 1_000;
    const formatted = thousands.toFixed(2).replace(/\.?0+$/, "");
    return `${formatted}K`;
  }
  return amount.toString();
}

/**
 * Returns an array of property spec strings for display.
 * Example: ["1", "824 sq ft", "JVT", "Long term"]
 */
export function getPropertySpecs(property: Property): string[] {
  const specs: string[] = [];

  // Bedrooms (only if > 0)
  if (property.physical.bedrooms > 0) {
    specs.push(String(property.physical.bedrooms));
  }

  // Square footage (if available)
  if (property.physical.sqft) {
    specs.push(`${property.physical.sqft.toLocaleString("en-US")} sq ft`);
  }

  // Area display name (if available, fall back to extracting from title)
  if (property.location.area) {
    specs.push(property.location.area.displayName);
  } else {
    const areaFromTitle = extractAreaFromTitle(property.title);
    if (areaFromTitle) {
      specs.push(areaFromTitle);
    }
  }

  // Investment term (for HOLD properties with investmentCategory)
  if (property.investmentType === "HOLD" && property.investmentCategory) {
    if (property.investmentCategory === "LONG_TERM") {
      specs.push("Long term");
    } else if (property.investmentCategory === "SHORT_TERM") {
      specs.push("Short term");
    }
  }

  return specs;
}

/**
 * Calculates the remaining amount to be funded.
 */
export function getRemainingAmount(property: Property): number {
  return property.projectPrice - property.performance.fundedAmount;
}

/**
 * Returns the funded percentage from property performance.
 */
export function getFundedPercentage(property: Property): number {
  return property.performance.funded;
}
