import { Suspense } from "react";
import PropertyTabs from "@/components/PropertyTabs";

export default function ExplorePage() {
  return (
    <div className="flex flex-col gap-[22px]">
      <Suspense fallback={null}>
        <PropertyTabs />
      </Suspense>
    </div>
  );
}
