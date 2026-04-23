"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { Property } from "@/types/property";
import { getPropertyImages } from "@/lib/property-images";
import { setCurrentTab } from "@/lib/dashboard-context";
import {
  ArrowRight,
  ArrowLeft,
  Bed,
  Bath,
  Ruler,
  MapPin,
  Clock,
  Check,
  ChevronLeft,
  ChevronRight,
  FileText,
  Download,
  Shield,
  X,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";

type Tab = "live" | "funded" | "exited";
type DetailTab = "overview" | "financials" | "location" | "documents" | "qa";

interface PropertyDetailProps {
  property: Property;
  parentTab: Tab;
}

function fmtInt(n: number): string {
  return n.toLocaleString("en-US");
}

function fmt(n: number | null | undefined, decimals = 2): string {
  if (n === null || n === undefined) return "—";
  return n.toLocaleString("en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
}

export default function PropertyDetail({
  property,
  parentTab,
}: PropertyDetailProps) {
  const p = property;
  const isHold = p.investmentType === "HOLD";
  const isLive = p.propertyStatus === "LIVE";
  const area = p.location.area?.displayName ?? "";
  const images = getPropertyImages(
    p.code,
    p.location.area?.name ?? "",
    p.title,
    5
  );

  const yieldValue =
    p.rental.dividendYield ?? p.rental.grossYield ?? null;
  const annualized = p.performance.annualized;
  const fundedPct = p.performance.funded;
  const fundedAmount = p.performance.fundedAmount;
  const remaining = Math.max(p.projectPrice - fundedAmount, 0);
  const investors = p.investors || p.performance.investors;

  const [detailTab, setDetailTab] = useState<DetailTab>("overview");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const lightboxOpen = lightboxIndex !== null;

  // Let the voice agent know the current context when user lands here
  useEffect(() => {
    setCurrentTab(parentTab);
    window.dispatchEvent(
      new CustomEvent("dashboard-tab-change", { detail: { tab: parentTab } })
    );
  }, [parentTab]);

  const openLightbox = useCallback((i: number) => setLightboxIndex(i), []);
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const nextImage = useCallback(
    () =>
      setLightboxIndex((i) => (i === null ? i : (i + 1) % images.length)),
    [images.length]
  );
  const prevImage = useCallback(
    () =>
      setLightboxIndex((i) =>
        i === null ? i : (i - 1 + images.length) % images.length
      ),
    [images.length]
  );

  useEffect(() => {
    if (!lightboxOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") nextImage();
      else if (e.key === "ArrowLeft") prevImage();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxOpen, nextImage, prevImage]);

  function openInvest() {
    window.dispatchEvent(
      new CustomEvent("start-investment", { detail: { property: p } })
    );
  }

  const parentTabLabel =
    parentTab === "live" ? "Live" : parentTab === "funded" ? "Funded" : "Exited";

  return (
    <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-[14px]">
      {/* Back crumb */}
      <div className="flex items-center gap-2">
        <Link
          href="/"
          className="inline-flex h-6 w-6 items-center justify-center rounded-sm border border-hairline text-ink-600 transition-colors hover:bg-sand-100 hover:text-ink-900"
        >
          <ArrowLeft className="h-3.5 w-3.5" strokeWidth={1.6} />
        </Link>
        <span className="text-[13px] text-ink-600">
          <Link href="/" className="hover:text-ink-900">
            Explore
          </Link>{" "}
          / {parentTabLabel} /{" "}
          <span className="font-medium text-ink-900">{p.code}</span>
        </span>
      </div>

      {/* Two-column detail layout (gallery lives inside the main column) */}
      <div className="grid grid-cols-1 items-start gap-7 lg:grid-cols-[1fr_340px]">
        {/* Main */}
        <div className="min-w-0">
          {/* Gallery: mosaic on desktop, hero + thumbs on mobile */}
          <div className="mb-5">
            {/* Desktop mosaic */}
            <div className="relative hidden h-[440px] grid-cols-4 grid-rows-2 gap-2 lg:grid">
              <button
                type="button"
                onClick={() => openLightbox(0)}
                className="group relative col-span-2 row-span-2 cursor-zoom-in overflow-hidden rounded-md border border-hairline bg-sand-200 text-left"
                aria-label="Open photo 1"
              >
                <img
                  src={images[0]}
                  alt={p.title}
                  className="h-full w-full object-cover transition-transform duration-[250ms] ease-slice group-hover:scale-[1.015]"
                  style={{ filter: "contrast(0.95) saturate(0.88)" }}
                />
                <div className="pointer-events-none absolute inset-0 flex items-start justify-between p-3">
                  <div className="flex gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-paper/90 px-2.5 py-[3px] text-[11px] font-medium leading-tight text-ink-900 backdrop-blur-md">
                      <span
                        className={`h-[5px] w-[5px] rounded-full ${
                          isHold ? "bg-forest-700" : "bg-terra-500"
                        }`}
                      />
                      {isHold ? "Hold" : "Flip"}
                    </span>
                    {isLive && p.rentalStatus === "RENTED" && (
                      <span className="inline-flex items-center rounded-full bg-paper/90 px-2.5 py-[3px] text-[11px] font-medium leading-tight text-ink-600 backdrop-blur-md">
                        Rented
                      </span>
                    )}
                    {!isHold && (
                      <span className="inline-flex items-center rounded-full bg-paper/90 px-2.5 py-[3px] text-[11px] font-medium leading-tight text-ink-600 backdrop-blur-md">
                        {p.performance.investmentPeriod} mo flip
                      </span>
                    )}
                  </div>
                  <span className="whitespace-nowrap rounded-[3px] bg-black/55 px-[7px] py-[3px] font-mono text-[10px] font-medium tracking-[0.04em] text-paper backdrop-blur-md">
                    {p.code}
                  </span>
                </div>
              </button>
              {[1, 2, 3, 4].map((i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => openLightbox(i)}
                  className="group relative cursor-zoom-in overflow-hidden rounded-md border border-hairline bg-sand-200 text-left"
                  aria-label={`Open photo ${i + 1}`}
                >
                  <img
                    src={images[i]}
                    alt=""
                    className="h-full w-full object-cover transition-transform duration-[250ms] ease-slice group-hover:scale-[1.03]"
                    style={{ filter: "contrast(0.95) saturate(0.88)" }}
                  />
                  {i === 4 && (
                    <span
                      className="pointer-events-none absolute bottom-2 right-2 rounded-sm bg-paper/90 px-2.5 py-1 text-[11px] font-medium text-ink-900 backdrop-blur-md ring-1 ring-hairline"
                    >
                      Show all photos
                    </span>
                  )}
                </button>
              ))}
            </div>

            {/* Mobile: hero + thumb strip */}
            <div className="flex flex-col gap-2.5 lg:hidden">
              <button
                type="button"
                onClick={() => openLightbox(0)}
                className="relative aspect-[16/10] cursor-zoom-in overflow-hidden rounded-md border border-hairline bg-sand-200 text-left"
                aria-label="Open photo 1"
              >
                <img
                  src={images[0]}
                  alt={p.title}
                  className="h-full w-full object-cover"
                  style={{ filter: "contrast(0.95) saturate(0.88)" }}
                />
                <div className="pointer-events-none absolute inset-0 flex items-start justify-between p-3">
                  <div className="flex gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-paper/90 px-2.5 py-[3px] text-[11px] font-medium leading-tight text-ink-900 backdrop-blur-md">
                      <span
                        className={`h-[5px] w-[5px] rounded-full ${
                          isHold ? "bg-forest-700" : "bg-terra-500"
                        }`}
                      />
                      {isHold ? "Hold" : "Flip"}
                    </span>
                    {isLive && p.rentalStatus === "RENTED" && (
                      <span className="inline-flex items-center rounded-full bg-paper/90 px-2.5 py-[3px] text-[11px] font-medium leading-tight text-ink-600 backdrop-blur-md">
                        Rented
                      </span>
                    )}
                  </div>
                  <span className="whitespace-nowrap rounded-[3px] bg-black/55 px-[7px] py-[3px] font-mono text-[10px] font-medium tracking-[0.04em] text-paper backdrop-blur-md">
                    {p.code}
                  </span>
                </div>
              </button>
              <div className="flex gap-2.5 overflow-x-auto">
                {images.slice(1).map((src, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => openLightbox(i + 1)}
                    className="aspect-[4/3] w-[90px] shrink-0 cursor-zoom-in overflow-hidden rounded-sm border border-hairline bg-sand-100"
                    aria-label={`Open photo ${i + 2}`}
                  >
                    <img
                      src={src}
                      alt=""
                      className="h-full w-full object-cover"
                      style={{ filter: "contrast(0.95) saturate(0.88)" }}
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-2 flex items-center gap-3">
            <span className="text-[11px] font-medium uppercase tracking-[0.08em] text-ink-500">
              {area} · {p.location.city.displayName || "Dubai"}
            </span>
            {isLive && p.closesIn && (
              <span className="rounded-[3px] bg-ochre-100 px-2 py-[3px] font-mono text-[10px] font-medium text-[#7a5f10]">
                Closes in {p.closesIn}
              </span>
            )}
          </div>
          <h1 className="my-1.5 max-w-[680px] text-[32px] font-medium leading-[1.15] tracking-[-0.015em] text-ink-900">
            {p.title}
          </h1>
          <p className="mt-0 mb-[18px] font-mono text-[13px] text-ink-600">
            {p.fullAddress || `${area}, Dubai, UAE`}
            {p.developer && ` · Developer: ${p.developer}`}
          </p>

          {/* Spec bar */}
          <div className="flex flex-wrap gap-[18px] border-y border-hairline py-3.5">
            <div className="flex items-center gap-1.5 text-[13px] text-ink-900">
              <Bed className="h-[14px] w-[14px] text-ink-600" strokeWidth={1.6} />
              <span>
                {p.physical.bedrooms > 0
                  ? `${p.physical.bedrooms} bed`
                  : "Studio"}
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-[13px] text-ink-900">
              <Bath className="h-[14px] w-[14px] text-ink-600" strokeWidth={1.6} />
              <span>{p.physical.bathrooms} bath</span>
            </div>
            {p.physical.sqft && (
              <div className="flex items-center gap-1.5 text-[13px] text-ink-900">
                <Ruler
                  className="h-[14px] w-[14px] text-ink-600"
                  strokeWidth={1.6}
                />
                <span>{fmtInt(p.physical.sqft)} sq ft</span>
              </div>
            )}
            <div className="flex items-center gap-1.5 text-[13px] text-ink-900">
              <MapPin
                className="h-[14px] w-[14px] text-ink-600"
                strokeWidth={1.6}
              />
              <span>{area}</span>
            </div>
            {!isHold && (
              <div className="flex items-center gap-1.5 text-[13px] text-ink-900">
                <Clock
                  className="h-[14px] w-[14px] text-ink-600"
                  strokeWidth={1.6}
                />
                <span>{p.performance.investmentPeriod}-month timeline</span>
              </div>
            )}
          </div>

          {/* Numbers strip */}
          <div className="mt-[22px] grid grid-cols-2 gap-px overflow-hidden rounded-md border border-hairline bg-hairline md:grid-cols-4">
            <NumCell
              label={isHold ? "Gross rental yield" : "Target annualized"}
              value={isHold ? fmt(yieldValue) : fmt(annualized)}
              unit="%"
              sub="*Expected, not guaranteed"
            />
            <NumCell
              label={isHold ? "Purchase price" : "Project cost"}
              value={fmtInt(p.projectPrice)}
              unit=" AED"
              sub={isHold ? "Incl. acquisition" : "Purchase + renovation"}
            />
            <NumCell
              label="Minimum investment"
              value="500"
              unit=" AED"
              sub="Fractional from 0.01%"
            />
            <NumCell
              label="Investors"
              value={String(investors)}
              sub={isLive ? "and counting" : "at close"}
            />
          </div>

          {/* Funding block (live only) */}
          {isLive && (
            <div className="mt-5 rounded-md border border-hairline bg-paper-2 p-5">
              <div className="mb-3.5 grid grid-cols-3 gap-4">
                <FundCell label="Funded" value={fmt(fundedPct)} unit="%" />
                <FundCell
                  label="Raised"
                  value={fmtInt(Math.round(fundedAmount))}
                  unit=" AED"
                />
                <FundCell
                  label="Remaining"
                  value={fmtInt(Math.round(remaining))}
                  unit=" AED"
                />
              </div>
              <div className="mb-2.5 h-[3px] overflow-hidden rounded-full bg-sand-200">
                <div
                  className={`h-full transition-[width] duration-500 ease-slice ${
                    isHold ? "bg-forest-700" : "bg-terra-500"
                  }`}
                  style={{ width: `${Math.min(fundedPct, 100)}%` }}
                />
              </div>
              <div className="flex justify-between font-mono text-[11px] text-ink-600">
                <span>{investors} investors so far</span>
                <span>Open for investment now</span>
              </div>
            </div>
          )}

          {/* Detail Tabs */}
          <DetailTabs
            detailTab={detailTab}
            setDetailTab={setDetailTab}
            property={p}
            isHold={isHold}
          />
        </div>

        {/* Right rail */}
        <aside className="flex flex-col gap-3 lg:sticky lg:top-5 lg:max-h-[calc(100vh-2.5rem)] lg:overflow-y-auto lg:pr-1">
          <div className="flex flex-col gap-3.5 rounded-md border border-hairline bg-paper p-[18px]">
            <div className="flex items-start justify-between gap-2.5">
              <div>
                <div className="mb-0.5 text-[10px] font-medium uppercase tracking-[0.06em] text-ink-500">
                  Invest in
                </div>
                <div className="font-mono text-[17px] font-medium tracking-[0.01em] text-ink-900">
                  {p.code}
                </div>
              </div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-paper/90 px-2.5 py-[3px] text-[11px] font-medium leading-tight text-ink-900 ring-1 ring-hairline">
                <span
                  className={`h-[5px] w-[5px] rounded-full ${
                    isHold ? "bg-forest-700" : "bg-terra-500"
                  }`}
                />
                {isHold ? "Hold" : "Flip"}
              </span>
            </div>

            <div className="flex flex-col gap-1.5 rounded-sm bg-paper-2 px-3.5 py-3">
              <StatRow
                label={isHold ? "Gross yield" : "Target annualized"}
                value={`${isHold ? fmt(yieldValue) : fmt(annualized)}%`}
              />
              <StatRow
                label={isHold ? "Purchase price" : "Project cost"}
                value={`${fmtInt(p.projectPrice)} AED`}
              />
              <StatRow label="Minimum" value="500 AED" />
            </div>

            {isLive ? (
              <button
                type="button"
                onClick={openInvest}
                className="inline-flex items-center justify-center gap-1.5 rounded-md bg-ink-900 px-4 py-2.5 text-[13px] font-medium text-paper transition-colors duration-[120ms] ease-slice hover:bg-black"
              >
                Invest now
                <ArrowRight className="h-[13px] w-[13px]" strokeWidth={1.8} />
              </button>
            ) : (
              <button
                type="button"
                disabled
                className="inline-flex cursor-not-allowed items-center justify-center gap-1.5 rounded-md bg-sand-300 px-4 py-2.5 text-[13px] font-medium text-ink-400"
              >
                {p.propertyStatus === "EXITED" ? "Exited" : "Closed"}
              </button>
            )}
            <button
              type="button"
              className="rounded-md border border-hairline bg-paper px-4 py-2.5 text-[13px] font-medium text-ink-900 transition-colors duration-[120ms] ease-slice hover:bg-sand-100"
            >
              Add to watchlist
            </button>

            <div className="flex flex-col gap-1 border-t border-hairline-2 pt-3">
              <div className="mb-1 text-[10px] font-medium uppercase tracking-[0.06em] text-ink-500">
                Fees
              </div>
              <FeeRow label="Entry" value="1.5%" />
              <FeeRow label="Admin · p.a." value="0.5%" />
              <FeeRow label="Exit" value="2.5%" />
              <FeeRow
                label="Performance"
                value="0%"
                valueClass="text-data-pos"
              />
            </div>

            <div className="flex flex-wrap gap-1 border-t border-hairline-2 pt-3">
              <span className="inline-flex items-center gap-1 rounded-[3px] bg-[#E4EAF2] px-1.5 py-[3px] font-mono text-[9.5px] tracking-[0.02em] text-regulator">
                <Shield className="h-2.5 w-2.5" strokeWidth={1.8} />
                DFSA
              </span>
              <span className="inline-flex items-center gap-1 rounded-[3px] bg-forest-100 px-1.5 py-[3px] font-mono text-[9.5px] tracking-[0.02em] text-forest-900">
                <Check className="h-2.5 w-2.5" strokeWidth={1.8} />
                SHARIAH
              </span>
            </div>
          </div>

          <div className="rounded-md border border-hairline bg-paper px-4 py-3.5">
            <div className="mb-2.5 text-[11px] font-medium uppercase tracking-[0.06em] text-ink-500">
              Documents
            </div>
            {[
              ["Investor deck", "PDF · 2.4 MB"],
              ["Shariah certificate", "PDF · 410 KB"],
              ["Valuation report", "PDF · 1.8 MB"],
              ["Title deed", "PDF · 210 KB"],
            ].map(([name, meta]) => (
              <div
                key={name}
                className="grid cursor-pointer grid-cols-[14px_1fr_auto] items-center gap-2.5 py-1.5 text-[12.5px] text-ink-900 hover:text-black"
              >
                <FileText className="h-3 w-3 text-ink-600" strokeWidth={1.6} />
                <span>{name}</span>
                <span className="font-mono text-[11px] text-ink-400">
                  {meta}
                </span>
              </div>
            ))}
          </div>
        </aside>
      </div>

      <Dialog
        open={lightboxOpen}
        onOpenChange={(o) => {
          if (!o) closeLightbox();
        }}
      >
        <DialogContent
          className="!fixed !inset-0 !top-0 !left-0 !translate-x-0 !translate-y-0 w-screen h-screen max-w-none sm:max-w-none max-h-none border-none bg-transparent p-0 gap-0 rounded-none shadow-none overflow-hidden"
          showCloseButton={false}
        >
          <DialogTitle className="sr-only">
            {p.title} — photo {(lightboxIndex ?? 0) + 1} of {images.length}
          </DialogTitle>
          <DialogDescription className="sr-only">
            Photo gallery for {p.code}. Use the arrow keys or the buttons to
            navigate.
          </DialogDescription>
          <div className="relative flex h-full w-full items-center justify-center">
            {/* Blurred image backdrop */}
            {lightboxOpen && (
              <img
                src={images[lightboxIndex!]}
                alt=""
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 h-full w-full scale-110 object-cover"
                style={{ filter: "blur(56px) saturate(1.15) brightness(0.55)" }}
              />
            )}
            {/* Subtle vignette to deepen edges */}
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse at center, rgba(0,0,0,0) 45%, rgba(0,0,0,0.55) 100%)",
              }}
            />

            {lightboxOpen && (
              <img
                src={images[lightboxIndex!]}
                alt={`${p.title} photo ${lightboxIndex! + 1}`}
                className="relative max-h-[92vh] max-w-[92vw] rounded-sm object-contain shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)]"
              />
            )}

            <button
              type="button"
              onClick={closeLightbox}
              aria-label="Close"
              className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition-colors hover:bg-white/20"
            >
              <X className="h-5 w-5" strokeWidth={1.8} />
            </button>

            <button
              type="button"
              onClick={prevImage}
              aria-label="Previous photo"
              className="absolute left-4 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition-colors hover:bg-white/20"
            >
              <ChevronLeft className="h-6 w-6" strokeWidth={1.8} />
            </button>
            <button
              type="button"
              onClick={nextImage}
              aria-label="Next photo"
              className="absolute right-4 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition-colors hover:bg-white/20"
            >
              <ChevronRight className="h-6 w-6" strokeWidth={1.8} />
            </button>

            <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-3 rounded-full bg-black/50 px-4 py-2 font-mono text-[12px] text-white backdrop-blur-md ring-1 ring-white/10">
              <span>
                {(lightboxIndex ?? 0) + 1} / {images.length}
              </span>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

function NumCell({
  label,
  value,
  unit,
  sub,
}: {
  label: string;
  value: string;
  unit?: string;
  sub?: string;
}) {
  return (
    <div className="flex flex-col gap-1 bg-paper p-5">
      <div className="text-[10px] font-medium uppercase tracking-[0.06em] text-ink-500">
        {label}
      </div>
      <div className="mt-1 font-mono text-[24px] font-medium leading-[1.1] tracking-[-0.02em] tabular-nums text-ink-900">
        {value}
        {unit && (
          <span className="text-[13px] font-normal text-ink-400">{unit}</span>
        )}
      </div>
      {sub && (
        <div className="mt-0.5 font-mono text-[10px] text-ink-400">{sub}</div>
      )}
    </div>
  );
}

function FundCell({
  label,
  value,
  unit,
}: {
  label: string;
  value: string;
  unit?: string;
}) {
  return (
    <div>
      <div className="mb-1 text-[10px] font-medium uppercase tracking-[0.06em] text-ink-500">
        {label}
      </div>
      <div className="font-mono text-[20px] font-medium leading-none tracking-[-0.02em] tabular-nums text-ink-900">
        {value}
        {unit && (
          <span className="text-[12px] font-normal text-ink-400">{unit}</span>
        )}
      </div>
    </div>
  );
}

function StatRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between text-[12.5px] text-ink-600">
      <span>{label}</span>
      <span className="font-mono font-medium text-ink-900 tabular-nums">
        {value}
      </span>
    </div>
  );
}

function FeeRow({
  label,
  value,
  valueClass,
}: {
  label: string;
  value: string;
  valueClass?: string;
}) {
  return (
    <div className="flex justify-between text-[12px] text-ink-600">
      <span>{label}</span>
      <span className={`font-mono tabular-nums ${valueClass ?? ""}`}>
        {value}
      </span>
    </div>
  );
}

function DetailTabs({
  detailTab,
  setDetailTab,
  property,
  isHold,
}: {
  detailTab: DetailTab;
  setDetailTab: (t: DetailTab) => void;
  property: Property;
  isHold: boolean;
}) {
  const p = property;
  const tabs: [DetailTab, string][] = [
    ["overview", "Overview"],
    ["financials", "Financials"],
    ["location", "Location"],
    ["documents", "Documents"],
    ["qa", "Q&A"],
  ];

  return (
    <div className="mt-6">
      <div className="flex gap-[22px] border-b border-hairline">
        {tabs.map(([key, label]) => (
          <button
            key={key}
            type="button"
            onClick={() => setDetailTab(key)}
            className={`relative py-2.5 text-[13px] font-medium transition-colors ${
              detailTab === key
                ? "text-ink-900"
                : "text-ink-600 hover:text-ink-900"
            }`}
          >
            {label}
            {detailTab === key && (
              <span className="absolute -bottom-px left-0 right-0 h-px bg-ink-900" />
            )}
          </button>
        ))}
      </div>

      <div className="py-[22px]">
        {detailTab === "overview" && (
          <div className="max-w-[640px]">
            <p className="mb-3.5 text-[14px] leading-[1.65] text-ink-900">
              {isHold
                ? `A ${
                    p.physical.bedrooms > 0
                      ? `${p.physical.bedrooms}-bedroom`
                      : "studio"
                  } apartment in ${p.location.area?.displayName}, ${
                    p.rentalStatus === "RENTED"
                      ? "currently tenanted and generating monthly rental income"
                      : "ready for rental"
                  }. Investors receive their pro-rata share of net rental distributions, paid on the 5th of each month. Capital gain on eventual sale is distributed at exit.`
                : `An opportunistic ${p.performance.investmentPeriod}-month renovation play. The fund acquires, refurbishes, and resells the unit, with capital returned plus target gain at completion. No interim distributions during the construction period.`}
            </p>
            <p className="mb-3.5 text-[14px] leading-[1.65] text-ink-600">
              Every property on Slice is screened by our acquisitions team and
              independently valued. Shariah compliance is certified by the
              Amanie Advisors board — see the Shariah certificate on the right.
            </p>
            <div className="mt-4 flex flex-col gap-2">
              {[
                isHold
                  ? "Currently tenanted · signed lease in place"
                  : "Acquisition closed · renovation pipeline scheduled",
                "Net rent distributed monthly to your Slice wallet",
                "Exit via secondary market or at fund close",
              ].map((h) => (
                <div
                  key={h}
                  className="flex items-start gap-2.5 text-[13px] text-ink-900"
                >
                  <Check
                    className="mt-0.5 h-3.5 w-3.5 shrink-0 text-forest-700"
                    strokeWidth={1.8}
                  />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {detailTab === "financials" && (
          <div className="flex max-w-[520px] flex-col gap-2">
            <FinRow
              label={isHold ? "Purchase price" : "Purchase price"}
              value={`AED ${fmtInt(p.purchasePrice ?? p.price)}`}
            />
            <FinRow
              label="Transaction cost"
              value={`AED ${fmtInt(
                p.transactionCost ?? Math.round(p.price * 0.12)
              )}`}
            />
            {p.renovationBudget && (
              <FinRow
                label="Renovation budget"
                value={`AED ${fmtInt(p.renovationBudget)}`}
              />
            )}
            <FinRow
              label="Total acquisition"
              value={`AED ${fmtInt(p.totalAcquisitionCost ?? p.projectPrice)}`}
              total
            />
            <div className="my-2.5 h-px bg-hairline" />
            {isHold ? (
              <>
                <FinRow
                  label="Gross rental yield"
                  value={`${fmt(p.rental.grossYield)}%`}
                />
                <FinRow
                  label="Expected net yield"
                  value={
                    p.rental.netYield
                      ? `${fmt(p.rental.netYield)}%`
                      : "Published after funding"
                  }
                />
                <FinRow
                  label="Annualized ROI (incl. appreciation)"
                  value={`${fmt(p.performance.annualized)}%`}
                />
              </>
            ) : (
              <>
                <FinRow
                  label="Target annualized ROI"
                  value={`${fmt(p.performance.annualized)}%`}
                />
                <FinRow
                  label="Hold period"
                  value={`${p.performance.investmentPeriod} months`}
                />
              </>
            )}
            <p className="mt-4 text-[11px] italic text-ink-400">
              *All values net, expected, not guaranteed. See full term sheet
              for cashflow assumptions.
            </p>
          </div>
        )}

        {detailTab === "location" && (
          <div className="flex flex-col gap-4">
            <div
              className="relative flex aspect-[3/1] items-center justify-center overflow-hidden rounded-md border border-hairline"
              style={{
                background: "linear-gradient(135deg, #E6DFCC, #D9D2C2)",
              }}
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-full border border-hairline bg-paper text-terra-500 shadow-pop">
                <MapPin className="h-[18px] w-[18px]" strokeWidth={1.8} />
              </div>
              <div className="absolute bottom-3.5 left-3.5 rounded-[3px] bg-paper/92 px-2.5 py-1 font-mono text-[11px] text-ink-900">
                {p.location.area?.displayName}, Dubai
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              <LocFact label="Area" value={p.location.area?.displayName ?? "—"} />
              <LocFact label="Median sale psf" value="1,420 AED" mono />
              <LocFact label="Avg rental yield" value="6.2%" mono />
              <LocFact label="Occupancy" value="94%" mono />
            </div>
          </div>
        )}

        {detailTab === "documents" && (
          <div className="flex max-w-[560px] flex-col gap-px overflow-hidden rounded-md border border-hairline">
            {[
              "Investor deck",
              "Shariah certificate",
              "Valuation report",
              "Title deed",
              "Subscription agreement",
            ].map((d, i) => (
              <div
                key={d}
                className={`flex items-center gap-3 bg-paper px-4 py-3.5 text-[13px] ${
                  i > 0 ? "border-t border-hairline-2" : ""
                }`}
              >
                <FileText className="h-3.5 w-3.5 text-ink-600" strokeWidth={1.6} />
                <span className="flex-1">{d}</span>
                <span className="font-mono text-[11px] text-ink-400">
                  PDF · {(Math.random() * 3 + 0.3).toFixed(1)} MB
                </span>
                <Download
                  className="ml-2 h-3.5 w-3.5 cursor-pointer text-ink-600"
                  strokeWidth={1.6}
                />
              </div>
            ))}
          </div>
        )}

        {detailTab === "qa" && (
          <div className="flex max-w-[640px] flex-col gap-[18px]">
            {[
              [
                "How are rental dividends paid out?",
                "Net rent is collected monthly and distributed pro-rata to your Slice wallet on the 5th of the following month. No action needed — it just shows up.",
              ],
              [
                "When can I exit my position?",
                "You can list your shares on the secondary market after a 12-month lock-up. At the fund's natural close (typically year 5 for Hold), the property is sold and all proceeds are distributed.",
              ],
              [
                "What's the Shariah structure?",
                "Each property is held in a ring-fenced SPV structured as a Mudaraba agreement with Amanie Advisors as the Shariah board. Ask Sara for the full certificate.",
              ],
            ].map(([q, a], i, arr) => (
              <div
                key={q}
                className={`${i < arr.length - 1 ? "border-b border-hairline-2 pb-[18px]" : ""}`}
              >
                <div className="mb-1.5 text-[14px] font-medium text-ink-900">
                  {q}
                </div>
                <div className="text-[13px] leading-[1.6] text-ink-600">{a}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function FinRow({
  label,
  value,
  total,
}: {
  label: string;
  value: string;
  total?: boolean;
}) {
  return (
    <div
      className={`flex items-baseline justify-between py-1.5 text-[13px] ${
        total
          ? "mt-1 border-t border-hairline-2 pt-2.5 font-medium text-ink-900"
          : "text-ink-900"
      }`}
    >
      <span className={total ? "text-ink-900" : "text-ink-600"}>{label}</span>
      <span className="font-mono tabular-nums">{value}</span>
    </div>
  );
}

function LocFact({
  label,
  value,
  mono,
}: {
  label: string;
  value: string;
  mono?: boolean;
}) {
  return (
    <div>
      <div className="mb-1 text-[10px] font-medium uppercase tracking-[0.06em] text-ink-500">
        {label}
      </div>
      <div
        className={`text-[15px] font-medium text-ink-900 ${
          mono ? "font-mono tracking-[-0.01em] tabular-nums" : ""
        }`}
      >
        {value}
      </div>
    </div>
  );
}
