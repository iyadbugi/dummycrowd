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

// ---------------------------------------------------------------------------
// Pagination helper: generate page numbers with ellipsis
// ---------------------------------------------------------------------------
function getPageNumbers(
  currentPage: number,
  totalPages: number
): (number | "ellipsis")[] {
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, i) => i);
  }

  const pages: (number | "ellipsis")[] = [0];

  if (currentPage > 2) {
    pages.push("ellipsis");
  }

  const start = Math.max(1, currentPage - 1);
  const end = Math.min(totalPages - 2, currentPage + 1);

  for (let i = start; i <= end; i++) {
    pages.push(i);
  }

  if (currentPage < totalPages - 3) {
    pages.push("ellipsis");
  }

  pages.push(totalPages - 1);

  return pages;
}

export default function PropertyGrid({
  properties,
  highlightedCode,
}: PropertyGridProps) {
  const [currentPage, setCurrentPage] = useState(0);

  // Navigate to highlighted property's page
  useEffect(() => {
    if (highlightedCode) {
      const index = properties.findIndex((p) => p.code === highlightedCode);
      if (index >= 0) {
        setCurrentPage(Math.floor(index / CARDS_PER_PAGE));
      }
    }
  }, [highlightedCode, properties]);

  // Reset to page 0 only when the properties array itself changes (tab/filter switch)
  const prevPropertiesRef = useRef(properties);
  useEffect(() => {
    if (prevPropertiesRef.current !== properties && !highlightedCode) {
      setCurrentPage(0);
    }
    prevPropertiesRef.current = properties;
  }, [properties, highlightedCode]);

  if (properties.length === 0) {
    return (
      <p className="text-center text-sc-text-muted py-12">
        No properties found
      </p>
    );
  }

  const totalPages = Math.ceil(properties.length / CARDS_PER_PAGE);
  const start = currentPage * CARDS_PER_PAGE;
  const currentProperties = properties.slice(start, start + CARDS_PER_PAGE);
  const pageNumbers = getPageNumbers(currentPage, totalPages);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentProperties.map((p, index) => (
          <motion.div
            key={p.id}
            className="h-full"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.4,
              delay: index * 0.05,
              ease: [0.25, 0.1, 0.25, 1],
            }}
          >
            <PropertyCard
              property={p}
              highlighted={highlightedCode === p.code}
            />
          </motion.div>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-1 mt-8 pt-6 border-t border-gray-100 dark:border-white/10">
          {/* Previous */}
          <button
            disabled={currentPage === 0}
            onClick={() => setCurrentPage((prev) => prev - 1)}
            className="flex items-center justify-center w-9 h-9 rounded-lg text-sc-text-muted hover:bg-gray-100 dark:hover:bg-white/5 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {/* Page numbers */}
          {pageNumbers.map((page, i) =>
            page === "ellipsis" ? (
              <span
                key={`ellipsis-${i}`}
                className="w-9 h-9 flex items-center justify-center text-sc-text-muted text-sm"
              >
                ...
              </span>
            ) : (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-9 h-9 rounded-lg text-sm font-medium transition-colors ${
                  currentPage === page
                    ? "bg-sc-blue text-white shadow-sm"
                    : "text-sc-text-muted hover:bg-gray-100 dark:hover:bg-white/5"
                }`}
              >
                {page + 1}
              </button>
            )
          )}

          {/* Next */}
          <button
            disabled={currentPage === totalPages - 1}
            onClick={() => setCurrentPage((prev) => prev + 1)}
            className="flex items-center justify-center w-9 h-9 rounded-lg text-sc-text-muted hover:bg-gray-100 dark:hover:bg-white/5 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
}
