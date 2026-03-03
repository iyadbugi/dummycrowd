import { describe, it, expect } from "vitest";
import {
  normalizeSCCode,
  normalizeAreaName,
  calculateRoi,
  getRenovationStatus,
  navigateToProperty,
  startInvestment,
} from "../agent-tools";

// --- normalizeSCCode ---

describe("normalizeSCCode", () => {
  it("passes through already-correct format", () => {
    expect(normalizeSCCode("SC-315")).toBe("SC-315");
  });

  it("normalizes spacing variations", () => {
    expect(normalizeSCCode("SC 315")).toBe("SC-315");
    expect(normalizeSCCode("S C 315")).toBe("SC-315");
    expect(normalizeSCCode("sc 315")).toBe("SC-315");
  });

  it("normalizes punctuation variations", () => {
    expect(normalizeSCCode("S.C. 315")).toBe("SC-315");
    expect(normalizeSCCode("S.C.315")).toBe("SC-315");
    expect(normalizeSCCode("S-C-315")).toBe("SC-315");
  });

  it("normalizes bare codes without separator", () => {
    expect(normalizeSCCode("sc315")).toBe("SC-315");
    expect(normalizeSCCode("SC315")).toBe("SC-315");
  });

  it("handles case insensitivity", () => {
    expect(normalizeSCCode("sc-315")).toBe("SC-315");
    expect(normalizeSCCode("Sc-327")).toBe("SC-327");
  });

  it("handles spelled-out numbers: digit-by-digit", () => {
    expect(normalizeSCCode("SC three one five")).toBe("SC-315");
    expect(normalizeSCCode("S C three one five")).toBe("SC-315");
  });

  it("handles spelled-out numbers: compound form", () => {
    expect(normalizeSCCode("SC three fifteen")).toBe("SC-315");
    expect(normalizeSCCode("S C three fifteen")).toBe("SC-315");
  });

  it("handles spelled-out numbers: hundreds form", () => {
    expect(normalizeSCCode("SC three hundred fifteen")).toBe("SC-315");
  });

  it("handles two-digit codes", () => {
    expect(normalizeSCCode("SC forty two")).toBe("SC-42");
    expect(normalizeSCCode("SC-12")).toBe("SC-12");
  });

  it("handles 'oh' as zero", () => {
    expect(normalizeSCCode("SC one oh six")).toBe("SC-106");
  });

  it("returns non-SC input unchanged", () => {
    expect(normalizeSCCode("Sports City")).toBe("Sports City");
    expect(normalizeSCCode("JVC")).toBe("JVC");
  });
});

// --- normalizeAreaName ---

describe("normalizeAreaName", () => {
  it("normalizes JVC spoken forms", () => {
    expect(normalizeAreaName("jay vee see")).toBe("JVC");
    expect(normalizeAreaName("Jay Vee See")).toBe("JVC");
  });

  it("normalizes JVT spoken forms", () => {
    expect(normalizeAreaName("jay vee tee")).toBe("JVT");
  });

  it("normalizes JLT spoken forms", () => {
    expect(normalizeAreaName("jay el tee")).toBe("JLT");
  });

  it("normalizes DIFC spoken forms", () => {
    expect(normalizeAreaName("dee eye ef see")).toBe("DIFC");
  });

  it("normalizes IMPZ spoken forms", () => {
    expect(normalizeAreaName("eye em pee zee")).toBe("IMPZ");
  });

  it("normalizes DSO spoken forms", () => {
    expect(normalizeAreaName("dee ess oh")).toBe("Silicon Oasis");
    expect(normalizeAreaName("dso")).toBe("Silicon Oasis");
  });

  it("normalizes within a longer phrase", () => {
    expect(normalizeAreaName("properties in jay vee see area")).toBe(
      "properties in JVC area"
    );
  });

  it("returns non-matching input unchanged", () => {
    expect(normalizeAreaName("Downtown Dubai")).toBe("Downtown Dubai");
    expect(normalizeAreaName("Palm Jumeirah")).toBe("Palm Jumeirah");
  });
});

// --- calculateRoi ---

