export const SMARTCROWD_INFO = {
  name: "SmartCrowd",
  tagline: "Own a piece of real estate",
  regulation: "DFSA-regulated, DIFC-registered",
  minimumInvestment: 500, // AED
  currency: "AED",
  totalInvestors: 5000,
  totalFundedProperties: 165,
  totalExitedProperties: 67,
  totalExitProceeds: 220_000_000, // AED 220M+
  averageExitROI: 37, // ~35-40%
} as const;

export const FEES = {
  entry: { percentage: 1.5, description: "One-time entry fee on investment amount" },
  annual: { percentage: 0.5, description: "Annual administration fee" },
  exit: { percentage: 2.5, description: "Fee on exit proceeds" },
  performance: { percentage: 0, description: "No performance fee charged" },
} as const;

export const INVESTMENT_MODELS = {
  HOLD: {
    name: "Hold",
    holdingPeriod: "3-5 years",
    targetReturn: "7-11% annual",
    description:
      "Buy and hold properties that generate regular rental income. Investors earn monthly/quarterly dividends from rent plus capital appreciation over time.",
    exitMechanism:
      "5-year investor vote to sell or continue. Early exit possible via Share Transfer Facility (March/September windows).",
  },
  FLIP: {
    name: "Flip",
    holdingPeriod: "9-12 months",
    targetReturn: "15-30% total ROI",
    description:
      "Buy undervalued properties, renovate them, and sell for a profit. Investors earn returns from the price difference between purchase and sale.",
    exitMechanism: "Property is sold after renovation. Returns distributed to all investors.",
  },
} as const;

export const HOW_IT_WORKS = [
  { step: 1, title: "Register", detail: "Create your account in under 5 minutes" },
  { step: 2, title: "KYC Verification", detail: "Complete free identity verification" },
  { step: 3, title: "Fund Wallet", detail: "Add funds to your SmartCrowd wallet" },
  { step: 4, title: "Browse Properties", detail: "Explore available investment opportunities" },
  { step: 5, title: "Invest", detail: "Choose a property and invest from AED 500" },
  { step: 6, title: "Earn Returns", detail: "Receive rental income or flip profits" },
  { step: 7, title: "Exit", detail: "Cash out when the property is sold" },
] as const;

export const ADVANTAGES = [
  "Lowest minimum investment in the region (AED 500)",
  "Full lifecycle property management",
  "No performance fees",
  "Sharia-compliant investments available",
  "DFSA regulated for investor protection",
  "Transparent reporting and regular updates",
] as const;

export const FAQS = [
  {
    question: "How does fractional investing work?",
    answer:
      "Fractional investing lets you own a share of a property by pooling funds with other investors. SmartCrowd handles everything — from property selection and acquisition to management and eventual sale. You earn proportional returns based on your investment amount.",
  },
  {
    question: "What is the minimum investment?",
    answer: "You can start investing with as little as AED 500.",
  },
  {
    question: "How do I earn returns?",
    answer:
      "For Hold properties, you earn regular rental income (monthly or quarterly) plus capital appreciation. For Flip properties, you earn a share of the profit when the renovated property is sold.",
  },
  {
    question: "What fees does SmartCrowd charge?",
    answer:
      "SmartCrowd charges a 1.5% entry fee, 0.5% annual administration fee, and 2.5% exit fee. There are no performance fees.",
  },
  {
    question: "How can I exit my investment?",
    answer:
      "For Hold properties, there is a 5-year investor vote to sell or continue. You can also exit early via the Share Transfer Facility during March and September windows. Flip properties are automatically exited when the property is sold.",
  },
  {
    question: "Is SmartCrowd regulated?",
    answer:
      "Yes, SmartCrowd is regulated by the Dubai Financial Services Authority (DFSA) and registered in the Dubai International Financial Centre (DIFC).",
  },
] as const;
