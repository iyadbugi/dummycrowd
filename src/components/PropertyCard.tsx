"use client";

import { useRef, useEffect } from "react";
import { Property } from "@/types/property";
import { formatPrice, getPropertySpecs, getRemainingAmount, getFundedPercentage } from "@/lib/property-utils";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Bed, Maximize, MapPin, Clock, Users, Home, Wrench } from "lucide-react";

// ---------------------------------------------------------------------------
// Gradient map: area name -> Tailwind gradient classes
// ---------------------------------------------------------------------------
const gradients: Record<string, string> = {
  "Discovery Gardens": "from-amber-400 to-orange-500",
  "JVT": "from-blue-400 to-cyan-500",
  "Downtown Dubai": "from-purple-500 to-indigo-600",
  "DIFC": "from-blue-600 to-indigo-700",
  "Palm Jumeirah": "from-cyan-400 to-emerald-500",
  "Sports City": "from-green-400 to-lime-500",
  "Dubai Marina": "from-blue-500 to-purple-500",
  "JVC": "from-teal-400 to-blue-500",
  "Arjan": "from-rose-400 to-pink-500",
  "Dubai Hills": "from-emerald-400 to-teal-500",
  "IMPZ": "from-yellow-400 to-amber-500",
  "Old Town": "from-orange-400 to-red-500",
  "Business Bay": "from-slate-500 to-blue-600",
};

function getGradient(areaName: string, title: string): string {
  if (gradients[areaName]) return gradients[areaName];
  // Fall back: check if any known area appears in the title
  const titleLower = title.toLowerCase();
  for (const [area, grad] of Object.entries(gradients)) {
    if (titleLower.includes(area.toLowerCase())) return grad;
  }
  return "from-slate-400 to-gray-500";
}

// ---------------------------------------------------------------------------
// Spec icon helper
// ---------------------------------------------------------------------------
const specIcons = [Bed, Maximize, MapPin, Clock] as const;