describe("calculateRoi", () => {
  it("returns error for unknown property", () => {
    const result = calculateRoi({
      property_id: "SC-999",
      investment_amount: 10000,
    });
    expect(result).toContain("No property found");
  });

  it("calculates ROI for a Hold property (SC-331)", () => {
    const result = calculateRoi({
      property_id: "SC-331",
      investment_amount: 10000,
      holding_years: 3,
    });
    expect(result).toContain("SC-331");
    expect(result).toContain("Hold");
    expect(result).toContain("Entry fee (1.5%)");
    expect(result).toContain("Annual admin fees (0.5%");
    expect(result).toContain("Exit fee (2.5%)");
    expect(result).toContain("projection");
  });

  it("calculates ROI for a Flip property (SC-327)", () => {
    const result = calculateRoi({
      property_id: "SC-327",
      investment_amount: 50000,
    });
    expect(result).toContain("SC-327");
    expect(result).toContain("Flip");
    expect(result).toContain("Entry fee (1.5%)");
    expect(result).toContain("Exit fee (2.5%)");
    expect(result).toContain("not a guarantee");
  });

  it("calculates ROI for an Exited property (SC-106)", () => {
    const result = calculateRoi({
      property_id: "SC-106",
      investment_amount: 10000,
    });
    expect(result).toContain("SC-106");
    expect(result).toContain("Exited");
    expect(result).toContain("actual");
    expect(result).toContain("historical results");
  });

  it("applies fee math correctly for Hold", () => {
    // SC-331: Hold, 6.07% grossYield, 0% appreciation
    const result = calculateRoi({
      property_id: "SC-331",
      investment_amount: 100000,
      holding_years: 1,
    });
    // Entry fee: 100000 * 0.015 = 1500
    // Working capital: 98500
    expect(result).toContain("1,500");
    expect(result).toContain("98,500");
  });

  it("resolves speech-mangled SC codes", () => {
    const result = calculateRoi({
      property_id: "S C three thirty one",
      investment_amount: 10000,
    });
    expect(result).toContain("SC-331");
  });

  it("resolves speech-mangled area names", () => {
    const result = calculateRoi({
      property_id: "jay vee see",
      investment_amount: 10000,
    });
    // Should find a JVC property via fuzzy match
    expect(result).not.toContain("No property found");
  });
});

// --- getRenovationStatus ---

describe("getRenovationStatus", () => {
  it("returns error for unknown property", () => {
    const result = getRenovationStatus({ property_id: "SC-999" });
    expect(result).toContain("No property found");
  });

  it("reports Hold property has no renovation", () => {
    const result = getRenovationStatus({ property_id: "SC-331" });
    expect(result).toContain("Hold property");
    expect(result).toContain("no renovation");
  });

  it("reports renovation progress for Flip property", () => {
    // SC-319 is FLIP with renovationProgress: 5
    const result = getRenovationStatus({ property_id: "SC-319" });
    expect(result).toContain("SC-319");
    expect(result).toContain("5%");
    expect(result).toContain("just getting started");
  });

  it("resolves speech-mangled SC codes", () => {
    const result = getRenovationStatus({
      property_id: "S C three nineteen",
    });
    expect(result).toContain("SC-319");
  });
});

// --- navigateToProperty ---

describe("navigateToProperty", () => {
  it("returns error for unknown property", () => {
    const result = navigateToProperty({ property_code: "SC-999" });
    expect(result).toContain("No property found");
  });

  it("returns success message with property code and title", () => {
    const result = navigateToProperty({ property_code: "SC-315" });
    expect(result).toContain("SC-315");
    expect(result).toContain("Navigating");
  });

  it("resolves speech-mangled codes", () => {
    const result = navigateToProperty({ property_code: "S C three fifteen" });
    expect(result).toContain("SC-315");
  });
});

// --- startInvestment ---

describe("startInvestment", () => {
  it("returns error for unknown property", () => {
    const result = startInvestment({ property_code: "SC-999" });
    expect(result).toContain("No property found");
  });

  it("returns success for Live property (SC-331)", () => {
    const result = startInvestment({ property_code: "SC-331" });
    expect(result).toContain("Opening investment");
    expect(result).toContain("SC-331");
  });

  it("rejects Funded property (SC-315)", () => {
    const result = startInvestment({ property_code: "SC-315" });
    expect(result).toContain("not open for new investment");
  });

  it("rejects Exited property (SC-106)", () => {
    const result = startInvestment({ property_code: "SC-106" });
    expect(result).toContain("not open for new investment");
  });

  it("resolves speech-mangled codes", () => {
    const result = startInvestment({ property_code: "S C three thirty one" });
    expect(result).toContain("SC-331");
  });
});
