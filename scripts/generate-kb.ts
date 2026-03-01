/**
 * Generates a Knowledge Base document from property data for ElevenLabs.
 *
 * Usage: npx tsx scripts/generate-kb.ts
 * Output: docs/kb-property-portfolio.txt
 */

import { liveProperties, fundedProperties, exitedProperties } from "../src/data/properties";
import type { Property } from "../src/types/property";
import { writeFileSync } from "fs";
import { join } from "path";

const MAX_CHARS = 300_000;

function bedroomLabel(bedrooms: number): string {
  if (bedrooms === 0) return "Studio";
  return `${bedrooms}BR`;
}

function formatPrice(price: number): string {
  if (price >= 1_000_000) {
    const m = price / 1_000_000;
    return `AED ${m % 1 === 0 ? m.toFixed(0) : m.toFixed(2)}M`;
  }
  return `AED ${price.toLocaleString("en-US")}`;
}

function formatProperty(p: Property): string {
  const area = p.location.area?.displayName ?? "Dubai";
  const type = p.investmentType === "HOLD" ? "Hold" : "Flip";
  const status =
    p.propertyStatus === "LIVE" ? "Live" :
    p.propertyStatus === "EXITED" ? "Exited" :
    p.propertyStatus === "SOLD" ? "Exited" : "Funded";
  const bed = bedroomLabel(p.physical.bedrooms);
  const sqft = p.physical.sqft ? `${p.physical.sqft.toLocaleString("en-US")} sqft` : null;
  const price = formatPrice(p.price);

  const parts: string[] = [];

  // Line 1: code, title, type, status
  parts.push(`${p.code}: ${p.title} (${type}, ${status})`);

  // Line 2: physical + location
  const physicalParts = [bed, sqft, area].filter(Boolean);
  parts.push(physicalParts.join(", "));

  // Line 3: key metrics (varies by type and status)
  const metrics: string[] = [];

  // Price
  metrics.push(`Price: ${price}`);

  // Yield (Hold only, when available)
  if (p.investmentType === "HOLD" && p.rental.grossYield) {
    metrics.push(`Gross yield: ${p.rental.grossYield}%`);
  }
  if (p.rental.netYield) {
    metrics.push(`Net yield: ${p.rental.netYield}%`);
  }

  // Annualized return
  if (p.performance.annualized) {
    metrics.push(`Annualized: ${p.performance.annualized}%`);
  }

  // Total ROI (exited/funded)
  if (p.totalReturnRoiPercentage && p.totalReturnRoiPercentage > 0) {
    metrics.push(`Total ROI: ${p.totalReturnRoiPercentage}%`);
  }

  // Market value change (funded)
  if (p.valuation.marketValue && p.valuation.marketValuePercentage) {
    const dir = p.valuation.marketValuePercentage > 0 ? "+" : "";
    metrics.push(`Market value: ${formatPrice(p.valuation.marketValue)} (${dir}${p.valuation.marketValuePercentage}%)`);
  }

  // Sale proceeds (exited)
  if (p.valuation.saleProceed) {
    metrics.push(`Sale proceeds: ${formatPrice(p.valuation.saleProceed)}`);
  }

  // Investment period
  if (p.performance.investmentPeriod > 0) {
    metrics.push(`${p.performance.investmentPeriod} months`);
  }

  // Renovation progress (Flip)
  if (p.investmentType === "FLIP" && p.performance.renovationProgress !== null) {
    metrics.push(`Renovation: ${p.performance.renovationProgress}%`);
  }

  // Investors
  if (p.investors > 0) {
    metrics.push(`${p.investors} investors`);
  }

  // Funding progress (live)
  if (status === "Live" && p.performance.funded > 0 && p.performance.funded < 100) {
    metrics.push(`${p.performance.funded.toFixed(0)}% funded`);
  }

  parts.push(metrics.join(". "));

  return parts.join("\n");
}

