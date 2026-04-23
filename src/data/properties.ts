import type { Property } from "@/types/property";

import liveData from "./live.json";
import fundedData from "./funded.json";
import exitedData from "./exited.json";

// JSON imports are emitted as lightweight data modules by Next.js and skip the
// heavy TS AST + type-check pass that a 14k-line literal would otherwise need.
// We cast once here so consumers get the full Property type surface.

export const liveProperties: Property[] = liveData as unknown as Property[];
export const fundedProperties: Property[] = fundedData as unknown as Property[];
export const exitedProperties: Property[] = exitedData as unknown as Property[];

export const allProperties: Property[] = [
  ...liveProperties,
  ...fundedProperties,
  ...exitedProperties,
];
