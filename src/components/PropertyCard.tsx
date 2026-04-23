"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import { Property } from "@/types/property";
import { formatPriceShort } from "@/lib/property-utils";
import { getPropertyImage } from "@/lib/property-images";
import { Bed, Bath, Ruler, MapPin } from "lucide-react";

interface PropertyCardProps {
  property: Property;
  highlighted?: boolean;
}

function pctFormat(n: number): string {
  return `${n.toFixed(n >= 10 ? 1 : 2)}`;
}

function areaDisplay(property: Property): string {
  return property.location.area?.displayName ?? "—";
}

export default function PropertyCard({
  property,
  highlighted,
}: PropertyCardProps) {
  const cardRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (highlighted && cardRef.current) {
      cardRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [highlighted]);

  const isHold = property.investmentType === "HOLD";
  const isFlip = property.investmentType === "FLIP";
  const isLive = property.propertyStatus === "LIVE";
  const isExited = property.propertyStatus === "EXITED";

  const areaName = property.location.area?.name ?? "";
  const imageUrl = getPropertyImage(areaName, property.title);

  // Primary stat (left)
  const yieldValue = isHold
    ? property.rental.dividendYield ?? property.rental.grossYield
    : property.performance.annualized;
  const yieldLabel = isHold ? "Rental yield" : "Annualized";
  const yieldDisplay = yieldValue !== null ? pctFormat(yieldValue) : "—";

  // Right stat: min investment for live/funded, total return for exited
  const exitedPct = property.performance.totalReturnRoiPercentage;
  const rightLabel = isExited ? "Total return" : "Min. invest";
  const rightValue = isExited
    ? exitedPct !== null
      ? `${exitedPct >= 0 ? "+" : ""}${pctFormat(exitedPct)}`
      : "—"
    : `${property.minInvestment ?? 500}`;
  const rightUnit = isExited ? "%" : " AED";

  const fundedPct = property.performance.funded;
  const investors = property.investors || property.performance.investors;

  return (
    <Link
      ref={cardRef}
      href={`/property/${property.code}`}
      className={`group flex flex-col overflow-hidden rounded-md border bg-paper transition-[border-color,transform] duration-[120ms] ease-slice ${
        highlighted
          ? "border-forest-500 ring-2 ring-forest-500/30 ring-offset-2 ring-offset-paper"
          : "border-hairline hover:border-sand-300"
      }`}
    >
      {/* Photo */}
      <div className="relative aspect-[16/10] overflow-hidden bg-sand-200">
        <img
          src={imageUrl}
          alt={property.title}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-slice group-hover:scale-[1.02]"
          style={{ filter: "contrast(0.95) saturate(0.88)" }}
        />

        {/* Top overlay */}
        <div className="pointer-events-none absolute inset-0 flex items-start justify-between p-3">
          <span
            className={`inline-flex items-center gap-1.5 rounded-full bg-paper/90 px-2.5 py-[3px] text-[11px] font-medium leading-tight text-ink-900 backdrop-blur-md`}
          >
            <span
              className={`h-[5px] w-[5px] rounded-full ${
                isHold ? "bg-forest-700" : "bg-terra-500"
              }`}
            />
            {isHold ? "Hold" : "Flip"}
          </span>
          <span className="whitespace-nowrap rounded-[3px] bg-black/55 px-[7px] py-[3px] font-mono text-[10px] font-medium tracking-[0.04em] text-paper backdrop-blur-md">
            {property.code}
          </span>
        </div>

        {/* Closes-in (live only) */}
        {isLive && property.closesIn && (
          <div className="absolute bottom-3 left-3 rounded-[3px] bg-paper/90 px-2 py-[3px] font-mono text-[10px] font-medium text-ink-900 backdrop-blur-md">
            Closes in {property.closesIn}
          </div>
        )}
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col gap-3 px-4 pt-[14px] pb-4">
        {/* Head */}
        <div className="flex min-h-[62px] flex-col justify-start">
          <h3 className="mb-1 line-clamp-2 text-[15px] font-medium leading-[1.3] tracking-[-0.005em] text-ink-800">
            {property.title}
          </h3>
          <div className="flex items-center gap-2.5 overflow-hidden font-mono text-[12px] leading-[1.4] text-ink-600">
            {property.physical.bedrooms > 0 && (
              <span className="inline-flex items-center gap-1">
                <Bed className="h-3 w-3" strokeWidth={1.6} />
                {property.physical.bedrooms}
              </span>
            )}
            {property.physical.bathrooms > 0 && (
              <span className="inline-flex items-center gap-1">
                <Bath className="h-3 w-3" strokeWidth={1.6} />
                {property.physical.bathrooms}
              </span>
            )}
            {property.physical.sqft && (
              <span className="inline-flex items-center gap-1">
                <Ruler className="h-3 w-3" strokeWidth={1.6} />
                {property.physical.sqft}
              </span>
            )}
            <span className="inline-flex min-w-0 items-center gap-1 truncate">
              <MapPin className="h-3 w-3 shrink-0" strokeWidth={1.6} />
              <span className="truncate">{areaDisplay(property)}</span>
            </span>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-[14px] border-t border-hairline-2 pt-2.5">
          <div>
            <div className="mb-1 text-[10px] font-medium uppercase tracking-[0.06em] text-ink-500">
              {yieldLabel}
            </div>
            <div className="font-mono text-[17px] font-medium leading-none tracking-[-0.02em] tabular-nums text-ink-900">
              {yieldDisplay}
              <span className="text-[12px] font-normal text-ink-400">%</span>
            </div>
          </div>
          <div>
            <div className="mb-1 text-[10px] font-medium uppercase tracking-[0.06em] text-ink-500">
              {rightLabel}
            </div>
            <div
              className={`font-mono text-[17px] font-medium leading-none tracking-[-0.02em] tabular-nums ${
                isExited && exitedPct !== null && exitedPct >= 0
                  ? "text-data-pos"
                  : isExited && exitedPct !== null && exitedPct < 0
                    ? "text-data-neg"
                    : "text-ink-900"
              }`}
            >
              {rightValue}
              <span className="text-[12px] font-normal text-ink-400">
                {rightUnit}
              </span>
            </div>
          </div>
        </div>

        {/* Funding bar (live) */}
        {isLive && (
          <div className="flex flex-col gap-1.5">
            <div className="h-[2px] overflow-hidden rounded-full bg-sand-100">
              <div
                className={`h-full transition-[width] duration-[400ms] ease-slice ${
                  isFlip ? "bg-terra-500" : "bg-forest-700"
                }`}
                style={{ width: `${Math.min(fundedPct, 100)}%` }}
              />
            </div>
            <div className="flex justify-between font-mono text-[11px] text-ink-600">
              <span>
                <span className="text-ink-900">{fundedPct.toFixed(1)}%</span>{" "}
                funded
              </span>
              <span>{investors} investors</span>
            </div>
          </div>
        )}

        {/* Exited foot */}
        {isExited && (
          <div className="flex justify-between border-t border-hairline-2 pt-2.5 font-mono text-[11px] text-ink-600">
            <span>
              {property.performance.investmentPeriod}mo hold
            </span>
            <span>
              {property.valuation.saleProceed
                ? `Sold ${formatPriceShort(property.valuation.saleProceed)} AED`
                : "Exited"}
            </span>
          </div>
        )}

        {/* Funded (non-live, non-exited) foot */}
        {!isLive && !isExited && (
          <div className="flex justify-between border-t border-hairline-2 pt-2.5 font-mono text-[11px] text-ink-600">
            <span>
              {investors} investors
            </span>
            <span>
              {isHold
                ? `${formatPriceShort(property.price)} AED`
                : `${formatPriceShort(property.projectPrice)} AED`}
            </span>
          </div>
        )}

        <p className="mt-auto text-[10px] italic text-ink-400">
          *Values are net expected, not guaranteed.
        </p>
      </div>
    </Link>
  );
}
