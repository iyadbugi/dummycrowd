"use client";

import { useState, useEffect } from "react";
import { Property } from "@/types/property";
import { getPropertyImage } from "@/lib/property-images";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { ArrowRight, Check, Shield } from "lucide-react";

type Step = 1 | 2 | 3;

const PRESETS = [500, 1000, 2500, 5000, 10000];
const WALLET_BALANCE = 14320;

function fmt(n: number, decimals = 2): string {
  return n.toLocaleString("en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
}
function fmtInt(n: number): string {
  return n.toLocaleString("en-US");
}

export default function InvestmentDialog() {
  const [open, setOpen] = useState(false);
  const [property, setProperty] = useState<Property | null>(null);
  const [step, setStep] = useState<Step>(1);
  const [amount, setAmount] = useState<number>(500);
  const [shariahOk, setShariahOk] = useState(false);
  const [feeOk, setFeeOk] = useState(false);
  const [confirmIn, setConfirmIn] = useState(false);

  useEffect(() => {
    function handleInvest(e: Event) {
      const detail = (e as CustomEvent).detail;
      const p = detail.property as Property;
      setProperty(p);
      const min = p.minInvestment ?? 500;
      setAmount(detail.suggestedAmount ?? min);
      setStep(1);
      setShariahOk(false);
      setFeeOk(false);
      setConfirmIn(false);
      setOpen(true);
    }
    window.addEventListener("start-investment", handleInvest);
    return () => window.removeEventListener("start-investment", handleInvest);
  }, []);

  // Trigger the confirm checkmark pop animation when reaching step 3
  useEffect(() => {
    if (step === 3) {
      const id = setTimeout(() => setConfirmIn(true), 120);
      return () => clearTimeout(id);
    }
    setConfirmIn(false);
  }, [step]);

  if (!property) return null;

  const p = property;
  const isHold = p.investmentType === "HOLD";
  const yield_ = p.rental.dividendYield ?? p.rental.grossYield ?? null;
  const annual = p.performance.annualized;
  const entryFee = amount * 0.015;
  const netInvested = amount - entryFee;
  const ownership = (netInvested / p.projectPrice) * 100;
  const monthlyDiv = isHold && yield_ ? (netInvested * yield_) / 100 / 12 : 0;
  const expectedExit =
    !isHold && annual
      ? netInvested *
        (1 + (annual / 100) * (p.performance.investmentPeriod / 12))
      : 0;
  const imageUrl = getPropertyImage(p.code, p.location.area?.name ?? "", p.title);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent
        className="sm:max-w-[920px] max-h-[92vh] overflow-y-auto bg-paper border-hairline p-0 gap-0"
        showCloseButton
      >
        <DialogTitle className="sr-only">Invest in {p.code}</DialogTitle>
        <DialogDescription className="sr-only">{p.title}</DialogDescription>

        <div className="flex flex-col gap-5 px-7 pt-7 pb-6">
          {/* Stepper */}
          <div className="flex items-center gap-0 py-2">
            {[
              ["Amount", 1],
              ["Review", 2],
              ["Confirm", 3],
            ].map(([label, n], i, arr) => {
              const num = n as Step;
              const active = step === num;
              const done = step > num;
              return (
                <div
                  key={label as string}
                  className={`flex items-center gap-2.5 text-[12.5px] font-medium ${
                    active || done ? "text-ink-900" : "text-ink-400"
                  }`}
                >
                  <span
                    className={`flex h-[22px] w-[22px] items-center justify-center rounded-full border font-mono text-[12px] ${
                      active
                        ? "border-ink-900 bg-ink-900 text-paper"
                        : done
                          ? "border-forest-700 bg-forest-700 text-paper"
                          : "border-hairline bg-paper-2 text-ink-600"
                    }`}
                  >
                    {done ? (
                      <Check className="h-[11px] w-[11px]" strokeWidth={2} />
                    ) : (
                      num
                    )}
                  </span>
                  <span>{label}</span>
                  {i < arr.length - 1 && (
                    <div className="mx-3.5 h-px w-[60px] bg-hairline" />
                  )}
                </div>
              );
            })}
          </div>

          <div className="grid grid-cols-1 items-start gap-7 lg:grid-cols-[1fr_300px]">
            {/* Main pane */}
            <div className="min-w-0">
              {step === 1 && (
                <AmountStep
                  property={p}
                  amount={amount}
                  setAmount={setAmount}
                  isHold={isHold}
                  yield_={yield_}
                  annual={annual}
                  monthlyDiv={monthlyDiv}
                  expectedExit={expectedExit}
                  ownership={ownership}
                  onCancel={() => setOpen(false)}
                  onNext={() => setStep(2)}
                />
              )}
              {step === 2 && (
                <ReviewStep
                  property={p}
                  amount={amount}
                  entryFee={entryFee}
                  netInvested={netInvested}
                  ownership={ownership}
                  monthlyDiv={monthlyDiv}
                  expectedExit={expectedExit}
                  isHold={isHold}
                  yield_={yield_}
                  annual={annual}
                  shariahOk={shariahOk}
                  setShariahOk={setShariahOk}
                  feeOk={feeOk}
                  setFeeOk={setFeeOk}
                  onBack={() => setStep(1)}
                  onNext={() => setStep(3)}
                />
              )}
              {step === 3 && (
                <ConfirmStep
                  property={p}
                  amount={amount}
                  netInvested={netInvested}
                  ownership={ownership}
                  isHold={isHold}
                  in_={confirmIn}
                  onDone={() => setOpen(false)}
                />
              )}
            </div>

            {/* Summary rail */}
            <aside className="flex flex-col gap-3 lg:sticky lg:top-4">
              <div className="overflow-hidden rounded-md border border-hairline bg-paper">
                <div className="relative aspect-[16/10] overflow-hidden bg-sand-200">
                  <img
                    src={imageUrl}
                    alt=""
                    className="h-full w-full object-cover"
                    style={{ filter: "contrast(0.95) saturate(0.88)" }}
                  />
                  <span className="absolute left-2.5 top-2.5 inline-flex items-center gap-1.5 rounded-full bg-paper/90 px-2.5 py-[3px] text-[11px] font-medium leading-tight text-ink-900 backdrop-blur-md">
                    <span
                      className={`h-[5px] w-[5px] rounded-full ${
                        isHold ? "bg-forest-700" : "bg-terra-500"
                      }`}
                    />
                    {isHold ? "Hold" : "Flip"}
                  </span>
                </div>
                <div className="flex flex-col gap-2 px-4 py-3.5">
                  <div className="font-mono text-[10px] tracking-[0.04em] text-ink-400">
                    {p.code}
                  </div>
                  <div className="text-[14px] font-medium leading-[1.3] text-ink-900">
                    {p.title}
                  </div>
                  <div className="mb-1 font-mono text-[11.5px] text-ink-600">
                    {p.physical.bedrooms > 0
                      ? `${p.physical.bedrooms} bed`
                      : "Studio"}{" "}
                    · {p.physical.sqft ? `${fmtInt(p.physical.sqft)} sq ft` : ""} ·{" "}
                    {p.location.area?.displayName}
                  </div>
                  <SummaryRow
                    label={isHold ? "Gross yield" : "Target annual"}
                    value={`${fmt(isHold ? yield_ ?? 0 : annual ?? 0, 2)}%`}
                  />
                  <SummaryRow
                    label={isHold ? "Purchase price" : "Project cost"}
                    value={`${fmtInt(p.projectPrice)} AED`}
                  />
                  <SummaryRow
                    label="Funded"
                    value={`${fmt(p.performance.funded, 2)}%`}
                  />
                </div>
              </div>
              <div className="flex flex-wrap gap-1">
                <span className="inline-flex items-center gap-1 rounded-[3px] bg-[#E4EAF2] px-1.5 py-[3px] font-mono text-[9.5px] tracking-[0.02em] text-regulator">
                  <Shield className="h-2.5 w-2.5" strokeWidth={1.8} />
                  DFSA
                </span>
                <span className="inline-flex items-center gap-1 rounded-[3px] bg-forest-100 px-1.5 py-[3px] font-mono text-[9.5px] tracking-[0.02em] text-forest-900">
                  <Check className="h-2.5 w-2.5" strokeWidth={1.8} />
                  SHARIAH
                </span>
              </div>
              <p className="text-[11px] italic leading-[1.5] text-ink-400">
                Regulated by the Dubai Financial Services Authority. Shariah
                board: Amanie Advisors.
              </p>
            </aside>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

function SummaryRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between text-[12px] text-ink-600">
      <span>{label}</span>
      <span className="font-mono font-medium text-ink-900 tabular-nums">
        {value}
      </span>
    </div>
  );
}