function groupByArea(properties: Property[]): Map<string, Property[]> {
  const groups = new Map<string, Property[]>();
  for (const p of properties) {
    const area = p.location.area?.displayName ?? "Other";
    if (!groups.has(area)) groups.set(area, []);
    groups.get(area)!.push(p);
  }
  // Sort areas alphabetically
  return new Map([...groups.entries()].sort((a, b) => a[0].localeCompare(b[0])));
}

function generateSection(title: string, properties: Property[], summary: string): string {
  const lines: string[] = [];
  lines.push(`=== ${title} (${properties.length} properties) ===`);
  lines.push(summary);
  lines.push("");

  const byArea = groupByArea(properties);
  for (const [area, props] of byArea) {
    lines.push(`--- ${area} ---`);
    for (const p of props) {
      lines.push(formatProperty(p));
      lines.push("");
    }
  }

  return lines.join("\n");
}

function computeSummary(properties: Property[], type: "live" | "funded" | "exited"): string {
  const holdCount = properties.filter(p => p.investmentType === "HOLD").length;
  const flipCount = properties.filter(p => p.investmentType === "FLIP").length;
  const totalPrice = properties.reduce((sum, p) => sum + p.price, 0);
  const totalInvestors = properties.reduce((sum, p) => sum + p.investors, 0);

  const parts = [`${holdCount} Hold, ${flipCount} Flip`];
  parts.push(`Total value: ${formatPrice(totalPrice)}`);

  if (totalInvestors > 0) {
    parts.push(`${totalInvestors.toLocaleString("en-US")} investors`);
  }

  if (type === "exited") {
    const withRoi = properties.filter(p => p.totalReturnRoiPercentage > 0);
    if (withRoi.length > 0) {
      const avgRoi = withRoi.reduce((s, p) => s + p.totalReturnRoiPercentage, 0) / withRoi.length;
      parts.push(`Avg ROI: ${avgRoi.toFixed(1)}%`);
    }
    const totalProceeds = properties.reduce((s, p) => s + (p.valuation.saleProceed ?? 0), 0);
    if (totalProceeds > 0) {
      parts.push(`Total sale proceeds: ${formatPrice(totalProceeds)}`);
    }
  }

  if (type === "funded") {
    const withYield = properties.filter(p => p.rental.grossYield && p.rental.grossYield > 0);
    if (withYield.length > 0) {
      const avgYield = withYield.reduce((s, p) => s + (p.rental.grossYield ?? 0), 0) / withYield.length;
      parts.push(`Avg gross yield: ${avgYield.toFixed(1)}%`);
    }
  }

  return parts.join(". ");
}

// --- Generate ---

const sections: string[] = [];

sections.push("SmartCrowd Property Portfolio\n");

if (liveProperties.length > 0) {
  sections.push(generateSection(
    "LIVE PROPERTIES — Open for Investment",
    [...liveProperties],
    computeSummary([...liveProperties], "live"),
  ));
}

sections.push(generateSection(
  "FUNDED PROPERTIES — Fully Funded, Earning Returns",
  [...fundedProperties],
  computeSummary([...fundedProperties], "funded"),
));

sections.push(generateSection(
  "EXITED PROPERTIES — Sold, Returns Distributed",
  [...exitedProperties],
  computeSummary([...exitedProperties], "exited"),
));

const output = sections.join("\n\n");
const charCount = output.length;

console.log(`Generated property portfolio KB document`);
console.log(`Total properties: ${liveProperties.length + fundedProperties.length + exitedProperties.length}`);
console.log(`  Live: ${liveProperties.length}`);
console.log(`  Funded: ${fundedProperties.length}`);
console.log(`  Exited: ${exitedProperties.length}`);
console.log(`Character count: ${charCount.toLocaleString("en-US")} / ${MAX_CHARS.toLocaleString("en-US")}`);

if (charCount > MAX_CHARS) {
  console.error(`\n*** WARNING: Output exceeds ${MAX_CHARS.toLocaleString("en-US")} character limit by ${(charCount - MAX_CHARS).toLocaleString("en-US")} characters ***`);
  process.exit(1);
}

const outPath = join(__dirname, "..", "docs", "kb-property-portfolio.txt");
writeFileSync(outPath, output, "utf-8");
console.log(`\nWritten to: ${outPath}`);
