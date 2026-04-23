"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Property } from "@/types/property";
import PropertyCard from "@/components/PropertyCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

const CARDS_PER_PAGE = 12;

interface PropertyGridProps {
  properties: Property[];
  highlightedCode?: string | null;
}

function getPageNumbers(
  currentPage: number,
  totalPages: number
): (number | "ellipsis")[] {
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, i) => i);
  }
  const pages: (number | "ellipsis")[] = [0];
  if (currentPage > 2) pages.push("ellipsis");
  const start = Math.max(1, currentPage - 1);
  const end = Math.min(totalPages - 2, currentPage + 1);
  for (let i = start; i <= end; i++) pages.push(i);
  if (currentPage < totalPages - 3) pages.push("ellipsis");
  pages.push(totalPages - 1);
  return pages;
}

export default function PropertyGrid({
  properties,
  highlightedCode,
}: PropertyGridProps) {
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    if (highlightedCode) {
      const index = properties.findIndex((p) => p.code === highlightedCode);
      if (index >= 0) {
        setCurrentPage(Math.floor(index / CARDS_PER_PAGE));
      }
    }
  }, [highlightedCode, properties]);

  const prevPropertiesRef = useRef(properties);
  useEffect(() => {
    if (prevPropertiesRef.current !== properties && !highlightedCode) {
      setCurrentPage(0);
    }
    prevPropertiesRef.current = properties;
  }, [properties, highlightedCode]);

  if (properties.length === 0) {
    return (
      <div className="rounded-md border border-dashed border-hairline px-6 py-12 text-center">
        <p className="text-[13px] text-ink-600">
          No properties match your filters.
        </p>
      </div>
    );
  }

  const totalPages = Math.ceil(properties.length / CARDS_PER_PAGE);
  const start = currentPage * CARDS_PER_PAGE;
  const currentProperties = properties.slice(start, start + CARDS_PER_PAGE);
  const pageNumbers = getPageNumbers(currentPage, totalPages);

  return (
    <div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {currentProperties.map((p, index) => (
          <motion.div
            key={p.id}
            className="h-full"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.3,
              delay: index * 0.03,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <PropertyCard
              property={p}
              highlighted={highlightedCode === p.code}
            />
          </motion.div>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="mt-8 mb-28 flex items-center justify-center gap-1 border-t border-hairline-2 pt-6 md:mb-0">
          <button
            disabled={currentPage === 0}
            onClick={() => setCurrentPage((p) => p - 1)}
            className="flex h-9 w-9 items-center justify-center rounded-md text-ink-600 transition-colors hover:bg-sand-100 disabled:cursor-not-allowed disabled:opacity-30"
          >
            <ChevronLeft className="h-4 w-4" strokeWidth={1.6} />
          </button>
          {pageNumbers.map((page, i) =>
            page === "ellipsis" ? (
              <span
                key={`ellipsis-${i}`}
                className="flex h-9 w-9 items-center justify-center font-mono text-[12px] text-ink-400"
              >
                …
              </span>
            ) : (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`h-9 w-9 rounded-md font-mono text-[12px] font-medium transition-colors ${
                  currentPage === page
                    ? "bg-ink-900 text-paper"
                    : "text-ink-600 hover:bg-sand-100"
                }`}
              >
                {page + 1}
              </button>
            )
          )}
          <button
            disabled={currentPage === totalPages - 1}
            onClick={() => setCurrentPage((p) => p + 1)}
            className="flex h-9 w-9 items-center justify-center rounded-md text-ink-600 transition-colors hover:bg-sand-100 disabled:cursor-not-allowed disabled:opacity-30"
          >
            <ChevronRight className="h-4 w-4" strokeWidth={1.6} />
          </button>
        </div>
      )}
    </div>
  );
}