function SpecRow({ specs }: { specs: string[] }) {
  return (
    <div className="flex items-center gap-1.5 text-sm text-sc-text-muted flex-wrap">
      {specs.map((spec, i) => {
        const Icon = specIcons[i] ?? MapPin;
        return (
          <span key={i} className="flex items-center gap-1">
            {i > 0 && <span className="text-gray-300 dark:text-white/20 mx-0.5">|</span>}
            <Icon className="w-3.5 h-3.5 shrink-0" />
            <span>{spec}</span>
          </span>
        );
      })}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Metric row (label left, value right)
// ---------------------------------------------------------------------------
function MetricRow({
  label,
  value,
  valueClassName,
}: {
  label: string;
  value: string;
  valueClassName?: string;
}) {
  return (
    <div className="flex justify-between items-baseline">
      <span className="text-sc-text-muted text-sm">{label}</span>
      <span className={`text-sc-text-dark text-sm font-medium ${valueClassName ?? ""}`}>
        {value}
      </span>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Hold metrics (funded / CLOSED)
// ---------------------------------------------------------------------------
function HoldMetrics({ property }: { property: Property }) {
  const isLive = property.propertyStatus === "LIVE";
  const rentalYield =
    property.rental.dividendYield ?? property.rental.grossYield ?? null;
  const rentalYieldDisplay = rentalYield !== null ? `${rentalYield}%` : "\u2014";

  const purchasePrice = `Dhs ${formatPrice(property.price)}`;

  // Market value with percentage
  let marketValueDisplay = "\u2014";
  let marketValueClass = "";
  if (property.valuation.marketValue !== null) {
    const pct = property.valuation.marketValuePercentage;
    const sign = pct >= 0 ? "+" : "";
    const pctColor = pct >= 0 ? "text-sc-text-green" : "text-sc-text-red";
    marketValueDisplay = `Dhs ${formatPrice(property.valuation.marketValue)}`;
    marketValueClass = pctColor;
    marketValueDisplay += ` (${sign}${pct}%)`;
  }

  // Annualized ROI (shown for LIVE cards instead of market value)
  const annualized = property.performance.annualized;
  const annualizedDisplay = annualized !== null ? `${annualized}%` : "\u2014";

  const rentalIncome = `Dhs ${formatPrice(property.rental.totalRentalIncome)}`;

  return (
    <div className="space-y-1.5">
      <MetricRow label="Rental yield" value={rentalYieldDisplay} />
      {isLive ? (
        // Live Hold cards: show Annualized ROI instead of market value
        <MetricRow label="Annualized ROI" value={annualizedDisplay} />
      ) : (
        <>
          <MetricRow label="Purchase price" value={purchasePrice} />
          {property.valuation.marketValue !== null ? (
            <div className="flex justify-between items-baseline">
              <span className="text-sc-text-muted text-sm">Current market value</span>
              <span className={`text-sm font-medium ${marketValueClass}`}>
                {marketValueDisplay}
              </span>
            </div>
          ) : (
            <MetricRow label="Current market value" value={"\u2014"} />
          )}
        </>
      )}
      <div className="border-t border-gray-100 dark:border-white/10 my-2" />
      <MetricRow label="Rental income to date" value={rentalIncome} />
    </div>
  );
}

// ---------------------------------------------------------------------------
// Flip metrics (funded / CLOSED)
// ---------------------------------------------------------------------------
function FlipMetrics({ property }: { property: Property }) {
  const annualized =
    property.performance.annualized !== null
      ? `${property.performance.annualized}%`
      : "\u2014";

  const timeline = `${property.performance.investmentPeriod} months`;
  const renovationProgress = `${property.performance.renovationProgress ?? 0}%`;
  const projectCost = `Dhs ${formatPrice(property.projectPrice)}`;

  return (
    <div className="space-y-1.5">
      <MetricRow label="Annualized ROI" value={annualized} />
      <MetricRow label="Estimated timeline" value={timeline} />
      <div className="border-t border-gray-100 dark:border-white/10 my-2" />
      <div className="flex justify-between items-baseline">
        <span className="text-sc-text-muted text-sm">Renovation progress</span>
        <span className="text-sc-purple text-sm font-medium">{renovationProgress}</span>
      </div>
      <MetricRow label="Project cost" value={projectCost} />
    </div>
  );
}

// ---------------------------------------------------------------------------
// Exited metrics
// ---------------------------------------------------------------------------
function ExitedMetrics({ property }: { property: Property }) {
  const exitPrice =
    property.valuation.saleProceed !== null
      ? `Dhs ${formatPrice(property.valuation.saleProceed)}`
      : "\u2014";
  const totalRental = `Dhs ${formatPrice(property.rental.totalRentalIncome)}`;
  const holdingPeriod = `${property.performance.investmentPeriod} months`;

  // Total return
  const totalReturnRoi = property.performance.totalReturnRoi ?? property.totalReturnRoi;
  const totalReturnPct =
    property.performance.totalReturnRoiPercentage ?? property.totalReturnRoiPercentage;
  const isPositive = totalReturnRoi >= 0;
  const sign = isPositive ? "+" : "";
  const totalReturnDisplay = `Dhs ${sign}${formatPrice(Math.abs(totalReturnRoi))} (${sign}${totalReturnPct}%)`;

  return (
    <div className="space-y-1.5">
      <MetricRow label="Exit price" value={exitPrice} />
      <MetricRow label="Total rental income" value={totalRental} />
      <MetricRow label="Holding period" value={holdingPeriod} />
      <div className="border-t border-gray-100 dark:border-white/10 my-2" />
      <div className="flex justify-between items-baseline">
        <span className="text-sc-text-muted text-sm">Total return</span>
        <span
          className={`text-sm font-medium ${
            isPositive ? "text-sc-text-green" : "text-sc-text-red"
          }`}
        >
          {totalReturnDisplay}
        </span>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Funding progress bar (LIVE cards)
// ---------------------------------------------------------------------------
function FundingProgress({ property }: { property: Property }) {
  const fundedPct = getFundedPercentage(property);
  const remaining = getRemainingAmount(property);
  const isHold = property.investmentType === "HOLD";
  const priceLabel = isHold ? "Purchase price" : "Project cost";
  const priceValue = isHold ? property.price : property.projectPrice;

  return (
    <div className="space-y-2">
      <div className="border-t border-gray-100 dark:border-white/10 my-2" />
      <div className="flex justify-between items-baseline">
        <span
          className={`text-sm font-semibold ${
            fundedPct > 0 ? "text-sc-text-green" : "text-sc-text-red"
          }`}
        >
          {fundedPct.toFixed(0)}% Funded
        </span>
        <span className="text-sc-text-muted text-sm">
          Remaining Dhs {formatPrice(Math.max(remaining, 0))}
        </span>
      </div>
      <Progress
        value={Math.min(fundedPct, 100)}
        className={`h-2 ${isHold ? "[&>[data-slot=progress-indicator]]:bg-sc-green" : "[&>[data-slot=progress-indicator]]:bg-sc-blue"}`}
      />
      <MetricRow label={priceLabel} value={`Dhs ${formatPrice(priceValue)}`} />
    </div>
  );
}

// ---------------------------------------------------------------------------
// Main PropertyCard component
// ---------------------------------------------------------------------------
interface PropertyCardProps {
  property: Property;
  highlighted?: boolean;
}

export default function PropertyCard({ property, highlighted }: PropertyCardProps) {
  const areaName = property.location.area?.name ?? "";
  const gradient = getGradient(areaName, property.title);
  const specs = getPropertySpecs(property);
  const isHold = property.investmentType === "HOLD";
  const isFlip = property.investmentType === "FLIP";
  const isLive = property.propertyStatus === "LIVE";
  const isClosed = property.propertyStatus === "CLOSED";
  const isExited = property.propertyStatus === "EXITED";

  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (highlighted && cardRef.current) {
      cardRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [highlighted]);

  return (
    <Card
      ref={cardRef}
      className={`overflow-hidden shadow-sm hover:shadow-md transition-shadow p-0 gap-0 dark:bg-[#111F42] dark:border-[#1C3058] ${
        highlighted
          ? "ring-2 ring-sc-blue ring-offset-2 dark:ring-offset-[#0B1A33] animate-pulse"
          : ""
      }`}
    >
      {/* ---- Image area ---- */}
      <div className={`h-[200px] rounded-t-xl overflow-hidden relative bg-gradient-to-br ${gradient}`}>
        {/* Top-left badge */}
        <div className="absolute top-3 left-3 z-10">
          {isHold ? (
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#22C55E] px-3 py-1 text-white text-xs font-medium shadow-sm">
              <Home className="w-3.5 h-3.5" />
              Hold
            </span>
          ) : (
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#8B5CF6] px-3 py-1 text-white text-xs font-medium shadow-sm">
              <Wrench className="w-3.5 h-3.5" />
              Flip
            </span>
          )}
        </div>

        {/* Bottom overlay gradient + pills */}
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent px-3 pb-3 pt-8">
          <div className="flex flex-wrap gap-1.5">
            {property.investors > 0 && (
              <span className="inline-flex items-center gap-1 rounded-full bg-black/40 backdrop-blur-sm px-2.5 py-1 text-white text-xs">
                <Users className="w-3 h-3" />
                {property.investors} Investors
              </span>
            )}
            {isHold && property.investmentCategory === "LONG_TERM" && (
              <span className="inline-flex items-center gap-1 rounded-full bg-black/40 backdrop-blur-sm px-2.5 py-1 text-white text-xs">
                Instant Returns
              </span>
            )}
          </div>
        </div>
      </div>

      {/* ---- Content area ---- */}
      <div className="p-4 space-y-3">
        {/* Title row */}
        <div className="flex justify-between items-start gap-2">
          <h3 className="font-semibold text-sc-text-dark text-base leading-snug line-clamp-2">
            {property.title}
          </h3>
          <span className="shrink-0 rounded-full border border-[#8B5CF6] text-[#8B5CF6] text-xs px-2 py-0.5 font-medium whitespace-nowrap dark:border-[#8B5CF6]/50">
            {property.code}
          </span>
        </div>

        {/* Specs row */}
        {specs.length > 0 && <SpecRow specs={specs} />}

        {/* ---- Metrics section ---- */}
        <div className="pt-1">
          {isExited ? (
            <ExitedMetrics property={property} />
          ) : isLive ? (
            <>
              {isHold ? (
                <HoldMetrics property={property} />
              ) : (
                <FlipMetrics property={property} />
              )}
              <FundingProgress property={property} />
            </>
          ) : isClosed ? (
            isHold ? (
              <HoldMetrics property={property} />
            ) : (
              <FlipMetrics property={property} />
            )
          ) : isFlip ? (
            <FlipMetrics property={property} />
          ) : (
            <HoldMetrics property={property} />
          )}
        </div>
      </div>
    </Card>
  );
}
