export type InvestmentType = "HOLD" | "FLIP";
export type PropertyStatus = "CLOSED" | "EXITED" | "LIVE" | "SOLD";
export type PropertyCategory = "RESIDENTIAL" | "COMMERCIAL";
export type PropertyType = "APARTMENT" | "VILLA" | "TOWN_HOUSE" | "HOTEL_APARTMENT";
export type InvestmentCategory = "LONG_TERM" | "SHORT_TERM" | null;
export type ReturnFrequency = "MONTHLY";

export interface PropertyRental {
  grossYield: number | null;
  netYield: number | null;
  dividendYield: number | null;
  grossRent: number | null;
  netRent: number;
  totalRentalIncome: number;
  returnFrequency: ReturnFrequency;
}

export interface PropertyPerformance {
  investors: number;
  annualized: number | null;
  totalGrossRoi: number | null;
  investmentPeriod: number;
  funded: number;
  fundedAmount: number;
  totalReturnRoi: number | null;
  totalReturnRoiPercentage: number | null;
  renovationProgress: number | null;
}

export interface PropertyValuation {
  marketValue: number | null;
  marketValuePercentage: number;
  saleProceed: number | null;
  expectedSaleProceed: number | null;
}

export interface PropertyPhysical {
  bedrooms: number;
  bathrooms: number;
}

export interface PropertyLocation {
  area: {
    name: string;
    displayName: string;
  } | null;
  city: {
    name: string;
    displayName: string;
  };
}

export interface PropertyAuction {
  fundedDate: string | null;
  closeDate: string | null;
  soldDate: string | null;
  completionDate: string | null;
}

export interface Property {
  id: number;
  code: string;
  title: string;
  investmentType: InvestmentType;
  propertyCategory: PropertyCategory;
  price: number;
  projectPrice: number;
  propertyType: PropertyType;
  investmentCategory: InvestmentCategory;
  propertyStatus: PropertyStatus;
  renovationProgress: number | null;
  totalReturnRoi: number;
  totalReturnRoiPercentage: number;
  investors: number;
  rental: PropertyRental;
  performance: PropertyPerformance;
  valuation: PropertyValuation;
  physical: PropertyPhysical;
  location: PropertyLocation;
  auction: PropertyAuction;
}
