import { Property } from "@/types/property";
import {
  liveProperties,
  fundedProperties,
  exitedProperties,
} from "@/data/properties";

const allProperties: Property[] = [
  ...liveProperties,
  ...fundedProperties,
  ...exitedProperties,
];

function findProperties(query: string, maxResults: number = 3): Property[] {
  const q = query.toLowerCase().trim();

  const codeMatch = allProperties.filter((p) => p.code.toLowerCase() === q);
  if (codeMatch.length > 0) return codeMatch.slice(0, maxResults);

  const scored = allProperties
    .map((p) => {
      let score = 0;
      const title = p.title.toLowerCase();
      const area = p.location.area?.displayName.toLowerCase() ?? "";

      if (title.includes(q)) score += 3;
      if (area.includes(q)) score += 2;

      const words = q.split(/\s+/);
      for (const word of words) {
        if (word.length < 2) continue;
        if (title.includes(word)) score += 1;
        if (area.includes(word)) score += 1;
      }

      return { property: p, score };
    })
    .filter((r) => r.score > 0)
    .sort((a, b) => b.score - a.score);

  return scored.slice(0, maxResults).map((r) => r.property);
}

function formatPropertySummary(p: Property): string {
  const area = p.location.area?.displayName ?? "Dubai";
  const type = p.investmentType === "HOLD" ? "Hold" : "Flip";
  const status =
    p.propertyStatus === "LIVE"
      ? "Live"
      : p.propertyStatus === "EXITED" || p.propertyStatus === "SOLD"
        ? "Exited"
        : "Funded";

  let metrics = "";

  if (p.propertyStatus === "EXITED" || p.propertyStatus === "SOLD") {
    const roi = p.totalReturnRoiPercentage;
    const period = p.performance.investmentPeriod;
    metrics = `Total return: ${roi}% over ${period} months.`;
    if (p.valuation.saleProceed) {
      metrics += ` Exit price: AED ${Math.round(p.valuation.saleProceed).toLocaleString()}.`;
    }
    if (p.rental.totalRentalIncome > 0) {
      metrics += ` Total rental income: AED ${Math.round(p.rental.totalRentalIncome).toLocaleString()}.`;
    }
  } else if (p.investmentType === "HOLD") {
    const yld = p.rental.grossYield ?? p.rental.dividendYield;
    if (yld) metrics += `Rental yield: ${yld}%. `;
    if (p.valuation.marketValue) {
      metrics += `Market value: AED ${Math.round(p.valuation.marketValue).toLocaleString()} (${p.valuation.marketValuePercentage > 0 ? "+" : ""}${p.valuation.marketValuePercentage}%). `;
    }
    if (p.rental.totalRentalIncome > 0) {
      metrics += `Rental income earned: AED ${Math.round(p.rental.totalRentalIncome).toLocaleString()}. `;
    }
    metrics += `${p.investors || p.performance.investors} investors.`;
  } else {
    const roi = p.performance.annualized;
    if (roi) metrics += `Annualized ROI: ${roi}%. `;
    const reno = p.renovationProgress ?? p.performance.renovationProgress;
    if (reno !== null && reno !== undefined) {
      metrics += `Renovation: ${reno}% complete. `;
    }
    metrics += `Project cost: AED ${Math.round(p.projectPrice).toLocaleString()}. `;
    metrics += `${p.investors || p.performance.investors} investors.`;
  }

  const beds = p.physical.bedrooms > 0 ? `${p.physical.bedrooms}BR, ` : "";
  const sqft = p.physical.sqft ? `${p.physical.sqft} sqft, ` : "";

  return `${p.code}: ${p.title} (${type}, ${status}). ${beds}${sqft}${area}. ${metrics}`.trim();
}

function getStatusForProperty(p: Property): "Live" | "Funded" | "Exited" {
  if (p.propertyStatus === "LIVE") return "Live";
  if (p.propertyStatus === "EXITED" || p.propertyStatus === "SOLD")
    return "Exited";
  return "Funded";
}

