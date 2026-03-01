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

// --- Speech-to-text normalization (Phase 2) ---

const NUMBER_WORDS: Record<string, number> = {
  zero: 0, oh: 0,
  one: 1, two: 2, three: 3, four: 4, five: 5,
  six: 6, seven: 7, eight: 8, nine: 9,
  ten: 10, eleven: 11, twelve: 12, thirteen: 13, fourteen: 14, fifteen: 15,
  sixteen: 16, seventeen: 17, eighteen: 18, nineteen: 19,
  twenty: 20, thirty: 30, forty: 40, fifty: 50,
  sixty: 60, seventy: 70, eighty: 80, ninety: 90,
};

/**
 * Convert spoken number words to a numeric string.
 * Handles: "three fifteen" → "315", "three one five" → "315",
 * "three hundred fifteen" → "315", "forty two" → "42"
 */
function wordsToNumber(words: string): string | null {
  const tokens = words.toLowerCase().split(/[\s-]+/).filter(t => t.length > 0);
  if (tokens.length === 0) return null;

  const nums: number[] = [];
  let i = 0;

  while (i < tokens.length) {
    const val = NUMBER_WORDS[tokens[i]];
    if (val === undefined) return null;

    if (i + 1 < tokens.length && tokens[i + 1] === "hundred") {
      // "three hundred fifteen" → 315
      let result = val * 100;
      i += 2;
      while (i < tokens.length && NUMBER_WORDS[tokens[i]] !== undefined) {
        result += NUMBER_WORDS[tokens[i]];
        i++;
      }
      nums.push(result);
    } else if (val >= 20 && val % 10 === 0 && i + 1 < tokens.length) {
      // "forty two" → 42
      const next = NUMBER_WORDS[tokens[i + 1]];
      if (next !== undefined && next >= 1 && next <= 9) {
        nums.push(val + next);
        i += 2;
      } else {
        nums.push(val);
        i++;
      }
    } else {
      nums.push(val);
      i++;
    }
  }

  if (nums.length === 0) return null;
  if (nums.length === 1) return String(nums[0]);

  // All single digits → concatenate: "three one five" → "315"
  if (nums.every(n => n >= 0 && n <= 9)) return nums.join("");

  // Single digit + two-digit: "three fifteen" → 315
  if (nums.length === 2 && nums[0] >= 1 && nums[0] <= 9 && nums[1] >= 10 && nums[1] <= 99) {
    return String(nums[0] * 100 + nums[1]);
  }

  return nums.map(String).join("");
}

/**
 * Normalize speech-to-text variations of SC property codes.
 * "SC 315" / "S.C. 315" / "S C three fifteen" → "SC-315"
 */
export function normalizeSCCode(input: string): string {
  const s = input.trim();

  // Match "SC" prefix with various separators, then capture the rest
  const scPrefix = /^[Ss][\s.\-]*[Cc][\s.\-]*(.+)$/;
  const match = s.match(scPrefix);

  if (match) {
    let numPart = match[1].trim();

    // Already digits
    if (/^\d+$/.test(numPart)) return `SC-${numPart}`;

    // Try converting number words ("three fifteen" → "315")
    const converted = wordsToNumber(numPart);
    if (converted) return `SC-${converted}`;

    // Strip remaining separators and check again
    numPart = numPart.replace(/[\s.\-]/g, "");
    if (/^\d+$/.test(numPart)) return `SC-${numPart}`;
  }

  // Bare "sc315" without separator
  const bare = s.match(/^[Ss][Cc](\d+)$/);
  if (bare) return `SC-${bare[1]}`;

  return s;
}

const AREA_SPEECH_ALIASES: [RegExp, string][] = [
  // JVC - Jumeirah Village Circle
  [/\bjay\s+vee\s+see\b/i, "JVC"],
  [/\bjay\s+v\s+c\b/i, "JVC"],
  [/\bj\s+v\s+c\b/i, "JVC"],
  // JVT - Jumeirah Village Triangle
  [/\bjay\s+vee\s+tee\b/i, "JVT"],
  [/\bj\s+v\s+t\b/i, "JVT"],
  // JLT - Jumeirah Lakes Towers
  [/\bjay\s+el\s+tee\b/i, "JLT"],
  [/\bjay\s+l\s+t\b/i, "JLT"],
  [/\bj\s+l\s+t\b/i, "JLT"],
  // DIFC - Dubai International Financial Centre
  [/\bdee\s+eye\s+ef\s+see\b/i, "DIFC"],
  [/\bd\s+i\s+f\s+c\b/i, "DIFC"],
  // IMPZ
  [/\beye\s+em\s+pee\s+zee\b/i, "IMPZ"],
  [/\bi\s+m\s+p\s+z\b/i, "IMPZ"],
  // DSO - Dubai Silicon Oasis
  [/\bdee\s+ess\s+oh\b/i, "Silicon Oasis"],
  [/\bd\s+s\s+o\b/i, "Silicon Oasis"],
  [/\bdso\b/i, "Silicon Oasis"],
];

/**
 * Normalize spoken area name abbreviations.
 * "jay vee see" → "JVC", "dee eye ef see" → "DIFC"
 */
export function normalizeAreaName(input: string): string {
  let result = input;
  for (const [pattern, canonical] of AREA_SPEECH_ALIASES) {
    result = result.replace(pattern, canonical);
  }
  return result;
}

/**
 * Combined normalization for property_id parameters.
 * Tries SC code normalization first, then area name normalization.
 */
function normalizePropertyQuery(input: string): string {
  const scNormalized = normalizeSCCode(input);
  if (scNormalized !== input) return scNormalized;
  return normalizeAreaName(input);
}

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
  const normalizedId = normalizePropertyQuery(property_id);
  const matches = findProperties(normalizedId, 1);

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
  const normalizedId = normalizePropertyQuery(property_id);
  const matches = findProperties(normalizedId, 1);

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
