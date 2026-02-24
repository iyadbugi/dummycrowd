"use client";

import { useState, useEffect } from "react";
import { Property } from "@/types/property";
import PropertyCard from "@/components/PropertyCard";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const CARDS_PER_PAGE = 12;

interface PropertyGridProps {
  properties: Property[];
}

export default function PropertyGrid({ properties }: PropertyGridProps) {
  const [currentPage, setCurrentPage] = useState(0);

  // Reset to page 0 when properties array changes
  useEffect(() => {
    setCurrentPage(0);
  }, [properties]);

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
        {currentProperties.map((p) => (
          <PropertyCard key={p.id} property={p} />
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