export function lookupProperty({
  property_id,
}: {
  property_id: string;
}): string {
  const matches = findProperties(property_id);

  if (matches.length === 0) {
    return `No property found matching "${property_id}". Try a different name, area, or SC code (e.g. SC-315).`;
  }

  if (matches.length === 1) {
    return formatPropertySummary(matches[0]);
  }

  const summaries = matches.map((p) => formatPropertySummary(p)).join("\n\n");
  return `Found ${matches.length} matching properties:\n\n${summaries}`;
}

export function searchProperties({
  area,
  type,
  status,
  min_yield,
}: {
  area?: string;
  type?: string;
  status?: string;
  min_yield?: number;
}): string {
  let results = [...allProperties];

  if (area) {
    const a = area.toLowerCase();
    results = results.filter((p) => {
      const areaName = p.location.area?.displayName.toLowerCase() ?? "";
      const areaKey = p.location.area?.name.toLowerCase() ?? "";
      return areaName.includes(a) || areaKey.includes(a);
    });
  }

  if (type) {
    const t = type.toUpperCase();
    results = results.filter((p) => p.investmentType === t);
  }

  if (status) {
    const s = status.charAt(0).toUpperCase() + status.slice(1).toLowerCase();
    results = results.filter((p) => getStatusForProperty(p) === s);
  }

  if (min_yield !== undefined) {
    results = results.filter((p) => {
      const yld = p.rental.grossYield ?? p.rental.dividendYield ?? 0;
      return yld >= min_yield;
    });
  }

  if (results.length === 0) {
    return "No properties match those criteria. Try adjusting your filters.";
  }

  const maxShow = 5;
  const shown = results.slice(0, maxShow);
  const summaries = shown.map((p) => formatPropertySummary(p)).join("\n\n");

  let response = `Found ${results.length} matching ${results.length === 1 ? "property" : "properties"}:\n\n${summaries}`;

  if (results.length > maxShow) {
    response += `\n\n...and ${results.length - maxShow} more. Ask me to narrow it down by area, type, or yield.`;
  }

  return response;
}

