import { notFound } from "next/navigation";
import {
  liveProperties,
  fundedProperties,
  exitedProperties,
} from "@/data/properties";
import { Property } from "@/types/property";
import PropertyDetail from "@/components/PropertyDetail";

type Tab = "live" | "funded" | "exited";

function findProperty(
  code: string
): { property: Property; tab: Tab } | null {
  const upper = code.toUpperCase();
  const inLive = liveProperties.find((p) => p.code.toUpperCase() === upper);
  if (inLive) return { property: inLive, tab: "live" };
  const inFunded = fundedProperties.find(
    (p) => p.code.toUpperCase() === upper
  );
  if (inFunded) return { property: inFunded, tab: "funded" };
  const inExited = exitedProperties.find(
    (p) => p.code.toUpperCase() === upper
  );
  if (inExited) return { property: inExited, tab: "exited" };
  return null;
}

export default async function PropertyDetailPage({
  params,
}: {
  params: Promise<{ code: string }>;
}) {
  const { code } = await params;
  const result = findProperty(code);
  if (!result) notFound();
  return <PropertyDetail property={result.property} parentTab={result.tab} />;
}
