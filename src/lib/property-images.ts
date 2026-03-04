/**
 * Maps Dubai area names to curated Unsplash stock photos.
 */
const areaImages: Record<string, string> = {
  "Discovery Gardens":
    "https://images.unsplash.com/photo-1647845590515-fa57cf7a9324?w=800&q=80",
  JVT: "https://images.unsplash.com/photo-1743819458014-f5cf74f175e3?w=800&q=80",
  "Downtown Dubai":
    "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80",
  Downtown:
    "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80",
  DIFC: "https://images.unsplash.com/photo-1759177000910-c406ca6928da?w=800&q=80",
  "Palm Jumeirah":
    "https://images.unsplash.com/photo-1545555719-a68ea50c8494?w=800&q=80",
  "Sports City":
    "https://images.unsplash.com/photo-1758893039387-79d75d2e1431?w=800&q=80",
  "Dubai Marina":
    "https://images.unsplash.com/photo-1624317938116-5050f2b0965c?w=800&q=80",
  JVC: "https://images.unsplash.com/photo-1719474814929-2c94d3bc308a?w=800&q=80",
  Arjan:
    "https://images.unsplash.com/photo-1772208519235-eac469504ba7?w=800&q=80",
  "Dubai Hills":
    "https://images.unsplash.com/photo-1681038354760-fe5a00128e51?w=800&q=80",
  IMPZ: "https://images.unsplash.com/photo-1592904083165-8c001f6e8d7e?w=800&q=80",
  "Old Town":
    "https://images.unsplash.com/photo-1578152465645-b3203272704c?w=800&q=80",
  "Business Bay":
    "https://images.unsplash.com/photo-1685967717292-727407cdff56?w=800&q=80",
  JLT: "https://images.unsplash.com/photo-1624317938116-5050f2b0965c?w=800&q=80",
  "Silicon Oasis":
    "https://images.unsplash.com/photo-1592904083165-8c001f6e8d7e?w=800&q=80",
  "Al Furjan":
    "https://images.unsplash.com/photo-1743819458014-f5cf74f175e3?w=800&q=80",
  "Jumeirah Village":
    "https://images.unsplash.com/photo-1719474814929-2c94d3bc308a?w=800&q=80",
};

const FALLBACK =
  "https://images.unsplash.com/photo-1768069794857-9306ac167c6e?w=800&q=80";

/**
 * Returns the best-match Unsplash image URL for a property based on its area.
 */
export function getPropertyImage(areaName: string, title: string): string {
  if (areaImages[areaName]) return areaImages[areaName];

  // Fall back: check if any known area appears in the title
  const titleLower = title.toLowerCase();
  for (const [area, url] of Object.entries(areaImages)) {
    if (titleLower.includes(area.toLowerCase())) return url;
  }

  return FALLBACK;
}