/* ----------------------------------- Steps ----------------------------------- */

function AmountStep({
  property,
  amount,
  setAmount,
  isHold,
  yield_,
  annual,
  monthlyDiv,
  expectedExit,
  ownership,
  onCancel,
  onNext,
}: {
  property: Property;
  amount: number;
  setAmount: (n: number) => void;
  isHold: boolean;
  yield_: number | null;
  annual: number | null;
  monthlyDiv: number;
  expectedExit: number;
  ownership: number;
  onCancel: () => void;
  onNext: () => void;
}) {
  const min = property.minInvestment ?? 500;
  const tooLow = amount < min;
  const overBalance = amount > WALLET_BALANCE;
  const canNext = !tooLow && !overBalance;

  return (
    <>
      <h1 className="m-0 mb-1.5 text-[26px] font-medium leading-[1.2] tracking-[-0.015em] text-ink-900">
        How much would you like to invest?
      </h1>
      <p className="mx-0 mb-[22px] mt-0 text-[13px] leading-[1.5] text-ink-600">
        Minimum {min.toLocaleString()} AED. You&apos;ll own a pro-rata slice of{" "}
        {property.code}.
      </p>

      <div className="mb-3 flex items-baseline gap-2.5 rounded-md border border-hairline bg-paper px-5 py-4">
        <span className="font-mono text-[16px] text-ink-600">AED</span>
        <input
          type="text"
          value={amount.toLocaleString("en-US")}
          onChange={(e) => {
            const v = parseInt(e.target.value.replace(/[^\d]/g, ""), 10) || 0;
            setAmount(v);
          }}
          className="flex-1 border-0 bg-transparent font-mono text-[32px] font-medium tracking-[-0.025em] tabular-nums text-ink-900 outline-none"
        />
      </div>

      <div className="mb-4 flex flex-wrap gap-2">
        {PRESETS.map((v) => {
          const active = amount === v;
          return (
            <button
              key={v}
              type="button"
              onClick={() => setAmount(v)}
              className={`rounded-sm border px-3.5 py-1.5 font-mono text-[12px] transition-colors ${
                active
                  ? "border-ink-900 bg-ink-900 text-paper"
                  : "border-hairline bg-paper text-ink-900 hover:bg-sand-100"
              }`}
            >
              {v.toLocaleString()}
            </button>
          );
        })}
      </div>

      <div className="mb-[18px] min-h-[22px] font-mono text-[12.5px]">
        {tooLow && (
          <div className="text-terra-700">
            Minimum investment is {min.toLocaleString()} AED.
          </div>
        )}
        {!tooLow && overBalance && (
          <div className="text-terra-700">
            Insufficient wallet balance (AED {WALLET_BALANCE.toLocaleString()}{" "}
            available).
          </div>
        )}
        {!tooLow && !overBalance && (
          <div className="flex items-center gap-1.5 text-data-pos">
            <Check className="h-3 w-3" strokeWidth={2} /> Wallet balance after:
            AED {(WALLET_BALANCE - amount).toLocaleString()}
          </div>
        )}
      </div>

      <div className="mb-6">
        <input
          type="range"
          min={min}
          max={WALLET_BALANCE}
          step={100}
          value={Math.min(Math.max(amount, min), WALLET_BALANCE)}
          onChange={(e) => setAmount(parseInt(e.target.value, 10))}
          className="h-0.5 w-full appearance-none bg-sand-200 outline-none
            [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4
            [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full
            [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-paper
            [&::-webkit-slider-thumb]:bg-ink-900 [&::-webkit-slider-thumb]:cursor-pointer"
        />
      </div>

      <div className="mb-6 rounded-md border border-hairline bg-paper-2 p-5">
        <div className="mb-3.5 text-[11px] font-medium uppercase tracking-[0.06em] text-ink-500">
          If funded today, you&apos;d get:
        </div>
        <div className="grid grid-cols-3 gap-5">
          <OutcomeCell
            label="Ownership"
            value={ownership < 0.01 ? "<0.01" : fmt(ownership, 4)}
            unit="%"
          />
          {isHold ? (
            <OutcomeCell
              label="Est. monthly dividend"
              value={fmt(monthlyDiv, 2)}
              unit=" AED"
            />
          ) : (
            <OutcomeCell
              label={`Target at exit (${property.performance.investmentPeriod}mo)`}
              value={fmt(expectedExit, 0)}
              unit=" AED"
            />
          )}
          <OutcomeCell
            label="Annualized"
            value={fmt((isHold ? yield_ : annual) ?? 0, 2)}
            unit="%"
          />
        </div>
        <div className="mt-3.5 text-[11px] italic text-ink-400">
          *Projected, net of fees, not guaranteed.
        </div>
      </div>

      <div className="flex justify-end gap-2.5 border-t border-hairline pt-5">
        <button
          type="button"
          onClick={onCancel}
          className="rounded-md border border-hairline bg-paper px-4 py-2.5 text-[13px] font-medium text-ink-900 hover:bg-sand-100"
        >
          Cancel
        </button>
        <button
          type="button"
          disabled={!canNext}
          onClick={onNext}
          className="inline-flex items-center gap-1.5 rounded-md bg-ink-900 px-4 py-2.5 text-[13px] font-medium text-paper hover:bg-black disabled:cursor-not-allowed disabled:bg-sand-300 disabled:text-ink-400"
        >
          Review <ArrowRight className="h-[13px] w-[13px]" strokeWidth={1.8} />
        </button>
      </div>
    </>
  );
}

function OutcomeCell({
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
      <div className="mb-1.5 text-[11px] text-ink-600">{label}</div>
      <div className="font-mono text-[22px] font-medium leading-none tracking-[-0.02em] tabular-nums text-ink-900">
        {value}
        {unit && (
          <span className="text-[12px] font-normal text-ink-400">{unit}</span>
        )}
      </div>
    </div>
  );
}

function ReviewStep({
  property,
  amount,
  entryFee,
  netInvested,
  ownership,
  monthlyDiv,
  expectedExit,
  isHold,
  yield_,
  annual,
  shariahOk,
  setShariahOk,
  feeOk,
  setFeeOk,
  onBack,
  onNext,
}: {
  property: Property;
  amount: number;
  entryFee: number;
  netInvested: number;
  ownership: number;
  monthlyDiv: number;
  expectedExit: number;
  isHold: boolean;
  yield_: number | null;
  annual: number | null;
  shariahOk: boolean;
  setShariahOk: (v: boolean) => void;
  feeOk: boolean;
  setFeeOk: (v: boolean) => void;
  onBack: () => void;
  onNext: () => void;
}) {
  return (
    <>
      <h1 className="m-0 mb-1.5 text-[26px] font-medium leading-[1.2] tracking-[-0.015em] text-ink-900">
        Review &amp; confirm
      </h1>
      <p className="mx-0 mb-[22px] mt-0 text-[13px] leading-[1.5] text-ink-600">
        Walk through every line before submitting. You can still go back.
      </p>

      <div className="mb-[18px] overflow-hidden rounded-md border border-hairline bg-paper">
        <RevSection title="Property">
          <RevRow label="SC code" value={property.code} mono />
          <RevRow label="Name" value={property.title} />
          <RevRow
            label="Type"
            value={isHold ? "Hold (rental income)" : "Flip (capital gain)"}
          />
          <RevRow
            label="Area"
            value={property.location.area?.displayName ?? "—"}
          />
        </RevSection>
        <RevSection title="Amount">
          <RevRow
            label="You're investing"
            value={`AED ${amount.toLocaleString()}`}
            mono
          />
          <RevRow
            label="Entry fee (1.5%)"
            value={`− AED ${fmt(entryFee, 2)}`}
            mono
          />
          <RevRow
            label="Net invested"
            value={`AED ${fmt(netInvested, 2)}`}
            mono
            total
          />
          <RevRow
            label="Your ownership"
            value={`${ownership < 0.01 ? "<0.01" : fmt(ownership, 4)}%`}
            mono
          />
        </RevSection>
        <RevSection title="Returns · projected">
          {isHold ? (
            <>
              <RevRow
                label="Gross rental yield"
                value={`${fmt(yield_ ?? 0, 2)}%`}
                mono
              />
              <RevRow
                label="Est. monthly dividend"
                value={`AED ${fmt(monthlyDiv, 2)}`}
                mono
              />
              <RevRow label="First payout" value="5 May 2026" />
            </>
          ) : (
            <>
              <RevRow
                label="Target annualized"
                value={`${fmt(annual ?? 0, 2)}%`}
                mono
              />
              <RevRow
                label={`Target at exit (${property.performance.investmentPeriod}mo)`}
                value={`AED ${fmt(expectedExit, 0)}`}
                mono
              />
              <RevRow label="Expected exit" value="Oct 2027" />
            </>
          )}
        </RevSection>
        <RevSection title="Ongoing fees">
          <RevRow label="Admin (p.a.)" value="0.5%" mono />
          <RevRow label="Exit fee" value="2.5%" mono />
          <RevRow
            label="Performance fee"
            value="0%"
            mono
            valueClass="text-data-pos"
          />
        </RevSection>
      </div>

      <div className="flex flex-col gap-2.5 rounded-md border border-hairline bg-paper-2 px-5 py-4">
        <label className="flex cursor-pointer items-start gap-2.5 text-[13px] leading-[1.5] text-ink-900">
          <input
            type="checkbox"
            checked={shariahOk}
            onChange={(e) => setShariahOk(e.target.checked)}
            className="mt-0.5 h-[14px] w-[14px] shrink-0 accent-forest-700"
          />
          <span>
            I confirm the transaction is{" "}
            <strong>Shariah-compliant</strong> and I&apos;ve reviewed the
            certificate from Amanie Advisors.
          </span>
        </label>
        <label className="flex cursor-pointer items-start gap-2.5 text-[13px] leading-[1.5] text-ink-900">
          <input
            type="checkbox"
            checked={feeOk}
            onChange={(e) => setFeeOk(e.target.checked)}
            className="mt-0.5 h-[14px] w-[14px] shrink-0 accent-forest-700"
          />
          <span>
            I&apos;ve read the <strong>fee structure</strong> and understand
            that returns are expected, not guaranteed.
          </span>
        </label>
      </div>

      <div className="mt-6 flex justify-end gap-2.5 border-t border-hairline pt-5">
        <button
          type="button"
          onClick={onBack}
          className="rounded-md border border-hairline bg-paper px-4 py-2.5 text-[13px] font-medium text-ink-900 hover:bg-sand-100"
        >
          Back
        </button>
        <button
          type="button"
          disabled={!shariahOk || !feeOk}
          onClick={onNext}
          className="inline-flex items-center gap-1.5 rounded-md bg-ink-900 px-4 py-2.5 text-[13px] font-medium text-paper hover:bg-black disabled:cursor-not-allowed disabled:bg-sand-300 disabled:text-ink-400"
        >
          Confirm investment
          <ArrowRight className="h-[13px] w-[13px]" strokeWidth={1.8} />
        </button>
      </div>
    </>
  );
}

function RevSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border-b border-hairline-2 px-5 py-4 last:border-b-0">
      <div className="mb-2.5 text-[11px] font-medium uppercase tracking-[0.06em] text-ink-500">
        {title}
      </div>
      {children}
    </div>
  );
}

function RevRow({
  label,
  value,
  mono,
  total,
  valueClass,
}: {
  label: string;
  value: string;
  mono?: boolean;
  total?: boolean;
  valueClass?: string;
}) {
  return (
    <div
      className={`flex justify-between py-1.5 text-[13px] ${
        total ? "mt-1 border-t border-hairline-2 pt-2.5 font-medium" : ""
      }`}
    >
      <span className={total ? "text-ink-900" : "text-ink-600"}>{label}</span>
      <span
        className={`${mono ? "font-mono tabular-nums" : ""} ${
          valueClass ?? "text-ink-900"
        }`}
      >
        {value}
      </span>
    </div>
  );
}

function ConfirmStep({
  property,
  amount,
  netInvested,
  ownership,
  isHold,
  in_,
  onDone,
}: {
  property: Property;
  amount: number;
  netInvested: number;
  ownership: number;
  isHold: boolean;
  in_: boolean;
  onDone: () => void;
}) {
  const txId = `SLX-${Math.floor(Math.random() * 900000 + 100000)}`;

  return (
    <div className="mx-auto flex max-w-[560px] flex-col items-center py-5 text-center">
      <div
        className={`mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-forest-100 text-forest-700 transition-transform duration-[600ms] ease-slice ${
          in_ ? "scale-100" : "scale-0"
        }`}
      >
        <Check className="h-8 w-8" strokeWidth={1.6} />
      </div>
      <h1 className="mb-2 text-[32px] font-medium leading-[1.2] tracking-[-0.02em] text-ink-900">
        You own a{" "}
        <em className="font-serif italic font-normal text-forest-700">slice</em>{" "}
        of {property.code}.
      </h1>
      <p className="mb-7 text-[14px] leading-[1.55] text-ink-600">
        Transaction confirmed. A receipt has been emailed to you and your Slice
        wallet has been updated.
      </p>

      <div className="mb-7 w-full rounded-md border border-hairline bg-paper px-5 py-4 text-left">
        <RevRow label="Property" value={property.title} />
        <RevRow
          label="Invested"
          value={`AED ${amount.toLocaleString()}`}
          mono
        />
        <RevRow
          label="Net after entry fee"
          value={`AED ${fmt(netInvested, 2)}`}
          mono
        />
        <RevRow
          label="Your ownership"
          value={`${ownership < 0.01 ? "<0.01" : fmt(ownership, 4)}%`}
          mono
        />
        <RevRow label="Transaction ID" value={txId} mono />
        <RevRow label="Status" value="● Settled" valueClass="text-data-pos" />
      </div>

      <div className="mb-3 flex w-full flex-col gap-3.5 text-left">
        <NextStep
          n={1}
          title={isHold ? "Your first dividend" : "Track the renovation"}
          desc={
            isHold
              ? "Net rent lands in your Slice wallet on 5 May 2026. You'll get a push notification when it hits."
              : "We'll post renovation updates every 2 weeks. Photos and site reports appear in your Portfolio."
          }
        />
        <NextStep
          n={2}
          title="Download your certificate"
          desc="Shariah-compliance and ownership certificates are in Portfolio → Documents."
        />
        <NextStep
          n={3}
          title="Refer a friend for AED 100"
          desc="Both of you get AED 100 credited when they make their first investment."
        />
      </div>

      <div className="mt-5 flex justify-center gap-2.5 pt-5">
        <button
          type="button"
          onClick={onDone}
          className="inline-flex items-center gap-1.5 rounded-md bg-ink-900 px-4 py-2.5 text-[13px] font-medium text-paper hover:bg-black"
        >
          Done
          <ArrowRight className="h-[13px] w-[13px]" strokeWidth={1.8} />
        </button>
      </div>
    </div>
  );
}

function NextStep({
  n,
  title,
  desc,
}: {
  n: number;
  title: string;
  desc: string;
}) {
  return (
    <div className="flex items-start gap-3.5 rounded-md border border-hairline-2 bg-paper px-4 py-3.5">
      <div className="flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-full bg-ink-900 font-mono text-[12px] text-paper">
        {n}
      </div>
      <div>
        <div className="mb-0.5 text-[13px] font-medium text-ink-900">
          {title}
        </div>
        <div className="text-[12.5px] leading-[1.5] text-ink-600">{desc}</div>
      </div>
    </div>
  );
}
