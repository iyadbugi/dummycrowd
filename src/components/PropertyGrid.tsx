"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Property } from "@/types/property";
import PropertyCard from "@/components/PropertyCard";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const CARDS_PER_PAGE = 12;

interface PropertyGridProps {
  properties: Property[];
  highlightedCode?: string | null;
}

export default function PropertyGrid({ properties, highlightedCode }: PropertyGridProps) {
  const [currentPage, setCurrentPage] = useState(0);

  // Navigate to highlighted property's page (without resetting when highlight clears)
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
      <p className="text-center text-sc-text-muted">No properties found</p>
    );
  }

  const totalPages = Math.ceil(properties.length / CARDS_PER_PAGE);
  const start = currentPage * CARDS_PER_PAGE;
  const currentProperties = properties.slice(start, start + CARDS_PER_PAGE);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentProperties.map((p, index) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: index * 0.06, ease: "easeOut" }}
          >
            <PropertyCard
              property={p}
              highlighted={highlightedCode === p.code}
            />
          </motion.div>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-4 mt-6">
          <Button
            variant="outline"
            size="sm"
            disabled={currentPage === 0}
            onClick={() => setCurrentPage((prev) => prev - 1)}
          >
            <ChevronLeft />
            Previous
          </Button>

          <span className="text-sm text-sc-text-muted">
            Page {currentPage + 1} of {totalPages}
          </span>

          <Button
            variant="outline"
            size="sm"
            disabled={currentPage === totalPages - 1}
            onClick={() => setCurrentPage((prev) => prev + 1)}
          >
            Next
            <ChevronRight />
          </Button>
        </div>
      )}
    </div>
  );
}