export function calculateRoi({
  property_id,
  investment_amount,
  holding_years,
}: {
  property_id: string;
  investment_amount: number;
  holding_years?: number;
}): string {
  const matches = findProperties(property_id, 1);

  if (matches.length === 0) {
    return `No property found matching "${property_id}". Try a different name or SC code.`;
  }

  const p = matches[0];
  const amount = investment_amount;
  const entryFeeRate = 0.015;
  const annualFeeRate = 0.005;
  const exitFeeRate = 0.025;

  const entryFee = amount * entryFeeRate;
  const workingCapital = amount - entryFee;

  if (p.propertyStatus === "EXITED" || p.propertyStatus === "SOLD") {
    const totalRoiPct = p.totalReturnRoiPercentage;
    const period = p.performance.investmentPeriod;
    const grossReturn = workingCapital * (totalRoiPct / 100);
    const grossProceeds = workingCapital + grossReturn;
    const exitFee = grossProceeds * exitFeeRate;
    const netProceeds = grossProceeds - exitFee;
    const netProfit = netProceeds - amount;
    const netRoiPct = ((netProfit / amount) * 100).toFixed(1);

    return `${p.code}: ${p.title} (Exited after ${period} months, actual ${totalRoiPct}% return).
On a ${amount.toLocaleString()} AED investment:
- Entry fee (1.5%): ${Math.round(entryFee).toLocaleString()} AED
- Working capital: ${Math.round(workingCapital).toLocaleString()} AED
- Gross return (${totalRoiPct}%): ${Math.round(grossReturn).toLocaleString()} AED
- Exit fee (2.5%): ${Math.round(exitFee).toLocaleString()} AED
- Net return: ${Math.round(netProfit).toLocaleString()} AED (${netRoiPct}% net ROI)
Note: These are actual historical results for this property.`;
  }

  if (p.investmentType === "HOLD") {
    const years =
      holding_years ?? (Math.round(p.performance.investmentPeriod / 12) || 3);
    const yieldRate =
      (p.rental.grossYield ?? p.rental.dividendYield ?? 0) / 100;
    const appreciationRate = (p.valuation.marketValuePercentage ?? 0) / 100;

    const totalRentalIncome = workingCapital * yieldRate * years;
    const totalAdminFees = workingCapital * annualFeeRate * years;
    const capitalGain = workingCapital * appreciationRate;
    const grossProceeds = workingCapital + capitalGain;
    const exitFee = grossProceeds * exitFeeRate;
    const netProceeds = grossProceeds - exitFee;
    const netProfit =
      netProceeds + totalRentalIncome - totalAdminFees - amount;
    const netRoiPct = ((netProfit / amount) * 100).toFixed(1);
    const annualizedPct = (parseFloat(netRoiPct) / years).toFixed(1);

    return `${p.code}: ${p.title} (Hold, ${yieldRate * 100}% yield).
Projection for ${amount.toLocaleString()} AED over ${years} years:
- Entry fee (1.5%): ${Math.round(entryFee).toLocaleString()} AED
- Working capital: ${Math.round(workingCapital).toLocaleString()} AED
- Estimated rental income (${years}yr): ${Math.round(totalRentalIncome).toLocaleString()} AED
- Annual admin fees (0.5%/yr x ${years}): ${Math.round(totalAdminFees).toLocaleString()} AED
- Capital appreciation (${p.valuation.marketValuePercentage}%): ${Math.round(capitalGain).toLocaleString()} AED
- Exit fee (2.5%): ${Math.round(exitFee).toLocaleString()} AED
- Estimated net return: ${Math.round(netProfit).toLocaleString()} AED (${netRoiPct}% total, ~${annualizedPct}% per year)
Note: This is a projection based on current yield and market data, not a guarantee.`;
  }

  // FLIP
  const annualizedRoi = p.performance.annualized ?? 15;
  const periodMonths = p.performance.investmentPeriod || 12;
  const years = periodMonths / 12;
  const totalRoiRate = (annualizedRoi / 100) * years;
  const grossReturn = workingCapital * totalRoiRate;
  const grossProceeds = workingCapital + grossReturn;
  const exitFee = grossProceeds * exitFeeRate;
  const netProceeds = grossProceeds - exitFee;
  const netProfit = netProceeds - amount;
  const netRoiPct = ((netProfit / amount) * 100).toFixed(1);

  return `${p.code}: ${p.title} (Flip, ${annualizedRoi}% annualized ROI target).
Projection for ${amount.toLocaleString()} AED over ~${periodMonths} months:
- Entry fee (1.5%): ${Math.round(entryFee).toLocaleString()} AED
- Working capital: ${Math.round(workingCapital).toLocaleString()} AED
- Estimated gross return (${annualizedRoi}% ann. x ${years.toFixed(1)}yr): ${Math.round(grossReturn).toLocaleString()} AED
- Exit fee (2.5%): ${Math.round(exitFee).toLocaleString()} AED
- Estimated net return: ${Math.round(netProfit).toLocaleString()} AED (${netRoiPct}% net ROI)
Note: This is a projection based on the target ROI, not a guarantee. Actual returns depend on the sale price after renovation.`;
}

export function getRenovationStatus({
  property_id,
}: {
  property_id: string;
}): string {
  const matches = findProperties(property_id, 1);

  if (matches.length === 0) {
    return `No property found matching "${property_id}".`;
  }

  const p = matches[0];

  if (p.investmentType !== "FLIP") {
    return `${p.code}: ${p.title} is a Hold property — there is no renovation to track. Hold properties generate rental income instead.`;
  }

  const reno = p.renovationProgress ?? p.performance.renovationProgress ?? 0;

  let status: string;
  if (reno === 0) status = "not yet started";
  else if (reno <= 15) status = "just getting started";
  else if (reno <= 60) status = "underway";
  else if (reno <= 85) status = "well advanced";
  else if (reno < 100) status = "nearly complete";
  else status = "complete";

  return `${p.code}: ${p.title}. Renovation is ${reno}% complete (${status}).${p.propertyStatus === "EXITED" ? " This property has already been sold." : ""}`;
}
