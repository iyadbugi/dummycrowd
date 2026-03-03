"use client";

import { useState, useEffect } from "react";
import { Property } from "@/types/property";
import { formatPrice } from "@/lib/property-utils";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

export default function InvestmentDialog() {
  const [open, setOpen] = useState(false);
  const [property, setProperty] = useState<Property | null>(null);
  const [suggestedAmount, setSuggestedAmount] = useState<number | undefined>();

  useEffect(() => {
    function handleInvest(e: Event) {
      const detail = (e as CustomEvent).detail;
      setProperty(detail.property);
      setSuggestedAmount(detail.suggestedAmount);
      setOpen(true);
    }

    window.addEventListener("start-investment", handleInvest);
    return () => window.removeEventListener("start-investment", handleInvest);
  }, []);

  if (!property) return null;

  const isHold = property.investmentType === "HOLD";
  const price = isHold ? property.price : property.projectPrice;
  const rentalYield = property.rental.grossYield ?? property.rental.dividendYield;

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Invest in {property.code}</DialogTitle>
          <DialogDescription>{property.title}</DialogDescription>
        </DialogHeader>

        <div className="space-y-4 py-2">
          {/* Property summary */}
          <div className="rounded-lg bg-gray-50 dark:bg-white/5 p-4 space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-sc-text-muted">Type</span>
              <span className="font-medium text-sc-text-dark">{isHold ? "Hold" : "Flip"}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-sc-text-muted">{isHold ? "Purchase Price" : "Project Cost"}</span>
              <span className="font-medium text-sc-text-dark">AED {formatPrice(price)}</span>
            </div>
            {rentalYield && (
              <div className="flex justify-between text-sm">
                <span className="text-sc-text-muted">Rental Yield</span>
                <span className="font-medium text-sc-text-green">{rentalYield}%</span>
              </div>
            )}
            <div className="flex justify-between text-sm">
              <span className="text-sc-text-muted">Min. Investment</span>
              <span className="font-medium text-sc-text-dark">AED 500</span>
            </div>
          </div>

          {/* Fee summary */}
          <div className="rounded-lg border border-gray-200 dark:border-white/10 p-4 space-y-2">
            <p className="text-sm font-medium text-sc-text-dark">Fee Structure</p>
            <div className="flex justify-between text-sm">
              <span className="text-sc-text-muted">Entry fee</span>
              <span className="text-sc-text-dark">1.5%</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-sc-text-muted">Annual admin</span>
              <span className="text-sc-text-dark">0.5%</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-sc-text-muted">Exit fee</span>
              <span className="text-sc-text-dark">2.5%</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-sc-text-muted">Performance fee</span>
              <span className="text-sc-text-green font-medium">0%</span>
            </div>
          </div>

          {suggestedAmount && (
            <p className="text-sm text-sc-text-muted text-center">
              Sara suggested investing AED {suggestedAmount.toLocaleString()}
            </p>
          )}

          {/* CTA */}
          <Button asChild className="w-full bg-sc-blue hover:bg-sc-blue/90">
            <a
              href="https://www.smartcrowd.ae"
              target="_blank"
              rel="noopener noreferrer"
            >
              Invest on SmartCrowd
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>

          {/* Demo disclaimer */}
          <p className="text-xs text-sc-text-muted text-center">
            This is a demo. Visit smartcrowd.ae for real investments.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
