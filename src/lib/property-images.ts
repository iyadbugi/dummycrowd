const areaImagePools: Record<string, string[]> = {
  "Discovery Gardens": [
    "https://images.unsplash.com/photo-1647845590515-fa57cf7a9324?w=1200&q=80",
    "https://images.unsplash.com/photo-1772208519235-eac469504ba7?w=1200&q=80",
  ],
  JVT: [
    "https://images.unsplash.com/photo-1743819458014-f5cf74f175e3?w=1200&q=80",
    "https://images.unsplash.com/photo-1719474814929-2c94d3bc308a?w=1200&q=80",
  ],
  "Downtown Dubai": [
    "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&q=80",
    "https://images.unsplash.com/photo-1685967717292-727407cdff56?w=1200&q=80",
  ],
  Downtown: [
    "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&q=80",
    "https://images.unsplash.com/photo-1685967717292-727407cdff56?w=1200&q=80",
  ],
  DIFC: [
    "https://images.unsplash.com/photo-1759177000910-c406ca6928da?w=1200&q=80",
    "https://images.unsplash.com/photo-1685967717292-727407cdff56?w=1200&q=80",
  ],
  "Palm Jumeirah": [
    "https://images.unsplash.com/photo-1545555719-a68ea50c8494?w=1200&q=80",
    "https://images.unsplash.com/photo-1624317938116-5050f2b0965c?w=1200&q=80",
  ],
  "Sports City": [
    "https://images.unsplash.com/photo-1758893039387-79d75d2e1431?w=1200&q=80",
    "https://images.unsplash.com/photo-1647845590515-fa57cf7a9324?w=1200&q=80",
  ],
  "Dubai Marina": [
    "https://images.unsplash.com/photo-1624317938116-5050f2b0965c?w=1200&q=80",
    "https://images.unsplash.com/photo-1545555719-a68ea50c8494?w=1200&q=80",
    "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&q=80",
  ],
  JVC: [
    "https://images.unsplash.com/photo-1719474814929-2c94d3bc308a?w=1200&q=80",
    "https://images.unsplash.com/photo-1743819458014-f5cf74f175e3?w=1200&q=80",
  ],
  Arjan: [
    "https://images.unsplash.com/photo-1772208519235-eac469504ba7?w=1200&q=80",
    "https://images.unsplash.com/photo-1647845590515-fa57cf7a9324?w=1200&q=80",
  ],
  "Dubai Hills": [
    "https://images.unsplash.com/photo-1681038354760-fe5a00128e51?w=1200&q=80",
    "https://images.unsplash.com/photo-1578152465645-b3203272704c?w=1200&q=80",
  ],
  IMPZ: [
    "https://images.unsplash.com/photo-1592904083165-8c001f6e8d7e?w=1200&q=80",
    "https://images.unsplash.com/photo-1758893039387-79d75d2e1431?w=1200&q=80",
  ],
  "Old Town": [
    "https://images.unsplash.com/photo-1578152465645-b3203272704c?w=1200&q=80",
    "https://images.unsplash.com/photo-1681038354760-fe5a00128e51?w=1200&q=80",
  ],
  "Business Bay": [
    "https://images.unsplash.com/photo-1685967717292-727407cdff56?w=1200&q=80",
    "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&q=80",
  ],
  JLT: [
    "https://images.unsplash.com/photo-1624317938116-5050f2b0965c?w=1200&q=80",
    "https://images.unsplash.com/photo-1545555719-a68ea50c8494?w=1200&q=80",
  ],
  "Silicon Oasis": [
    "https://images.unsplash.com/photo-1592904083165-8c001f6e8d7e?w=1200&q=80",
    "https://images.unsplash.com/photo-1772208519235-eac469504ba7?w=1200&q=80",
  ],
  "Al Furjan": [
    "https://images.unsplash.com/photo-1743819458014-f5cf74f175e3?w=1200&q=80",
    "https://images.unsplash.com/photo-1647845590515-fa57cf7a9324?w=1200&q=80",
  ],
  "Jumeirah Village": [
    "https://images.unsplash.com/photo-1719474814929-2c94d3bc308a?w=1200&q=80",
    "https://images.unsplash.com/photo-1743819458014-f5cf74f175e3?w=1200&q=80",
  ],
};

const INTERIOR_POOL = [
  "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&q=80",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
  "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80",
  "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1200&q=80",
  "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&q=80",
  "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=1200&q=80",
  "https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?w=1200&q=80",
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80",
  "https://images.unsplash.com/photo-1616137466211-f939a420be84?w=1200&q=80",
  "https://images.unsplash.com/photo-1600566753086-00f18fe6ba68?w=1200&q=80",
];

const FALLBACK =
  "https://images.unsplash.com/photo-1768069794857-9306ac167c6e?w=1200&q=80";

const ALL_IMAGES = Array.from(
  new Set([
    ...Object.values(areaImagePools).flat(),
    ...INTERIOR_POOL,
    FALLBACK,
  ])
);

function hashCode(s: string): number {
  let h = 5381;
  for (let i = 0; i < s.length; i++) {
    h = ((h << 5) + h + s.charCodeAt(i)) >>> 0;
  }
  return h;
}

function areaPool(areaName: string, title: string): string[] {
  if (areaImagePools[areaName]) return areaImagePools[areaName];
  const titleLower = title.toLowerCase();
  for (const [area, urls] of Object.entries(areaImagePools)) {
    if (titleLower.includes(area.toLowerCase())) return urls;
  }
  return [FALLBACK];
}

export function getPropertyImages(
  code: string,
  areaName: string,
  title: string,
  count: number
): string[] {
  const seed = hashCode(code || title || "property");
  const pool = areaPool(areaName, title);
  const hero = pool[seed % pool.length];

  const others = ALL_IMAGES.filter((u) => u !== hero);
  const start = seed % others.length;
  const rotated = [...others.slice(start), ...others.slice(0, start)];

  const result = [hero];
  for (const url of rotated) {
    if (result.length >= count) break;
    if (!result.includes(url)) result.push(url);
  }
  return result;
}

export function getPropertyImage(
  code: string,
  areaName: string,
  title: string
): string {
  return getPropertyImages(code, areaName, title, 1)[0];
}
