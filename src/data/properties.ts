import { Property } from "@/types/property";

export const liveProperties: Property[] = [
  {
    "id": 780,
    "code": "SC-327",
    "title": "Villa in the Sky Penthouse, DIFC",
    "investmentType": "FLIP",
    "propertyCategory": "RESIDENTIAL",
    "price": 0,
    "projectPrice": 0,
    "propertyType": "APARTMENT",
    "investmentCategory": null,
    "propertyStatus": "LIVE",
    "renovationProgress": null,
    "totalReturnRoi": 0,
    "totalReturnRoiPercentage": 0,
    "investors": 0,
    "rental": {
      "grossYield": null,
      "netYield": null,
      "dividendYield": null,
      "grossRent": null,
      "netRent": 0,
      "totalRentalIncome": 0,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 0,
      "annualized": null,
      "totalGrossRoi": null,
      "investmentPeriod": 0,
      "funded": 0,
      "fundedAmount": 0,
      "totalReturnRoi": null,
      "totalReturnRoiPercentage": null,
      "renovationProgress": null
    },
    "valuation": {
      "marketValue": null,
      "marketValuePercentage": 0,
      "saleProceed": null,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 4,
      "bathrooms": 5
    },
    "location": {
      "area": {
        "name": "DIFC",
        "displayName": "DIFC"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": null,
      "closeDate": null,
      "soldDate": null,
      "completionDate": null
    }
  }
] as const satisfies Property[];

export const fundedProperties: Property[] = [
  {
    "id": 782,
    "code": "SC-330",
    "title": "Studio in Discovery Gardens",
    "investmentType": "HOLD",
    "propertyCategory": "RESIDENTIAL",
    "price": 578000,
    "projectPrice": 578000,
    "propertyType": "APARTMENT",
    "investmentCategory": "LONG_TERM",
    "propertyStatus": "CLOSED",
    "renovationProgress": null,
    "totalReturnRoi": -677962.51,
    "totalReturnRoiPercentage": -100,
    "investors": 150,
    "rental": {
      "grossYield": 8.3,
      "netYield": 6.69,
      "dividendYield": 6.07,
      "grossRent": 48000,
      "netRent": 35080,
      "totalRentalIncome": 0,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 150,
      "annualized": 10.5,
      "totalGrossRoi": 65.46,
      "investmentPeriod": 60,
      "funded": 100,
      "fundedAmount": 578000,
      "totalReturnRoi": null,
      "totalReturnRoiPercentage": null,
      "renovationProgress": null
    },
    "valuation": {
      "marketValue": 580000,
      "marketValuePercentage": 0.35,
      "saleProceed": null,
      "expectedSaleProceed": 736950
    },
    "physical": {
      "bedrooms": 0,
      "bathrooms": 1
    },
    "location": {
      "area": {
        "name": "Discovery Gardens",
        "displayName": "Discovery Gardens"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": null,
      "closeDate": "2026-02-20",
      "soldDate": null,
      "completionDate": null
    }
  },
  {
    "id": 778,
    "code": "SC-326",
    "title": "1 Bed + Study in Bali Residences, JVT",
    "investmentType": "HOLD",
    "propertyCategory": "RESIDENTIAL",
    "price": 1290000,
    "projectPrice": 1290000,
    "propertyType": "APARTMENT",
    "investmentCategory": "LONG_TERM",
    "propertyStatus": "CLOSED",
    "renovationProgress": null,
    "totalReturnRoi": -1430795.95,
    "totalReturnRoiPercentage": -99.59,
    "investors": 317,
    "rental": {
      "grossYield": 7.29,
      "netYield": 6.4,
      "dividendYield": 5.94,
      "grossRent": 94000,
      "netRent": 76619,
      "totalRentalIncome": 5863.02,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 317,
      "annualized": 10.51,
      "totalGrossRoi": 60.11,
      "investmentPeriod": 60,
      "funded": 100,
      "fundedAmount": 1290000,
      "totalReturnRoi": null,
      "totalReturnRoiPercentage": null,
      "renovationProgress": null
    },
    "valuation": {
      "marketValue": 1300000,
      "marketValuePercentage": 0.78,
      "saleProceed": null,
      "expectedSaleProceed": 1644750
    },
    "physical": {
      "bedrooms": 1,
      "bathrooms": 2
    },
    "location": {
      "area": {
        "name": "JVT",
        "displayName": "JVT"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": null,
      "closeDate": "2026-02-15",
      "soldDate": null,
      "completionDate": null
    }
  },
  {
    "id": 777,
    "code": "SC-325",
    "title": "3 Bedroom Penthouse in Bellevue, Downtown Dubai",
    "investmentType": "FLIP",
    "propertyCategory": "RESIDENTIAL",
    "price": 8300000,
    "projectPrice": 10182600,
    "propertyType": "APARTMENT",
    "investmentCategory": null,
    "propertyStatus": "CLOSED",
    "renovationProgress": null,
    "totalReturnRoi": -11198906.52,
    "totalReturnRoiPercentage": -100,
    "investors": 212,
    "rental": {
      "grossYield": null,
      "netYield": null,
      "dividendYield": null,
      "grossRent": null,
      "netRent": 0,
      "totalRentalIncome": 0,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 212,
      "annualized": null,
      "totalGrossRoi": null,
      "investmentPeriod": 9,
      "funded": 100,
      "fundedAmount": 10182600,
      "totalReturnRoi": null,
      "totalReturnRoiPercentage": null,
      "renovationProgress": null
    },
    "valuation": {
      "marketValue": null,
      "marketValuePercentage": 0,
      "saleProceed": null,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 3,
      "bathrooms": 4
    },
    "location": {
      "area": {
        "name": "Downtown Dubai",
        "displayName": "Downtown Dubai"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": null,
      "closeDate": "2026-02-10",
      "soldDate": null,
      "completionDate": null
    }
  },
  {
    "id": 775,
    "code": "SC-323",
    "title": "1 Bed in Lakeside, IMPZ",
    "investmentType": "HOLD",
    "propertyCategory": "RESIDENTIAL",
    "price": 600000,
    "projectPrice": 600000,
    "propertyType": "APARTMENT",
    "investmentCategory": "LONG_TERM",
    "propertyStatus": "CLOSED",
    "renovationProgress": null,
    "totalReturnRoi": -702288.86,
    "totalReturnRoiPercentage": -99.34,
    "investors": 174,
    "rental": {
      "grossYield": 8.33,
      "netYield": 6.86,
      "dividendYield": 6.25,
      "grossRent": 50000,
      "netRent": 37492,
      "totalRentalIncome": 4689.88,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 174,
      "annualized": 10.21,
      "totalGrossRoi": 63.18,
      "investmentPeriod": 60,
      "funded": 100,
      "fundedAmount": 600000,
      "totalReturnRoi": null,
      "totalReturnRoiPercentage": null,
      "renovationProgress": null
    },
    "valuation": {
      "marketValue": 600000,
      "marketValuePercentage": 0,
      "saleProceed": null,
      "expectedSaleProceed": 750000
    },
    "physical": {
      "bedrooms": 1,
      "bathrooms": 2
    },
    "location": {
      "area": {
        "name": "IMPZ",
        "displayName": "IMPZ"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": null,
      "closeDate": "2026-01-16",
      "soldDate": null,
      "completionDate": null
    }
  },
  {
    "id": 772,
    "code": "SC-321",
    "title": "1 Bed in Lakeside, IMPZ",
    "investmentType": "HOLD",
    "propertyCategory": "RESIDENTIAL",
    "price": 600000,
    "projectPrice": 600000,
    "propertyType": "APARTMENT",
    "investmentCategory": "LONG_TERM",
    "propertyStatus": "CLOSED",
    "renovationProgress": null,
    "totalReturnRoi": -696534.99,
    "totalReturnRoiPercentage": -99.11,
    "investors": 180,
    "rental": {
      "grossYield": 8.33,
      "netYield": 6.86,
      "dividendYield": 6.25,
      "grossRent": 50000,
      "netRent": 37492,
      "totalRentalIncome": 6248.68,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 180,
      "annualized": 10.21,
      "totalGrossRoi": 63.18,
      "investmentPeriod": 60,
      "funded": 100,
      "fundedAmount": 600000,
      "totalReturnRoi": null,
      "totalReturnRoiPercentage": null,
      "renovationProgress": null
    },
    "valuation": {
      "marketValue": 600000,
      "marketValuePercentage": 0,
      "saleProceed": null,
      "expectedSaleProceed": 750000
    },
    "physical": {
      "bedrooms": 1,
      "bathrooms": 2
    },
    "location": {
      "area": {
        "name": "IMPZ",
        "displayName": "IMPZ"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": null,
      "closeDate": "2026-01-03",
      "soldDate": null,
      "completionDate": null
    }
  },
  {
    "id": 770,
    "code": "SC-320",
    "title": "Studio in Lakeside, IMPZ",
    "investmentType": "HOLD",
    "propertyCategory": "RESIDENTIAL",
    "price": 395000,
    "projectPrice": 395000,
    "propertyType": "APARTMENT",
    "investmentCategory": "LONG_TERM",
    "propertyStatus": "SOLD",
    "renovationProgress": null,
    "totalReturnRoi": -471453.41,
    "totalReturnRoiPercentage": -99.03,
    "investors": 103,
    "rental": {
      "grossYield": 8.61,
      "netYield": 7.24,
      "dividendYield": 6.52,
      "grossRent": 34000,
      "netRent": 25756,
      "totalRentalIncome": 4638.51,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 103,
      "annualized": 10.33,
      "totalGrossRoi": 64.62,
      "investmentPeriod": 60,
      "funded": 100,
      "fundedAmount": 395000,
      "totalReturnRoi": null,
      "totalReturnRoiPercentage": null,
      "renovationProgress": null
    },
    "valuation": {
      "marketValue": 400000,
      "marketValuePercentage": 1.27,
      "saleProceed": null,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 0,
      "bathrooms": 1
    },
    "location": {
      "area": {
        "name": "IMPZ",
        "displayName": "IMPZ"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2026-02-16",
      "closeDate": "2026-02-11",
      "soldDate": "2026-02-16",
      "completionDate": null
    }
  },
  {
    "id": 769,
    "code": "SC-319",
    "title": "Old Town Island, Downtown ",
    "investmentType": "FLIP",
    "propertyCategory": "RESIDENTIAL",
    "price": 4050000,
    "projectPrice": 4939100,
    "propertyType": "APARTMENT",
    "investmentCategory": "SHORT_TERM",
    "propertyStatus": "CLOSED",
    "renovationProgress": 5,
    "totalReturnRoi": -5538403.35,
    "totalReturnRoiPercentage": -100,
    "investors": 150,
    "rental": {
      "grossYield": 0,
      "netYield": 0,
      "dividendYield": 0,
      "grossRent": null,
      "netRent": 0,
      "totalRentalIncome": 0,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 150,
      "annualized": null,
      "totalGrossRoi": 19.17,
      "investmentPeriod": 9,
      "funded": 100,
      "fundedAmount": 4939100,
      "totalReturnRoi": null,
      "totalReturnRoiPercentage": null,
      "renovationProgress": 5
    },
    "valuation": {
      "marketValue": null,
      "marketValuePercentage": 0,
      "saleProceed": null,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 2,
      "bathrooms": 3
    },
    "location": {
      "area": {
        "name": "Old Town",
        "displayName": "Old Town"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": null,
      "closeDate": "2026-01-26",
      "soldDate": null,
      "completionDate": null
    }
  },
  {
    "id": 766,
    "code": "SC-318",
    "title": "2 Bedroom in The Pinnacle, Dubai Hills Estate",
    "investmentType": "HOLD",
    "propertyCategory": "RESIDENTIAL",
    "price": 2620000,
    "projectPrice": 2620000,
    "propertyType": "APARTMENT",
    "investmentCategory": "LONG_TERM",
    "propertyStatus": "SOLD",
    "renovationProgress": null,
    "totalReturnRoi": -2752021.64,
    "totalReturnRoiPercentage": -98.49,
    "investors": 435,
    "rental": {
      "grossYield": 7.06,
      "netYield": 6.26,
      "dividendYield": 5.85,
      "grossRent": 185000,
      "netRent": 153278.5,
      "totalRentalIncome": 42160.17,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 435,
      "annualized": 10.97,
      "totalGrossRoi": 61.37,
      "investmentPeriod": 60,
      "funded": 100,
      "fundedAmount": 2620000,
      "totalReturnRoi": null,
      "totalReturnRoiPercentage": null,
      "renovationProgress": null
    },
    "valuation": {
      "marketValue": 2650000,
      "marketValuePercentage": 1.15,
      "saleProceed": null,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 2,
      "bathrooms": 3
    },
    "location": {
      "area": {
        "name": "Dubai Hills Estate",
        "displayName": "Dubai Hills Estate"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2026-02-03",
      "closeDate": "2025-11-30",
      "soldDate": "2026-02-03",
      "completionDate": null
    }
  },
  {
    "id": 765,
    "code": "SC-317",
    "title": "Serenia Residences West, Palm Jumeirah",
    "investmentType": "FLIP",
    "propertyCategory": "RESIDENTIAL",
    "price": 10300000,
    "projectPrice": 11726600,
    "propertyType": "APARTMENT",
    "investmentCategory": "SHORT_TERM",
    "propertyStatus": "SOLD",
    "renovationProgress": 10,
    "totalReturnRoi": -12901748.71,
    "totalReturnRoiPercentage": -100,
    "investors": 195,
    "rental": {
      "grossYield": 0,
      "netYield": 0,
      "dividendYield": 0,
      "grossRent": 0,
      "netRent": 0,
      "totalRentalIncome": 0,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 195,
      "annualized": 15,
      "totalGrossRoi": 19.26,
      "investmentPeriod": 9,
      "funded": 100,
      "fundedAmount": 11726600,
      "totalReturnRoi": null,
      "totalReturnRoiPercentage": null,
      "renovationProgress": 10
    },
    "valuation": {
      "marketValue": null,
      "marketValuePercentage": 0,
      "saleProceed": null,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 3,
      "bathrooms": 3
    },
    "location": {
      "area": {
        "name": "Palm Jumeirah",
        "displayName": "Palm Jumeirah"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2026-02-09",
      "closeDate": "2025-12-16",
      "soldDate": "2026-02-09",
      "completionDate": null
    }
  },
  {
    "id": 764,
    "code": "SC-316",
    "title": "2 Bedroom in Elite Residence, Dubai Marina",
    "investmentType": "HOLD",
    "propertyCategory": "RESIDENTIAL",
    "price": 1797600,
    "projectPrice": 1797600,
    "propertyType": "APARTMENT",
    "investmentCategory": "LONG_TERM",
    "propertyStatus": "SOLD",
    "renovationProgress": null,
    "totalReturnRoi": -1918124.55,
    "totalReturnRoiPercentage": -98.35,
    "investors": 453,
    "rental": {
      "grossYield": 7.23,
      "netYield": 6.23,
      "dividendYield": 5.8,
      "grossRent": 130000,
      "netRent": 104183,
      "totalRentalIncome": 32153.16,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 453,
      "annualized": 10.89,
      "totalGrossRoi": 62.26,
      "investmentPeriod": 60,
      "funded": 100,
      "fundedAmount": 1797600,
      "totalReturnRoi": null,
      "totalReturnRoiPercentage": null,
      "renovationProgress": null
    },
    "valuation": {
      "marketValue": 1840000,
      "marketValuePercentage": 2.36,
      "saleProceed": null,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 2,
      "bathrooms": 2
    },
    "location": {
      "area": {
        "name": "Dubai Marina",
        "displayName": "Dubai Marina"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2025-12-25",
      "closeDate": "2025-11-23",
      "soldDate": "2025-12-25",
      "completionDate": null
    }
  },
  {
    "id": 763,
    "code": "SC-315",
    "title": "1 Bedroom in Hera Tower, Sports City",
    "investmentType": "HOLD",
    "propertyCategory": "RESIDENTIAL",
    "price": 835000,
    "projectPrice": 835000,
    "propertyType": "APARTMENT",
    "investmentCategory": "LONG_TERM",
    "propertyStatus": "SOLD",
    "renovationProgress": null,
    "totalReturnRoi": -928747.55,
    "totalReturnRoiPercentage": -97.33,
    "investors": 212,
    "rental": {
      "grossYield": 8.74,
      "netYield": 7.3,
      "dividendYield": 6.72,
      "grossRent": 73000,
      "netRent": 56071.5,
      "totalRentalIncome": 25449.32,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 212,
      "annualized": 8.2,
      "totalGrossRoi": 50.85,
      "investmentPeriod": 60,
      "funded": 100,
      "fundedAmount": 835000,
      "totalReturnRoi": null,
      "totalReturnRoiPercentage": null,
      "renovationProgress": null
    },
    "valuation": {
      "marketValue": 850000,
      "marketValuePercentage": 1.8,
      "saleProceed": null,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 1,
      "bathrooms": 2
    },
    "location": {
      "area": {
        "name": "Sports city",
        "displayName": "Sports city"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2025-12-09",
      "closeDate": "2025-10-14",
      "soldDate": "2025-12-09",
      "completionDate": null
    }
  },
  {
    "id": 762,
    "code": "SC-314",
    "title": "1 Bedroom in Joya Blanca, Arjan",
    "investmentType": "HOLD",
    "propertyCategory": "RESIDENTIAL",
    "price": 995000,
    "projectPrice": 995000,
    "propertyType": "APARTMENT",
    "investmentCategory": "LONG_TERM",
    "propertyStatus": "SOLD",
    "renovationProgress": null,
    "totalReturnRoi": -1095322.86,
    "totalReturnRoiPercentage": -97.57,
    "investors": 286,
    "rental": {
      "grossYield": 7.54,
      "netYield": 6.65,
      "dividendYield": 6.14,
      "grossRent": 75000,
      "netRent": 61135.1,
      "totalRentalIncome": 27261.5,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 286,
      "annualized": 11.17,
      "totalGrossRoi": 63.87,
      "investmentPeriod": 60,
      "funded": 100,
      "fundedAmount": 995000,
      "totalReturnRoi": null,
      "totalReturnRoiPercentage": null,
      "renovationProgress": null
    },
    "valuation": {
      "marketValue": 1100000,
      "marketValuePercentage": 10.55,
      "saleProceed": null,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 1,
      "bathrooms": 2
    },
    "location": {
      "area": {
        "name": "Arjan",
        "displayName": "Arjan"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2025-10-30",
      "closeDate": "2025-10-12",
      "soldDate": "2025-10-30",
      "completionDate": null
    }
  },
  {
    "id": 761,
    "code": "SC-313",
    "title": "Studio in Aykon Tower, Business Bay",
    "investmentType": "HOLD",
    "propertyCategory": "RESIDENTIAL",
    "price": 795000,
    "projectPrice": 795000,
    "propertyType": "HOTEL_APARTMENT",
    "investmentCategory": "LONG_TERM",
    "propertyStatus": "SOLD",
    "renovationProgress": null,
    "totalReturnRoi": -864646.13,
    "totalReturnRoiPercentage": -97.03,
    "investors": 194,
    "rental": {
      "grossYield": 8.18,
      "netYield": 7,
      "dividendYield": 6.43,
      "grossRent": 65000,
      "netRent": 51157.5,
      "totalRentalIncome": 26431.88,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 194,
      "annualized": 8.02,
      "totalGrossRoi": 49.91,
      "investmentPeriod": 60,
      "funded": 100,
      "fundedAmount": 795000,
      "totalReturnRoi": null,
      "totalReturnRoiPercentage": null,
      "renovationProgress": null
    },
    "valuation": {
      "marketValue": 830000,
      "marketValuePercentage": 4.4,
      "saleProceed": null,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 0,
      "bathrooms": 0
    },
    "location": {
      "area": {
        "name": "Business Bay",
        "displayName": "Business Bay"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2025-09-04",
      "closeDate": "2025-09-05",
      "soldDate": "2025-09-04",
      "completionDate": null
    }
  },
  {
    "id": 760,
    "code": "SC-312",
    "title": "3 Bedroom Penthouse in Downtown",
    "investmentType": "FLIP",
    "propertyCategory": "RESIDENTIAL",
    "price": 8700000,
    "projectPrice": 9941400,
    "propertyType": "APARTMENT",
    "investmentCategory": "SHORT_TERM",
    "propertyStatus": "SOLD",
    "renovationProgress": 20,
    "totalReturnRoi": -10976969.15,
    "totalReturnRoiPercentage": -100,
    "investors": 263,
    "rental": {
      "grossYield": 0,
      "netYield": 0,
      "dividendYield": 0,
      "grossRent": 0,
      "netRent": 0,
      "totalRentalIncome": 0,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 263,
      "annualized": 15,
      "totalGrossRoi": 19.34,
      "investmentPeriod": 9,
      "funded": 100,
      "fundedAmount": 9941400,
      "totalReturnRoi": null,
      "totalReturnRoiPercentage": null,
      "renovationProgress": 20
    },
    "valuation": {
      "marketValue": null,
      "marketValuePercentage": 0,
      "saleProceed": null,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 3,
      "bathrooms": 5
    },
    "location": {
      "area": {
        "name": "Downtown Dubai",
        "displayName": "Downtown Dubai"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2026-02-20",
      "closeDate": "2025-10-08",
      "soldDate": "2026-02-20",
      "completionDate": null
    }
  },
  {
    "id": 759,
    "code": "SC-311",
    "title": "1 Bedroom in Binghatti Rose, Jumeirah Village Circle",
    "investmentType": "HOLD",
    "propertyCategory": "RESIDENTIAL",
    "price": 890000,
    "projectPrice": 890000,
    "propertyType": "APARTMENT",
    "investmentCategory": "LONG_TERM",
    "propertyStatus": "SOLD",
    "renovationProgress": null,
    "totalReturnRoi": -975124.22,
    "totalReturnRoiPercentage": -97.22,
    "investors": 219,
    "rental": {
      "grossYield": 7.87,
      "netYield": 6.91,
      "dividendYield": 6.38,
      "grossRent": 70000,
      "netRent": 56801,
      "totalRentalIncome": 27927.15,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 219,
      "annualized": 7.87,
      "totalGrossRoi": 47.78,
      "investmentPeriod": 60,
      "funded": 100,
      "fundedAmount": 890000,
      "totalReturnRoi": null,
      "totalReturnRoiPercentage": null,
      "renovationProgress": null
    },
    "valuation": {
      "marketValue": 930000,
      "marketValuePercentage": 4.49,
      "saleProceed": null,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 1,
      "bathrooms": 1
    },
    "location": {
      "area": {
        "name": "JVC",
        "displayName": "JVC"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2025-09-30",
      "closeDate": "2025-09-01",
      "soldDate": "2025-09-30",
      "completionDate": null
    }
  },
  {
    "id": 758,
    "code": "SC-310",
    "title": "Studio in Al Jawhara, Jumeirah Village Triangle",
    "investmentType": "HOLD",
    "propertyCategory": "RESIDENTIAL",
    "price": 573000,
    "projectPrice": 573000,
    "propertyType": "APARTMENT",
    "investmentCategory": "LONG_TERM",
    "propertyStatus": "SOLD",
    "renovationProgress": null,
    "totalReturnRoi": -632325.6,
    "totalReturnRoiPercentage": -96.76,
    "investors": 178,
    "rental": {
      "grossYield": 11.64,
      "netYield": 10.11,
      "dividendYield": 6.08,
      "grossRent": 66704,
      "netRent": 47261.94,
      "totalRentalIncome": 21161.17,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 178,
      "annualized": 7.13,
      "totalGrossRoi": 55.73,
      "investmentPeriod": 60,
      "funded": 100,
      "fundedAmount": 573000,
      "totalReturnRoi": null,
      "totalReturnRoiPercentage": null,
      "renovationProgress": null
    },
    "valuation": {
      "marketValue": 600000,
      "marketValuePercentage": 4.71,
      "saleProceed": null,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 0,
      "bathrooms": 1
    },
    "location": {
      "area": {
        "name": "JVT",
        "displayName": "JVT"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2025-09-03",
      "closeDate": "2025-08-09",
      "soldDate": "2025-09-03",
      "completionDate": null
    }
  },
  {
    "id": 754,
    "code": "SC-309",
    "title": "5 Bedroom Villa in Sidra 3, Dubai Hills",
    "investmentType": "FLIP",
    "propertyCategory": "RESIDENTIAL",
    "price": 12000000,
    "projectPrice": 14814000,
    "propertyType": "VILLA",
    "investmentCategory": "SHORT_TERM",
    "propertyStatus": "SOLD",
    "renovationProgress": 80,
    "totalReturnRoi": -16178444.67,
    "totalReturnRoiPercentage": -100,
    "investors": 207,
    "rental": {
      "grossYield": 0,
      "netYield": 0,
      "dividendYield": 0,
      "grossRent": 0,
      "netRent": 0,
      "totalRentalIncome": 0,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 207,
      "annualized": 0,
      "totalGrossRoi": 18.89,
      "investmentPeriod": 9,
      "funded": 100,
      "fundedAmount": 14814000,
      "totalReturnRoi": null,
      "totalReturnRoiPercentage": null,
      "renovationProgress": 80
    },
    "valuation": {
      "marketValue": null,
      "marketValuePercentage": 0,
      "saleProceed": null,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 5,
      "bathrooms": 5
    },
    "location": {
      "area": {
        "name": "Dubai Hills Estate",
        "displayName": "Dubai Hills Estate"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2026-02-20",
      "closeDate": "2025-07-22",
      "soldDate": "2026-02-20",
      "completionDate": null
    }
  },
  {
    "id": 752,
    "code": "SC-308",
    "title": "1 Bedroom in Milano, Jumeirah Village Circle",
    "investmentType": "HOLD",
    "propertyCategory": "RESIDENTIAL",
    "price": 1025000,
    "projectPrice": 1025000,
    "propertyType": "APARTMENT",
    "investmentCategory": "SHORT_TERM",
    "propertyStatus": "SOLD",
    "renovationProgress": null,
    "totalReturnRoi": -1119830.94,
    "totalReturnRoiPercentage": -97.29,
    "investors": 241,
    "rental": {
      "grossYield": 9.99,
      "netYield": 8.81,
      "dividendYield": 6.22,
      "grossRent": 102383,
      "netRent": 79041.7,
      "totalRentalIncome": 31136.58,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 241,
      "annualized": 8.01,
      "totalGrossRoi": 54.15,
      "investmentPeriod": 60,
      "funded": 100,
      "fundedAmount": 1025000,
      "totalReturnRoi": null,
      "totalReturnRoiPercentage": null,
      "renovationProgress": null
    },
    "valuation": {
      "marketValue": 1040000,
      "marketValuePercentage": 1.46,
      "saleProceed": null,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 1,
      "bathrooms": 2
    },
    "location": {
      "area": {
        "name": "JVC",
        "displayName": "JVC"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2025-07-31",
      "closeDate": "2025-06-23",
      "soldDate": "2025-07-31",
      "completionDate": null
    }
  },
  {
    "id": 751,
    "code": "SC-307",
    "title": "Studio in 8 Boulevard Walk, Downtown",
    "investmentType": "HOLD",
    "propertyCategory": "RESIDENTIAL",
    "price": 1270000,
    "projectPrice": 1270000,
    "propertyType": "APARTMENT",
    "investmentCategory": "LONG_TERM",
    "propertyStatus": "SOLD",
    "renovationProgress": null,
    "totalReturnRoi": -1348556.36,
    "totalReturnRoiPercentage": -96.39,
    "investors": 300,
    "rental": {
      "grossYield": 7.09,
      "netYield": 6.49,
      "dividendYield": 6.03,
      "grossRent": 90000,
      "netRent": 76635,
      "totalRentalIncome": 50551.78,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 300,
      "annualized": 8.27,
      "totalGrossRoi": 47.46,
      "investmentPeriod": 60,
      "funded": 100,
      "fundedAmount": 1270000,
      "totalReturnRoi": null,
      "totalReturnRoiPercentage": null,
      "renovationProgress": null
    },
    "valuation": {
      "marketValue": 1325000,
      "marketValuePercentage": 4.33,
      "saleProceed": null,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 0,
      "bathrooms": 1
    },
    "location": {
      "area": {
        "name": "Downtown Dubai",
        "displayName": "Downtown Dubai"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2025-07-15",
      "closeDate": "2025-06-28",
      "soldDate": "2025-07-15",
      "completionDate": null
    }
  },
  {
    "id": 747,
    "code": "SC-305",
    "title": "1 Bedroom in DAMAC Voleo (The Vogue) – Business Bay",
    "investmentType": "HOLD",
    "propertyCategory": "RESIDENTIAL",
    "price": 1122000,
    "projectPrice": 1122000,
    "propertyType": "APARTMENT",
    "investmentCategory": "LONG_TERM",
    "propertyStatus": "SOLD",
    "renovationProgress": null,
    "totalReturnRoi": -1215706.27,
    "totalReturnRoiPercentage": -97.11,
    "investors": 234,
    "rental": {
      "grossYield": 8.2,
      "netYield": 6.59,
      "dividendYield": 6.06,
      "grossRent": 92000,
      "netRent": 68015,
      "totalRentalIncome": 36218.73,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 234,
      "annualized": 8.05,
      "totalGrossRoi": 51.3,
      "investmentPeriod": 60,
      "funded": 100,
      "fundedAmount": 1122000,
      "totalReturnRoi": null,
      "totalReturnRoiPercentage": null,
      "renovationProgress": null
    },
    "valuation": {
      "marketValue": 1200000,
      "marketValuePercentage": 6.95,
      "saleProceed": null,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 1,
      "bathrooms": 2
    },
    "location": {
      "area": {
        "name": "Business Bay",
        "displayName": "Business Bay"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2025-06-03",
      "closeDate": "2025-05-06",
      "soldDate": "2025-06-03",
      "completionDate": null
    }
  },
  {
    "id": 746,
    "code": "SC-304",
    "title": "1 Bedroom in Belgravia 1, Jumeirah Village Circle",
    "investmentType": "HOLD",
    "propertyCategory": "RESIDENTIAL",
    "price": 1270000,
    "projectPrice": 1270000,
    "propertyType": "APARTMENT",
    "investmentCategory": "SHORT_TERM",
    "propertyStatus": "SOLD",
    "renovationProgress": null,
    "totalReturnRoi": -1348946.28,
    "totalReturnRoiPercentage": -96.63,
    "investors": 272,
    "rental": {
      "grossYield": 10.02,
      "netYield": 9.08,
      "dividendYield": 6.26,
      "grossRent": 127203,
      "netRent": 95878.89,
      "totalRentalIncome": 47091.95,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 272,
      "annualized": 8.39,
      "totalGrossRoi": 53.77,
      "investmentPeriod": 60,
      "funded": 100,
      "fundedAmount": 1270000,
      "totalReturnRoi": null,
      "totalReturnRoiPercentage": null,
      "renovationProgress": null
    },
    "valuation": {
      "marketValue": 1300000,
      "marketValuePercentage": 2.36,
      "saleProceed": null,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 1,
      "bathrooms": 2
    },
    "location": {
      "area": {
        "name": "JVC",
        "displayName": "JVC"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2025-06-09",
      "closeDate": "2025-05-04",
      "soldDate": "2025-06-09",
      "completionDate": null
    }
  },
  {
    "id": 745,
    "code": "SC-303",
    "title": "Studio in Al Alka 3, The Greens",
    "investmentType": "HOLD",
    "propertyCategory": "RESIDENTIAL",
    "price": 935000,
    "projectPrice": 935000,
    "propertyType": "APARTMENT",
    "investmentCategory": "LONG_TERM",
    "propertyStatus": "SOLD",
    "renovationProgress": null,
    "totalReturnRoi": -999921.84,
    "totalReturnRoiPercentage": -96.26,
    "investors": 167,
    "rental": {
      "grossYield": 8.34,
      "netYield": 7.37,
      "dividendYield": 6.82,
      "grossRent": 78000,
      "netRent": 63783,
      "totalRentalIncome": 38883.7,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 167,
      "annualized": 8.51,
      "totalGrossRoi": 51.1,
      "investmentPeriod": 60,
      "funded": 100,
      "fundedAmount": 935000,
      "totalReturnRoi": null,
      "totalReturnRoiPercentage": null,
      "renovationProgress": null
    },
    "valuation": {
      "marketValue": 950000,
      "marketValuePercentage": 1.6,
      "saleProceed": null,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 0,
      "bathrooms": 1
    },
    "location": {
      "area": {
        "name": "The Greens",
        "displayName": "The Greens"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2025-05-13",
      "closeDate": "2025-04-28",
      "soldDate": "2025-05-13",
      "completionDate": null
    }
  },
  {
    "id": 744,
    "code": "SC-302",
    "title": "Studio in La Riviera Azure, Jumeirah Village Circle",
    "investmentType": "HOLD",
    "propertyCategory": "RESIDENTIAL",
    "price": 695000,
    "projectPrice": 695000,
    "propertyType": "APARTMENT",
    "investmentCategory": "LONG_TERM",
    "propertyStatus": "SOLD",
    "renovationProgress": null,
    "totalReturnRoi": -762873.09,
    "totalReturnRoiPercentage": -96.08,
    "investors": 166,
    "rental": {
      "grossYield": 11.22,
      "netYield": 10.29,
      "dividendYield": 6.48,
      "grossRent": 77964,
      "netRent": 59225,
      "totalRentalIncome": 31155,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 166,
      "annualized": 7.57,
      "totalGrossRoi": 54.07,
      "investmentPeriod": 60,
      "funded": 100,
      "fundedAmount": 695000,
      "totalReturnRoi": null,
      "totalReturnRoiPercentage": null,
      "renovationProgress": null
    },
    "valuation": {
      "marketValue": 715000,
      "marketValuePercentage": 2.88,
      "saleProceed": null,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 0,
      "bathrooms": 1
    },
    "location": {
      "area": {
        "name": "JVC",
        "displayName": "JVC"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2025-05-01",
      "closeDate": "2025-04-20",
      "soldDate": "2025-05-01",
      "completionDate": null
    }
  },
  {
    "id": 743,
    "code": "SC-301",
    "title": "Studio in Carson, Tower B – DAMAC Hills",
    "investmentType": "HOLD",
    "propertyCategory": "RESIDENTIAL",
    "price": 585000,
    "projectPrice": 585000,
    "propertyType": "APARTMENT",
    "investmentCategory": "LONG_TERM",
    "propertyStatus": "SOLD",
    "renovationProgress": null,
    "totalReturnRoi": -643397.69,
    "totalReturnRoiPercentage": -95.86,
    "investors": 158,
    "rental": {
      "grossYield": 8.21,
      "netYield": 6.82,
      "dividendYield": 6.21,
      "grossRent": 48000,
      "netRent": 36330,
      "totalRentalIncome": 27772.57,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 158,
      "annualized": 7.14,
      "totalGrossRoi": 47.11,
      "investmentPeriod": 60,
      "funded": 100,
      "fundedAmount": 585000,
      "totalReturnRoi": null,
      "totalReturnRoiPercentage": null,
      "renovationProgress": null
    },
    "valuation": {
      "marketValue": 600000,
      "marketValuePercentage": 2.56,
      "saleProceed": null,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 0,
      "bathrooms": 1
    },
    "location": {
      "area": {
        "name": "Damac Hills",
        "displayName": "Damac Hills"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2025-05-16",
      "closeDate": "2025-03-30",
      "soldDate": "2025-05-16",
      "completionDate": null
    }
  },
  {
    "id": 742,
    "code": "SC-300",
    "title": "1 Bedroom in Blakely Tower, Park Island, Dubai Marina",
    "investmentType": "HOLD",
    "propertyCategory": "RESIDENTIAL",
    "price": 1585000,
    "projectPrice": 1585000,
    "propertyType": "APARTMENT",
    "investmentCategory": "SHORT_TERM",
    "propertyStatus": "SOLD",
    "renovationProgress": null,
    "totalReturnRoi": -1676913.65,
    "totalReturnRoiPercentage": -96.11,
    "investors": 304,
    "rental": {
      "grossYield": 9.03,
      "netYield": 8.4,
      "dividendYield": 6.02,
      "grossRent": 143080,
      "netRent": 111443.25,
      "totalRentalIncome": 67954.67,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 304,
      "annualized": 9.48,
      "totalGrossRoi": 56.29,
      "investmentPeriod": 60,
      "funded": 100,
      "fundedAmount": 1585000,
      "totalReturnRoi": null,
      "totalReturnRoiPercentage": null,
      "renovationProgress": null
    },
    "valuation": {
      "marketValue": 1630000,
      "marketValuePercentage": 2.84,
      "saleProceed": null,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 1,
      "bathrooms": 1
    },
    "location": {
      "area": {
        "name": "Dubai Marina",
        "displayName": "Dubai Marina"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2025-03-21",
      "closeDate": "2025-03-21",
      "soldDate": "2025-03-21",
      "completionDate": null
    }
  },
  {
    "id": 741,
    "code": "SC-299",
    "title": "1 Bedroom in Plaza Residence - Jumeirah Village Circle",
    "investmentType": "HOLD",
    "propertyCategory": "RESIDENTIAL",
    "price": 840000,
    "projectPrice": 840000,
    "propertyType": "APARTMENT",
    "investmentCategory": "LONG_TERM",
    "propertyStatus": "SOLD",
    "renovationProgress": null,
    "totalReturnRoi": -921906.45,
    "totalReturnRoiPercentage": -96.91,
    "investors": 183,
    "rental": {
      "grossYield": 8.93,
      "netYield": 7.33,
      "dividendYield": 6.74,
      "grossRent": 75000,
      "netRent": 56606.5,
      "totalRentalIncome": 29389.83,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 183,
      "annualized": 8.11,
      "totalGrossRoi": 52.1,
      "investmentPeriod": 60,
      "funded": 100,
      "fundedAmount": 840000,
      "totalReturnRoi": null,
      "totalReturnRoiPercentage": null,
      "renovationProgress": null
    },
    "valuation": {
      "marketValue": 880000,
      "marketValuePercentage": 4.76,
      "saleProceed": null,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 1,
      "bathrooms": 2
    },
    "location": {
      "area": {
        "name": "JVC",
        "displayName": "JVC"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2025-04-17",
      "closeDate": "2025-03-14",
      "soldDate": "2025-04-17",
      "completionDate": null
    }
  },
  {
    "id": 737,
    "code": "SC-297",
    "title": "Converted Studio to 1-Bed in Shamal Residence 2",
    "investmentType": "HOLD",
    "propertyCategory": "RESIDENTIAL",
    "price": 910000,
    "projectPrice": 910000,
    "propertyType": "APARTMENT",
    "investmentCategory": "SHORT_TERM",
    "propertyStatus": "SOLD",
    "renovationProgress": null,
    "totalReturnRoi": -981362.07,
    "totalReturnRoiPercentage": -96.09,
    "investors": 210,
    "rental": {
      "grossYield": 12.67,
      "netYield": 11.41,
      "dividendYield": 7.67,
      "grossRent": 115340,
      "netRent": 86154.9,
      "totalRentalIncome": 39900,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 210,
      "annualized": 9.13,
      "totalGrossRoi": 61.63,
      "investmentPeriod": 60,
      "funded": 100,
      "fundedAmount": 910000,
      "totalReturnRoi": null,
      "totalReturnRoiPercentage": null,
      "renovationProgress": null
    },
    "valuation": {
      "marketValue": 950000,
      "marketValuePercentage": 4.4,
      "saleProceed": null,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 1,
      "bathrooms": 1
    },
    "location": {
      "area": {
        "name": "JVC",
        "displayName": "JVC"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2025-02-28",
      "closeDate": "2024-12-12",
      "soldDate": "2025-02-28",
      "completionDate": null
    }
  },
  {
    "id": 735,
    "code": "SC-296",
    "title": "1 Bedroom in Bay Square 2 – Business Bay",
    "investmentType": "HOLD",
    "propertyCategory": "RESIDENTIAL",
    "price": 1725000,
    "projectPrice": 1725000,
    "propertyType": "APARTMENT",
    "investmentCategory": "LONG_TERM",
    "propertyStatus": "SOLD",
    "renovationProgress": null,
    "totalReturnRoi": -1820573.99,
    "totalReturnRoiPercentage": -96.14,
    "investors": 334,
    "rental": {
      "grossYield": 8.12,
      "netYield": 7.15,
      "dividendYield": 6.66,
      "grossRent": 140000,
      "netRent": 114858,
      "totalRentalIncome": 73139.86,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 334,
      "annualized": 9.09,
      "totalGrossRoi": 53.07,
      "investmentPeriod": 60,
      "funded": 100,
      "fundedAmount": 1725000,
      "totalReturnRoi": null,
      "totalReturnRoiPercentage": null,
      "renovationProgress": null
    },
    "valuation": {
      "marketValue": 1900000,
      "marketValuePercentage": 10.14,
      "saleProceed": null,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 1,
      "bathrooms": 2
    },
    "location": {
      "area": {
        "name": "Business Bay",
        "displayName": "Business Bay"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2025-02-26",
      "closeDate": "2024-11-19",
      "soldDate": "2025-02-26",
      "completionDate": null
    }
  },
  {
    "id": 731,
    "code": "SC-295",
    "title": "1 Bedroom in Carson, Tower C, DAMAC Hills",
    "investmentType": "HOLD",
    "propertyCategory": "RESIDENTIAL",
    "price": 885000,
    "projectPrice": 885000,
    "propertyType": "APARTMENT",
    "investmentCategory": "LONG_TERM",
    "propertyStatus": "SOLD",
    "renovationProgress": null,
    "totalReturnRoi": -929230.86,
    "totalReturnRoiPercentage": -92.78,
    "investors": 197,
    "rental": {
      "grossYield": 9.04,
      "netYield": 7.63,
      "dividendYield": 7.04,
      "grossRent": 80000,
      "netRent": 62290,
      "totalRentalIncome": 72310.92,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 197,
      "annualized": 8.37,
      "totalGrossRoi": 52.49,
      "investmentPeriod": 60,
      "funded": 100,
      "fundedAmount": 885000,
      "totalReturnRoi": null,
      "totalReturnRoiPercentage": null,
      "renovationProgress": null
    },
    "valuation": {
      "marketValue": 900000,
      "marketValuePercentage": 1.69,
      "saleProceed": null,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 1,
      "bathrooms": 1
    },
    "location": {
      "area": {
        "name": "Damac Hills",
        "displayName": "Damac Hills"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2025-01-24",
      "closeDate": "2025-01-13",
      "soldDate": "2025-01-24",
      "completionDate": null
    }
  },
  {
    "id": 729,
    "code": "SC-293",
    "title": "1 Bedroom in Silicon Gates 2, DSO",
    "investmentType": "HOLD",
    "propertyCategory": "RESIDENTIAL",
    "price": 530000,
    "projectPrice": 530000,
    "propertyType": "APARTMENT",
    "investmentCategory": "LONG_TERM",
    "propertyStatus": "SOLD",
    "renovationProgress": null,
    "totalReturnRoi": -587657.63,
    "totalReturnRoiPercentage": -94.53,
    "investors": 115,
    "rental": {
      "grossYield": 9.43,
      "netYield": 8.21,
      "dividendYield": 7.52,
      "grossRent": 50000,
      "netRent": 39837,
      "totalRentalIncome": 33980.62,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 115,
      "annualized": 7.59,
      "totalGrossRoi": 49.09,
      "investmentPeriod": 60,
      "funded": 100,
      "fundedAmount": 530000,
      "totalReturnRoi": null,
      "totalReturnRoiPercentage": null,
      "renovationProgress": null
    },
    "valuation": {
      "marketValue": 550000,
      "marketValuePercentage": 3.77,
      "saleProceed": null,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 1,
      "bathrooms": 2
    },
    "location": {
      "area": {
        "name": "Silicon Oasis",
        "displayName": "Silicon Oasis"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2024-12-20",
      "closeDate": "2024-12-29",
      "soldDate": "2024-12-20",
      "completionDate": null
    }
  },
  {
    "id": 728,
    "code": "SC-292",
    "title": "1 Bedroom in Executive Bay, Tower A – Business Bay",
    "investmentType": "HOLD",
    "propertyCategory": "RESIDENTIAL",
    "price": 1150000,
    "projectPrice": 1150000,
    "propertyType": "APARTMENT",
    "investmentCategory": "LONG_TERM",
    "propertyStatus": "SOLD",
    "renovationProgress": null,
    "totalReturnRoi": -1201516.1,
    "totalReturnRoiPercentage": -93.66,
    "investors": 145,
    "rental": {
      "grossYield": 12.14,
      "netYield": 10.35,
      "dividendYield": 7.08,
      "grossRent": 139613,
      "netRent": 98197.8,
      "totalRentalIncome": 81314.26,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 145,
      "annualized": 8.93,
      "totalGrossRoi": 61.07,
      "investmentPeriod": 60,
      "funded": 100,
      "fundedAmount": 1150000,
      "totalReturnRoi": null,
      "totalReturnRoiPercentage": null,
      "renovationProgress": null
    },
    "valuation": {
      "marketValue": 1375000,
      "marketValuePercentage": 19.57,
      "saleProceed": null,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 1,
      "bathrooms": 2
    },
    "location": {
      "area": {
        "name": "Business Bay",
        "displayName": "Business Bay"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2024-12-25",
      "closeDate": "2024-10-24",
      "soldDate": "2024-12-25",
      "completionDate": null
    }
  },
  {
    "id": 727,
    "code": "SC-291",
    "title": "1 Bedroom in Al Sahab Tower 2, Dubai Marina",
    "investmentType": "HOLD",
    "propertyCategory": "RESIDENTIAL",
    "price": 1475000,
    "projectPrice": 1475000,
    "propertyType": "APARTMENT",
    "investmentCategory": "SHORT_TERM",
    "propertyStatus": "SOLD",
    "renovationProgress": null,
    "totalReturnRoi": -1541107.88,
    "totalReturnRoiPercentage": -94.71,
    "investors": 300,
    "rental": {
      "grossYield": 10.52,
      "netYield": 9.79,
      "dividendYield": 7.17,
      "grossRent": 155125,
      "netRent": 120922.95,
      "totalRentalIncome": 85994.35,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 300,
      "annualized": 9.35,
      "totalGrossRoi": 56.23,
      "investmentPeriod": 60,
      "funded": 100,
      "fundedAmount": 1475000,
      "totalReturnRoi": null,
      "totalReturnRoiPercentage": null,
      "renovationProgress": null
    },
    "valuation": {
      "marketValue": 1500000,
      "marketValuePercentage": 1.69,
      "saleProceed": null,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 1,
      "bathrooms": 1
    },
    "location": {
      "area": {
        "name": "Dubai Marina",
        "displayName": "Dubai Marina"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2025-01-20",
      "closeDate": "2024-10-10",
      "soldDate": "2025-01-20",
      "completionDate": null
    }
  },
  {
    "id": 726,
    "code": "SC-290",
    "title": "1 Bedroom in Azizi Park Avenue, Meydan City",
    "investmentType": "HOLD",
    "propertyCategory": "RESIDENTIAL",
    "price": 1040000,
    "projectPrice": 1040000,
    "propertyType": "APARTMENT",
    "investmentCategory": "LONG_TERM",
    "propertyStatus": "SOLD",
    "renovationProgress": null,
    "totalReturnRoi": -1084474.63,
    "totalReturnRoiPercentage": -93.4,
    "investors": 208,
    "rental": {
      "grossYield": 7.88,
      "netYield": 6.95,
      "dividendYield": 6.43,
      "grossRent": 82000,
      "netRent": 66873,
      "totalRentalIncome": 76589.74,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 208,
      "annualized": 8.12,
      "totalGrossRoi": 48.65,
      "investmentPeriod": 60,
      "funded": 100,
      "fundedAmount": 1040000,
      "totalReturnRoi": null,
      "totalReturnRoiPercentage": null,
      "renovationProgress": null
    },
    "valuation": {
      "marketValue": 1070000,
      "marketValuePercentage": 2.88,
      "saleProceed": null,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 1,
      "bathrooms": 1
    },
    "location": {
      "area": {
        "name": "MBR City",
        "displayName": "MBR City"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2024-12-16",
      "closeDate": "2024-09-24",
      "soldDate": "2024-12-16",
      "completionDate": null
    }
  },
  {
    "id": 725,
    "code": "SC-289",
    "title": "Studio in The Cosmopolitan, Business Bay",
    "investmentType": "HOLD",
    "propertyCategory": "RESIDENTIAL",
    "price": 824000,
    "projectPrice": 824000,
    "propertyType": "APARTMENT",
    "investmentCategory": "LONG_TERM",
    "propertyStatus": "SOLD",
    "renovationProgress": null,
    "totalReturnRoi": -861612.15,
    "totalReturnRoiPercentage": -92.72,
    "investors": 191,
    "rental": {
      "grossYield": 8.74,
      "netYield": 7.09,
      "dividendYield": 6.5,
      "grossRent": 72000,
      "netRent": 53570,
      "totalRentalIncome": 67692.28,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 191,
      "annualized": 8.02,
      "totalGrossRoi": 51.99,
      "investmentPeriod": 60,
      "funded": 100,
      "fundedAmount": 824000,
      "totalReturnRoi": null,
      "totalReturnRoiPercentage": null,
      "renovationProgress": null
    },
    "valuation": {
      "marketValue": 870000,
      "marketValuePercentage": 5.58,
      "saleProceed": null,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 0,
      "bathrooms": 1
    },
    "location": {
      "area": {
        "name": "Business Bay",
        "displayName": "Business Bay"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2024-11-08",
      "closeDate": "2024-11-17",
      "soldDate": "2024-11-08",
      "completionDate": null
    }
  },
  {
    "id": 721,
    "code": "SC-288",
    "title": "1 Bedroom in Harrington House - Jumeirah Village Circle",
    "investmentType": "HOLD",
    "propertyCategory": "RESIDENTIAL",
    "price": 1125000,
    "projectPrice": 1125000,
    "propertyType": "APARTMENT",
    "investmentCategory": "LONG_TERM",
    "propertyStatus": "SOLD",
    "renovationProgress": null,
    "totalReturnRoi": -1191173.35,
    "totalReturnRoiPercentage": -94.65,
    "investors": 249,
    "rental": {
      "grossYield": 8.62,
      "netYield": 7.63,
      "dividendYield": 7.08,
      "grossRent": 97000,
      "netRent": 79677.5,
      "totalRentalIncome": 67324.04,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 249,
      "annualized": 8.84,
      "totalGrossRoi": 52.57,
      "investmentPeriod": 60,
      "funded": 100,
      "fundedAmount": 1125000,
      "totalReturnRoi": null,
      "totalReturnRoiPercentage": null,
      "renovationProgress": null
    },
    "valuation": {
      "marketValue": 1150000,
      "marketValuePercentage": 2.22,
      "saleProceed": null,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 1,
      "bathrooms": 1
    },
    "location": {
      "area": {
        "name": "JVC",
        "displayName": "JVC"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2024-11-27",
      "closeDate": "2024-08-26",
      "soldDate": "2024-11-27",
      "completionDate": null
    }
  },
  {
    "id": 718,
    "code": "SC-286",
    "title": "1 Bed In Regent Court - Jumeirah Village Circle",
    "investmentType": "HOLD",
    "propertyCategory": "RESIDENTIAL",
    "price": 1025000,
    "projectPrice": 1025000,
    "propertyType": "APARTMENT",
    "investmentCategory": "LONG_TERM",
    "propertyStatus": "SOLD",
    "renovationProgress": null,
    "totalReturnRoi": -1105713.06,
    "totalReturnRoiPercentage": -95.61,
    "investors": 204,
    "rental": {
      "grossYield": 9.02,
      "netYield": 7.73,
      "dividendYield": 7.15,
      "grossRent": 92500,
      "netRent": 73331.75,
      "totalRentalIncome": 50765.67,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 204,
      "annualized": 8.75,
      "totalGrossRoi": 53.65,
      "investmentPeriod": 60,
      "funded": 100,
      "fundedAmount": 1025000,
      "totalReturnRoi": null,
      "totalReturnRoiPercentage": null,
      "renovationProgress": null
    },
    "valuation": {
      "marketValue": 1060000,
      "marketValuePercentage": 3.41,
      "saleProceed": null,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 1,
      "bathrooms": 1
    },
    "location": {
      "area": {
        "name": "JVC",
        "displayName": "JVC"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2024-10-29",
      "closeDate": "2024-10-11",
      "soldDate": "2024-10-29",
      "completionDate": null
    }
  },
  {
    "id": 717,
    "code": "SC-285",
    "title": "3 Bedroom Villa, Palm Jumeirah",
    "investmentType": "FLIP",
    "propertyCategory": "RESIDENTIAL",
    "price": 14823160,
    "projectPrice": 14823160,
    "propertyType": "VILLA",
    "investmentCategory": null,
    "propertyStatus": "EXITED",
    "renovationProgress": 100,
    "totalReturnRoi": 9176840,
    "totalReturnRoiPercentage": 24.59,
    "investors": 114,
    "rental": {
      "grossYield": null,
      "netYield": null,
      "dividendYield": null,
      "grossRent": 0,
      "netRent": 0,
      "totalRentalIncome": 0,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 114,
      "annualized": null,
      "totalGrossRoi": null,
      "investmentPeriod": 14,
      "funded": 100.49,
      "fundedAmount": 14895793.48,
      "totalReturnRoi": 9176840,
      "totalReturnRoiPercentage": 24.59,
      "renovationProgress": 100
    },
    "valuation": {
      "marketValue": null,
      "marketValuePercentage": 0,
      "saleProceed": 24000000,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 3,
      "bathrooms": 4
    },
    "location": {
      "area": null,
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2024-11-05",
      "closeDate": "2025-08-11",
      "soldDate": "2024-11-05",
      "completionDate": null
    }
  },
  {
    "id": 713,
    "code": "SC-283",
    "title": "3 Bed in Sky View Tower, Dubai Marina",
    "investmentType": "HOLD",
    "propertyCategory": "RESIDENTIAL",
    "price": 2600000,
    "projectPrice": 2600000,
    "propertyType": "APARTMENT",
    "investmentCategory": "LONG_TERM",
    "propertyStatus": "SOLD",
    "renovationProgress": null,
    "totalReturnRoi": -2672190.29,
    "totalReturnRoiPercentage": -93.45,
    "investors": 389,
    "rental": {
      "grossYield": 8.46,
      "netYield": 7.48,
      "dividendYield": 7.01,
      "grossRent": 220000,
      "netRent": 182258,
      "totalRentalIncome": 187171.39,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 389,
      "annualized": 9.66,
      "totalGrossRoi": 55.63,
      "investmentPeriod": 60,
      "funded": 101.6,
      "fundedAmount": 2641600,
      "totalReturnRoi": null,
      "totalReturnRoiPercentage": null,
      "renovationProgress": null
    },
    "valuation": {
      "marketValue": null,
      "marketValuePercentage": 5.77,
      "saleProceed": null,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 3,
      "bathrooms": 3
    },
    "location": {
      "area": {
        "name": "Dubai Marina",
        "displayName": "Dubai Marina"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2024-09-26",
      "closeDate": "2024-09-30",
      "soldDate": "2024-09-26",
      "completionDate": null
    }
  },
  {
    "id": 712,
    "code": "SC-282",
    "title": "3 Bedroom Duplex, Central Park Towers",
    "investmentType": "FLIP",
    "propertyCategory": "RESIDENTIAL",
    "price": 4880772,
    "projectPrice": 6201326,
    "propertyType": "APARTMENT",
    "investmentCategory": null,
    "propertyStatus": "EXITED",
    "renovationProgress": 100,
    "totalReturnRoi": 2669228,
    "totalReturnRoiPercentage": 25.01,
    "investors": 57,
    "rental": {
      "grossYield": null,
      "netYield": null,
      "dividendYield": null,
      "grossRent": 0,
      "netRent": 0,
      "totalRentalIncome": 0,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 57,
      "annualized": null,
      "totalGrossRoi": null,
      "investmentPeriod": 18,
      "funded": 100,
      "fundedAmount": 6201326,
      "totalReturnRoi": 2669228,
      "totalReturnRoiPercentage": 25.01,
      "renovationProgress": 100
    },
    "valuation": {
      "marketValue": null,
      "marketValuePercentage": 0,
      "saleProceed": 8700000,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 3,
      "bathrooms": 4
    },
    "location": {
      "area": {
        "name": "DIFC",
        "displayName": "DIFC"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2024-08-07",
      "closeDate": "2026-01-06",
      "soldDate": "2024-08-07",
      "completionDate": null
    }
  },
  {
    "id": 710,
    "code": "SC-281",
    "title": "2 Bedroom in Bonnington Tower, JLT",
    "investmentType": "HOLD",
    "propertyCategory": "RESIDENTIAL",
    "price": 2063000,
    "projectPrice": 2063000,
    "propertyType": "APARTMENT",
    "investmentCategory": "LONG_TERM",
    "propertyStatus": "SOLD",
    "renovationProgress": null,
    "totalReturnRoi": -2106113.69,
    "totalReturnRoiPercentage": -92,
    "investors": 383,
    "rental": {
      "grossYield": 7.9,
      "netYield": null,
      "dividendYield": 6.49,
      "grossRent": 163000,
      "netRent": 133943.5,
      "totalRentalIncome": 183202.65,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 383,
      "annualized": 9.85,
      "totalGrossRoi": 56.45,
      "investmentPeriod": 60,
      "funded": 100.6,
      "fundedAmount": 2075378,
      "totalReturnRoi": null,
      "totalReturnRoiPercentage": null,
      "renovationProgress": null
    },
    "valuation": {
      "marketValue": null,
      "marketValuePercentage": 4.22,
      "saleProceed": null,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 2,
      "bathrooms": 3
    },
    "location": {
      "area": {
        "name": "JLT",
        "displayName": "JLT"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2024-09-25",
      "closeDate": "2024-08-01",
      "soldDate": "2024-09-25",
      "completionDate": null
    }
  },
  {
    "id": 709,
    "code": "SC-280",
    "title": "2 Bed In Downtown Views, Za'abeel",
    "investmentType": "HOLD",
    "propertyCategory": "RESIDENTIAL",
    "price": 3050000,
    "projectPrice": 3050000,
    "propertyType": "APARTMENT",
    "investmentCategory": "SHORT_TERM",
    "propertyStatus": "SOLD",
    "renovationProgress": null,
    "totalReturnRoi": -3090984.59,
    "totalReturnRoiPercentage": -90.94,
    "investors": 416,
    "rental": {
      "grossYield": 8.52,
      "netYield": 7.54,
      "dividendYield": 7.49,
      "grossRent": 318006,
      "netRent": 245149.93,
      "totalRentalIncome": 307767.92,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 416,
      "annualized": 9.47,
      "totalGrossRoi": 54.29,
      "investmentPeriod": 60,
      "funded": 100.2,
      "fundedAmount": 3056100,
      "totalReturnRoi": null,
      "totalReturnRoiPercentage": null,
      "renovationProgress": null
    },
    "valuation": {
      "marketValue": null,
      "marketValuePercentage": 6.56,
      "saleProceed": null,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 2,
      "bathrooms": 3
    },
    "location": {
      "area": {
        "name": "Za'abeel",
        "displayName": "Za'abeel"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2024-07-02",
      "closeDate": "2024-06-21",
      "soldDate": "2024-07-02",
      "completionDate": null
    }
  },
  {
    "id": 707,
    "code": "SC-278",
    "title": "Studio in Central Park Towers, DIFC",
    "investmentType": "HOLD",
    "propertyCategory": "RESIDENTIAL",
    "price": 1350000,
    "projectPrice": 1350000,
    "propertyType": "APARTMENT",
    "investmentCategory": "LONG_TERM",
    "propertyStatus": "SOLD",
    "renovationProgress": null,
    "totalReturnRoi": -1373305.89,
    "totalReturnRoiPercentage": -89.6,
    "investors": 247,
    "rental": {
      "grossYield": 8.52,
      "netYield": 7.47,
      "dividendYield": 6.95,
      "grossRent": 115000,
      "netRent": 93782.5,
      "totalRentalIncome": 159463.02,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 247,
      "annualized": 9.8,
      "totalGrossRoi": 57,
      "investmentPeriod": 60,
      "funded": 101.08,
      "fundedAmount": 1364580,
      "totalReturnRoi": null,
      "totalReturnRoiPercentage": null,
      "renovationProgress": null
    },
    "valuation": {
      "marketValue": null,
      "marketValuePercentage": 14.81,
      "saleProceed": null,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 0,
      "bathrooms": 1
    },
    "location": {
      "area": {
        "name": "DIFC",
        "displayName": "DIFC"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2024-05-27",
      "closeDate": "2024-05-13",
      "soldDate": "2024-05-27",
      "completionDate": null
    }
  },
  {
    "id": 704,
    "code": "SC-275",
    "title": "2 Bed In Downtown Views, Za'abeel",
    "investmentType": "HOLD",
    "propertyCategory": "RESIDENTIAL",
    "price": 3150000,
    "projectPrice": 3150000,
    "propertyType": "APARTMENT",
    "investmentCategory": "LONG_TERM",
    "propertyStatus": "SOLD",
    "renovationProgress": null,
    "totalReturnRoi": -3110176.97,
    "totalReturnRoiPercentage": -90.83,
    "investors": 434,
    "rental": {
      "grossYield": 8.25,
      "netYield": 7.3,
      "dividendYield": 6.84,
      "grossRent": 260000,
      "netRent": 215567,
      "totalRentalIncome": 313960.94,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 434,
      "annualized": 9.77,
      "totalGrossRoi": 55.9,
      "investmentPeriod": 60,
      "funded": 100.63,
      "fundedAmount": 3169845,
      "totalReturnRoi": null,
      "totalReturnRoiPercentage": null,
      "renovationProgress": null
    },
    "valuation": {
      "marketValue": null,
      "marketValuePercentage": 4.76,
      "saleProceed": null,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 2,
      "bathrooms": 3
    },
    "location": {
      "area": {
        "name": "Za'abeel",
        "displayName": "Za'abeel"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2024-05-01",
      "closeDate": "2024-05-09",
      "soldDate": "2024-05-01",
      "completionDate": null
    }
  },
  {
    "id": 700,
    "code": "SC-274",
    "title": "1 Bed in Privé Residence, Dubai Hills Estate",
    "investmentType": "HOLD",
    "propertyCategory": "RESIDENTIAL",
    "price": 1375000,
    "projectPrice": 1375000,
    "propertyType": "APARTMENT",
    "investmentCategory": "LONG_TERM",
    "propertyStatus": "SOLD",
    "renovationProgress": null,
    "totalReturnRoi": -1387617.23,
    "totalReturnRoiPercentage": -89.58,
    "investors": 301,
    "rental": {
      "grossYield": 8.73,
      "netYield": 7.61,
      "dividendYield": 7.09,
      "grossRent": 120000,
      "netRent": 97490,
      "totalRentalIncome": 161491.9,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 301,
      "annualized": 9.2,
      "totalGrossRoi": 54.6,
      "investmentPeriod": 60,
      "funded": 102.21,
      "fundedAmount": 1405387.5,
      "totalReturnRoi": null,
      "totalReturnRoiPercentage": null,
      "renovationProgress": null
    },
    "valuation": {
      "marketValue": null,
      "marketValuePercentage": 9.09,
      "saleProceed": null,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 1,
      "bathrooms": 2
    },
    "location": {
      "area": {
        "name": "Dubai Hills Estate",
        "displayName": "Dubai Hills Estate"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2024-03-29",
      "closeDate": "2024-03-24",
      "soldDate": "2024-03-29",
      "completionDate": null
    }
  },
  {
    "id": 699,
    "code": "SC-273",
    "title": "1 Bed in 8 BLVD Walk, Downtown Dubai",
    "investmentType": "HOLD",
    "propertyCategory": "RESIDENTIAL",
    "price": 1600000,
    "projectPrice": 1600000,
    "propertyType": "APARTMENT",
    "investmentCategory": "LONG_TERM",
    "propertyStatus": "SOLD",
    "renovationProgress": null,
    "totalReturnRoi": -1634160.96,
    "totalReturnRoiPercentage": -90.44,
    "investors": 287,
    "rental": {
      "grossYield": 8.63,
      "netYield": 7.51,
      "dividendYield": 7.01,
      "grossRent": 138000,
      "netRent": 112171,
      "totalRentalIncome": 172789.22,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 287,
      "annualized": 9.33,
      "totalGrossRoi": 55.05,
      "investmentPeriod": 60,
      "funded": 101.79,
      "fundedAmount": 1628640,
      "totalReturnRoi": null,
      "totalReturnRoiPercentage": null,
      "renovationProgress": null
    },
    "valuation": {
      "marketValue": null,
      "marketValuePercentage": 4.69,
      "saleProceed": null,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 1,
      "bathrooms": 1
    },
    "location": {
      "area": {
        "name": "Downtown Dubai",
        "displayName": "Downtown Dubai"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2024-03-27",
      "closeDate": "2024-03-19",
      "soldDate": "2024-03-27",
      "completionDate": null
    }
  },
  {
    "id": 698,
    "code": "SC-272",
    "title": "3 Bedroom in South Ridge 6, Downtown",
    "investmentType": "HOLD",
    "propertyCategory": "RESIDENTIAL",
    "price": 4150000,
    "projectPrice": 4150000,
    "propertyType": "APARTMENT",
    "investmentCategory": "LONG_TERM",
    "propertyStatus": "SOLD",
    "renovationProgress": null,
    "totalReturnRoi": -4111340.71,
    "totalReturnRoiPercentage": -91.11,
    "investors": 595,
    "rental": {
      "grossYield": 7.83,
      "netYield": 7.07,
      "dividendYield": 6.63,
      "grossRent": 325000,
      "netRent": 275303.5,
      "totalRentalIncome": 401353.17,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 595,
      "annualized": 9.67,
      "totalGrossRoi": 54.3,
      "investmentPeriod": 60,
      "funded": 100.83,
      "fundedAmount": 4184445,
      "totalReturnRoi": null,
      "totalReturnRoiPercentage": null,
      "renovationProgress": null
    },
    "valuation": {
      "marketValue": null,
      "marketValuePercentage": 10.84,
      "saleProceed": null,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 3,
      "bathrooms": 3
    },
    "location": {
      "area": {
        "name": "Downtown Dubai",
        "displayName": "Downtown Dubai"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2024-09-25",
      "closeDate": "2024-08-02",
      "soldDate": "2024-09-25",
      "completionDate": null
    }
  },
  {
    "id": 697,
    "code": "SC-271",
    "title": "1 Bed in Collective 2, Dubai Hills Estate",
    "investmentType": "HOLD",
    "propertyCategory": "RESIDENTIAL",
    "price": 1150000,
    "projectPrice": 1150000,
    "propertyType": "APARTMENT",
    "investmentCategory": "LONG_TERM",
    "propertyStatus": "SOLD",
    "renovationProgress": null,
    "totalReturnRoi": -1188456.19,
    "totalReturnRoiPercentage": -90.83,
    "investors": 241,
    "rental": {
      "grossYield": 8.26,
      "netYield": 7.32,
      "dividendYield": 6.82,
      "grossRent": 95000,
      "netRent": 78410.5,
      "totalRentalIncome": 120045.6,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 241,
      "annualized": 9.03,
      "totalGrossRoi": 53.18,
      "investmentPeriod": 60,
      "funded": 102.34,
      "fundedAmount": 1176910,
      "totalReturnRoi": null,
      "totalReturnRoiPercentage": null,
      "renovationProgress": null
    },
    "valuation": {
      "marketValue": null,
      "marketValuePercentage": 10.87,
      "saleProceed": null,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 1,
      "bathrooms": 1
    },
    "location": {
      "area": {
        "name": "Dubai Hills Estate",
        "displayName": "Dubai Hills Estate"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2024-03-07",
      "closeDate": "2024-03-04",
      "soldDate": "2024-03-07",
      "completionDate": null
    }
  },
  {
    "id": 696,
    "code": "SC-270",
    "title": "2 Bedroom in Marwa Heights",
    "investmentType": "HOLD",
    "propertyCategory": "RESIDENTIAL",
    "price": 1175000,
    "projectPrice": 1175000,
    "propertyType": "APARTMENT",
    "investmentCategory": "LONG_TERM",
    "propertyStatus": "SOLD",
    "renovationProgress": null,
    "totalReturnRoi": -1172951.59,
    "totalReturnRoiPercentage": -87.02,
    "investors": 198,
    "rental": {
      "grossYield": 9.79,
      "netYield": 8.55,
      "dividendYield": 7.96,
      "grossRent": 115000,
      "netRent": 93576.5,
      "totalRentalIncome": 174896.79,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 198,
      "annualized": 9.76,
      "totalGrossRoi": 58.41,
      "investmentPeriod": 60,
      "funded": 101.89,
      "fundedAmount": 1197207.5,
      "totalReturnRoi": null,
      "totalReturnRoiPercentage": null,
      "renovationProgress": null
    },
    "valuation": {
      "marketValue": null,
      "marketValuePercentage": 10.64,
      "saleProceed": null,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 2,
      "bathrooms": 2
    },
    "location": {
      "area": {
        "name": "JVC",
        "displayName": "JVC"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2024-03-29",
      "closeDate": "2024-02-26",
      "soldDate": "2024-03-29",
      "completionDate": null
    }
  },
  {
    "id": 695,
    "code": "SC-269",
    "title": "Studio In Bay Square 3",
    "investmentType": "HOLD",
    "propertyCategory": "RESIDENTIAL",
    "price": 950000,
    "projectPrice": 950000,
    "propertyType": "APARTMENT",
    "investmentCategory": "LONG_TERM",
    "propertyStatus": "SOLD",
    "renovationProgress": null,
    "totalReturnRoi": -982856.36,
    "totalReturnRoiPercentage": -87.41,
    "investors": 192,
    "rental": {
      "grossYield": 10.53,
      "netYield": 9.41,
      "dividendYield": 8.69,
      "grossRent": 100000,
      "netRent": 82534,
      "totalRentalIncome": 141594.63,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 192,
      "annualized": 9.88,
      "totalGrossRoi": 58.87,
      "investmentPeriod": 60,
      "funded": 100.15,
      "fundedAmount": 951425,
      "totalReturnRoi": null,
      "totalReturnRoiPercentage": null,
      "renovationProgress": null
    },
    "valuation": {
      "marketValue": null,
      "marketValuePercentage": 23.68,
      "saleProceed": null,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 0,
      "bathrooms": 1
    },
    "location": {
      "area": {
        "name": "Business Bay",
        "displayName": "Business Bay"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2024-05-24",
      "closeDate": "2024-01-22",
      "soldDate": "2024-05-24",
      "completionDate": null
    }
  },
  {
    "id": 693,
    "code": "SC-267",
    "title": "M01 Bayshore 4, Creek Harbour",
    "investmentType": "HOLD",
    "propertyCategory": "RESIDENTIAL",
    "price": 1925000,
    "projectPrice": 1925000,
    "propertyType": "APARTMENT",
    "investmentCategory": "SHORT_TERM",
    "propertyStatus": "SOLD",
    "renovationProgress": null,
    "totalReturnRoi": -1922347.94,
    "totalReturnRoiPercentage": -89.34,
    "investors": 334,
    "rental": {
      "grossYield": 11.28,
      "netYield": null,
      "dividendYield": 7.17,
      "grossRent": 217175,
      "netRent": 153045,
      "totalRentalIncome": 229407.34,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 334,
      "annualized": 10.65,
      "totalGrossRoi": 62.56,
      "investmentPeriod": 60,
      "funded": 101.22,
      "fundedAmount": 1948485,
      "totalReturnRoi": null,
      "totalReturnRoiPercentage": null,
      "renovationProgress": null
    },
    "valuation": {
      "marketValue": null,
      "marketValuePercentage": 37.66,
      "saleProceed": null,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 2,
      "bathrooms": 2
    },
    "location": {
      "area": {
        "name": "Dubai Creek Harbour",
        "displayName": "Dubai Creek Harbour"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2024-02-14",
      "closeDate": "2024-01-14",
      "soldDate": "2024-02-14",
      "completionDate": null
    }
  },
  {
    "id": 692,
    "code": "SC-266",
    "title": "Studio In Laya Mansion",
    "investmentType": "HOLD",
    "propertyCategory": "RESIDENTIAL",
    "price": 490000,
    "projectPrice": 490000,
    "propertyType": "APARTMENT",
    "investmentCategory": "LONG_TERM",
    "propertyStatus": "SOLD",
    "renovationProgress": null,
    "totalReturnRoi": -494894.09,
    "totalReturnRoiPercentage": -82.12,
    "investors": 121,
    "rental": {
      "grossYield": 9.8,
      "netYield": null,
      "dividendYield": 7.96,
      "grossRent": 48000,
      "netRent": 38997,
      "totalRentalIncome": 107786.13,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 121,
      "annualized": 8.29,
      "totalGrossRoi": 52.64,
      "investmentPeriod": 60,
      "funded": 103.34,
      "fundedAmount": 506366,
      "totalReturnRoi": null,
      "totalReturnRoiPercentage": null,
      "renovationProgress": null
    },
    "valuation": {
      "marketValue": null,
      "marketValuePercentage": 12.24,
      "saleProceed": null,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 0,
      "bathrooms": 1
    },
    "location": {
      "area": {
        "name": "JVC",
        "displayName": "JVC"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2024-03-05",
      "closeDate": "2024-01-19",
      "soldDate": "2024-03-05",
      "completionDate": null
    }
  },
  {
    "id": 690,
    "code": "SC-264",
    "title": "Sobha Creek Vistas Reserve",
    "investmentType": "HOLD",
    "propertyCategory": "RESIDENTIAL",
    "price": 980000,
    "projectPrice": 980000,
    "propertyType": "APARTMENT",
    "investmentCategory": "SHORT_TERM",
    "propertyStatus": "SOLD",
    "renovationProgress": null,
    "totalReturnRoi": -989262.75,
    "totalReturnRoiPercentage": -89.4,
    "investors": 227,
    "rental": {
      "grossYield": 12.82,
      "netYield": null,
      "dividendYield": 7.91,
      "grossRent": 125651,
      "netRent": 91208.8,
      "totalRentalIncome": 117333.37,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 227,
      "annualized": 9.63,
      "totalGrossRoi": 59.9,
      "investmentPeriod": 60,
      "funded": 101,
      "fundedAmount": 989800,
      "totalReturnRoi": null,
      "totalReturnRoiPercentage": null,
      "renovationProgress": null
    },
    "valuation": {
      "marketValue": null,
      "marketValuePercentage": 22.45,
      "saleProceed": null,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 1,
      "bathrooms": 1
    },
    "location": {
      "area": {
        "name": "MBR City",
        "displayName": "MBR City"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2023-12-25",
      "closeDate": "2023-11-28",
      "soldDate": "2023-12-25",
      "completionDate": null
    }
  },
  {
    "id": 689,
    "code": "SC-263",
    "title": "Studio in SLS Residences",
    "investmentType": "HOLD",
    "propertyCategory": "RESIDENTIAL",
    "price": 1275000,
    "projectPrice": 1275000,
    "propertyType": "APARTMENT",
    "investmentCategory": "LONG_TERM",
    "propertyStatus": "SOLD",
    "renovationProgress": null,
    "totalReturnRoi": -1278679.9,
    "totalReturnRoiPercentage": -88.96,
    "investors": 253,
    "rental": {
      "grossYield": 9.8,
      "netYield": null,
      "dividendYield": 7.8,
      "grossRent": 125000,
      "netRent": 99417.5,
      "totalRentalIncome": 158691.17,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 253,
      "annualized": 9.88,
      "totalGrossRoi": 59.65,
      "investmentPeriod": 60,
      "funded": 102.59,
      "fundedAmount": 1308022.5,
      "totalReturnRoi": null,
      "totalReturnRoiPercentage": null,
      "renovationProgress": null
    },
    "valuation": {
      "marketValue": null,
      "marketValuePercentage": 3.92,
      "saleProceed": null,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 0,
      "bathrooms": 1
    },
    "location": {
      "area": {
        "name": "Business Bay",
        "displayName": "Business Bay"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2024-01-11",
      "closeDate": "2023-11-28",
      "soldDate": "2024-01-11",
      "completionDate": null
    }
  },
  {
    "id": 685,
    "code": "SC-262",
    "title": "Belgravia Heights 1",
    "investmentType": "HOLD",
    "propertyCategory": "RESIDENTIAL",
    "price": 1415000,
    "projectPrice": 1415000,
    "propertyType": "APARTMENT",
    "investmentCategory": "LONG_TERM",
    "propertyStatus": "SOLD",
    "renovationProgress": null,
    "totalReturnRoi": -1397272.67,
    "totalReturnRoiPercentage": -85.5,
    "investors": 309,
    "rental": {
      "grossYield": 10.25,
      "netYield": null,
      "dividendYield": 8.27,
      "grossRent": 145000,
      "netRent": 116961.5,
      "totalRentalIncome": 236969.47,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 309,
      "annualized": 10.31,
      "totalGrossRoi": 61.65,
      "investmentPeriod": 60,
      "funded": 103.77,
      "fundedAmount": 1468345.5,
      "totalReturnRoi": null,
      "totalReturnRoiPercentage": null,
      "renovationProgress": null
    },
    "valuation": {
      "marketValue": null,
      "marketValuePercentage": 13.07,
      "saleProceed": null,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 2,
      "bathrooms": 2
    },
    "location": {
      "area": {
        "name": "JVC",
        "displayName": "JVC"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2023-10-19",
      "closeDate": "2023-09-17",
      "soldDate": "2023-10-19",
      "completionDate": null
    }
  },
  {
    "id": 684,
    "code": "SC-261",
    "title": "Collective 2.0, Dubai Hills Estate",
    "investmentType": "HOLD",
    "propertyCategory": "RESIDENTIAL",
    "price": 1120000,
    "projectPrice": 1120000,
    "propertyType": "APARTMENT",
    "investmentCategory": "LONG_TERM",
    "propertyStatus": "SOLD",
    "renovationProgress": null,
    "totalReturnRoi": -1096108.22,
    "totalReturnRoiPercentage": -87.34,
    "investors": 253,
    "rental": {
      "grossYield": 8.93,
      "netYield": null,
      "dividendYield": 7.59,
      "grossRent": 100000,
      "netRent": 85040,
      "totalRentalIncome": 158890.01,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 253,
      "annualized": 9.8,
      "totalGrossRoi": 56.6,
      "investmentPeriod": 60,
      "funded": 101.89,
      "fundedAmount": 1141168,
      "totalReturnRoi": null,
      "totalReturnRoiPercentage": null,
      "renovationProgress": null
    },
    "valuation": {
      "marketValue": null,
      "marketValuePercentage": 13.84,
      "saleProceed": null,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 1,
      "bathrooms": 1
    },
    "location": {
      "area": {
        "name": "Dubai Hills Estate",
        "displayName": "Dubai Hills Estate"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2023-10-30",
      "closeDate": "2023-09-14",
      "soldDate": "2023-10-30",
      "completionDate": null
    }
  },
  {
    "id": 682,
    "code": "SC-260",
    "title": "Bay Square 9",
    "investmentType": "HOLD",
    "propertyCategory": "RESIDENTIAL",
    "price": 935000,
    "projectPrice": 935000,
    "propertyType": "APARTMENT",
    "investmentCategory": "LONG_TERM",
    "propertyStatus": "SOLD",
    "renovationProgress": null,
    "totalReturnRoi": -906418.08,
    "totalReturnRoiPercentage": -85.55,
    "investors": 257,
    "rental": {
      "grossYield": 9.89,
      "netYield": null,
      "dividendYield": 7.85,
      "grossRent": 92500,
      "netRent": 73409.75,
      "totalRentalIncome": 153124.94,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 257,
      "annualized": 9.87,
      "totalGrossRoi": 60.35,
      "investmentPeriod": 60,
      "funded": 102.06,
      "fundedAmount": 954261,
      "totalReturnRoi": null,
      "totalReturnRoiPercentage": null,
      "renovationProgress": null
    },
    "valuation": {
      "marketValue": null,
      "marketValuePercentage": 19.79,
      "saleProceed": null,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 0,
      "bathrooms": 1
    },
    "location": {
      "area": {
        "name": "Business Bay",
        "displayName": "Business Bay"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2023-10-11",
      "closeDate": "2023-09-03",
      "soldDate": "2023-10-11",
      "completionDate": null
    }
  },
  {
    "id": 679,
    "code": "SC-258",
    "title": "Rented Studio in The Address",
    "investmentType": "HOLD",
    "propertyCategory": "RESIDENTIAL",
    "price": 1590000,
    "projectPrice": 1590000,
    "propertyType": "APARTMENT",
    "investmentCategory": "SHORT_TERM",
    "propertyStatus": "SOLD",
    "renovationProgress": null,
    "totalReturnRoi": -1520592.22,
    "totalReturnRoiPercentage": -86.42,
    "investors": 281,
    "rental": {
      "grossYield": 11.22,
      "netYield": null,
      "dividendYield": 7.2,
      "grossRent": 178394,
      "netRent": 125206.2,
      "totalRentalIncome": 238944.1,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 281,
      "annualized": 8.98,
      "totalGrossRoi": 54.3,
      "investmentPeriod": 60,
      "funded": 102.93,
      "fundedAmount": 1636587,
      "totalReturnRoi": null,
      "totalReturnRoiPercentage": null,
      "renovationProgress": null
    },
    "valuation": {
      "marketValue": null,
      "marketValuePercentage": 2.2,
      "saleProceed": null,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 0,
      "bathrooms": 1
    },
    "location": {
      "area": {
        "name": "Dubai Marina",
        "displayName": "Dubai Marina"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2023-12-08",
      "closeDate": "2023-11-28",
      "soldDate": "2023-12-08",
      "completionDate": null
    }
  },
  {
    "id": 677,
    "code": "SC-256",
    "title": "Studio in Oxford 212",
    "investmentType": "HOLD",
    "propertyCategory": "RESIDENTIAL",
    "price": 560000,
    "projectPrice": 560000,
    "propertyType": "APARTMENT",
    "investmentCategory": "SHORT_TERM",
    "propertyStatus": "SOLD",
    "renovationProgress": null,
    "totalReturnRoi": -568827.3,
    "totalReturnRoiPercentage": -83.73,
    "investors": 160,
    "rental": {
      "grossYield": 13.85,
      "netYield": null,
      "dividendYield": 8.34,
      "grossRent": 77563,
      "netRent": 55090.4,
      "totalRentalIncome": 110497.56,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 160,
      "annualized": 8.09,
      "totalGrossRoi": 55.75,
      "investmentPeriod": 60,
      "funded": 105.12,
      "fundedAmount": 588672,
      "totalReturnRoi": null,
      "totalReturnRoiPercentage": null,
      "renovationProgress": null
    },
    "valuation": {
      "marketValue": null,
      "marketValuePercentage": 29.46,
      "saleProceed": null,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 0,
      "bathrooms": 1
    },
    "location": {
      "area": {
        "name": "JVC",
        "displayName": "JVC"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2023-09-05",
      "closeDate": "2023-08-10",
      "soldDate": "2023-09-05",
      "completionDate": null
    }
  },
  {
    "id": 675,
    "code": "SC-254",
    "title": "Studio in Pantheon Elysee",
    "investmentType": "HOLD",
    "propertyCategory": "RESIDENTIAL",
    "price": 535000,
    "projectPrice": 535000,
    "propertyType": "APARTMENT",
    "investmentCategory": "LONG_TERM",
    "propertyStatus": "SOLD",
    "renovationProgress": null,
    "totalReturnRoi": -531814.79,
    "totalReturnRoiPercentage": -83.02,
    "investors": 168,
    "rental": {
      "grossYield": 14.5,
      "netYield": 13.45,
      "dividendYield": 8.38,
      "grossRent": 77563,
      "netRent": 55650.4,
      "totalRentalIncome": 108764.8,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 168,
      "annualized": 8.03,
      "totalGrossRoi": 57.55,
      "investmentPeriod": 60,
      "funded": 103.76,
      "fundedAmount": 555116,
      "totalReturnRoi": null,
      "totalReturnRoiPercentage": null,
      "renovationProgress": null
    },
    "valuation": {
      "marketValue": null,
      "marketValuePercentage": 6.54,
      "saleProceed": 0,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 0,
      "bathrooms": 1
    },
    "location": {
      "area": {
        "name": "JVC",
        "displayName": "JVC"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2023-07-31",
      "closeDate": "2023-07-19",
      "soldDate": "2023-07-31",
      "completionDate": null
    }
  },
  {
    "id": 674,
    "code": "SC-253",
    "title": "Studio in Silicon Gates 1",
    "investmentType": "HOLD",
    "propertyCategory": "RESIDENTIAL",
    "price": 320000,
    "projectPrice": 320000,
    "propertyType": "APARTMENT",
    "investmentCategory": "LONG_TERM",
    "propertyStatus": "SOLD",
    "renovationProgress": null,
    "totalReturnRoi": -346917.72,
    "totalReturnRoiPercentage": -85.92,
    "investors": 93,
    "rental": {
      "grossYield": 17.45,
      "netYield": 15.7,
      "dividendYield": 9.61,
      "grossRent": 55845,
      "netRent": 39145.06,
      "totalRentalIncome": 56851.12,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 93,
      "annualized": 6.33,
      "totalGrossRoi": 47.05,
      "investmentPeriod": 60,
      "funded": 105,
      "fundedAmount": 336000,
      "totalReturnRoi": null,
      "totalReturnRoiPercentage": null,
      "renovationProgress": null
    },
    "valuation": {
      "marketValue": null,
      "marketValuePercentage": 18.75,
      "saleProceed": 0,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 0,
      "bathrooms": 1
    },
    "location": {
      "area": {
        "name": "Silicon Oasis",
        "displayName": "Silicon Oasis"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2023-08-03",
      "closeDate": "2023-07-15",
      "soldDate": "2023-08-03",
      "completionDate": null
    }
  },
  {
    "id": 673,
    "code": "SC-252",
    "title": "2 Bedroom in Marina View Tower",
    "investmentType": "HOLD",
    "propertyCategory": "RESIDENTIAL",
    "price": 1375000,
    "projectPrice": 1375000,
    "propertyType": "APARTMENT",
    "investmentCategory": "SHORT_TERM",
    "propertyStatus": "SOLD",
    "renovationProgress": null,
    "totalReturnRoi": -1420943.62,
    "totalReturnRoiPercentage": -85.95,
    "investors": 331,
    "rental": {
      "grossYield": 12.41,
      "netYield": null,
      "dividendYield": 8.06,
      "grossRent": 170638,
      "netRent": 124815.38,
      "totalRentalIncome": 232373.19,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 331,
      "annualized": 8.95,
      "totalGrossRoi": 55.15,
      "investmentPeriod": 60,
      "funded": 108.52,
      "fundedAmount": 1492150,
      "totalReturnRoi": null,
      "totalReturnRoiPercentage": null,
      "renovationProgress": null
    },
    "valuation": {
      "marketValue": null,
      "marketValuePercentage": 12.73,
      "saleProceed": 0,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 2,
      "bathrooms": 3
    },
    "location": {
      "area": {
        "name": "Dubai Marina",
        "displayName": "Dubai Marina"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2023-10-11",
      "closeDate": "2023-08-14",
      "soldDate": "2023-10-11",
      "completionDate": null
    }
  },
  {
    "id": 672,
    "code": "SC-251",
    "title": "SmartCrowd Plus - Dubai Gate 2 ",
    "investmentType": "HOLD",
    "propertyCategory": "RESIDENTIAL",
    "price": 570000,
    "projectPrice": 570000,
    "propertyType": "APARTMENT",
    "investmentCategory": "SHORT_TERM",
    "propertyStatus": "SOLD",
    "renovationProgress": null,
    "totalReturnRoi": -636944.86,
    "totalReturnRoiPercentage": -84.94,
    "investors": 271,
    "rental": {
      "grossYield": 14.97,
      "netYield": null,
      "dividendYield": 8.94,
      "grossRent": 85319,
      "netRent": 61759.2,
      "totalRentalIncome": 112972.5,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 271,
      "annualized": 7.59,
      "totalGrossRoi": 53.75,
      "investmentPeriod": 60,
      "funded": 111.72,
      "fundedAmount": 636804,
      "totalReturnRoi": null,
      "totalReturnRoiPercentage": null,
      "renovationProgress": null
    },
    "valuation": {
      "marketValue": null,
      "marketValuePercentage": 22.81,
      "saleProceed": 0,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 0,
      "bathrooms": 1
    },
    "location": {
      "area": {
        "name": "JLT",
        "displayName": "JLT"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2023-08-17",
      "closeDate": "2023-07-12",
      "soldDate": "2023-08-17",
      "completionDate": null
    }
  },
  {
    "id": 671,
    "code": "SC-250",
    "title": "Studio in Silicon Gates 1",
    "investmentType": "HOLD",
    "propertyCategory": "RESIDENTIAL",
    "price": 310000,
    "projectPrice": 310000,
    "propertyType": "APARTMENT",
    "investmentCategory": "LONG_TERM",
    "propertyStatus": "SOLD",
    "renovationProgress": null,
    "totalReturnRoi": -364147.11,
    "totalReturnRoiPercentage": -86.76,
    "investors": 84,
    "rental": {
      "grossYield": 11.29,
      "netYield": null,
      "dividendYield": 8.73,
      "grossRent": 35000,
      "netRent": 27053.5,
      "totalRentalIncome": 55585.7,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 84,
      "annualized": 6.44,
      "totalGrossRoi": 47.8,
      "investmentPeriod": 60,
      "funded": 109.84,
      "fundedAmount": 340504,
      "totalReturnRoi": null,
      "totalReturnRoiPercentage": null,
      "renovationProgress": null
    },
    "valuation": {
      "marketValue": null,
      "marketValuePercentage": 29.03,
      "saleProceed": 0,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 0,
      "bathrooms": 1
    },
    "location": {
      "area": {
        "name": "Silicon Oasis",
        "displayName": "Silicon Oasis"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2023-07-24",
      "closeDate": "2023-07-07",
      "soldDate": "2023-07-24",
      "completionDate": null
    }
  },
  {
    "id": 670,
    "code": "SC-249",
    "title": "2 bedroom in Marina Quays West",
    "investmentType": "HOLD",
    "propertyCategory": "RESIDENTIAL",
    "price": 2175000,
    "projectPrice": 2175000,
    "propertyType": "APARTMENT",
    "investmentCategory": "SHORT_TERM",
    "propertyStatus": "SOLD",
    "renovationProgress": null,
    "totalReturnRoi": -2162987.11,
    "totalReturnRoiPercentage": -86.94,
    "investors": 247,
    "rental": {
      "grossYield": 11.05,
      "netYield": null,
      "dividendYield": 7.51,
      "grossRent": 240444,
      "netRent": 173093.75,
      "totalRentalIncome": 324909.01,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 247,
      "annualized": 8.44,
      "totalGrossRoi": 47.2,
      "investmentPeriod": 60,
      "funded": 103.6,
      "fundedAmount": 2253300,
      "totalReturnRoi": null,
      "totalReturnRoiPercentage": null,
      "renovationProgress": null
    },
    "valuation": {
      "marketValue": null,
      "marketValuePercentage": 21.84,
      "saleProceed": 0,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 2,
      "bathrooms": 3
    },
    "location": {
      "area": {
        "name": "Dubai Marina",
        "displayName": "Dubai Marina"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2023-07-13",
      "closeDate": "2023-06-26",
      "soldDate": "2023-07-13",
      "completionDate": null
    }
  },
  {
    "id": 669,
    "code": "SC-248",
    "title": "Studio in 15 Northside",
    "investmentType": "HOLD",
    "propertyCategory": "RESIDENTIAL",
    "price": 850000,
    "projectPrice": 850000,
    "propertyType": "APARTMENT",
    "investmentCategory": "SHORT_TERM",
    "propertyStatus": "SOLD",
    "renovationProgress": null,
    "totalReturnRoi": -848538.55,
    "totalReturnRoiPercentage": -84.79,
    "investors": 314,
    "rental": {
      "grossYield": 12.78,
      "netYield": 11.9,
      "dividendYield": 7.98,
      "grossRent": 108588,
      "netRent": 78650.4,
      "totalRentalIncome": 152164.72,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 314,
      "annualized": 8.32,
      "totalGrossRoi": 52.6,
      "investmentPeriod": 60,
      "funded": 103.45,
      "fundedAmount": 879325,
      "totalReturnRoi": null,
      "totalReturnRoiPercentage": null,
      "renovationProgress": null
    },
    "valuation": {
      "marketValue": null,
      "marketValuePercentage": 11.76,
      "saleProceed": 0,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 0,
      "bathrooms": 1
    },
    "location": {
      "area": {
        "name": "Business Bay",
        "displayName": "Business Bay"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2023-07-31",
      "closeDate": "2023-06-08",
      "soldDate": "2023-07-31",
      "completionDate": null
    }
  },
  {
    "id": 665,
    "code": "SC-246",
    "title": "SC246 - Studio in Spring Oasis, DSO",
    "investmentType": "HOLD",
    "propertyCategory": "RESIDENTIAL",
    "price": 315000,
    "projectPrice": 315000,
    "propertyType": "APARTMENT",
    "investmentCategory": "LONG_TERM",
    "propertyStatus": "SOLD",
    "renovationProgress": null,
    "totalReturnRoi": -341979.93,
    "totalReturnRoiPercentage": -84.14,
    "investors": 84,
    "rental": {
      "grossYield": 10.48,
      "netYield": null,
      "dividendYield": 7.36,
      "grossRent": 33000,
      "netRent": 25083.5,
      "totalRentalIncome": 64481.82,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 84,
      "annualized": 6.12,
      "totalGrossRoi": 43.35,
      "investmentPeriod": 60,
      "funded": 104.76,
      "fundedAmount": 329994,
      "totalReturnRoi": null,
      "totalReturnRoiPercentage": null,
      "renovationProgress": null
    },
    "valuation": {
      "marketValue": null,
      "marketValuePercentage": 36.51,
      "saleProceed": 0,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 0,
      "bathrooms": 1
    },
    "location": {
      "area": {
        "name": "Silicon Oasis",
        "displayName": "Silicon Oasis"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2023-07-24",
      "closeDate": "2023-04-20",
      "soldDate": "2023-07-24",
      "completionDate": null
    }
  },
  {
    "id": 662,
    "code": "SC-243",
    "title": "New Dubai Gate 2 - Studio",
    "investmentType": "HOLD",
    "propertyCategory": "RESIDENTIAL",
    "price": 525000,
    "projectPrice": 525000,
    "propertyType": "APARTMENT",
    "investmentCategory": "LONG_TERM",
    "propertyStatus": "SOLD",
    "renovationProgress": null,
    "totalReturnRoi": -535862.63,
    "totalReturnRoiPercentage": -83.3,
    "investors": 138,
    "rental": {
      "grossYield": 17.14,
      "netYield": null,
      "dividendYield": 10.28,
      "grossRent": 89973,
      "netRent": 66685.06,
      "totalRentalIncome": 107401.32,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 138,
      "annualized": 8.77,
      "totalGrossRoi": 59.5,
      "investmentPeriod": 60,
      "funded": 102.33,
      "fundedAmount": 537232.5,
      "totalReturnRoi": null,
      "totalReturnRoiPercentage": null,
      "renovationProgress": null
    },
    "valuation": {
      "marketValue": null,
      "marketValuePercentage": 33.33,
      "saleProceed": 0,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 0,
      "bathrooms": 1
    },
    "location": {
      "area": {
        "name": "JLT",
        "displayName": "JLT"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2023-05-18",
      "closeDate": "2023-05-05",
      "soldDate": "2023-05-18",
      "completionDate": null
    }
  },
  {
    "id": 661,
    "code": "SC-242",
    "title": "SC242 - Studio in Spring Oasis, DSO",
    "investmentType": "HOLD",
    "propertyCategory": "RESIDENTIAL",
    "price": 335000,
    "projectPrice": 335000,
    "propertyType": "APARTMENT",
    "investmentCategory": "LONG_TERM",
    "propertyStatus": "SOLD",
    "renovationProgress": null,
    "totalReturnRoi": -370083.24,
    "totalReturnRoiPercentage": -83.91,
    "investors": 112,
    "rental": {
      "grossYield": 9.25,
      "netYield": null,
      "dividendYield": 6.05,
      "grossRent": 31000,
      "netRent": 22188.5,
      "totalRentalIncome": 70950.46,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 112,
      "annualized": 6.76,
      "totalGrossRoi": 48,
      "investmentPeriod": 60,
      "funded": 105.78,
      "fundedAmount": 354363,
      "totalReturnRoi": null,
      "totalReturnRoiPercentage": null,
      "renovationProgress": null
    },
    "valuation": {
      "marketValue": null,
      "marketValuePercentage": 41.79,
      "saleProceed": 0,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 0,
      "bathrooms": 1
    },
    "location": {
      "area": {
        "name": "Silicon Oasis",
        "displayName": "Silicon Oasis"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2023-07-24",
      "closeDate": "2023-04-03",
      "soldDate": "2023-07-24",
      "completionDate": null
    }
  },
  {
    "id": 660,
    "code": "SC-241",
    "title": "2 Bedroom in Burj Al Nujoom, Downtown",
    "investmentType": "HOLD",
    "propertyCategory": "RESIDENTIAL",
    "price": 1535000,
    "projectPrice": 1535000,
    "propertyType": "APARTMENT",
    "investmentCategory": "LONG_TERM",
    "propertyStatus": "SOLD",
    "renovationProgress": null,
    "totalReturnRoi": -1523730.72,
    "totalReturnRoiPercentage": -85.64,
    "investors": 264,
    "rental": {
      "grossYield": 9.12,
      "netYield": 7.77,
      "dividendYield": 7.1,
      "grossRent": 140000,
      "netRent": 110870,
      "totalRentalIncome": 255588.33,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 264,
      "annualized": 7.89,
      "totalGrossRoi": 48.4,
      "investmentPeriod": 60,
      "funded": 103.7,
      "fundedAmount": 1591795,
      "totalReturnRoi": null,
      "totalReturnRoiPercentage": null,
      "renovationProgress": null
    },
    "valuation": {
      "marketValue": null,
      "marketValuePercentage": 17.26,
      "saleProceed": 0,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 2,
      "bathrooms": 3
    },
    "location": {
      "area": {
        "name": "Downtown Dubai",
        "displayName": "Downtown Dubai"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2023-05-16",
      "closeDate": "2023-04-14",
      "soldDate": "2023-05-16",
      "completionDate": null
    }
  },
  {
    "id": 656,
    "code": "SC-239",
    "title": "1 Bedroom in Lakside - Jumeirah Lake Towers ",
    "investmentType": "HOLD",
    "propertyCategory": "RESIDENTIAL",
    "price": 950000,
    "projectPrice": 950000,
    "propertyType": "APARTMENT",
    "investmentCategory": "SHORT_TERM",
    "propertyStatus": "SOLD",
    "renovationProgress": null,
    "totalReturnRoi": -978289.5,
    "totalReturnRoiPercentage": -83.25,
    "investors": 304,
    "rental": {
      "grossYield": 13.06,
      "netYield": 12,
      "dividendYield": 7.93,
      "grossRent": 124100,
      "netRent": 90026.25,
      "totalRentalIncome": 196784.37,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 304,
      "annualized": 8.03,
      "totalGrossRoi": 51.7,
      "investmentPeriod": 60,
      "funded": 107.59,
      "fundedAmount": 1022105,
      "totalReturnRoi": null,
      "totalReturnRoiPercentage": null,
      "renovationProgress": null
    },
    "valuation": {
      "marketValue": null,
      "marketValuePercentage": 10.53,
      "saleProceed": 0,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 1,
      "bathrooms": 2
    },
    "location": {
      "area": {
        "name": "JLT",
        "displayName": "JLT"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2023-05-31",
      "closeDate": "2023-05-17",
      "soldDate": "2023-05-31",
      "completionDate": null
    }
  },
  {
    "id": 655,
    "code": "SC-238",
    "title": "Silicon Gates 3 - Studio",
    "investmentType": "HOLD",
    "propertyCategory": "RESIDENTIAL",
    "price": 330000,
    "projectPrice": 330000,
    "propertyType": "APARTMENT",
    "investmentCategory": "LONG_TERM",
    "propertyStatus": "SOLD",
    "renovationProgress": null,
    "totalReturnRoi": -351809.51,
    "totalReturnRoiPercentage": -83.92,
    "investors": 98,
    "rental": {
      "grossYield": 10.61,
      "netYield": null,
      "dividendYield": 8.1,
      "grossRent": 35000,
      "netRent": 28647.25,
      "totalRentalIncome": 67398.82,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 98,
      "annualized": 6.61,
      "totalGrossRoi": 43.9,
      "investmentPeriod": 60,
      "funded": 103.61,
      "fundedAmount": 341913,
      "totalReturnRoi": null,
      "totalReturnRoiPercentage": null,
      "renovationProgress": null
    },
    "valuation": {
      "marketValue": null,
      "marketValuePercentage": 15.15,
      "saleProceed": 0,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 0,
      "bathrooms": 1
    },
    "location": {
      "area": {
        "name": "Silicon Oasis",
        "displayName": "Silicon Oasis"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2023-04-25",
      "closeDate": "2023-03-04",
      "soldDate": "2023-04-25",
      "completionDate": null
    }
  },
  {
    "id": 653,
    "code": "SC-237",
    "title": "1-Bedroom in Park Towers, DIFC ",
    "investmentType": "HOLD",
    "propertyCategory": "RESIDENTIAL",
    "price": 1300000,
    "projectPrice": 1300000,
    "propertyType": "APARTMENT",
    "investmentCategory": "LONG_TERM",
    "propertyStatus": "SOLD",
    "renovationProgress": null,
    "totalReturnRoi": -1281266.08,
    "totalReturnRoiPercentage": -84.15,
    "investors": 345,
    "rental": {
      "grossYield": 9.08,
      "netYield": 7.57,
      "dividendYield": 7.01,
      "grossRent": 118000,
      "netRent": 91144,
      "totalRentalIncome": 241391.94,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 345,
      "annualized": 7.7,
      "totalGrossRoi": 47.65,
      "investmentPeriod": 60,
      "funded": 104.9,
      "fundedAmount": 1363700,
      "totalReturnRoi": null,
      "totalReturnRoiPercentage": null,
      "renovationProgress": null
    },
    "valuation": {
      "marketValue": null,
      "marketValuePercentage": 15.38,
      "saleProceed": 0,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 1,
      "bathrooms": 2
    },
    "location": {
      "area": {
        "name": "DIFC",
        "displayName": "DIFC"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2023-04-25",
      "closeDate": "2023-02-22",
      "soldDate": "2023-04-25",
      "completionDate": null
    }
  },
  {
    "id": 652,
    "code": "SC-236",
    "title": "Beautiful 1-Bedroom in Dorra Bay, Dubai Marina",
    "investmentType": "HOLD",
    "propertyCategory": "RESIDENTIAL",
    "price": 1175000,
    "projectPrice": 1175000,
    "propertyType": "APARTMENT",
    "investmentCategory": "SHORT_TERM",
    "propertyStatus": "SOLD",
    "renovationProgress": null,
    "totalReturnRoi": -1121520.15,
    "totalReturnRoiPercentage": -84.46,
    "investors": 237,
    "rental": {
      "grossYield": 13.2,
      "netYield": 12.13,
      "dividendYield": 8.42,
      "grossRent": 155125,
      "netRent": 112362.06,
      "totalRentalIncome": 206300.27,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 237,
      "annualized": 9.18,
      "totalGrossRoi": 56.1,
      "investmentPeriod": 60,
      "funded": 102.32,
      "fundedAmount": 1202260,
      "totalReturnRoi": null,
      "totalReturnRoiPercentage": null,
      "renovationProgress": null
    },
    "valuation": {
      "marketValue": null,
      "marketValuePercentage": 8.94,
      "saleProceed": 0,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 1,
      "bathrooms": 2
    },
    "location": {
      "area": {
        "name": "Dubai Marina",
        "displayName": "Dubai Marina"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2023-02-14",
      "closeDate": "2023-01-18",
      "soldDate": "2023-02-14",
      "completionDate": null
    }
  },
  {
    "id": 651,
    "code": "SC-235",
    "title": "Beautiful 1 Bedroom in Windsor Manor, Business Bay",
    "investmentType": "HOLD",
    "propertyCategory": "RESIDENTIAL",
    "price": 925000,
    "projectPrice": 925000,
    "propertyType": "APARTMENT",
    "investmentCategory": "LONG_TERM",
    "propertyStatus": "EXITED",
    "renovationProgress": 100,
    "totalReturnRoi": 223528.79,
    "totalReturnRoiPercentage": 21.2,
    "investors": 255,
    "rental": {
      "grossYield": 14.25,
      "netYield": 13.2,
      "dividendYield": 8.97,
      "grossRent": 131856,
      "netRent": 96339,
      "totalRentalIncome": 73594.34,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 255,
      "annualized": 9.23,
      "totalGrossRoi": 57.55,
      "investmentPeriod": 20,
      "funded": 103.45,
      "fundedAmount": 956912.5,
      "totalReturnRoi": 223528.79,
      "totalReturnRoiPercentage": 21.2,
      "renovationProgress": 100
    },
    "valuation": {
      "marketValue": null,
      "marketValuePercentage": 29.73,
      "saleProceed": 1237156.95,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 1,
      "bathrooms": 2
    },
    "location": {
      "area": {
        "name": "Business Bay",
        "displayName": "Business Bay"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2023-01-30",
      "closeDate": "2022-12-19",
      "soldDate": "2023-01-30",
      "completionDate": null
    }
  },
  {
    "id": 649,
    "code": "SC-234",
    "title": "1 Bedroom in Golden Mile 8, Palm Jumeirah",
    "investmentType": "HOLD",
    "propertyCategory": "RESIDENTIAL",
    "price": 1600000,
    "projectPrice": 1600000,
    "propertyType": "APARTMENT",
    "investmentCategory": "SHORT_TERM",
    "propertyStatus": "EXITED",
    "renovationProgress": 100,
    "totalReturnRoi": 332726.25,
    "totalReturnRoiPercentage": 18.61,
    "investors": 193,
    "rental": {
      "grossYield": 12.6,
      "netYield": null,
      "dividendYield": 8.13,
      "grossRent": 201663,
      "netRent": 143517.19,
      "totalRentalIncome": 101076.02,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 193,
      "annualized": 9.04,
      "totalGrossRoi": 54.6,
      "investmentPeriod": 18,
      "funded": 99.76,
      "fundedAmount": 1596160,
      "totalReturnRoi": 332726.25,
      "totalReturnRoiPercentage": 18.61,
      "renovationProgress": 100
    },
    "valuation": {
      "marketValue": null,
      "marketValuePercentage": 25,
      "saleProceed": 2073714,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 1,
      "bathrooms": 2
    },
    "location": {
      "area": {
        "name": "Palm Jumeirah",
        "displayName": "Palm Jumeirah"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2023-01-30",
      "closeDate": "2022-12-27",
      "soldDate": "2023-01-30",
      "completionDate": null
    }
  },
  {
    "id": 647,
    "code": "SC-233",
    "title": "2 Bedroom in Opal Tower, Dubai Marina",
    "investmentType": "HOLD",
    "propertyCategory": "RESIDENTIAL",
    "price": 1315000,
    "projectPrice": 1315000,
    "propertyType": "APARTMENT",
    "investmentCategory": "SHORT_TERM",
    "propertyStatus": "EXITED",
    "renovationProgress": 100,
    "totalReturnRoi": 479848.58,
    "totalReturnRoiPercentage": 32.46,
    "investors": 352,
    "rental": {
      "grossYield": 16.52,
      "netYield": null,
      "dividendYield": 9.75,
      "grossRent": 217175,
      "netRent": 144070.69,
      "totalRentalIncome": 134763.33,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 352,
      "annualized": 10.3,
      "totalGrossRoi": 67.7,
      "investmentPeriod": 29,
      "funded": 102.23,
      "fundedAmount": 1344324.5,
      "totalReturnRoi": 479848.58,
      "totalReturnRoiPercentage": 32.46,
      "renovationProgress": 100
    },
    "valuation": {
      "marketValue": null,
      "marketValuePercentage": 46.39,
      "saleProceed": 1873747.84,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 2,
      "bathrooms": 3
    },
    "location": {
      "area": {
        "name": "Dubai Marina",
        "displayName": "Dubai Marina"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2023-01-30",
      "closeDate": "2023-01-17",
      "soldDate": "2023-01-30",
      "completionDate": null
    }
  },
  {
    "id": 646,
    "code": "SC-232",
    "title": "1 Bedroom in Burj Al Nujoom, Downtown",
    "investmentType": "HOLD",
    "propertyCategory": "RESIDENTIAL",
    "price": 835000,
    "projectPrice": 835000,
    "propertyType": "APARTMENT",
    "investmentCategory": "SHORT_TERM",
    "propertyStatus": "EXITED",
    "renovationProgress": 100,
    "totalReturnRoi": 306362.72,
    "totalReturnRoiPercentage": 32.33,
    "investors": 179,
    "rental": {
      "grossYield": 16.72,
      "netYield": null,
      "dividendYield": 10.35,
      "grossRent": 139613,
      "netRent": 99806.56,
      "totalRentalIncome": 157839.77,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 179,
      "annualized": 10.57,
      "totalGrossRoi": 67.05,
      "investmentPeriod": 39,
      "funded": 105.25,
      "fundedAmount": 878837.5,
      "totalReturnRoi": 306362.72,
      "totalReturnRoiPercentage": 32.33,
      "renovationProgress": 100
    },
    "valuation": {
      "marketValue": null,
      "marketValuePercentage": 31.74,
      "saleProceed": 1126212.95,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 1,
      "bathrooms": -1
    },
    "location": {
      "area": {
        "name": "Downtown Dubai",
        "displayName": "Downtown Dubai"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2022-11-18",
      "closeDate": "2022-11-09",
      "soldDate": "2022-11-18",
      "completionDate": null
    }
  },
  {
    "id": 645,
    "code": "SC-231",
    "title": "One-Bedroom Duplex in Fortunato, JVC",
    "investmentType": "HOLD",
    "propertyCategory": "RESIDENTIAL",
    "price": 580000,
    "projectPrice": 580000,
    "propertyType": "APARTMENT",
    "investmentCategory": "LONG_TERM",
    "propertyStatus": "EXITED",
    "renovationProgress": 100,
    "totalReturnRoi": 330378.04,
    "totalReturnRoiPercentage": 49.28,
    "investors": 145,
    "rental": {
      "grossYield": 10.34,
      "netYield": null,
      "dividendYield": 7.79,
      "grossRent": 60000,
      "netRent": 45203,
      "totalRentalIncome": 130228.12,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 145,
      "annualized": 8.27,
      "totalGrossRoi": 52.4,
      "investmentPeriod": 34,
      "funded": 109.23,
      "fundedAmount": 633534,
      "totalReturnRoi": 330378.04,
      "totalReturnRoiPercentage": 49.28,
      "renovationProgress": 100
    },
    "valuation": {
      "marketValue": null,
      "marketValuePercentage": 55.17,
      "saleProceed": 894468.67,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 1,
      "bathrooms": 1
    },
    "location": {
      "area": {
        "name": "JVC",
        "displayName": "JVC"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2022-11-28",
      "closeDate": "2022-11-18",
      "soldDate": "2022-11-28",
      "completionDate": null
    }
  },
  {
    "id": 641,
    "code": "SC-228",
    "title": "1-Bedroom in Point Tower, Dubai Marina",
    "investmentType": "HOLD",
    "propertyCategory": "RESIDENTIAL",
    "price": 1200000,
    "projectPrice": 1200000,
    "propertyType": "APARTMENT",
    "investmentCategory": "SHORT_TERM",
    "propertyStatus": "SOLD",
    "renovationProgress": null,
    "totalReturnRoi": -1211328.94,
    "totalReturnRoiPercentage": -83.29,
    "investors": 343,
    "rental": {
      "grossYield": 14.87,
      "netYield": null,
      "dividendYield": 9.25,
      "grossRent": 178394,
      "netRent": 124432.13,
      "totalRentalIncome": 243096.06,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 343,
      "annualized": 10.04,
      "totalGrossRoi": 62.77,
      "investmentPeriod": 60,
      "funded": 109.01,
      "fundedAmount": 1308120,
      "totalReturnRoi": null,
      "totalReturnRoiPercentage": null,
      "renovationProgress": null
    },
    "valuation": {
      "marketValue": null,
      "marketValuePercentage": 33.33,
      "saleProceed": 0,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 1,
      "bathrooms": 1
    },
    "location": {
      "area": {
        "name": "Dubai Marina",
        "displayName": "Dubai Marina"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2022-11-01",
      "closeDate": "2022-11-01",
      "soldDate": "2022-11-01",
      "completionDate": null
    }
  },
  {
    "id": 640,
    "code": "SC-227",
    "title": "1-Bedroom in Indigo Tower, Jumeirah Lake Towers",
    "investmentType": "HOLD",
    "propertyCategory": "RESIDENTIAL",
    "price": 855000,
    "projectPrice": 855000,
    "propertyType": "APARTMENT",
    "investmentCategory": "SHORT_TERM",
    "propertyStatus": "SOLD",
    "renovationProgress": null,
    "totalReturnRoi": -837151.55,
    "totalReturnRoiPercentage": -82.12,
    "investors": 277,
    "rental": {
      "grossYield": 15.42,
      "netYield": null,
      "dividendYield": 9.75,
      "grossRent": 131856,
      "netRent": 94958,
      "totalRentalIncome": 182257.92,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 277,
      "annualized": 10.41,
      "totalGrossRoi": 64.35,
      "investmentPeriod": 60,
      "funded": 104.59,
      "fundedAmount": 894244.5,
      "totalReturnRoi": null,
      "totalReturnRoiPercentage": null,
      "renovationProgress": null
    },
    "valuation": {
      "marketValue": null,
      "marketValuePercentage": 57.89,
      "saleProceed": 0,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 1,
      "bathrooms": 1
    },
    "location": {
      "area": {
        "name": "JLT",
        "displayName": "JLT"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2022-10-07",
      "closeDate": "2022-09-30",
      "soldDate": "2022-10-07",
      "completionDate": null
    }
  },
  {
    "id": 638,
    "code": "SC-226",
    "title": "Beautiful Studio in Crystal Residences, JVC",
    "investmentType": "HOLD",
    "propertyCategory": "RESIDENTIAL",
    "price": 385000,
    "projectPrice": 385000,
    "propertyType": "APARTMENT",
    "investmentCategory": "LONG_TERM",
    "propertyStatus": "SOLD",
    "renovationProgress": null,
    "totalReturnRoi": -405336.16,
    "totalReturnRoiPercentage": -78.6,
    "investors": 146,
    "rental": {
      "grossYield": 9.87,
      "netYield": null,
      "dividendYield": 7.79,
      "grossRent": 38000,
      "netRent": 29994,
      "totalRentalIncome": 110370.07,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 146,
      "annualized": 8.07,
      "totalGrossRoi": 49.25,
      "investmentPeriod": 60,
      "funded": 113.4,
      "fundedAmount": 436590,
      "totalReturnRoi": null,
      "totalReturnRoiPercentage": null,
      "renovationProgress": null
    },
    "valuation": {
      "marketValue": null,
      "marketValuePercentage": 42.86,
      "saleProceed": 0,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 0,
      "bathrooms": 1
    },
    "location": {
      "area": {
        "name": "JVC",
        "displayName": "JVC"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2022-09-28",
      "closeDate": "2022-09-02",
      "soldDate": "2022-09-28",
      "completionDate": null
    }
  },
  {
    "id": 636,
    "code": "SC-225",
    "title": "2 Bedroom in Burj Al Nujoom, Downtown",
    "investmentType": "HOLD",
    "propertyCategory": "RESIDENTIAL",
    "price": 1250000,
    "projectPrice": 1250000,
    "propertyType": "APARTMENT",
    "investmentCategory": "SHORT_TERM",
    "propertyStatus": "EXITED",
    "renovationProgress": 100,
    "totalReturnRoi": 395261.63,
    "totalReturnRoiPercentage": 28.16,
    "investors": 245,
    "rental": {
      "grossYield": 16.13,
      "netYield": 14.37,
      "dividendYield": 10,
      "grossRent": 201663,
      "netRent": 140753.19,
      "totalRentalIncome": 200118.79,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 245,
      "annualized": 10.55,
      "totalGrossRoi": 66.55,
      "investmentPeriod": 33,
      "funded": 101.43,
      "fundedAmount": 1267875,
      "totalReturnRoi": 395261.63,
      "totalReturnRoiPercentage": 28.16,
      "renovationProgress": 100
    },
    "valuation": {
      "marketValue": null,
      "marketValuePercentage": 24,
      "saleProceed": 1644046.59,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 2,
      "bathrooms": 2
    },
    "location": {
      "area": {
        "name": "Downtown Dubai",
        "displayName": "Downtown Dubai"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2022-09-28",
      "closeDate": "2022-09-05",
      "soldDate": "2022-09-28",
      "completionDate": null
    }
  },
  {
    "id": 634,
    "code": "SC-223",
    "title": "1-Bedroom in Armada Tower 3, Jumeirah Lake Towers",
    "investmentType": "HOLD",
    "propertyCategory": "RESIDENTIAL",
    "price": 775000,
    "projectPrice": 775000,
    "propertyType": "APARTMENT",
    "investmentCategory": "SHORT_TERM",
    "propertyStatus": "EXITED",
    "renovationProgress": 100,
    "totalReturnRoi": 183006.54,
    "totalReturnRoiPercentage": 20.82,
    "investors": 184,
    "rental": {
      "grossYield": 16.01,
      "netYield": null,
      "dividendYield": 9.81,
      "grossRent": 124100,
      "netRent": 86851.25,
      "totalRentalIncome": 116620.04,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 184,
      "annualized": 10.35,
      "totalGrossRoi": 66,
      "investmentPeriod": 30,
      "funded": 103.4,
      "fundedAmount": 801350,
      "totalReturnRoi": 183006.54,
      "totalReturnRoiPercentage": 20.82,
      "renovationProgress": 100
    },
    "valuation": {
      "marketValue": null,
      "marketValuePercentage": 12.9,
      "saleProceed": 970773,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 1,
      "bathrooms": 1
    },
    "location": {
      "area": {
        "name": "JLT",
        "displayName": "JLT"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2022-09-05",
      "closeDate": "2022-07-31",
      "soldDate": "2022-09-05",
      "completionDate": null
    }
  },
  {
    "id": 633,
    "code": "SC-222",
    "title": "Studio in 8 Boulevard Walk, Downtown",
    "investmentType": "HOLD",
    "propertyCategory": "RESIDENTIAL",
    "price": 780000,
    "projectPrice": 780000,
    "propertyType": "APARTMENT",
    "investmentCategory": "SHORT_TERM",
    "propertyStatus": "SOLD",
    "renovationProgress": null,
    "totalReturnRoi": -842340.06,
    "totalReturnRoiPercentage": -83,
    "investors": 202,
    "rental": {
      "grossYield": 14.92,
      "netYield": 13.59,
      "dividendYield": 9.34,
      "grossRent": 116344,
      "netRent": 83687.5,
      "totalRentalIncome": 172503.78,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 202,
      "annualized": 9.94,
      "totalGrossRoi": 62.65,
      "investmentPeriod": 60,
      "funded": 115.45,
      "fundedAmount": 900510,
      "totalReturnRoi": null,
      "totalReturnRoiPercentage": null,
      "renovationProgress": null
    },
    "valuation": {
      "marketValue": null,
      "marketValuePercentage": 47.44,
      "saleProceed": 0,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 0,
      "bathrooms": 1
    },
    "location": {
      "area": {
        "name": "Downtown Dubai",
        "displayName": "Downtown Dubai"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2022-08-18",
      "closeDate": "2022-07-20",
      "soldDate": "2022-08-18",
      "completionDate": null
    }
  },
  {
    "id": 632,
    "code": "SC-221",
    "title": "Rare Studio in Murjan 2, JBR",
    "investmentType": "HOLD",
    "propertyCategory": "RESIDENTIAL",
    "price": 1100000,
    "projectPrice": 1100000,
    "propertyType": "APARTMENT",
    "investmentCategory": "SHORT_TERM",
    "propertyStatus": "SOLD",
    "renovationProgress": null,
    "totalReturnRoi": -1073614.96,
    "totalReturnRoiPercentage": -83.02,
    "investors": 190,
    "rental": {
      "grossYield": 15.51,
      "netYield": 14.6,
      "dividendYield": 10.42,
      "grossRent": 170638,
      "netRent": 127863.38,
      "totalRentalIncome": 219520,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 190,
      "annualized": 11.2,
      "totalGrossRoi": 66.04,
      "investmentPeriod": 60,
      "funded": 106.74,
      "fundedAmount": 1174140,
      "totalReturnRoi": null,
      "totalReturnRoiPercentage": null,
      "renovationProgress": null
    },
    "valuation": {
      "marketValue": null,
      "marketValuePercentage": 31.82,
      "saleProceed": 0,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 0,
      "bathrooms": 1
    },
    "location": {
      "area": {
        "name": "Dubai Marina",
        "displayName": "Dubai Marina"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2022-07-13",
      "closeDate": "2022-06-28",
      "soldDate": "2022-07-13",
      "completionDate": null
    }
  },
  {
    "id": 631,
    "code": "SC-220",
    "title": "Fantastic 1-Bedroom in Dream Towers, Dubai Marina",
    "investmentType": "HOLD",
    "propertyCategory": "RESIDENTIAL",
    "price": 690000,
    "projectPrice": 690000,
    "propertyType": "APARTMENT",
    "investmentCategory": "SHORT_TERM",
    "propertyStatus": "EXITED",
    "renovationProgress": 100,
    "totalReturnRoi": 177290.02,
    "totalReturnRoiPercentage": 22.37,
    "investors": 207,
    "rental": {
      "grossYield": 16.86,
      "netYield": 15.21,
      "dividendYield": 10.16,
      "grossRent": 116344,
      "netRent": 82609.5,
      "totalRentalIncome": 95212.77,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 207,
      "annualized": 10.42,
      "totalGrossRoi": 68.55,
      "investmentPeriod": 29,
      "funded": 110.01,
      "fundedAmount": 759069,
      "totalReturnRoi": 177290.02,
      "totalReturnRoiPercentage": 22.37,
      "renovationProgress": 100
    },
    "valuation": {
      "marketValue": null,
      "marketValuePercentage": 19.57,
      "saleProceed": 898247,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 1,
      "bathrooms": 1
    },
    "location": {
      "area": {
        "name": "Dubai Marina",
        "displayName": "Dubai Marina"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2022-08-18",
      "closeDate": "2022-06-29",
      "soldDate": "2022-08-18",
      "completionDate": null
    }
  },
  {
    "id": 609,
    "code": "SC-212",
    "title": "Modern Studio in Bloom Towers, JVC",
    "investmentType": "HOLD",
    "propertyCategory": "RESIDENTIAL",
    "price": 385000,
    "projectPrice": 385000,
    "propertyType": "APARTMENT",
    "investmentCategory": "LONG_TERM",
    "propertyStatus": "SOLD",
    "renovationProgress": null,
    "totalReturnRoi": -397057.37,
    "totalReturnRoiPercentage": -78.65,
    "investors": 121,
    "rental": {
      "grossYield": 9.61,
      "netYield": 8.73,
      "dividendYield": 8.11,
      "grossRent": 37000,
      "netRent": 31221,
      "totalRentalIncome": 107811.65,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 121,
      "annualized": 8.08,
      "totalGrossRoi": 46.9,
      "investmentPeriod": 60,
      "funded": 109.27,
      "fundedAmount": 420689.5,
      "totalReturnRoi": null,
      "totalReturnRoiPercentage": null,
      "renovationProgress": null
    },
    "valuation": {
      "marketValue": null,
      "marketValuePercentage": 58.44,
      "saleProceed": 0,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 0,
      "bathrooms": 1
    },
    "location": {
      "area": {
        "name": "JVC",
        "displayName": "JVC"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2022-07-01",
      "closeDate": "2022-06-14",
      "soldDate": "2022-07-01",
      "completionDate": null
    }
  },
  {
    "id": 608,
    "code": "SC-211",
    "title": "1-Bedroom in Dream Towers, Dubai Marina",
    "investmentType": "HOLD",
    "propertyCategory": "RESIDENTIAL",
    "price": 600000,
    "projectPrice": 600000,
    "propertyType": "APARTMENT",
    "investmentCategory": "SHORT_TERM",
    "propertyStatus": "EXITED",
    "renovationProgress": 100,
    "totalReturnRoi": 264500.32,
    "totalReturnRoiPercentage": 38.09,
    "investors": 118,
    "rental": {
      "grossYield": 18.1,
      "netYield": 16.56,
      "dividendYield": 11.03,
      "grossRent": 108588,
      "netRent": 78469.75,
      "totalRentalIncome": 104887.4,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 118,
      "annualized": 10.55,
      "totalGrossRoi": 69.45,
      "investmentPeriod": 31,
      "funded": 107.46,
      "fundedAmount": 644760,
      "totalReturnRoi": 264500.32,
      "totalReturnRoiPercentage": 38.09,
      "renovationProgress": 100
    },
    "valuation": {
      "marketValue": null,
      "marketValuePercentage": 33.33,
      "saleProceed": 877205.42,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 1,
      "bathrooms": 1
    },
    "location": {
      "area": {
        "name": "Dubai Marina",
        "displayName": "Dubai Marina"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2022-06-29",
      "closeDate": "2022-05-12",
      "soldDate": "2022-06-29",
      "completionDate": null
    }
  },
  {
    "id": 605,
    "code": "SC-208",
    "title": "Fantastic 1-Bedroom in 8 Boulevard Walk, Downtown",
    "investmentType": "HOLD",
    "propertyCategory": "RESIDENTIAL",
    "price": 980000,
    "projectPrice": 980000,
    "propertyType": "APARTMENT",
    "investmentCategory": "SHORT_TERM",
    "propertyStatus": "EXITED",
    "renovationProgress": 100,
    "totalReturnRoi": 564131.52,
    "totalReturnRoiPercentage": 51.12,
    "investors": 112,
    "rental": {
      "grossYield": 17.41,
      "netYield": 15.69,
      "dividendYield": 11.27,
      "grossRent": 170638,
      "netRent": 121247.38,
      "totalRentalIncome": 178604.55,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 112,
      "annualized": 11.64,
      "totalGrossRoi": 71.3,
      "investmentPeriod": 43,
      "funded": 102.05,
      "fundedAmount": 1000090,
      "totalReturnRoi": 564131.52,
      "totalReturnRoiPercentage": 51.12,
      "renovationProgress": 100
    },
    "valuation": {
      "marketValue": null,
      "marketValuePercentage": 47.96,
      "saleProceed": 1531158.22,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 1,
      "bathrooms": 1
    },
    "location": {
      "area": {
        "name": "Downtown Dubai",
        "displayName": "Downtown Dubai"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2022-05-24",
      "closeDate": "2022-05-08",
      "soldDate": "2022-05-24",
      "completionDate": null
    }
  },
  {
    "id": 602,
    "code": "SC-205",
    "title": "1-Bedroom in 8 Boulevard Walk, Downtown Dubai",
    "investmentType": "HOLD",
    "propertyCategory": "RESIDENTIAL",
    "price": 1000000,
    "projectPrice": 1000000,
    "propertyType": "APARTMENT",
    "investmentCategory": "SHORT_TERM",
    "propertyStatus": "SOLD",
    "renovationProgress": null,
    "totalReturnRoi": -916180.2,
    "totalReturnRoiPercentage": -80.07,
    "investors": 157,
    "rental": {
      "grossYield": 17.06,
      "netYield": 15.29,
      "dividendYield": 10.95,
      "grossRent": 170638,
      "netRent": 120334.38,
      "totalRentalIncome": 227978.25,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 157,
      "annualized": 11.74,
      "totalGrossRoi": 72.4,
      "investmentPeriod": 60,
      "funded": 102,
      "fundedAmount": 1020000,
      "totalReturnRoi": null,
      "totalReturnRoiPercentage": null,
      "renovationProgress": null
    },
    "valuation": {
      "marketValue": null,
      "marketValuePercentage": 50,
      "saleProceed": 0,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 1,
      "bathrooms": 1
    },
    "location": {
      "area": {
        "name": "Downtown Dubai",
        "displayName": "Downtown Dubai"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2022-05-18",
      "closeDate": "2022-04-21",
      "soldDate": "2022-05-18",
      "completionDate": null
    }
  },
  {
    "id": 599,
    "code": "SC-202",
    "title": "Remarkable 2-Bedroom in Dubai Marina",
    "investmentType": "HOLD",
    "propertyCategory": "RESIDENTIAL",
    "price": 925000,
    "projectPrice": 925000,
    "propertyType": "APARTMENT",
    "investmentCategory": "SHORT_TERM",
    "propertyStatus": "EXITED",
    "renovationProgress": 100,
    "totalReturnRoi": 454605.86,
    "totalReturnRoiPercentage": 43.53,
    "investors": 126,
    "rental": {
      "grossYield": 18.45,
      "netYield": 17.19,
      "dividendYield": 11.82,
      "grossRent": 170638,
      "netRent": 126262.38,
      "totalRentalIncome": 140645.83,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 126,
      "annualized": 12.09,
      "totalGrossRoi": 74.75,
      "investmentPeriod": 32,
      "funded": 101.11,
      "fundedAmount": 935267.5,
      "totalReturnRoi": 454605.86,
      "totalReturnRoiPercentage": 43.53,
      "renovationProgress": 100
    },
    "valuation": {
      "marketValue": null,
      "marketValuePercentage": 51.35,
      "saleProceed": 1394948.78,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 2,
      "bathrooms": 1
    },
    "location": {
      "area": {
        "name": "Dubai Marina",
        "displayName": "Dubai Marina"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2022-04-28",
      "closeDate": "2022-04-08",
      "soldDate": "2022-04-28",
      "completionDate": null
    }
  },
  {
    "id": 598,
    "code": "SC-201",
    "title": "Stellar 1-Bedroom in Downtown Dubai",
    "investmentType": "HOLD",
    "propertyCategory": "RESIDENTIAL",
    "price": 950000,
    "projectPrice": 950000,
    "propertyType": "APARTMENT",
    "investmentCategory": "SHORT_TERM",
    "propertyStatus": "EXITED",
    "renovationProgress": 100,
    "totalReturnRoi": 430970.72,
    "totalReturnRoiPercentage": 40.49,
    "investors": 86,
    "rental": {
      "grossYield": 17.96,
      "netYield": 16.19,
      "dividendYield": 11.63,
      "grossRent": 170638,
      "netRent": 121265.38,
      "totalRentalIncome": 125016.16,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 86,
      "annualized": 12.13,
      "totalGrossRoi": 74.2,
      "investmentPeriod": 28,
      "funded": 100.88,
      "fundedAmount": 958360,
      "totalReturnRoi": 430970.72,
      "totalReturnRoiPercentage": 40.49,
      "renovationProgress": 100
    },
    "valuation": {
      "marketValue": null,
      "marketValuePercentage": 44.74,
      "saleProceed": 1407763.49,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 1,
      "bathrooms": 1
    },
    "location": {
      "area": {
        "name": "Downtown Dubai",
        "displayName": "Downtown Dubai"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2022-06-23",
      "closeDate": "2022-03-15",
      "soldDate": "2022-06-23",
      "completionDate": null
    }
  },
  {
    "id": 590,
    "code": "SC-193",
    "title": "1-Bedroom in Cascades Tower, Dubai Marina",
    "investmentType": "HOLD",
    "propertyCategory": "RESIDENTIAL",
    "price": 800000,
    "projectPrice": 800000,
    "propertyType": "APARTMENT",
    "investmentCategory": "SHORT_TERM",
    "propertyStatus": "EXITED",
    "renovationProgress": 100,
    "totalReturnRoi": 238338.17,
    "totalReturnRoiPercentage": 26.43,
    "investors": 160,
    "rental": {
      "grossYield": 15.12,
      "netYield": 12.92,
      "dividendYield": 8.91,
      "grossRent": 120998,
      "netRent": 80849.36,
      "totalRentalIncome": 72227.33,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 160,
      "annualized": 9.91,
      "totalGrossRoi": 65.4,
      "investmentPeriod": 19,
      "funded": 100.58,
      "fundedAmount": 804640,
      "totalReturnRoi": 238338.17,
      "totalReturnRoiPercentage": 26.43,
      "renovationProgress": 100
    },
    "valuation": {
      "marketValue": null,
      "marketValuePercentage": 34.38,
      "saleProceed": 1096762.09,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 1,
      "bathrooms": 1
    },
    "location": {
      "area": {
        "name": "Dubai Marina",
        "displayName": "Dubai Marina"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2022-04-12",
      "closeDate": "2022-03-25",
      "soldDate": "2022-04-12",
      "completionDate": null
    }
  },
  {
    "id": 589,
    "code": "SC-192",
    "title": "1-Bedroom in MBR City",
    "investmentType": "HOLD",
    "propertyCategory": "RESIDENTIAL",
    "price": 960000,
    "projectPrice": 960000,
    "propertyType": "APARTMENT",
    "investmentCategory": "LONG_TERM",
    "propertyStatus": "SOLD",
    "renovationProgress": null,
    "totalReturnRoi": -868410.18,
    "totalReturnRoiPercentage": -79.11,
    "investors": 97,
    "rental": {
      "grossYield": 9.06,
      "netYield": 7.83,
      "dividendYield": 7.3,
      "grossRent": 87000,
      "netRent": 70055,
      "totalRentalIncome": 229373.46,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 97,
      "annualized": 9.25,
      "totalGrossRoi": 54.7,
      "investmentPeriod": 60,
      "funded": 101.37,
      "fundedAmount": 973152,
      "totalReturnRoi": null,
      "totalReturnRoiPercentage": null,
      "renovationProgress": null
    },
    "valuation": {
      "marketValue": null,
      "marketValuePercentage": 40.63,
      "saleProceed": 0,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 1,
      "bathrooms": 1
    },
    "location": {
      "area": {
        "name": "MBR City",
        "displayName": "MBR City"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2022-04-19",
      "closeDate": "2022-03-15",
      "soldDate": "2022-04-19",
      "completionDate": null
    }
  },
  {
    "id": 587,
    "code": "SC-190",
    "title": "Studio in Dubai Production City (IMPZ)",
    "investmentType": "HOLD",
    "propertyCategory": "RESIDENTIAL",
    "price": 228000,
    "projectPrice": 228000,
    "propertyType": "APARTMENT",
    "investmentCategory": "LONG_TERM",
    "propertyStatus": "SOLD",
    "renovationProgress": null,
    "totalReturnRoi": -290512.76,
    "totalReturnRoiPercentage": -80.85,
    "investors": 75,
    "rental": {
      "grossYield": 10.09,
      "netYield": 8.09,
      "dividendYield": 7.36,
      "grossRent": 23000,
      "netRent": 16776,
      "totalRentalIncome": 68828.01,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 75,
      "annualized": 7.82,
      "totalGrossRoi": 51.7,
      "investmentPeriod": 60,
      "funded": 129.67,
      "fundedAmount": 295647.6,
      "totalReturnRoi": null,
      "totalReturnRoiPercentage": null,
      "renovationProgress": null
    },
    "valuation": {
      "marketValue": null,
      "marketValuePercentage": 53.51,
      "saleProceed": 0,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 0,
      "bathrooms": 1
    },
    "location": {
      "area": {
        "name": "IMPZ",
        "displayName": "IMPZ"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2022-03-14",
      "closeDate": "2022-03-14",
      "soldDate": "2022-03-14",
      "completionDate": null
    }
  },
  {
    "id": 586,
    "code": "SC-189",
    "title": "Modern Studio in Jumeirah Lake Towers",
    "investmentType": "HOLD",
    "propertyCategory": "RESIDENTIAL",
    "price": 425000,
    "projectPrice": 425000,
    "propertyType": "APARTMENT",
    "investmentCategory": "LONG_TERM",
    "propertyStatus": "SOLD",
    "renovationProgress": null,
    "totalReturnRoi": -386228.5,
    "totalReturnRoiPercentage": -74.57,
    "investors": 88,
    "rental": {
      "grossYield": 10.12,
      "netYield": 8.69,
      "dividendYield": 8.06,
      "grossRent": 43000,
      "netRent": 34268,
      "totalRentalIncome": 131678.45,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 88,
      "annualized": 9.09,
      "totalGrossRoi": 54.5,
      "investmentPeriod": 60,
      "funded": 105.31,
      "fundedAmount": 447567.5,
      "totalReturnRoi": null,
      "totalReturnRoiPercentage": null,
      "renovationProgress": null
    },
    "valuation": {
      "marketValue": null,
      "marketValuePercentage": 52.94,
      "saleProceed": 0,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 0,
      "bathrooms": 1
    },
    "location": {
      "area": {
        "name": "JLT",
        "displayName": "JLT"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2022-02-11",
      "closeDate": "2022-02-11",
      "soldDate": "2022-02-11",
      "completionDate": null
    }
  },
  {
    "id": 584,
    "code": "SC-187",
    "title": "Yacht Bay Studio in Dubai Marina",
    "investmentType": "HOLD",
    "propertyCategory": "RESIDENTIAL",
    "price": 630000,
    "projectPrice": 630000,
    "propertyType": "APARTMENT",
    "investmentCategory": "SHORT_TERM",
    "propertyStatus": "EXITED",
    "renovationProgress": 100,
    "totalReturnRoi": 336488.24,
    "totalReturnRoiPercentage": 47.08,
    "investors": 60,
    "rental": {
      "grossYield": 13.9,
      "netYield": 12.76,
      "dividendYield": 8.62,
      "grossRent": 87600,
      "netRent": 63930,
      "totalRentalIncome": 165190.96,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 60,
      "annualized": 9.45,
      "totalGrossRoi": 59.95,
      "investmentPeriod": 47,
      "funded": 105.87,
      "fundedAmount": 666981,
      "totalReturnRoi": 336488.24,
      "totalReturnRoiPercentage": 47.08,
      "renovationProgress": 100
    },
    "valuation": {
      "marketValue": null,
      "marketValuePercentage": 46.03,
      "saleProceed": 910307.28,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 0,
      "bathrooms": 1
    },
    "location": {
      "area": {
        "name": "Downtown Dubai",
        "displayName": "Downtown Dubai"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2022-02-24",
      "closeDate": "2021-12-31",
      "soldDate": "2022-02-24",
      "completionDate": null
    }
  },
  {
    "id": 583,
    "code": "SC-186",
    "title": "Burj Views Podium",
    "investmentType": "HOLD",
    "propertyCategory": "RESIDENTIAL",
    "price": 780000,
    "projectPrice": 780000,
    "propertyType": "APARTMENT",
    "investmentCategory": "SHORT_TERM",
    "propertyStatus": "SOLD",
    "renovationProgress": null,
    "totalReturnRoi": -713006.06,
    "totalReturnRoiPercentage": -78.65,
    "investors": 64,
    "rental": {
      "grossYield": 13.52,
      "netYield": 11.99,
      "dividendYield": 7.64,
      "grossRent": 105485,
      "netRent": 73972.7,
      "totalRentalIncome": 193530.16,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 64,
      "annualized": 8.88,
      "totalGrossRoi": 60.15,
      "investmentPeriod": 60,
      "funded": 102.93,
      "fundedAmount": 802854,
      "totalReturnRoi": null,
      "totalReturnRoiPercentage": null,
      "renovationProgress": null
    },
    "valuation": {
      "marketValue": null,
      "marketValuePercentage": 60.26,
      "saleProceed": 0,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 0,
      "bathrooms": 1
    },
    "location": {
      "area": {
        "name": "Downtown Dubai",
        "displayName": "Downtown Dubai"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2022-03-18",
      "closeDate": "2022-02-17",
      "soldDate": "2022-03-18",
      "completionDate": null
    }
  },
  {
    "id": 582,
    "code": "SC-185",
    "title": "Studio One",
    "investmentType": "HOLD",
    "propertyCategory": "RESIDENTIAL",
    "price": 730000,
    "projectPrice": 730000,
    "propertyType": "APARTMENT",
    "investmentCategory": "SHORT_TERM",
    "propertyStatus": "EXITED",
    "renovationProgress": 100,
    "totalReturnRoi": 273282.16,
    "totalReturnRoiPercentage": 33.23,
    "investors": 148,
    "rental": {
      "grossYield": 13.81,
      "netYield": 12.77,
      "dividendYield": 8.23,
      "grossRent": 100831,
      "netRent": 74451.42,
      "totalRentalIncome": 78335.55,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 148,
      "annualized": 9.32,
      "totalGrossRoi": 60.7,
      "investmentPeriod": 23,
      "funded": 100.22,
      "fundedAmount": 731606,
      "totalReturnRoi": 273282.16,
      "totalReturnRoiPercentage": 33.23,
      "renovationProgress": 100
    },
    "valuation": {
      "marketValue": null,
      "marketValuePercentage": 43.84,
      "saleProceed": 1044650.36,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 0,
      "bathrooms": 1
    },
    "location": {
      "area": {
        "name": "Dubai Marina",
        "displayName": "Dubai Marina"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2022-02-25",
      "closeDate": "2022-02-10",
      "soldDate": "2022-02-25",
      "completionDate": null
    }
  },
  {
    "id": 581,
    "code": "SC-184",
    "title": "Silicon Gates 1 A",
    "investmentType": "HOLD",
    "propertyCategory": "RESIDENTIAL",
    "price": 280000,
    "projectPrice": 280000,
    "propertyType": "APARTMENT",
    "investmentCategory": "LONG_TERM",
    "propertyStatus": "SOLD",
    "renovationProgress": null,
    "totalReturnRoi": -275761.37,
    "totalReturnRoiPercentage": -75.96,
    "investors": 30,
    "rental": {
      "grossYield": 10.71,
      "netYield": 8.86,
      "dividendYield": 8.14,
      "grossRent": 30000,
      "netRent": 22786,
      "totalRentalIncome": 87264.66,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 30,
      "annualized": 7.34,
      "totalGrossRoi": 47.5,
      "investmentPeriod": 60,
      "funded": 108.84,
      "fundedAmount": 304752,
      "totalReturnRoi": null,
      "totalReturnRoiPercentage": null,
      "renovationProgress": null
    },
    "valuation": {
      "marketValue": null,
      "marketValuePercentage": 46.43,
      "saleProceed": null,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 0,
      "bathrooms": 1
    },
    "location": {
      "area": {
        "name": "Silicon Oasis",
        "displayName": "Silicon Oasis"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2022-01-31",
      "closeDate": "2022-01-18",
      "soldDate": "2022-01-31",
      "completionDate": null
    }
  },
  {
    "id": 580,
    "code": "SC-183",
    "title": "Fantastic Studio in Dubai Silicon Oasis",
    "investmentType": "HOLD",
    "propertyCategory": "RESIDENTIAL",
    "price": 280000,
    "projectPrice": 280000,
    "propertyType": "APARTMENT",
    "investmentCategory": "LONG_TERM",
    "propertyStatus": "SOLD",
    "renovationProgress": null,
    "totalReturnRoi": -295130.23,
    "totalReturnRoiPercentage": -76.45,
    "investors": 47,
    "rental": {
      "grossYield": 10.71,
      "netYield": 9.17,
      "dividendYield": 8.45,
      "grossRent": 30000,
      "netRent": 23655,
      "totalRentalIncome": 90892.62,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 47,
      "annualized": 7.9,
      "totalGrossRoi": 49,
      "investmentPeriod": 60,
      "funded": 116.2,
      "fundedAmount": 325360,
      "totalReturnRoi": null,
      "totalReturnRoiPercentage": null,
      "renovationProgress": null
    },
    "valuation": {
      "marketValue": null,
      "marketValuePercentage": 32.14,
      "saleProceed": null,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 0,
      "bathrooms": 1
    },
    "location": {
      "area": {
        "name": "Downtown Dubai",
        "displayName": "Downtown Dubai"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2022-02-02",
      "closeDate": "2022-01-18",
      "soldDate": "2022-02-02",
      "completionDate": null
    }
  },
  {
    "id": 579,
    "code": "SC-182",
    "title": "Shamal Residence 2",
    "investmentType": "HOLD",
    "propertyCategory": "RESIDENTIAL",
    "price": 360000,
    "projectPrice": 360000,
    "propertyType": "APARTMENT",
    "investmentCategory": "LONG_TERM",
    "propertyStatus": "EXITED",
    "renovationProgress": 100,
    "totalReturnRoi": 206512.31,
    "totalReturnRoiPercentage": 49.89,
    "investors": 16,
    "rental": {
      "grossYield": 9.72,
      "netYield": 7.77,
      "dividendYield": 7.14,
      "grossRent": 35000,
      "netRent": 25707,
      "totalRentalIncome": 104537.81,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 16,
      "annualized": 8.68,
      "totalGrossRoi": 56.1,
      "investmentPeriod": 47,
      "funded": 100,
      "fundedAmount": 360000,
      "totalReturnRoi": 206512.31,
      "totalReturnRoiPercentage": 49.89,
      "renovationProgress": 100
    },
    "valuation": {
      "marketValue": null,
      "marketValuePercentage": 52.78,
      "saleProceed": 530318.25,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 0,
      "bathrooms": 1
    },
    "location": {
      "area": {
        "name": "JVC",
        "displayName": "JVC"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2022-01-31",
      "closeDate": "2021-12-31",
      "soldDate": "2022-01-31",
      "completionDate": null
    }
  },
  {
    "id": 578,
    "code": "SC-181",
    "title": "1-Bedroom in The Cascades, Dubai Marina",
    "investmentType": "HOLD",
    "propertyCategory": "RESIDENTIAL",
    "price": 800000,
    "projectPrice": 800000,
    "propertyType": "APARTMENT",
    "investmentCategory": "SHORT_TERM",
    "propertyStatus": "EXITED",
    "renovationProgress": 100,
    "totalReturnRoi": 277355.69,
    "totalReturnRoiPercentage": 30.76,
    "investors": 75,
    "rental": {
      "grossYield": 13.57,
      "netYield": 11.33,
      "dividendYield": 7.59,
      "grossRent": 108588,
      "netRent": 70312.16,
      "totalRentalIncome": 99303.22,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 75,
      "annualized": 8.8,
      "totalGrossRoi": 60.1,
      "investmentPeriod": 27,
      "funded": 100.56,
      "fundedAmount": 804480,
      "totalReturnRoi": 277355.69,
      "totalReturnRoiPercentage": 30.76,
      "renovationProgress": 100
    },
    "valuation": {
      "marketValue": null,
      "marketValuePercentage": 37.5,
      "saleProceed": 1109382.28,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 1,
      "bathrooms": 1
    },
    "location": {
      "area": {
        "name": "Dubai Marina",
        "displayName": "Dubai Marina"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2022-01-05",
      "closeDate": "2021-12-22",
      "soldDate": "2022-01-05",
      "completionDate": null
    }
  },
  {
    "id": 577,
    "code": "SC-180",
    "title": "Studio apartment in KOA Canvas, MBR City",
    "investmentType": "HOLD",
    "propertyCategory": "RESIDENTIAL",
    "price": 700000,
    "projectPrice": 700000,
    "propertyType": "APARTMENT",
    "investmentCategory": "LONG_TERM",
    "propertyStatus": "SOLD",
    "renovationProgress": null,
    "totalReturnRoi": -624636.81,
    "totalReturnRoiPercentage": -77.05,
    "investors": 59,
    "rental": {
      "grossYield": 10,
      "netYield": 8.42,
      "dividendYield": 7.84,
      "grossRent": 70000,
      "netRent": 54908,
      "totalRentalIncome": 186090.02,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 59,
      "annualized": 8.27,
      "totalGrossRoi": 55.55,
      "investmentPeriod": 60,
      "funded": 103.31,
      "fundedAmount": 723170,
      "totalReturnRoi": null,
      "totalReturnRoiPercentage": null,
      "renovationProgress": null
    },
    "valuation": {
      "marketValue": null,
      "marketValuePercentage": 35.71,
      "saleProceed": 0,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 0,
      "bathrooms": 1
    },
    "location": {
      "area": {
        "name": "MBR City",
        "displayName": "MBR City"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2021-12-09",
      "closeDate": "2021-11-17",
      "soldDate": "2021-12-09",
      "completionDate": null
    }
  },
  {
    "id": 576,
    "code": "SC-179",
    "title": "One Bedroom in Fortunato Tower, JVC",
    "investmentType": "HOLD",
    "propertyCategory": "RESIDENTIAL",
    "price": 420000,
    "projectPrice": 420000,
    "propertyType": "APARTMENT",
    "investmentCategory": "LONG_TERM",
    "propertyStatus": "EXITED",
    "renovationProgress": 100,
    "totalReturnRoi": 310774.34,
    "totalReturnRoiPercentage": 63.92,
    "investors": 84,
    "rental": {
      "grossYield": 9.76,
      "netYield": 8.14,
      "dividendYield": 7.53,
      "grossRent": 41000,
      "netRent": 31625,
      "totalRentalIncome": 102375.65,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 84,
      "annualized": 7.95,
      "totalGrossRoi": 49.4,
      "investmentPeriod": 35,
      "funded": 104.27,
      "fundedAmount": 437934,
      "totalReturnRoi": 310774.34,
      "totalReturnRoiPercentage": 63.92,
      "renovationProgress": 100
    },
    "valuation": {
      "marketValue": null,
      "marketValuePercentage": 57.14,
      "saleProceed": 713403.07,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 1,
      "bathrooms": 1
    },
    "location": {
      "area": {
        "name": "JVC",
        "displayName": "JVC"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2021-11-24",
      "closeDate": "2021-11-24",
      "soldDate": "2021-11-24",
      "completionDate": null
    }
  },
  {
    "id": 575,
    "code": "SC-178",
    "title": "Studio in Marquise Square, Business Bay",
    "investmentType": "HOLD",
    "propertyCategory": "RESIDENTIAL",
    "price": 720000,
    "projectPrice": 720000,
    "propertyType": "APARTMENT",
    "investmentCategory": "LONG_TERM",
    "propertyStatus": "EXITED",
    "renovationProgress": 100,
    "totalReturnRoi": 457587.82,
    "totalReturnRoiPercentage": 56.24,
    "investors": 73,
    "rental": {
      "grossYield": 12.93,
      "netYield": 11.94,
      "dividendYield": 8.04,
      "grossRent": 93075,
      "netRent": 68712.5,
      "totalRentalIncome": 153257.69,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 73,
      "annualized": 9.06,
      "totalGrossRoi": 57,
      "investmentPeriod": 36,
      "funded": 102.61,
      "fundedAmount": 738792,
      "totalReturnRoi": 457587.82,
      "totalReturnRoiPercentage": 56.24,
      "renovationProgress": 100
    },
    "valuation": {
      "marketValue": null,
      "marketValuePercentage": 42.36,
      "saleProceed": 1148022.63,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 0,
      "bathrooms": 1
    },
    "location": {
      "area": {
        "name": "Business Bay",
        "displayName": "Business Bay"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2021-11-28",
      "closeDate": "2021-10-30",
      "soldDate": "2021-11-28",
      "completionDate": null
    }
  },
  {
    "id": 574,
    "code": "SC-177",
    "title": "1-Bedroom in Botanica Tower, Dubai Marina",
    "investmentType": "HOLD",
    "propertyCategory": "RESIDENTIAL",
    "price": 1200000,
    "projectPrice": 1200000,
    "propertyType": "APARTMENT",
    "investmentCategory": "SHORT_TERM",
    "propertyStatus": "SOLD",
    "renovationProgress": null,
    "totalReturnRoi": -1093261.93,
    "totalReturnRoiPercentage": -79.03,
    "investors": 130,
    "rental": {
      "grossYield": 11.38,
      "netYield": 10.32,
      "dividendYield": 7.4,
      "grossRent": 136510,
      "netRent": 98456.2,
      "totalRentalIncome": 290090.12,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 130,
      "annualized": 9.12,
      "totalGrossRoi": 54.55,
      "investmentPeriod": 60,
      "funded": 104.03,
      "fundedAmount": 1248360,
      "totalReturnRoi": null,
      "totalReturnRoiPercentage": null,
      "renovationProgress": null
    },
    "valuation": {
      "marketValue": null,
      "marketValuePercentage": 33.33,
      "saleProceed": 0,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 1,
      "bathrooms": 1
    },
    "location": {
      "area": {
        "name": "Downtown Dubai",
        "displayName": "Downtown Dubai"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2021-11-30",
      "closeDate": "2021-11-21",
      "soldDate": "2021-11-30",
      "completionDate": null
    }
  },
  {
    "id": 573,
    "code": "SC-176",
    "title": "One Bedroom in Burj Views A, Downtown Dubai",
    "investmentType": "HOLD",
    "propertyCategory": "RESIDENTIAL",
    "price": 925000,
    "projectPrice": 925000,
    "propertyType": "APARTMENT",
    "investmentCategory": "LONG_TERM",
    "propertyStatus": "SOLD",
    "renovationProgress": null,
    "totalReturnRoi": -769639.3,
    "totalReturnRoiPercentage": -73.41,
    "investors": 48,
    "rental": {
      "grossYield": 13.42,
      "netYield": 11.67,
      "dividendYield": 7.62,
      "grossRent": 124100,
      "netRent": 84891,
      "totalRentalIncome": 278773.47,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 48,
      "annualized": 8.93,
      "totalGrossRoi": 60,
      "investmentPeriod": 60,
      "funded": 100.37,
      "fundedAmount": 928422.5,
      "totalReturnRoi": null,
      "totalReturnRoiPercentage": null,
      "renovationProgress": null
    },
    "valuation": {
      "marketValue": null,
      "marketValuePercentage": 78.38,
      "saleProceed": 0,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 1,
      "bathrooms": 1
    },
    "location": {
      "area": {
        "name": "Downtown Dubai",
        "displayName": "Downtown Dubai"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2021-11-28",
      "closeDate": "2021-10-28",
      "soldDate": "2021-11-28",
      "completionDate": null
    }
  },
  {
    "id": 572,
    "code": "SC-175",
    "title": "Studio apartment in Eaton Place by Ellington, JVC",
    "investmentType": "HOLD",
    "propertyCategory": "RESIDENTIAL",
    "price": 405000,
    "projectPrice": 405000,
    "propertyType": "APARTMENT",
    "investmentCategory": "LONG_TERM",
    "propertyStatus": "SOLD",
    "renovationProgress": null,
    "totalReturnRoi": -418411.91,
    "totalReturnRoiPercentage": -75.55,
    "investors": 74,
    "rental": {
      "grossYield": 8.4,
      "netYield": 7.09,
      "dividendYield": 6.54,
      "grossRent": 34000,
      "netRent": 26507,
      "totalRentalIncome": 135428.66,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 74,
      "annualized": 7.03,
      "totalGrossRoi": 43.1,
      "investmentPeriod": 60,
      "funded": 114.37,
      "fundedAmount": 463198.5,
      "totalReturnRoi": null,
      "totalReturnRoiPercentage": null,
      "renovationProgress": null
    },
    "valuation": {
      "marketValue": null,
      "marketValuePercentage": 48.15,
      "saleProceed": null,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 0,
      "bathrooms": 1
    },
    "location": {
      "area": {
        "name": "JVC",
        "displayName": "JVC"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2021-11-10",
      "closeDate": "2021-10-19",
      "soldDate": "2021-11-10",
      "completionDate": null
    }
  },
  {
    "id": 571,
    "code": "SC-174",
    "title": "Studio apartment in Mag 5, Dubai South",
    "investmentType": "HOLD",
    "propertyCategory": "RESIDENTIAL",
    "price": 291000,
    "projectPrice": 291000,
    "propertyType": "APARTMENT",
    "investmentCategory": "LONG_TERM",
    "propertyStatus": "EXITED",
    "renovationProgress": 100,
    "totalReturnRoi": 96827.07,
    "totalReturnRoiPercentage": 29.03,
    "investors": 69,
    "rental": {
      "grossYield": 17.06,
      "netYield": null,
      "dividendYield": 10.51,
      "grossRent": 49640,
      "netRent": 40179.8,
      "totalRentalIncome": 63350.17,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 69,
      "annualized": 7.31,
      "totalGrossRoi": 44.55,
      "investmentPeriod": 38,
      "funded": 105.67,
      "fundedAmount": 307499.7,
      "totalReturnRoi": 96827.07,
      "totalReturnRoiPercentage": 29.03,
      "renovationProgress": 100
    },
    "valuation": {
      "marketValue": null,
      "marketValuePercentage": 30.58,
      "saleProceed": 376885.78,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 0,
      "bathrooms": 1
    },
    "location": {
      "area": {
        "name": "Dubai South City",
        "displayName": "Dubai South City"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2021-11-04",
      "closeDate": "2021-09-29",
      "soldDate": "2021-11-04",
      "completionDate": null
    }
  },
  {
    "id": 568,
    "code": "SC-171",
    "title": "JBR - Murjan 2 - Studio",
    "investmentType": "HOLD",
    "propertyCategory": "RESIDENTIAL",
    "price": 850000,
    "projectPrice": 850000,
    "propertyType": "APARTMENT",
    "investmentCategory": "SHORT_TERM",
    "propertyStatus": "EXITED",
    "renovationProgress": 100,
    "totalReturnRoi": 344558.56,
    "totalReturnRoiPercentage": 36.13,
    "investors": 102,
    "rental": {
      "grossYield": 11.86,
      "netYield": 10.72,
      "dividendYield": 7.09,
      "grossRent": 100831,
      "netRent": 72260.42,
      "totalRentalIncome": 194125.05,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 102,
      "annualized": 8.44,
      "totalGrossRoi": 54.25,
      "investmentPeriod": 37,
      "funded": 101.69,
      "fundedAmount": 864365,
      "totalReturnRoi": 344558.56,
      "totalReturnRoiPercentage": 36.13,
      "renovationProgress": 100
    },
    "valuation": {
      "marketValue": null,
      "marketValuePercentage": 41.18,
      "saleProceed": 1134142.89,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 0,
      "bathrooms": 1
    },
    "location": {
      "area": {
        "name": "JBR",
        "displayName": "JBR"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2021-09-30",
      "closeDate": "2021-11-15",
      "soldDate": "2021-09-30",
      "completionDate": null
    }
  },
  {
    "id": 567,
    "code": "SC-170",
    "title": "Bloom Tower Studio",
    "investmentType": "HOLD",
    "propertyCategory": "RESIDENTIAL",
    "price": 370000,
    "projectPrice": 370000,
    "propertyType": "APARTMENT",
    "investmentCategory": "LONG_TERM",
    "propertyStatus": "SOLD",
    "renovationProgress": null,
    "totalReturnRoi": -296482.27,
    "totalReturnRoiPercentage": -67.19,
    "investors": 43,
    "rental": {
      "grossYield": 9.73,
      "netYield": 8.6,
      "dividendYield": 7.97,
      "grossRent": 36000,
      "netRent": 29506,
      "totalRentalIncome": 144771.26,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 43,
      "annualized": 7.49,
      "totalGrossRoi": 44.8,
      "investmentPeriod": 60,
      "funded": 101.77,
      "fundedAmount": 376549,
      "totalReturnRoi": null,
      "totalReturnRoiPercentage": null,
      "renovationProgress": null
    },
    "valuation": {
      "marketValue": null,
      "marketValuePercentage": 64.86,
      "saleProceed": null,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 0,
      "bathrooms": 1
    },
    "location": {
      "area": {
        "name": "JVC",
        "displayName": "JVC"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2021-10-10",
      "closeDate": "2021-09-26",
      "soldDate": "2021-10-10",
      "completionDate": null
    }
  },
  {
    "id": 566,
    "code": "SC-169",
    "title": "2 bedroom in Studio One, Dubai Marina ",
    "investmentType": "HOLD",
    "propertyCategory": "RESIDENTIAL",
    "price": 1250000,
    "projectPrice": 1250000,
    "propertyType": "APARTMENT",
    "investmentCategory": "SHORT_TERM",
    "propertyStatus": "EXITED",
    "renovationProgress": 100,
    "totalReturnRoi": 773661.52,
    "totalReturnRoiPercentage": 55.77,
    "investors": 155,
    "rental": {
      "grossYield": 11.68,
      "netYield": 10.64,
      "dividendYield": 7.71,
      "grossRent": 146000,
      "netRent": 105913,
      "totalRentalIncome": 390224.5,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 155,
      "annualized": 9.32,
      "totalGrossRoi": 55.25,
      "investmentPeriod": 49,
      "funded": 101.72,
      "fundedAmount": 1271500,
      "totalReturnRoi": 773661.52,
      "totalReturnRoiPercentage": 55.77,
      "renovationProgress": 100
    },
    "valuation": {
      "marketValue": null,
      "marketValuePercentage": 44,
      "saleProceed": 1820625.77,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 2,
      "bathrooms": 2
    },
    "location": {
      "area": {
        "name": "Dubai Marina",
        "displayName": "Dubai Marina"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2021-10-31",
      "closeDate": "2021-10-31",
      "soldDate": "2021-10-31",
      "completionDate": null
    }
  },
  {
    "id": 565,
    "code": "SC-168",
    "title": "Boulevard Central 2, Studio",
    "investmentType": "HOLD",
    "propertyCategory": "RESIDENTIAL",
    "price": 875000,
    "projectPrice": 875000,
    "propertyType": "APARTMENT",
    "investmentCategory": "SHORT_TERM",
    "propertyStatus": "EXITED",
    "renovationProgress": 100,
    "totalReturnRoi": 453896.94,
    "totalReturnRoiPercentage": 46.39,
    "investors": 68,
    "rental": {
      "grossYield": 11.56,
      "netYield": 10.59,
      "dividendYield": 7.35,
      "grossRent": 101108,
      "netRent": 73930.56,
      "totalRentalIncome": 236297.44,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 68,
      "annualized": 10.5,
      "totalGrossRoi": 62.35,
      "investmentPeriod": 52,
      "funded": 105.29,
      "fundedAmount": 921287.5,
      "totalReturnRoi": 453896.94,
      "totalReturnRoiPercentage": 46.39,
      "renovationProgress": 100
    },
    "valuation": {
      "marketValue": null,
      "marketValuePercentage": 42.86,
      "saleProceed": 1229469.5,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 0,
      "bathrooms": 1
    },
    "location": {
      "area": {
        "name": "Downtown Dubai",
        "displayName": "Downtown Dubai"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2021-09-23",
      "closeDate": "2021-09-02",
      "soldDate": "2021-09-23",
      "completionDate": null
    }
  },
  {
    "id": 563,
    "code": "SC-166",
    "title": "Studio in Claren Tower 1, Downtown Dubai",
    "investmentType": "HOLD",
    "propertyCategory": "RESIDENTIAL",
    "price": 775000,
    "projectPrice": 775000,
    "propertyType": "APARTMENT",
    "investmentCategory": "SHORT_TERM",
    "propertyStatus": "EXITED",
    "renovationProgress": 100,
    "totalReturnRoi": 517382.86,
    "totalReturnRoiPercentage": 59.55,
    "investors": 63,
    "rental": {
      "grossYield": 13.05,
      "netYield": 11.56,
      "dividendYield": 7.75,
      "grossRent": 101108,
      "netRent": 70897.56,
      "totalRentalIncome": 254411.1,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 63,
      "annualized": 6.02,
      "totalGrossRoi": 43.6,
      "investmentPeriod": 51,
      "funded": 102.46,
      "fundedAmount": 794065,
      "totalReturnRoi": 517382.86,
      "totalReturnRoiPercentage": 59.55,
      "renovationProgress": 100
    },
    "valuation": {
      "marketValue": null,
      "marketValuePercentage": 51.61,
      "saleProceed": 1163985.51,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 0,
      "bathrooms": 1
    },
    "location": {
      "area": {
        "name": "Downtown Dubai",
        "displayName": "Downtown Dubai"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2021-08-29",
      "closeDate": "2021-08-15",
      "soldDate": "2021-08-29",
      "completionDate": null
    }
  },
  {
    "id": 562,
    "code": "SC-165",
    "title": "Two Bedroom in Emaar's Turia, The Views",
    "investmentType": "HOLD",
    "propertyCategory": "RESIDENTIAL",
    "price": 1100000,
    "projectPrice": 1100000,
    "propertyType": "APARTMENT",
    "investmentCategory": "LONG_TERM",
    "propertyStatus": "EXITED",
    "renovationProgress": 100,
    "totalReturnRoi": 635867.38,
    "totalReturnRoiPercentage": 52.77,
    "investors": 65,
    "rental": {
      "grossYield": 8.18,
      "netYield": 6.18,
      "dividendYield": 5.73,
      "grossRent": 90000,
      "netRent": 62975,
      "totalRentalIncome": 129858.18,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 65,
      "annualized": 9.85,
      "totalGrossRoi": 60.35,
      "investmentPeriod": 26,
      "funded": 100,
      "fundedAmount": 1100000,
      "totalReturnRoi": 635867.38,
      "totalReturnRoiPercentage": 52.77,
      "renovationProgress": 100
    },
    "valuation": {
      "marketValue": null,
      "marketValuePercentage": 36.36,
      "saleProceed": 1756922.95,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 2,
      "bathrooms": 3
    },
    "location": {
      "area": {
        "name": "The Views",
        "displayName": "The Views"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2021-08-22",
      "closeDate": "2021-10-25",
      "soldDate": "2021-08-22",
      "completionDate": null
    }
  },
  {
    "id": 560,
    "code": "SC-163",
    "title": "Mag 5 - 565 - Studio",
    "investmentType": "HOLD",
    "propertyCategory": "RESIDENTIAL",
    "price": 292006,
    "projectPrice": 292006,
    "propertyType": "APARTMENT",
    "investmentCategory": "LONG_TERM",
    "propertyStatus": "EXITED",
    "renovationProgress": 100,
    "totalReturnRoi": 112677.67,
    "totalReturnRoiPercentage": 33.88,
    "investors": 33,
    "rental": {
      "grossYield": 8.22,
      "netYield": null,
      "dividendYield": 7.63,
      "grossRent": 24000,
      "netRent": 22275,
      "totalRentalIncome": 70053.45,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 33,
      "annualized": 9.63,
      "totalGrossRoi": 56.25,
      "investmentPeriod": 46,
      "funded": 100.01,
      "fundedAmount": 292035.2,
      "totalReturnRoi": 112677.67,
      "totalReturnRoiPercentage": 33.88,
      "renovationProgress": 100
    },
    "valuation": {
      "marketValue": null,
      "marketValuePercentage": 36.98,
      "saleProceed": 386138.85,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 0,
      "bathrooms": 1
    },
    "location": {
      "area": {
        "name": "Dubai South City",
        "displayName": "Dubai South City"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2021-07-15",
      "closeDate": "2021-06-28",
      "soldDate": "2021-07-15",
      "completionDate": null
    }
  },
  {
    "id": 559,
    "code": "SC-162",
    "title": "Two Bedroom in Mag 5, Dubai South",
    "investmentType": "HOLD",
    "propertyCategory": "RESIDENTIAL",
    "price": 442944,
    "projectPrice": 442944,
    "propertyType": "APARTMENT",
    "investmentCategory": "LONG_TERM",
    "propertyStatus": "EXITED",
    "renovationProgress": 100,
    "totalReturnRoi": 232785.64,
    "totalReturnRoiPercentage": 46.85,
    "investors": 28,
    "rental": {
      "grossYield": 8.13,
      "netYield": null,
      "dividendYield": 7.6,
      "grossRent": 36000,
      "netRent": 33675,
      "totalRentalIncome": 113382.19,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 28,
      "annualized": 9.6,
      "totalGrossRoi": 55.9,
      "investmentPeriod": 46,
      "funded": 100,
      "fundedAmount": 442944,
      "totalReturnRoi": 232785.64,
      "totalReturnRoiPercentage": 46.85,
      "renovationProgress": 100
    },
    "valuation": {
      "marketValue": null,
      "marketValuePercentage": 42.23,
      "saleProceed": 633465.13,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 2,
      "bathrooms": 1
    },
    "location": {
      "area": {
        "name": "Dubai South City",
        "displayName": "Dubai South City"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2021-08-09",
      "closeDate": "2021-07-12",
      "soldDate": "2021-08-09",
      "completionDate": null
    }
  },
  {
    "id": 558,
    "code": "SC-161",
    "title": "Mag 5 - 560 - Studio",
    "investmentType": "HOLD",
    "propertyCategory": "RESIDENTIAL",
    "price": 292006,
    "projectPrice": 292006,
    "propertyType": "APARTMENT",
    "investmentCategory": "LONG_TERM",
    "propertyStatus": "EXITED",
    "renovationProgress": 100,
    "totalReturnRoi": 135360.38,
    "totalReturnRoiPercentage": 40.7,
    "investors": 26,
    "rental": {
      "grossYield": 8.22,
      "netYield": null,
      "dividendYield": 7.63,
      "grossRent": 24000,
      "netRent": 22275,
      "totalRentalIncome": 67570.63,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 26,
      "annualized": 9.59,
      "totalGrossRoi": 56,
      "investmentPeriod": 43,
      "funded": 108.56,
      "fundedAmount": 317001.71,
      "totalReturnRoi": 135360.38,
      "totalReturnRoiPercentage": 40.7,
      "renovationProgress": 100
    },
    "valuation": {
      "marketValue": null,
      "marketValuePercentage": 36.98,
      "saleProceed": 411304,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 0,
      "bathrooms": 1
    },
    "location": {
      "area": {
        "name": "Dubai South City",
        "displayName": "Dubai South City"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2021-07-15",
      "closeDate": "2021-06-09",
      "soldDate": "2021-07-15",
      "completionDate": null
    }
  },
  {
    "id": 557,
    "code": "SC-160",
    "title": "Studio in Silicon Gates 1, DSO",
    "investmentType": "HOLD",
    "propertyCategory": "RESIDENTIAL",
    "price": 250000,
    "projectPrice": 250000,
    "propertyType": "APARTMENT",
    "investmentCategory": "LONG_TERM",
    "propertyStatus": "EXITED",
    "renovationProgress": 100,
    "totalReturnRoi": 132292.84,
    "totalReturnRoiPercentage": 45.08,
    "investors": 20,
    "rental": {
      "grossYield": 10,
      "netYield": 7.99,
      "dividendYield": 7.28,
      "grossRent": 25000,
      "netRent": 18193,
      "totalRentalIncome": 52267.3,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 20,
      "annualized": 9.24,
      "totalGrossRoi": 60.65,
      "investmentPeriod": 38,
      "funded": 100,
      "fundedAmount": 250000,
      "totalReturnRoi": 132292.84,
      "totalReturnRoiPercentage": 45.08,
      "renovationProgress": 100
    },
    "valuation": {
      "marketValue": null,
      "marketValuePercentage": 44,
      "saleProceed": 383464.29,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 0,
      "bathrooms": 1
    },
    "location": {
      "area": {
        "name": "Silicon Oasis",
        "displayName": "Silicon Oasis"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2021-08-26",
      "closeDate": "2021-07-12",
      "soldDate": "2021-08-26",
      "completionDate": null
    }
  },
  {
    "id": 556,
    "code": "SC-159",
    "title": "Lincoln Park North Side",
    "investmentType": "HOLD",
    "propertyCategory": "RESIDENTIAL",
    "price": 430000,
    "projectPrice": 430000,
    "propertyType": "APARTMENT",
    "investmentCategory": "LONG_TERM",
    "propertyStatus": "EXITED",
    "renovationProgress": 100,
    "totalReturnRoi": 158488.65,
    "totalReturnRoiPercentage": 33.3,
    "investors": 74,
    "rental": {
      "grossYield": 9.77,
      "netYield": 7.69,
      "dividendYield": 7.18,
      "grossRent": 42000,
      "netRent": 30864,
      "totalRentalIncome": 64113.01,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 74,
      "annualized": 9.46,
      "totalGrossRoi": 59,
      "investmentPeriod": 35,
      "funded": 103.03,
      "fundedAmount": 443029,
      "totalReturnRoi": 158488.65,
      "totalReturnRoiPercentage": 33.3,
      "renovationProgress": 100
    },
    "valuation": {
      "marketValue": null,
      "marketValuePercentage": 22.09,
      "saleProceed": 585751.14,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 1,
      "bathrooms": 1
    },
    "location": {
      "area": {
        "name": "IMPZ",
        "displayName": "IMPZ"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2021-07-14",
      "closeDate": "2021-06-06",
      "soldDate": "2021-07-14",
      "completionDate": null
    }
  },
  {
    "id": 554,
    "code": "SC-157",
    "title": "Goldcrest Views 2 JLT - 6th floor",
    "investmentType": "HOLD",
    "propertyCategory": "RESIDENTIAL",
    "price": 350000,
    "projectPrice": 350000,
    "propertyType": "APARTMENT",
    "investmentCategory": "LONG_TERM",
    "propertyStatus": "EXITED",
    "renovationProgress": 100,
    "totalReturnRoi": 275393.03,
    "totalReturnRoiPercentage": 67.39,
    "investors": 52,
    "rental": {
      "grossYield": 9.86,
      "netYield": 8.04,
      "dividendYield": 6.17,
      "grossRent": 34500,
      "netRent": 25882,
      "totalRentalIncome": 67562.81,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 52,
      "annualized": 10.59,
      "totalGrossRoi": 64.35,
      "investmentPeriod": 32,
      "funded": 100.21,
      "fundedAmount": 350735,
      "totalReturnRoi": 275393.03,
      "totalReturnRoiPercentage": 67.39,
      "renovationProgress": 100
    },
    "valuation": {
      "marketValue": null,
      "marketValuePercentage": 64.29,
      "saleProceed": 632476.47,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 0,
      "bathrooms": 1
    },
    "location": {
      "area": {
        "name": "JLT",
        "displayName": "JLT"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2021-06-08",
      "closeDate": "2021-05-11",
      "soldDate": "2021-06-08",
      "completionDate": null
    }
  },
  {
    "id": 553,
    "code": "SC-156",
    "title": "Goldcrest Views 2 JLT - 9th floor",
    "investmentType": "HOLD",
    "propertyCategory": "RESIDENTIAL",
    "price": 350000,
    "projectPrice": 350000,
    "propertyType": "APARTMENT",
    "investmentCategory": "SHORT_TERM",
    "propertyStatus": "SOLD",
    "renovationProgress": null,
    "totalReturnRoi": -222956.15,
    "totalReturnRoiPercentage": -49.65,
    "investors": 39,
    "rental": {
      "grossYield": 8.57,
      "netYield": 6.75,
      "dividendYield": 6.17,
      "grossRent": 30000,
      "netRent": 21607,
      "totalRentalIncome": 226063.32,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 39,
      "annualized": 8.01,
      "totalGrossRoi": 63.95,
      "investmentPeriod": 60,
      "funded": 103.53,
      "fundedAmount": 362355,
      "totalReturnRoi": null,
      "totalReturnRoiPercentage": null,
      "renovationProgress": null
    },
    "valuation": {
      "marketValue": null,
      "marketValuePercentage": 100,
      "saleProceed": 0,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 0,
      "bathrooms": 1
    },
    "location": {
      "area": {
        "name": "JLT",
        "displayName": "JLT"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2021-06-07",
      "closeDate": "2021-05-23",
      "soldDate": "2021-06-07",
      "completionDate": null
    }
  },
  {
    "id": 552,
    "code": "SC-155",
    "title": "Botanica JVC",
    "investmentType": "HOLD",
    "propertyCategory": "RESIDENTIAL",
    "price": 360000,
    "projectPrice": 360000,
    "propertyType": "APARTMENT",
    "investmentCategory": "LONG_TERM",
    "propertyStatus": "SOLD",
    "renovationProgress": null,
    "totalReturnRoi": -313773.47,
    "totalReturnRoiPercentage": -73.18,
    "investors": 63,
    "rental": {
      "grossYield": 9.44,
      "netYield": 8.13,
      "dividendYield": 5.17,
      "grossRent": 34000,
      "netRent": 27025,
      "totalRentalIncome": 115004.03,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 63,
      "annualized": 6.39,
      "totalGrossRoi": 50.85,
      "investmentPeriod": 60,
      "funded": 105.12,
      "fundedAmount": 378432,
      "totalReturnRoi": null,
      "totalReturnRoiPercentage": null,
      "renovationProgress": null
    },
    "valuation": {
      "marketValue": null,
      "marketValuePercentage": 38.89,
      "saleProceed": 0,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 0,
      "bathrooms": 1
    },
    "location": {
      "area": {
        "name": "JVC",
        "displayName": "JVC"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2021-05-25",
      "closeDate": "2021-04-24",
      "soldDate": "2021-05-25",
      "completionDate": null
    }
  },
  {
    "id": 551,
    "code": "SC-154",
    "title": "Crystal Residence JVC",
    "investmentType": "HOLD",
    "propertyCategory": "RESIDENTIAL",
    "price": 340000,
    "projectPrice": 340000,
    "propertyType": "APARTMENT",
    "investmentCategory": "LONG_TERM",
    "propertyStatus": "EXITED",
    "renovationProgress": 100,
    "totalReturnRoi": 297376.74,
    "totalReturnRoiPercentage": 77.22,
    "investors": 70,
    "rental": {
      "grossYield": 11.18,
      "netYield": 9.53,
      "dividendYield": 7.4,
      "grossRent": 38000,
      "netRent": 29975,
      "totalRentalIncome": 112197.35,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 70,
      "annualized": 6.59,
      "totalGrossRoi": 49.15,
      "investmentPeriod": 50,
      "funded": 103.59,
      "fundedAmount": 352206,
      "totalReturnRoi": 297376.74,
      "totalReturnRoiPercentage": 77.22,
      "renovationProgress": 100
    },
    "valuation": {
      "marketValue": null,
      "marketValuePercentage": 70.59,
      "saleProceed": 586176.89,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 0,
      "bathrooms": 1
    },
    "location": {
      "area": {
        "name": "JVC",
        "displayName": "JVC"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2021-06-22",
      "closeDate": "2021-04-08",
      "soldDate": "2021-06-22",
      "completionDate": null
    }
  },
  {
    "id": 550,
    "code": "SC-153",
    "title": "Shamal Residence JVC",
    "investmentType": "HOLD",
    "propertyCategory": "RESIDENTIAL",
    "price": 365000,
    "projectPrice": 365000,
    "propertyType": "APARTMENT",
    "investmentCategory": "LONG_TERM",
    "propertyStatus": "EXITED",
    "renovationProgress": 100,
    "totalReturnRoi": 208378.45,
    "totalReturnRoiPercentage": 50.54,
    "investors": 82,
    "rental": {
      "grossYield": 10.41,
      "netYield": 8.44,
      "dividendYield": 7.87,
      "grossRent": 38000,
      "netRent": 28729,
      "totalRentalIncome": 119397.31,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 82,
      "annualized": 9.34,
      "totalGrossRoi": 57.25,
      "investmentPeriod": 53,
      "funded": 103.38,
      "fundedAmount": 377337,
      "totalReturnRoi": 208378.45,
      "totalReturnRoiPercentage": 50.54,
      "renovationProgress": 100
    },
    "valuation": {
      "marketValue": null,
      "marketValuePercentage": 43.84,
      "saleProceed": 515314.89,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 0,
      "bathrooms": 1
    },
    "location": {
      "area": {
        "name": "JVC",
        "displayName": "JVC"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2021-06-08",
      "closeDate": "2021-05-10",
      "soldDate": "2021-06-08",
      "completionDate": null
    }
  },
  {
    "id": 549,
    "code": "SC-152",
    "title": "Lago Vista C - Studio",
    "investmentType": "HOLD",
    "propertyCategory": "RESIDENTIAL",
    "price": 255000,
    "projectPrice": 255000,
    "propertyType": "APARTMENT",
    "investmentCategory": "LONG_TERM",
    "propertyStatus": "EXITED",
    "renovationProgress": 100,
    "totalReturnRoi": 88881.01,
    "totalReturnRoiPercentage": 30.37,
    "investors": 33,
    "rental": {
      "grossYield": 9.41,
      "netYield": 7.29,
      "dividendYield": 6.61,
      "grossRent": 24000,
      "netRent": 16849,
      "totalRentalIncome": 33234.32,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 33,
      "annualized": 9.46,
      "totalGrossRoi": 58.2,
      "investmentPeriod": 26,
      "funded": 100,
      "fundedAmount": 255000,
      "totalReturnRoi": 88881.01,
      "totalReturnRoiPercentage": 30.37,
      "renovationProgress": 100
    },
    "valuation": {
      "marketValue": null,
      "marketValuePercentage": 1.96,
      "saleProceed": 357490.44,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 0,
      "bathrooms": 1
    },
    "location": {
      "area": {
        "name": "IMPZ",
        "displayName": "IMPZ"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2021-06-07",
      "closeDate": "2021-04-11",
      "soldDate": "2021-06-07",
      "completionDate": null
    }
  },
  {
    "id": 548,
    "code": "SC-151",
    "title": "Burj Al Nujoom Studio",
    "investmentType": "HOLD",
    "propertyCategory": "RESIDENTIAL",
    "price": 480000,
    "projectPrice": 480000,
    "propertyType": "APARTMENT",
    "investmentCategory": "SHORT_TERM",
    "propertyStatus": "SOLD",
    "renovationProgress": null,
    "totalReturnRoi": -447349.58,
    "totalReturnRoiPercentage": -67.14,
    "investors": 105,
    "rental": {
      "grossYield": 16.2,
      "netYield": 14.2,
      "dividendYield": 8.93,
      "grossRent": 77775,
      "netRent": 53650.5,
      "totalRentalIncome": 218908.63,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 105,
      "annualized": 7.32,
      "totalGrossRoi": 56.4,
      "investmentPeriod": 60,
      "funded": 114.58,
      "fundedAmount": 549984,
      "totalReturnRoi": null,
      "totalReturnRoiPercentage": null,
      "renovationProgress": null
    },
    "valuation": {
      "marketValue": null,
      "marketValuePercentage": 68.75,
      "saleProceed": 0,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 0,
      "bathrooms": 1
    },
    "location": {
      "area": {
        "name": "Downtown Dubai",
        "displayName": "Downtown Dubai"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2021-07-01",
      "closeDate": "2021-04-11",
      "soldDate": "2021-07-01",
      "completionDate": null
    }
  },
  {
    "id": 545,
    "code": "SC-148",
    "title": "Marina Residence One-Bed",
    "investmentType": "HOLD",
    "propertyCategory": "RESIDENTIAL",
    "price": 530000,
    "projectPrice": 530000,
    "propertyType": "APARTMENT",
    "investmentCategory": "SHORT_TERM",
    "propertyStatus": "EXITED",
    "renovationProgress": 100,
    "totalReturnRoi": 327107.54,
    "totalReturnRoiPercentage": 54.24,
    "investors": 49,
    "rental": {
      "grossYield": 19.08,
      "netYield": 17.2,
      "dividendYield": 11.63,
      "grossRent": 101108,
      "netRent": 72434.56,
      "totalRentalIncome": 141828.61,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 49,
      "annualized": 9.67,
      "totalGrossRoi": 66.55,
      "investmentPeriod": 32,
      "funded": 100,
      "fundedAmount": 530000,
      "totalReturnRoi": 327107.54,
      "totalReturnRoiPercentage": 54.24,
      "renovationProgress": 100
    },
    "valuation": {
      "marketValue": null,
      "marketValuePercentage": 27.36,
      "saleProceed": 809332.68,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 1,
      "bathrooms": 1
    },
    "location": {
      "area": {
        "name": "Dubai Marina",
        "displayName": "Dubai Marina"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2021-03-17",
      "closeDate": "2021-02-14",
      "soldDate": "2021-03-17",
      "completionDate": null
    }
  },
  {
    "id": 542,
    "code": "SC-145",
    "title": "Bay Central Studio",
    "investmentType": "HOLD",
    "propertyCategory": "RESIDENTIAL",
    "price": 530000,
    "projectPrice": 530000,
    "propertyType": "APARTMENT",
    "investmentCategory": "SHORT_TERM",
    "propertyStatus": "EXITED",
    "renovationProgress": 100,
    "totalReturnRoi": 219562.66,
    "totalReturnRoiPercentage": 36.62,
    "investors": 53,
    "rental": {
      "grossYield": 13.5,
      "netYield": 11.7,
      "dividendYield": 7.13,
      "grossRent": 71553,
      "netRent": 48580.46,
      "totalRentalIncome": 74393.34,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 53,
      "annualized": 9.79,
      "totalGrossRoi": 59.3,
      "investmentPeriod": 17,
      "funded": 100,
      "fundedAmount": 530000,
      "totalReturnRoi": 219562.66,
      "totalReturnRoiPercentage": 36.62,
      "renovationProgress": 100
    },
    "valuation": {
      "marketValue": null,
      "marketValuePercentage": 0,
      "saleProceed": 765173.07,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 0,
      "bathrooms": 1
    },
    "location": {
      "area": {
        "name": "Dubai Marina",
        "displayName": "Dubai Marina"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2021-02-18",
      "closeDate": "2021-01-27",
      "soldDate": "2021-02-18",
      "completionDate": null
    }
  },
  {
    "id": 540,
    "code": "SC-143",
    "title": "Lakeside Studio Tower C",
    "investmentType": "HOLD",
    "propertyCategory": "RESIDENTIAL",
    "price": 210000,
    "projectPrice": 210000,
    "propertyType": "APARTMENT",
    "investmentCategory": "LONG_TERM",
    "propertyStatus": "EXITED",
    "renovationProgress": 100,
    "totalReturnRoi": 104156.82,
    "totalReturnRoiPercentage": 44.25,
    "investors": 27,
    "rental": {
      "grossYield": 10.95,
      "netYield": 8.71,
      "dividendYield": 7.92,
      "grossRent": 23000,
      "netRent": 16625,
      "totalRentalIncome": 39806.44,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 27,
      "annualized": 7.39,
      "totalGrossRoi": 52,
      "investmentPeriod": 32,
      "funded": 100,
      "fundedAmount": 210000,
      "totalReturnRoi": 104156.82,
      "totalReturnRoiPercentage": 44.25,
      "renovationProgress": 100
    },
    "valuation": {
      "marketValue": null,
      "marketValuePercentage": 19.05,
      "saleProceed": 307881.63,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 0,
      "bathrooms": 1
    },
    "location": {
      "area": {
        "name": "Dubailand",
        "displayName": "Dubailand"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2021-01-26",
      "closeDate": "2021-01-20",
      "soldDate": "2021-01-26",
      "completionDate": null
    }
  },
  {
    "id": 535,
    "code": "SC-142",
    "title": "One Bedroom with Two Balconies in DSO",
    "investmentType": "HOLD",
    "propertyCategory": "COMMERCIAL",
    "price": 340000,
    "projectPrice": 340000,
    "propertyType": "APARTMENT",
    "investmentCategory": "LONG_TERM",
    "propertyStatus": "EXITED",
    "renovationProgress": 100,
    "totalReturnRoi": 102371.11,
    "totalReturnRoiPercentage": 27.09,
    "investors": 42,
    "rental": {
      "grossYield": 10,
      "netYield": 7.79,
      "dividendYield": 7.13,
      "grossRent": 34000,
      "netRent": 24246,
      "totalRentalIncome": 61043.55,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 42,
      "annualized": 8.32,
      "totalGrossRoi": 55.55,
      "investmentPeriod": 38,
      "funded": 100.53,
      "fundedAmount": 341802,
      "totalReturnRoi": 102371.11,
      "totalReturnRoiPercentage": 27.09,
      "renovationProgress": 100
    },
    "valuation": {
      "marketValue": null,
      "marketValuePercentage": 22.06,
      "saleProceed": 430506.26,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 1,
      "bathrooms": 1
    },
    "location": {
      "area": {
        "name": "Silicon Oasis",
        "displayName": "Silicon Oasis"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2021-01-26",
      "closeDate": "2020-12-29",
      "soldDate": "2021-01-26",
      "completionDate": null
    }
  },
  {
    "id": 534,
    "code": "SC-141",
    "title": "Studio One",
    "investmentType": "HOLD",
    "propertyCategory": "RESIDENTIAL",
    "price": 500000,
    "projectPrice": 500000,
    "propertyType": "APARTMENT",
    "investmentCategory": "SHORT_TERM",
    "propertyStatus": "EXITED",
    "renovationProgress": 100,
    "totalReturnRoi": 425928.57,
    "totalReturnRoiPercentage": 76.5,
    "investors": 60,
    "rental": {
      "grossYield": 14,
      "netYield": 12.76,
      "dividendYield": 7.96,
      "grossRent": 69998,
      "netRent": 50598.36,
      "totalRentalIncome": 149965.51,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 60,
      "annualized": 7.33,
      "totalGrossRoi": 54.9,
      "investmentPeriod": 37,
      "funded": 100.89,
      "fundedAmount": 504450,
      "totalReturnRoi": 425928.57,
      "totalReturnRoiPercentage": 76.5,
      "renovationProgress": 100
    },
    "valuation": {
      "marketValue": null,
      "marketValuePercentage": 48,
      "saleProceed": 855095.06,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 0,
      "bathrooms": 1
    },
    "location": {
      "area": {
        "name": "Dubai Marina",
        "displayName": "Dubai Marina"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2021-02-16",
      "closeDate": "2021-02-16",
      "soldDate": "2021-02-16",
      "completionDate": null
    }
  },
  {
    "id": 529,
    "code": "SC-140",
    "title": "Affordable Studio in Silicon Oasis",
    "investmentType": "HOLD",
    "propertyCategory": "RESIDENTIAL",
    "price": 208000,
    "projectPrice": 208000,
    "propertyType": "APARTMENT",
    "investmentCategory": "LONG_TERM",
    "propertyStatus": "EXITED",
    "renovationProgress": 100,
    "totalReturnRoi": 58051.25,
    "totalReturnRoiPercentage": 24.41,
    "investors": 30,
    "rental": {
      "grossYield": 11.54,
      "netYield": 8.55,
      "dividendYield": 7.71,
      "grossRent": 24000,
      "netRent": 16038.75,
      "totalRentalIncome": 44668.76,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 30,
      "annualized": 6.87,
      "totalGrossRoi": 51.4,
      "investmentPeriod": 31,
      "funded": 100,
      "fundedAmount": 208000,
      "totalReturnRoi": 58051.25,
      "totalReturnRoiPercentage": 24.41,
      "renovationProgress": 100
    },
    "valuation": {
      "marketValue": null,
      "marketValuePercentage": 20.19,
      "saleProceed": 257785.24,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 0,
      "bathrooms": 1
    },
    "location": {
      "area": {
        "name": "Silicon Oasis",
        "displayName": "Silicon Oasis"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2020-10-27",
      "closeDate": "2020-11-16",
      "soldDate": "2020-10-27",
      "completionDate": null
    }
  },
  {
    "id": 527,
    "code": "SC-138",
    "title": "Al Waha Villas - 2 bhk townhome",
    "investmentType": "HOLD",
    "propertyCategory": "RESIDENTIAL",
    "price": 765000,
    "projectPrice": 765000,
    "propertyType": "TOWN_HOUSE",
    "investmentCategory": "LONG_TERM",
    "propertyStatus": "EXITED",
    "renovationProgress": 100,
    "totalReturnRoi": 904205.44,
    "totalReturnRoiPercentage": 107.19,
    "investors": 86,
    "rental": {
      "grossYield": 9.93,
      "netYield": 9.09,
      "dividendYield": 8.52,
      "grossRent": 76000,
      "netRent": 65200,
      "totalRentalIncome": 193520.9,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 86,
      "annualized": 8.06,
      "totalGrossRoi": 46.7,
      "investmentPeriod": 39,
      "funded": 102.33,
      "fundedAmount": 782824.5,
      "totalReturnRoi": 904205.44,
      "totalReturnRoiPercentage": 107.19,
      "renovationProgress": 100
    },
    "valuation": {
      "marketValue": null,
      "marketValuePercentage": 86.27,
      "saleProceed": 1596208.92,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 2,
      "bathrooms": 2
    },
    "location": {
      "area": {
        "name": "Dubailand",
        "displayName": "Dubailand"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2021-02-22",
      "closeDate": "2020-12-29",
      "soldDate": "2021-02-22",
      "completionDate": null
    }
  },
  {
    "id": 526,
    "code": "SC-137",
    "title": "Marina View - One Bedroom",
    "investmentType": "HOLD",
    "propertyCategory": "RESIDENTIAL",
    "price": 650000,
    "projectPrice": 650000,
    "propertyType": "APARTMENT",
    "investmentCategory": "SHORT_TERM",
    "propertyStatus": "EXITED",
    "renovationProgress": 100,
    "totalReturnRoi": 486023.02,
    "totalReturnRoiPercentage": 68.38,
    "investors": 58,
    "rental": {
      "grossYield": 8.92,
      "netYield": 7.37,
      "dividendYield": 6.9,
      "grossRent": 58000,
      "netRent": 44837,
      "totalRentalIncome": 132960.64,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 58,
      "annualized": 7.1,
      "totalGrossRoi": 46.65,
      "investmentPeriod": 29,
      "funded": 100,
      "fundedAmount": 650000,
      "totalReturnRoi": 486023.02,
      "totalReturnRoiPercentage": 68.38,
      "renovationProgress": 100
    },
    "valuation": {
      "marketValue": null,
      "marketValuePercentage": 30.77,
      "saleProceed": 1092676.13,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 1,
      "bathrooms": 1
    },
    "location": {
      "area": {
        "name": "Dubai Marina",
        "displayName": "Dubai Marina"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2020-10-10",
      "closeDate": "2020-11-18",
      "soldDate": "2020-10-10",
      "completionDate": null
    }
  },
  {
    "id": 521,
    "code": "SC-132",
    "title": "Belgravia 2 by Ellington",
    "investmentType": "HOLD",
    "propertyCategory": "RESIDENTIAL",
    "price": 430000,
    "projectPrice": 430000,
    "propertyType": "APARTMENT",
    "investmentCategory": "LONG_TERM",
    "propertyStatus": "EXITED",
    "renovationProgress": 100,
    "totalReturnRoi": 320894.25,
    "totalReturnRoiPercentage": 67.99,
    "investors": 53,
    "rental": {
      "grossYield": 8.84,
      "netYield": 7.19,
      "dividendYield": 6.74,
      "grossRent": 38000,
      "netRent": 28997,
      "totalRentalIncome": 140357.6,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 53,
      "annualized": 7.05,
      "totalGrossRoi": 46.9,
      "investmentPeriod": 56,
      "funded": 113.99,
      "fundedAmount": 490157,
      "totalReturnRoi": 320894.25,
      "totalReturnRoiPercentage": 67.99,
      "renovationProgress": 100
    },
    "valuation": {
      "marketValue": null,
      "marketValuePercentage": 60.47,
      "saleProceed": 670789.15,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 0,
      "bathrooms": 1
    },
    "location": {
      "area": {
        "name": "JVC",
        "displayName": "JVC"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2020-10-14",
      "closeDate": "2020-10-01",
      "soldDate": "2020-10-14",
      "completionDate": null
    }
  },
  {
    "id": 520,
    "code": "SC-131",
    "title": "Eaton Place by Ellington",
    "investmentType": "HOLD",
    "propertyCategory": "RESIDENTIAL",
    "price": 890000,
    "projectPrice": 890000,
    "propertyType": "APARTMENT",
    "investmentCategory": "LONG_TERM",
    "propertyStatus": "EXITED",
    "renovationProgress": 100,
    "totalReturnRoi": 302953.33,
    "totalReturnRoiPercentage": 31.88,
    "investors": 124,
    "rental": {
      "grossYield": 7.3,
      "netYield": null,
      "dividendYield": 7.21,
      "grossRent": 65000,
      "netRent": 64212,
      "totalRentalIncome": 226969.1,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 124,
      "annualized": 11.17,
      "totalGrossRoi": 63.9,
      "investmentPeriod": 51,
      "funded": 100.47,
      "fundedAmount": 894183,
      "totalReturnRoi": 302953.33,
      "totalReturnRoiPercentage": 31.88,
      "renovationProgress": 100
    },
    "valuation": {
      "marketValue": null,
      "marketValuePercentage": 25.28,
      "saleProceed": 1089385.98,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 1,
      "bathrooms": 1
    },
    "location": {
      "area": {
        "name": "JVC",
        "displayName": "JVC"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2020-11-26",
      "closeDate": "2020-11-16",
      "soldDate": "2020-11-26",
      "completionDate": null
    }
  },
  {
    "id": 513,
    "code": "SC-124",
    "title": "Silicon Gates 1 (DSO)",
    "investmentType": "HOLD",
    "propertyCategory": "RESIDENTIAL",
    "price": 210000,
    "projectPrice": 210000,
    "propertyType": "APARTMENT",
    "investmentCategory": "LONG_TERM",
    "propertyStatus": "EXITED",
    "renovationProgress": 100,
    "totalReturnRoi": 199587.84,
    "totalReturnRoiPercentage": 81.55,
    "investors": 41,
    "rental": {
      "grossYield": 10.48,
      "netYield": 8.05,
      "dividendYield": 7.15,
      "grossRent": 22000,
      "netRent": 15020,
      "totalRentalIncome": 76459.43,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 41,
      "annualized": 7.13,
      "totalGrossRoi": 53.25,
      "investmentPeriod": 54,
      "funded": 105.29,
      "fundedAmount": 221109,
      "totalReturnRoi": 199587.84,
      "totalReturnRoiPercentage": 81.55,
      "renovationProgress": 100
    },
    "valuation": {
      "marketValue": null,
      "marketValuePercentage": 90.48,
      "saleProceed": 377746.79,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 0,
      "bathrooms": 1
    },
    "location": {
      "area": {
        "name": "Silicon Oasis",
        "displayName": "Silicon Oasis"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2020-07-09",
      "closeDate": "2020-06-24",
      "soldDate": "2020-07-09",
      "completionDate": null
    }
  },
  {
    "id": 512,
    "code": "SC-123",
    "title": "Emaar's Ghozlan 4 ",
    "investmentType": "HOLD",
    "propertyCategory": "RESIDENTIAL",
    "price": 455000,
    "projectPrice": 455000,
    "propertyType": "APARTMENT",
    "investmentCategory": "LONG_TERM",
    "propertyStatus": "SOLD",
    "renovationProgress": null,
    "totalReturnRoi": -345624.3,
    "totalReturnRoiPercentage": -64.27,
    "investors": 56,
    "rental": {
      "grossYield": 9.23,
      "netYield": 7.83,
      "dividendYield": 7.2,
      "grossRent": 42000,
      "netRent": 32761,
      "totalRentalIncome": 192176.11,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 56,
      "annualized": 11.34,
      "totalGrossRoi": 66.45,
      "investmentPeriod": 60,
      "funded": 106.81,
      "fundedAmount": 485985.5,
      "totalReturnRoi": null,
      "totalReturnRoiPercentage": null,
      "renovationProgress": null
    },
    "valuation": {
      "marketValue": null,
      "marketValuePercentage": 69.23,
      "saleProceed": 0,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 0,
      "bathrooms": 1
    },
    "location": {
      "area": {
        "name": "The Greens",
        "displayName": "The Greens"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2020-07-05",
      "closeDate": "2020-06-28",
      "soldDate": "2020-07-05",
      "completionDate": null
    }
  },
  {
    "id": 510,
    "code": "SC-121",
    "title": "The Spirit Tower - 1 BHK (second)",
    "investmentType": "HOLD",
    "propertyCategory": "RESIDENTIAL",
    "price": 450000,
    "projectPrice": 450000,
    "propertyType": "APARTMENT",
    "investmentCategory": "LONG_TERM",
    "propertyStatus": "EXITED",
    "renovationProgress": 100,
    "totalReturnRoi": 108274.95,
    "totalReturnRoiPercentage": 21.94,
    "investors": 52,
    "rental": {
      "grossYield": 10.67,
      "netYield": 7.81,
      "dividendYield": 7.1,
      "grossRent": 48000,
      "netRent": 31943,
      "totalRentalIncome": 62840.99,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 52,
      "annualized": 6.22,
      "totalGrossRoi": 47.75,
      "investmentPeriod": 26,
      "funded": 100,
      "fundedAmount": 450000,
      "totalReturnRoi": 108274.95,
      "totalReturnRoiPercentage": 21.94,
      "renovationProgress": 100
    },
    "valuation": {
      "marketValue": null,
      "marketValuePercentage": 0,
      "saleProceed": 553610.21,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 1,
      "bathrooms": 2
    },
    "location": {
      "area": {
        "name": "Sports city",
        "displayName": "Sports city"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2020-08-18",
      "closeDate": "2020-06-11",
      "soldDate": "2020-08-18",
      "completionDate": null
    }
  },
  {
    "id": 509,
    "code": "SC-120",
    "title": "The Spirit Tower - One BHK",
    "investmentType": "HOLD",
    "propertyCategory": "RESIDENTIAL",
    "price": 450000,
    "projectPrice": 450000,
    "propertyType": "APARTMENT",
    "investmentCategory": "LONG_TERM",
    "propertyStatus": "EXITED",
    "renovationProgress": 100,
    "totalReturnRoi": 75577.1,
    "totalReturnRoiPercentage": 15.32,
    "investors": 46,
    "rental": {
      "grossYield": 10.67,
      "netYield": 7.81,
      "dividendYield": 7.1,
      "grossRent": 48000,
      "netRent": 31943,
      "totalRentalIncome": 65387.32,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 46,
      "annualized": 6.22,
      "totalGrossRoi": 47.75,
      "investmentPeriod": 24,
      "funded": 100,
      "fundedAmount": 450000,
      "totalReturnRoi": 75577.1,
      "totalReturnRoiPercentage": 15.32,
      "renovationProgress": 100
    },
    "valuation": {
      "marketValue": null,
      "marketValuePercentage": 0,
      "saleProceed": 517316.03,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 1,
      "bathrooms": 2
    },
    "location": {
      "area": {
        "name": "Sports city",
        "displayName": "Sports city"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2020-09-08",
      "closeDate": "2020-09-08",
      "soldDate": "2020-09-08",
      "completionDate": null
    }
  },
  {
    "id": 507,
    "code": "SC-118",
    "title": "Concorde Tower",
    "investmentType": "HOLD",
    "propertyCategory": "RESIDENTIAL",
    "price": 450000,
    "projectPrice": 450000,
    "propertyType": "APARTMENT",
    "investmentCategory": "LONG_TERM",
    "propertyStatus": "EXITED",
    "renovationProgress": 100,
    "totalReturnRoi": 418414.89,
    "totalReturnRoiPercentage": 83.96,
    "investors": 70,
    "rental": {
      "grossYield": 10,
      "netYield": 7.92,
      "dividendYield": 7.5,
      "grossRent": 45000,
      "netRent": 33737,
      "totalRentalIncome": 166218.56,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 70,
      "annualized": 8.33,
      "totalGrossRoi": 56.35,
      "investmentPeriod": 53,
      "funded": 102.16,
      "fundedAmount": 459720,
      "totalReturnRoi": 418414.89,
      "totalReturnRoiPercentage": 83.96,
      "renovationProgress": 100
    },
    "valuation": {
      "marketValue": null,
      "marketValuePercentage": 50,
      "saleProceed": 770782.72,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 1,
      "bathrooms": 1
    },
    "location": {
      "area": {
        "name": "JLT",
        "displayName": "JLT"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2020-06-23",
      "closeDate": "2020-05-13",
      "soldDate": "2020-06-23",
      "completionDate": null
    }
  },
  {
    "id": 506,
    "code": "SC-117",
    "title": "Damac's Lakeside Tower Studio",
    "investmentType": "HOLD",
    "propertyCategory": "RESIDENTIAL",
    "price": 225000,
    "projectPrice": 225000,
    "propertyType": "APARTMENT",
    "investmentCategory": "LONG_TERM",
    "propertyStatus": "EXITED",
    "renovationProgress": 100,
    "totalReturnRoi": 101434.08,
    "totalReturnRoiPercentage": 39.56,
    "investors": 24,
    "rental": {
      "grossYield": 13.33,
      "netYield": 11.57,
      "dividendYield": 10.62,
      "grossRent": 30000,
      "netRent": 23888,
      "totalRentalIncome": 51680.78,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 24,
      "annualized": 7.67,
      "totalGrossRoi": 51.9,
      "investmentPeriod": 39,
      "funded": 100.31,
      "fundedAmount": 225697.5,
      "totalReturnRoi": 101434.08,
      "totalReturnRoiPercentage": 39.56,
      "renovationProgress": 100
    },
    "valuation": {
      "marketValue": null,
      "marketValuePercentage": 11.11,
      "saleProceed": 314267.05,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 0,
      "bathrooms": 1
    },
    "location": {
      "area": {
        "name": "IMPZ",
        "displayName": "IMPZ"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2020-05-27",
      "closeDate": "2020-05-02",
      "soldDate": "2020-05-27",
      "completionDate": null
    }
  },
  {
    "id": 504,
    "code": "SC-115",
    "title": "Royal Residence 2, Sports City (Studio)",
    "investmentType": "HOLD",
    "propertyCategory": "RESIDENTIAL",
    "price": 270000,
    "projectPrice": 270000,
    "propertyType": "APARTMENT",
    "investmentCategory": "LONG_TERM",
    "propertyStatus": "EXITED",
    "renovationProgress": 100,
    "totalReturnRoi": 61106.93,
    "totalReturnRoiPercentage": 20.51,
    "investors": 34,
    "rental": {
      "grossYield": 11.85,
      "netYield": 9.7,
      "dividendYield": 8.82,
      "grossRent": 32000,
      "netRent": 23804,
      "totalRentalIncome": 50782.57,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 34,
      "annualized": 8.52,
      "totalGrossRoi": 58.05,
      "investmentPeriod": 42,
      "funded": 104,
      "fundedAmount": 280800,
      "totalReturnRoi": 61106.93,
      "totalReturnRoiPercentage": 20.51,
      "renovationProgress": 100
    },
    "valuation": {
      "marketValue": null,
      "marketValuePercentage": -5.56,
      "saleProceed": 316623.11,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 0,
      "bathrooms": 1
    },
    "location": {
      "area": {
        "name": "Sports city",
        "displayName": "Sports city"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2020-05-05",
      "closeDate": "2020-03-24",
      "soldDate": "2020-05-05",
      "completionDate": null
    }
  },
  {
    "id": 503,
    "code": "SC-114",
    "title": "Remraam by Dubai Properties (1 Bed)",
    "investmentType": "HOLD",
    "propertyCategory": "RESIDENTIAL",
    "price": 435000,
    "projectPrice": 435000,
    "propertyType": "APARTMENT",
    "investmentCategory": "LONG_TERM",
    "propertyStatus": "EXITED",
    "renovationProgress": 100,
    "totalReturnRoi": 142877.63,
    "totalReturnRoiPercentage": 30.04,
    "investors": 43,
    "rental": {
      "grossYield": 10.34,
      "netYield": 8.2,
      "dividendYield": 7.5,
      "grossRent": 45000,
      "netRent": 32632,
      "totalRentalIncome": 133542.99,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 43,
      "annualized": 9.36,
      "totalGrossRoi": 59.8,
      "investmentPeriod": 53,
      "funded": 102.57,
      "fundedAmount": 446179.5,
      "totalReturnRoi": 142877.63,
      "totalReturnRoiPercentage": 30.04,
      "renovationProgress": 100
    },
    "valuation": {
      "marketValue": null,
      "marketValuePercentage": 14.94,
      "saleProceed": 498022.14,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 1,
      "bathrooms": 1
    },
    "location": {
      "area": {
        "name": "Emirates Living",
        "displayName": "Emirates Living"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2020-05-17",
      "closeDate": "2020-04-27",
      "soldDate": "2020-05-17",
      "completionDate": null
    }
  },
  {
    "id": 500,
    "code": "SC-111",
    "title": "Marina Diamond 1 by Diamond Developers (Studio)",
    "investmentType": "HOLD",
    "propertyCategory": "RESIDENTIAL",
    "price": 420000,
    "projectPrice": 420000,
    "propertyType": "APARTMENT",
    "investmentCategory": "SHORT_TERM",
    "propertyStatus": "EXITED",
    "renovationProgress": 100,
    "totalReturnRoi": 277485.69,
    "totalReturnRoiPercentage": 59.24,
    "investors": 39,
    "rental": {
      "grossYield": 13.1,
      "netYield": 11.49,
      "dividendYield": 9.08,
      "grossRent": 55000,
      "netRent": 44737,
      "totalRentalIncome": 155829.19,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 39,
      "annualized": 10.64,
      "totalGrossRoi": 71.2,
      "investmentPeriod": 44,
      "funded": 100,
      "fundedAmount": 420000,
      "totalReturnRoi": 277485.69,
      "totalReturnRoiPercentage": 59.24,
      "renovationProgress": 100
    },
    "valuation": {
      "marketValue": null,
      "marketValuePercentage": 21.43,
      "saleProceed": 605817.75,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 0,
      "bathrooms": 1
    },
    "location": {
      "area": {
        "name": "Dubai Marina",
        "displayName": "Dubai Marina"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2020-03-19",
      "closeDate": "2020-03-02",
      "soldDate": "2020-03-19",
      "completionDate": null
    }
  },
  {
    "id": 499,
    "code": "SC-110",
    "title": "Dubai Properties' Remraam (1 Bed)",
    "investmentType": "HOLD",
    "propertyCategory": "RESIDENTIAL",
    "price": 442000,
    "projectPrice": 442000,
    "propertyType": "APARTMENT",
    "investmentCategory": "LONG_TERM",
    "propertyStatus": "EXITED",
    "renovationProgress": 100,
    "totalReturnRoi": 126545.44,
    "totalReturnRoiPercentage": 26.19,
    "investors": 53,
    "rental": {
      "grossYield": 12.44,
      "netYield": 10.38,
      "dividendYield": 9.58,
      "grossRent": 55000,
      "netRent": 42362.5,
      "totalRentalIncome": 114091.86,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 53,
      "annualized": 9,
      "totalGrossRoi": 59.1,
      "investmentPeriod": 57,
      "funded": 101.2,
      "fundedAmount": 447304,
      "totalReturnRoi": 126545.44,
      "totalReturnRoiPercentage": 26.19,
      "renovationProgress": 100
    },
    "valuation": {
      "marketValue": null,
      "marketValuePercentage": 13.12,
      "saleProceed": 495553.33,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 1,
      "bathrooms": 1
    },
    "location": {
      "area": {
        "name": "Remraam",
        "displayName": "Remraam"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2020-02-26",
      "closeDate": "2020-01-28",
      "soldDate": "2020-02-26",
      "completionDate": null
    }
  },
  {
    "id": 498,
    "code": "SC-109",
    "title": "JVC Townhouse by Nakheel (1 Bed)",
    "investmentType": "HOLD",
    "propertyCategory": "RESIDENTIAL",
    "price": 980000,
    "projectPrice": 980000,
    "propertyType": "TOWN_HOUSE",
    "investmentCategory": "LONG_TERM",
    "propertyStatus": "EXITED",
    "renovationProgress": 100,
    "totalReturnRoi": 503143.95,
    "totalReturnRoiPercentage": 47.3,
    "investors": 67,
    "rental": {
      "grossYield": 8.67,
      "netYield": null,
      "dividendYield": 7.89,
      "grossRent": 85000,
      "netRent": 77344,
      "totalRentalIncome": 206410.72,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 67,
      "annualized": 7.76,
      "totalGrossRoi": 41.6,
      "investmentPeriod": 39,
      "funded": 100,
      "fundedAmount": 980000,
      "totalReturnRoi": 503143.95,
      "totalReturnRoiPercentage": 47.3,
      "renovationProgress": 100
    },
    "valuation": {
      "marketValue": null,
      "marketValuePercentage": 27.55,
      "saleProceed": 1397239.48,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 1,
      "bathrooms": 2
    },
    "location": {
      "area": {
        "name": "JVC",
        "displayName": "JVC"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2020-06-08",
      "closeDate": "2020-02-16",
      "soldDate": "2020-06-08",
      "completionDate": null
    }
  },
  {
    "id": 497,
    "code": "SC-108",
    "title": "Emaar's The Greens (Studio)",
    "investmentType": "HOLD",
    "propertyCategory": "RESIDENTIAL",
    "price": 460000,
    "projectPrice": 460000,
    "propertyType": "APARTMENT",
    "investmentCategory": "LONG_TERM",
    "propertyStatus": "EXITED",
    "renovationProgress": 100,
    "totalReturnRoi": 180431.9,
    "totalReturnRoiPercentage": 35.95,
    "investors": 36,
    "rental": {
      "grossYield": 9.57,
      "netYield": 7.95,
      "dividendYield": 6.86,
      "grossRent": 44000,
      "netRent": 33749,
      "totalRentalIncome": 98316.21,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 36,
      "annualized": 6.84,
      "totalGrossRoi": 47.25,
      "investmentPeriod": 47,
      "funded": 100,
      "fundedAmount": 460000,
      "totalReturnRoi": 180431.9,
      "totalReturnRoiPercentage": 35.95,
      "renovationProgress": 100
    },
    "valuation": {
      "marketValue": null,
      "marketValuePercentage": 6.52,
      "saleProceed": 599821.94,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 0,
      "bathrooms": 1
    },
    "location": {
      "area": {
        "name": "The Greens",
        "displayName": "The Greens"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2019-04-29",
      "closeDate": "2019-11-27",
      "soldDate": "2019-04-29",
      "completionDate": null
    }
  },
  {
    "id": 496,
    "code": "SC-107",
    "title": "Studio in Al Thamam Building, Remraam",
    "investmentType": "HOLD",
    "propertyCategory": "RESIDENTIAL",
    "price": 287000,
    "projectPrice": 287000,
    "propertyType": "APARTMENT",
    "investmentCategory": "LONG_TERM",
    "propertyStatus": "EXITED",
    "renovationProgress": 100,
    "totalReturnRoi": 153973.36,
    "totalReturnRoiPercentage": 49.72,
    "investors": 38,
    "rental": {
      "grossYield": 11.5,
      "netYield": 9.37,
      "dividendYield": 8.01,
      "grossRent": 33000,
      "netRent": 26275,
      "totalRentalIncome": 91446.59,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 38,
      "annualized": 7.56,
      "totalGrossRoi": 56.92,
      "investmentPeriod": 62,
      "funded": 103.99,
      "fundedAmount": 298451.3,
      "totalReturnRoi": 153973.36,
      "totalReturnRoiPercentage": 49.72,
      "renovationProgress": 100
    },
    "valuation": {
      "marketValue": null,
      "marketValuePercentage": 21.95,
      "saleProceed": 382415.77,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 0,
      "bathrooms": 1
    },
    "location": {
      "area": {
        "name": "Remraam",
        "displayName": "Remraam"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2019-10-02",
      "closeDate": "2019-07-28",
      "soldDate": "2019-10-02",
      "completionDate": null
    }
  },
  {
    "id": 495,
    "code": "SC-106",
    "title": "Pulse Smart Residence, JVC (1 Bed)",
    "investmentType": "HOLD",
    "propertyCategory": "RESIDENTIAL",
    "price": 455000,
    "projectPrice": 455000,
    "propertyType": "APARTMENT",
    "investmentCategory": "LONG_TERM",
    "propertyStatus": "EXITED",
    "renovationProgress": 100,
    "totalReturnRoi": 178509.33,
    "totalReturnRoiPercentage": 35.95,
    "investors": 51,
    "rental": {
      "grossYield": 10.99,
      "netYield": 9.01,
      "dividendYield": 8.05,
      "grossRent": 50000,
      "netRent": 39125,
      "totalRentalIncome": 117356.45,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 51,
      "annualized": 6.56,
      "totalGrossRoi": 48.1,
      "investmentPeriod": 71,
      "funded": 112.29,
      "fundedAmount": 510919.5,
      "totalReturnRoi": 178509.33,
      "totalReturnRoiPercentage": 35.95,
      "renovationProgress": 100
    },
    "valuation": {
      "marketValue": null,
      "marketValuePercentage": 31.87,
      "saleProceed": 557725.38,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 1,
      "bathrooms": 1
    },
    "location": {
      "area": {
        "name": "JVC",
        "displayName": "JVC"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2019-10-29",
      "closeDate": "2019-09-30",
      "soldDate": "2019-10-29",
      "completionDate": null
    }
  },
  {
    "id": 494,
    "code": "SC-105",
    "title": "Al Arta 1 (1 Bed)",
    "investmentType": "HOLD",
    "propertyCategory": "RESIDENTIAL",
    "price": 683000,
    "projectPrice": 683000,
    "propertyType": "APARTMENT",
    "investmentCategory": "LONG_TERM",
    "propertyStatus": "EXITED",
    "renovationProgress": 100,
    "totalReturnRoi": 140666.77,
    "totalReturnRoiPercentage": 18.89,
    "investors": 25,
    "rental": {
      "grossYield": 9.37,
      "netYield": 7.57,
      "dividendYield": 6.54,
      "grossRent": 64000,
      "netRent": 47894.36,
      "totalRentalIncome": 127955.48,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 25,
      "annualized": 6.19,
      "totalGrossRoi": 45.75,
      "investmentPeriod": 40,
      "funded": 100,
      "fundedAmount": 683000,
      "totalReturnRoi": 140666.77,
      "totalReturnRoiPercentage": 18.89,
      "renovationProgress": 100
    },
    "valuation": {
      "marketValue": null,
      "marketValuePercentage": 0,
      "saleProceed": 777754.04,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 1,
      "bathrooms": 1
    },
    "location": {
      "area": {
        "name": "The Greens",
        "displayName": "The Greens"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2019-07-21",
      "closeDate": "2019-08-04",
      "soldDate": "2019-07-21",
      "completionDate": null
    }
  },
  {
    "id": 483,
    "code": "SC-104",
    "title": "Marina Quays ( Dubai Marina)",
    "investmentType": "HOLD",
    "propertyCategory": "RESIDENTIAL",
    "price": 841500,
    "projectPrice": 841500,
    "propertyType": "APARTMENT",
    "investmentCategory": "SHORT_TERM",
    "propertyStatus": "EXITED",
    "renovationProgress": 100,
    "totalReturnRoi": 246806.34,
    "totalReturnRoiPercentage": 26.46,
    "investors": 35,
    "rental": {
      "grossYield": 11,
      "netYield": 8.77,
      "dividendYield": 8.12,
      "grossRent": 92529,
      "netRent": 73187.4,
      "totalRentalIncome": 199433.07,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 35,
      "annualized": 6.74,
      "totalGrossRoi": 47.35,
      "investmentPeriod": 48,
      "funded": 100,
      "fundedAmount": 841500,
      "totalReturnRoi": 246806.34,
      "totalReturnRoiPercentage": 26.46,
      "renovationProgress": 100
    },
    "valuation": {
      "marketValue": null,
      "marketValuePercentage": 0,
      "saleProceed": 1006473.97,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 1,
      "bathrooms": 2
    },
    "location": {
      "area": {
        "name": "Dubai Marina",
        "displayName": "Dubai Marina"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2019-03-03",
      "closeDate": "2019-03-03",
      "soldDate": "2019-03-03",
      "completionDate": null
    }
  },
  {
    "id": 482,
    "code": "SC-103",
    "title": "Marina Diamond 1 (Studio)",
    "investmentType": "HOLD",
    "propertyCategory": "RESIDENTIAL",
    "price": 475000,
    "projectPrice": 475000,
    "propertyType": "APARTMENT",
    "investmentCategory": "SHORT_TERM",
    "propertyStatus": "EXITED",
    "renovationProgress": 100,
    "totalReturnRoi": 225453.45,
    "totalReturnRoiPercentage": 42.08,
    "investors": 48,
    "rental": {
      "grossYield": 11.81,
      "netYield": 10.32,
      "dividendYield": 7.68,
      "grossRent": 56119,
      "netRent": 48412,
      "totalRentalIncome": 168575.64,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 48,
      "annualized": 6.69,
      "totalGrossRoi": 52.6,
      "investmentPeriod": 53,
      "funded": 100.64,
      "fundedAmount": 478040,
      "totalReturnRoi": 225453.45,
      "totalReturnRoiPercentage": 42.08,
      "renovationProgress": 100
    },
    "valuation": {
      "marketValue": null,
      "marketValuePercentage": 7.37,
      "saleProceed": 608888.06,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 0,
      "bathrooms": 1
    },
    "location": {
      "area": {
        "name": "Dubai Marina",
        "displayName": "Dubai Marina"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2019-05-01",
      "closeDate": "2019-04-24",
      "soldDate": "2019-05-01",
      "completionDate": null
    }
  },
  {
    "id": 481,
    "code": "SC-102",
    "title": "Lake View Studio",
    "investmentType": "HOLD",
    "propertyCategory": "RESIDENTIAL",
    "price": 500000,
    "projectPrice": 500000,
    "propertyType": "APARTMENT",
    "investmentCategory": "LONG_TERM",
    "propertyStatus": "EXITED",
    "renovationProgress": 100,
    "totalReturnRoi": 264165.36,
    "totalReturnRoiPercentage": 48.36,
    "investors": 29,
    "rental": {
      "grossYield": 11,
      "netYield": 9.9,
      "dividendYield": 8.73,
      "grossRent": 55000,
      "netRent": 46393,
      "totalRentalIncome": 164243.61,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 29,
      "annualized": 13.37,
      "totalGrossRoi": 79.75,
      "investmentPeriod": 62,
      "funded": 101.87,
      "fundedAmount": 509350,
      "totalReturnRoi": 264165.36,
      "totalReturnRoiPercentage": 48.36,
      "renovationProgress": 100
    },
    "valuation": {
      "marketValue": null,
      "marketValuePercentage": 0,
      "saleProceed": 663874.89,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 0,
      "bathrooms": 1
    },
    "location": {
      "area": {
        "name": "JLT",
        "displayName": "JLT"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2018-10-15",
      "closeDate": null,
      "soldDate": "2018-10-15",
      "completionDate": null
    }
  },
  {
    "id": 537,
    "code": "RS-102",
    "title": "105 Living Gardens 2",
    "investmentType": "HOLD",
    "propertyCategory": "RESIDENTIAL",
    "price": 454156,
    "projectPrice": 454156,
    "propertyType": "APARTMENT",
    "investmentCategory": "LONG_TERM",
    "propertyStatus": "SOLD",
    "renovationProgress": null,
    "totalReturnRoi": -348484.93,
    "totalReturnRoiPercentage": -69.67,
    "investors": 46,
    "rental": {
      "grossYield": 6.78,
      "netYield": 5.47,
      "dividendYield": 5.07,
      "grossRent": 30800,
      "netRent": 23013.4,
      "totalRentalIncome": 151721.51,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 46,
      "annualized": 8.98,
      "totalGrossRoi": 54.95,
      "investmentPeriod": 60,
      "funded": 102.72,
      "fundedAmount": 466509.04,
      "totalReturnRoi": null,
      "totalReturnRoiPercentage": null,
      "renovationProgress": null
    },
    "valuation": {
      "marketValue": null,
      "marketValuePercentage": 32.11,
      "saleProceed": null,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 0,
      "bathrooms": 1
    },
    "location": {
      "area": {
        "name": "JVC",
        "displayName": "JVC"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2021-11-08",
      "closeDate": "2021-02-23",
      "soldDate": "2021-11-08",
      "completionDate": null
    }
  },
  {
    "id": 736,
    "code": "ID-234",
    "title": "Miami House Collection 38",
    "investmentType": "FLIP",
    "propertyCategory": "RESIDENTIAL",
    "price": 36000000,
    "projectPrice": 36000000,
    "propertyType": "VILLA",
    "investmentCategory": null,
    "propertyStatus": "SOLD",
    "renovationProgress": null,
    "totalReturnRoi": -7666776,
    "totalReturnRoiPercentage": -100,
    "investors": 110,
    "rental": {
      "grossYield": null,
      "netYield": null,
      "dividendYield": null,
      "grossRent": 0,
      "netRent": 0,
      "totalRentalIncome": 0,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 110,
      "annualized": null,
      "totalGrossRoi": null,
      "investmentPeriod": 12,
      "funded": 21.3,
      "fundedAmount": 7668000,
      "totalReturnRoi": null,
      "totalReturnRoiPercentage": null,
      "renovationProgress": null
    },
    "valuation": {
      "marketValue": null,
      "marketValuePercentage": 0,
      "saleProceed": null,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 4,
      "bathrooms": 3
    },
    "location": {
      "area": {
        "name": "Al Barari",
        "displayName": "Al Barari"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2025-05-05",
      "closeDate": "2024-11-22",
      "soldDate": "2025-05-05",
      "completionDate": null
    }
  },
  {
    "id": 723,
    "code": "ID-233",
    "title": "Miami House Collection 37",
    "investmentType": "FLIP",
    "propertyCategory": "RESIDENTIAL",
    "price": 33614420,
    "projectPrice": 33614420,
    "propertyType": "VILLA",
    "investmentCategory": null,
    "propertyStatus": "SOLD",
    "renovationProgress": null,
    "totalReturnRoi": -33612242.22,
    "totalReturnRoiPercentage": -100,
    "investors": 840,
    "rental": {
      "grossYield": null,
      "netYield": null,
      "dividendYield": null,
      "grossRent": 0,
      "netRent": 0,
      "totalRentalIncome": 0,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 840,
      "annualized": null,
      "totalGrossRoi": null,
      "investmentPeriod": 12,
      "funded": 100,
      "fundedAmount": 33614420,
      "totalReturnRoi": null,
      "totalReturnRoiPercentage": null,
      "renovationProgress": null
    },
    "valuation": {
      "marketValue": null,
      "marketValuePercentage": 0,
      "saleProceed": null,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 5,
      "bathrooms": 3
    },
    "location": {
      "area": {
        "name": "Al Barari",
        "displayName": "Al Barari"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2025-01-30",
      "closeDate": "2024-12-17",
      "soldDate": "2025-01-30",
      "completionDate": null
    }
  },
  {
    "id": 711,
    "code": "ID-230",
    "title": "Miami House Collection 36",
    "investmentType": "FLIP",
    "propertyCategory": "RESIDENTIAL",
    "price": 30583260,
    "projectPrice": 37183260,
    "propertyType": "VILLA",
    "investmentCategory": null,
    "propertyStatus": "SOLD",
    "renovationProgress": null,
    "totalReturnRoi": -17560288.61,
    "totalReturnRoiPercentage": -100,
    "investors": 441,
    "rental": {
      "grossYield": null,
      "netYield": null,
      "dividendYield": null,
      "grossRent": 0,
      "netRent": 0,
      "totalRentalIncome": 0,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 441,
      "annualized": null,
      "totalGrossRoi": null,
      "investmentPeriod": 12,
      "funded": 57.42,
      "fundedAmount": 21350627.89,
      "totalReturnRoi": null,
      "totalReturnRoiPercentage": null,
      "renovationProgress": null
    },
    "valuation": {
      "marketValue": null,
      "marketValuePercentage": 0,
      "saleProceed": null,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 4,
      "bathrooms": 3
    },
    "location": {
      "area": {
        "name": "Jumeriah Islands",
        "displayName": "Jumeriah Islands"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2024-10-23",
      "closeDate": "2024-08-15",
      "soldDate": "2024-10-23",
      "completionDate": null
    }
  },
  {
    "id": 654,
    "code": "ID-228",
    "title": "Miami House Collection 25",
    "investmentType": "FLIP",
    "propertyCategory": "RESIDENTIAL",
    "price": 15472500,
    "projectPrice": 19222500,
    "propertyType": "VILLA",
    "investmentCategory": null,
    "propertyStatus": "EXITED",
    "renovationProgress": 100,
    "totalReturnRoi": 2995189.92,
    "totalReturnRoiPercentage": 15.58,
    "investors": 494,
    "rental": {
      "grossYield": null,
      "netYield": null,
      "dividendYield": null,
      "grossRent": 0,
      "netRent": 0,
      "totalRentalIncome": 0,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 494,
      "annualized": null,
      "totalGrossRoi": null,
      "investmentPeriod": 12,
      "funded": 68.93,
      "fundedAmount": 13250069.25,
      "totalReturnRoi": 2995189.92,
      "totalReturnRoiPercentage": 15.58,
      "renovationProgress": 100
    },
    "valuation": {
      "marketValue": null,
      "marketValuePercentage": 0,
      "saleProceed": 25000000,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 4,
      "bathrooms": 3
    },
    "location": {
      "area": {
        "name": "Jumeriah Islands",
        "displayName": "Jumeriah Islands"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2023-10-06",
      "closeDate": "2023-12-29",
      "soldDate": "2023-10-06",
      "completionDate": "2024-02-10"
    }
  },
  {
    "id": 650,
    "code": "ID-227",
    "title": "Miami House Collection 22",
    "investmentType": "FLIP",
    "propertyCategory": "RESIDENTIAL",
    "price": 12682000,
    "projectPrice": 15932000,
    "propertyType": "VILLA",
    "investmentCategory": null,
    "propertyStatus": "EXITED",
    "renovationProgress": 100,
    "totalReturnRoi": 3002035.84,
    "totalReturnRoiPercentage": 18.84,
    "investors": 514,
    "rental": {
      "grossYield": 20.97,
      "netYield": 20.97,
      "dividendYield": 18.88,
      "grossRent": 2660000,
      "netRent": 2394000,
      "totalRentalIncome": 0,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 514,
      "annualized": null,
      "totalGrossRoi": null,
      "investmentPeriod": 17,
      "funded": 58.37,
      "fundedAmount": 9299508.4,
      "totalReturnRoi": 3002035.84,
      "totalReturnRoiPercentage": 18.84,
      "renovationProgress": 100
    },
    "valuation": {
      "marketValue": null,
      "marketValuePercentage": 0,
      "saleProceed": 21750000,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 4,
      "bathrooms": 3
    },
    "location": {
      "area": {
        "name": "Jumeriah Islands",
        "displayName": "Jumeriah Islands"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2023-05-26",
      "closeDate": "2023-02-06",
      "soldDate": "2023-05-26",
      "completionDate": "2024-03-30"
    }
  },
  {
    "id": 648,
    "code": "ID-226",
    "title": "Miami House Collection 9",
    "investmentType": "FLIP",
    "propertyCategory": "RESIDENTIAL",
    "price": 9252774.6,
    "projectPrice": 13170000,
    "propertyType": "VILLA",
    "investmentCategory": null,
    "propertyStatus": "EXITED",
    "renovationProgress": 100,
    "totalReturnRoi": 5932250.66,
    "totalReturnRoiPercentage": 45.04,
    "investors": 332,
    "rental": {
      "grossYield": null,
      "netYield": null,
      "dividendYield": null,
      "grossRent": 0,
      "netRent": 0,
      "totalRentalIncome": 0,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 332,
      "annualized": null,
      "totalGrossRoi": null,
      "investmentPeriod": 11,
      "funded": 38.36,
      "fundedAmount": 5052012,
      "totalReturnRoi": 5932250.66,
      "totalReturnRoiPercentage": 45.04,
      "renovationProgress": 100
    },
    "valuation": {
      "marketValue": null,
      "marketValuePercentage": 0,
      "saleProceed": 23000000,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 4,
      "bathrooms": 3
    },
    "location": {
      "area": {
        "name": "Jumeriah Islands",
        "displayName": "Jumeriah Islands"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2023-02-03",
      "closeDate": "2022-11-01",
      "soldDate": "2023-02-03",
      "completionDate": "2023-08-21"
    }
  },
  {
    "id": 643,
    "code": "ID-225",
    "title": "Beautiful Studio in Burj Al Nujoom, Downtown",
    "investmentType": "HOLD",
    "propertyCategory": "RESIDENTIAL",
    "price": 580000,
    "projectPrice": 580000,
    "propertyType": "APARTMENT",
    "investmentCategory": "SHORT_TERM",
    "propertyStatus": "SOLD",
    "renovationProgress": null,
    "totalReturnRoi": -560150.64,
    "totalReturnRoiPercentage": -78.95,
    "investors": 202,
    "rental": {
      "grossYield": 17.38,
      "netYield": null,
      "dividendYield": 10.82,
      "grossRent": 100831,
      "netRent": 74360.19,
      "totalRentalIncome": 149312.3,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 202,
      "annualized": 10.39,
      "totalGrossRoi": 66.12,
      "investmentPeriod": 60,
      "funded": 104.91,
      "fundedAmount": 608478,
      "totalReturnRoi": null,
      "totalReturnRoiPercentage": null,
      "renovationProgress": null
    },
    "valuation": {
      "marketValue": null,
      "marketValuePercentage": 42.24,
      "saleProceed": 0,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 0,
      "bathrooms": 1
    },
    "location": {
      "area": {
        "name": "Downtown Dubai",
        "displayName": "Downtown Dubai"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2022-11-01",
      "closeDate": "2022-10-24",
      "soldDate": "2022-11-01",
      "completionDate": null
    }
  },
  {
    "id": 635,
    "code": "ID-224",
    "title": "Miami House Collection 8",
    "investmentType": "FLIP",
    "propertyCategory": "RESIDENTIAL",
    "price": 12569412.49,
    "projectPrice": 15932000,
    "propertyType": "VILLA",
    "investmentCategory": null,
    "propertyStatus": "EXITED",
    "renovationProgress": 100,
    "totalReturnRoi": 4660662.4,
    "totalReturnRoiPercentage": 29.25,
    "investors": 299,
    "rental": {
      "grossYield": null,
      "netYield": null,
      "dividendYield": null,
      "grossRent": 0,
      "netRent": 0,
      "totalRentalIncome": 0,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 299,
      "annualized": null,
      "totalGrossRoi": null,
      "investmentPeriod": 18,
      "funded": 48.96,
      "fundedAmount": 7800307.2,
      "totalReturnRoi": 4660662.4,
      "totalReturnRoiPercentage": 29.25,
      "renovationProgress": 100
    },
    "valuation": {
      "marketValue": null,
      "marketValuePercentage": 0,
      "saleProceed": 22000000,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 4,
      "bathrooms": 3
    },
    "location": {
      "area": {
        "name": "Jumeriah Islands",
        "displayName": "Jumeriah Islands"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2023-01-10",
      "closeDate": "2022-10-03",
      "soldDate": "2023-01-10",
      "completionDate": "2024-08-10"
    }
  }
] as const satisfies Property[];

export const exitedProperties: Property[] = [
  {
    "id": 717,
    "code": "SC-285",
    "title": "3 Bedroom Villa, Palm Jumeirah",
    "investmentType": "FLIP",
    "propertyCategory": "RESIDENTIAL",
    "price": 14823160,
    "projectPrice": 14823160,
    "propertyType": "VILLA",
    "investmentCategory": null,
    "propertyStatus": "EXITED",
    "renovationProgress": 100,
    "totalReturnRoi": 9176840,
    "totalReturnRoiPercentage": 24.59,
    "investors": 114,
    "rental": {
      "grossYield": null,
      "netYield": null,
      "dividendYield": null,
      "grossRent": 0,
      "netRent": 0,
      "totalRentalIncome": 0,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 114,
      "annualized": null,
      "totalGrossRoi": null,
      "investmentPeriod": 14,
      "funded": 100.49,
      "fundedAmount": 14895793.48,
      "totalReturnRoi": 9176840,
      "totalReturnRoiPercentage": 24.59,
      "renovationProgress": 100
    },
    "valuation": {
      "marketValue": null,
      "marketValuePercentage": 0,
      "saleProceed": 24000000,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 3,
      "bathrooms": 4
    },
    "location": {
      "area": null,
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2024-11-05",
      "closeDate": "2025-08-11",
      "soldDate": "2024-11-05",
      "completionDate": null
    }
  },
  {
    "id": 712,
    "code": "SC-282",
    "title": "3 Bedroom Duplex, Central Park Towers",
    "investmentType": "FLIP",
    "propertyCategory": "RESIDENTIAL",
    "price": 4880772,
    "projectPrice": 6201326,
    "propertyType": "APARTMENT",
    "investmentCategory": null,
    "propertyStatus": "EXITED",
    "renovationProgress": 100,
    "totalReturnRoi": 2669228,
    "totalReturnRoiPercentage": 25.01,
    "investors": 57,
    "rental": {
      "grossYield": null,
      "netYield": null,
      "dividendYield": null,
      "grossRent": 0,
      "netRent": 0,
      "totalRentalIncome": 0,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 57,
      "annualized": null,
      "totalGrossRoi": null,
      "investmentPeriod": 18,
      "funded": 100,
      "fundedAmount": 6201326,
      "totalReturnRoi": 2669228,
      "totalReturnRoiPercentage": 25.01,
      "renovationProgress": 100
    },
    "valuation": {
      "marketValue": null,
      "marketValuePercentage": 0,
      "saleProceed": 8700000,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 3,
      "bathrooms": 4
    },
    "location": {
      "area": {
        "name": "DIFC",
        "displayName": "DIFC"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2024-08-07",
      "closeDate": "2026-01-06",
      "soldDate": "2024-08-07",
      "completionDate": null
    }
  },
  {
    "id": 651,
    "code": "SC-235",
    "title": "Beautiful 1 Bedroom in Windsor Manor, Business Bay",
    "investmentType": "HOLD",
    "propertyCategory": "RESIDENTIAL",
    "price": 925000,
    "projectPrice": 925000,
    "propertyType": "APARTMENT",
    "investmentCategory": "LONG_TERM",
    "propertyStatus": "EXITED",
    "renovationProgress": 100,
    "totalReturnRoi": 223528.79,
    "totalReturnRoiPercentage": 21.2,
    "investors": 255,
    "rental": {
      "grossYield": 14.25,
      "netYield": 13.2,
      "dividendYield": 8.97,
      "grossRent": 131856,
      "netRent": 96339,
      "totalRentalIncome": 73594.34,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 255,
      "annualized": 9.23,
      "totalGrossRoi": 57.55,
      "investmentPeriod": 20,
      "funded": 103.45,
      "fundedAmount": 956912.5,
      "totalReturnRoi": 223528.79,
      "totalReturnRoiPercentage": 21.2,
      "renovationProgress": 100
    },
    "valuation": {
      "marketValue": null,
      "marketValuePercentage": 29.73,
      "saleProceed": 1237156.95,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 1,
      "bathrooms": 2
    },
    "location": {
      "area": {
        "name": "Business Bay",
        "displayName": "Business Bay"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2023-01-30",
      "closeDate": "2022-12-19",
      "soldDate": "2023-01-30",
      "completionDate": null
    }
  },
  {
    "id": 649,
    "code": "SC-234",
    "title": "1 Bedroom in Golden Mile 8, Palm Jumeirah",
    "investmentType": "HOLD",
    "propertyCategory": "RESIDENTIAL",
    "price": 1600000,
    "projectPrice": 1600000,
    "propertyType": "APARTMENT",
    "investmentCategory": "SHORT_TERM",
    "propertyStatus": "EXITED",
    "renovationProgress": 100,
    "totalReturnRoi": 332726.25,
    "totalReturnRoiPercentage": 18.61,
    "investors": 193,
    "rental": {
      "grossYield": 12.6,
      "netYield": null,
      "dividendYield": 8.13,
      "grossRent": 201663,
      "netRent": 143517.19,
      "totalRentalIncome": 101076.02,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 193,
      "annualized": 9.04,
      "totalGrossRoi": 54.6,
      "investmentPeriod": 18,
      "funded": 99.76,
      "fundedAmount": 1596160,
      "totalReturnRoi": 332726.25,
      "totalReturnRoiPercentage": 18.61,
      "renovationProgress": 100
    },
    "valuation": {
      "marketValue": null,
      "marketValuePercentage": 25,
      "saleProceed": 2073714,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 1,
      "bathrooms": 2
    },
    "location": {
      "area": {
        "name": "Palm Jumeirah",
        "displayName": "Palm Jumeirah"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2023-01-30",
      "closeDate": "2022-12-27",
      "soldDate": "2023-01-30",
      "completionDate": null
    }
  },
  {
    "id": 647,
    "code": "SC-233",
    "title": "2 Bedroom in Opal Tower, Dubai Marina",
    "investmentType": "HOLD",
    "propertyCategory": "RESIDENTIAL",
    "price": 1315000,
    "projectPrice": 1315000,
    "propertyType": "APARTMENT",
    "investmentCategory": "SHORT_TERM",
    "propertyStatus": "EXITED",
    "renovationProgress": 100,
    "totalReturnRoi": 479848.58,
    "totalReturnRoiPercentage": 32.46,
    "investors": 352,
    "rental": {
      "grossYield": 16.52,
      "netYield": null,
      "dividendYield": 9.75,
      "grossRent": 217175,
      "netRent": 144070.69,
      "totalRentalIncome": 134763.33,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 352,
      "annualized": 10.3,
      "totalGrossRoi": 67.7,
      "investmentPeriod": 29,
      "funded": 102.23,
      "fundedAmount": 1344324.5,
      "totalReturnRoi": 479848.58,
      "totalReturnRoiPercentage": 32.46,
      "renovationProgress": 100
    },
    "valuation": {
      "marketValue": null,
      "marketValuePercentage": 46.39,
      "saleProceed": 1873747.84,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 2,
      "bathrooms": 3
    },
    "location": {
      "area": {
        "name": "Dubai Marina",
        "displayName": "Dubai Marina"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2023-01-30",
      "closeDate": "2023-01-17",
      "soldDate": "2023-01-30",
      "completionDate": null
    }
  },
  {
    "id": 646,
    "code": "SC-232",
    "title": "1 Bedroom in Burj Al Nujoom, Downtown",
    "investmentType": "HOLD",
    "propertyCategory": "RESIDENTIAL",
    "price": 835000,
    "projectPrice": 835000,
    "propertyType": "APARTMENT",
    "investmentCategory": "SHORT_TERM",
    "propertyStatus": "EXITED",
    "renovationProgress": 100,
    "totalReturnRoi": 306362.72,
    "totalReturnRoiPercentage": 32.33,
    "investors": 179,
    "rental": {
      "grossYield": 16.72,
      "netYield": null,
      "dividendYield": 10.35,
      "grossRent": 139613,
      "netRent": 99806.56,
      "totalRentalIncome": 157839.77,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 179,
      "annualized": 10.57,
      "totalGrossRoi": 67.05,
      "investmentPeriod": 39,
      "funded": 105.25,
      "fundedAmount": 878837.5,
      "totalReturnRoi": 306362.72,
      "totalReturnRoiPercentage": 32.33,
      "renovationProgress": 100
    },
    "valuation": {
      "marketValue": null,
      "marketValuePercentage": 31.74,
      "saleProceed": 1126212.95,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 1,
      "bathrooms": -1
    },
    "location": {
      "area": {
        "name": "Downtown Dubai",
        "displayName": "Downtown Dubai"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2022-11-18",
      "closeDate": "2022-11-09",
      "soldDate": "2022-11-18",
      "completionDate": null
    }
  },
  {
    "id": 645,
    "code": "SC-231",
    "title": "One-Bedroom Duplex in Fortunato, JVC",
    "investmentType": "HOLD",
    "propertyCategory": "RESIDENTIAL",
    "price": 580000,
    "projectPrice": 580000,
    "propertyType": "APARTMENT",
    "investmentCategory": "LONG_TERM",
    "propertyStatus": "EXITED",
    "renovationProgress": 100,
    "totalReturnRoi": 330378.04,
    "totalReturnRoiPercentage": 49.28,
    "investors": 145,
    "rental": {
      "grossYield": 10.34,
      "netYield": null,
      "dividendYield": 7.79,
      "grossRent": 60000,
      "netRent": 45203,
      "totalRentalIncome": 130228.12,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 145,
      "annualized": 8.27,
      "totalGrossRoi": 52.4,
      "investmentPeriod": 34,
      "funded": 109.23,
      "fundedAmount": 633534,
      "totalReturnRoi": 330378.04,
      "totalReturnRoiPercentage": 49.28,
      "renovationProgress": 100
    },
    "valuation": {
      "marketValue": null,
      "marketValuePercentage": 55.17,
      "saleProceed": 894468.67,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 1,
      "bathrooms": 1
    },
    "location": {
      "area": {
        "name": "JVC",
        "displayName": "JVC"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2022-11-28",
      "closeDate": "2022-11-18",
      "soldDate": "2022-11-28",
      "completionDate": null
    }
  },
  {
    "id": 636,
    "code": "SC-225",
    "title": "2 Bedroom in Burj Al Nujoom, Downtown",
    "investmentType": "HOLD",
    "propertyCategory": "RESIDENTIAL",
    "price": 1250000,
    "projectPrice": 1250000,
    "propertyType": "APARTMENT",
    "investmentCategory": "SHORT_TERM",
    "propertyStatus": "EXITED",
    "renovationProgress": 100,
    "totalReturnRoi": 395261.63,
    "totalReturnRoiPercentage": 28.16,
    "investors": 245,
    "rental": {
      "grossYield": 16.13,
      "netYield": 14.37,
      "dividendYield": 10,
      "grossRent": 201663,
      "netRent": 140753.19,
      "totalRentalIncome": 200118.79,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 245,
      "annualized": 10.55,
      "totalGrossRoi": 66.55,
      "investmentPeriod": 33,
      "funded": 101.43,
      "fundedAmount": 1267875,
      "totalReturnRoi": 395261.63,
      "totalReturnRoiPercentage": 28.16,
      "renovationProgress": 100
    },
    "valuation": {
      "marketValue": null,
      "marketValuePercentage": 24,
      "saleProceed": 1644046.59,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 2,
      "bathrooms": 2
    },
    "location": {
      "area": {
        "name": "Downtown Dubai",
        "displayName": "Downtown Dubai"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2022-09-28",
      "closeDate": "2022-09-05",
      "soldDate": "2022-09-28",
      "completionDate": null
    }
  },
  {
    "id": 634,
    "code": "SC-223",
    "title": "1-Bedroom in Armada Tower 3, Jumeirah Lake Towers",
    "investmentType": "HOLD",
    "propertyCategory": "RESIDENTIAL",
    "price": 775000,
    "projectPrice": 775000,
    "propertyType": "APARTMENT",
    "investmentCategory": "SHORT_TERM",
    "propertyStatus": "EXITED",
    "renovationProgress": 100,
    "totalReturnRoi": 183006.54,
    "totalReturnRoiPercentage": 20.82,
    "investors": 184,
    "rental": {
      "grossYield": 16.01,
      "netYield": null,
      "dividendYield": 9.81,
      "grossRent": 124100,
      "netRent": 86851.25,
      "totalRentalIncome": 116620.04,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 184,
      "annualized": 10.35,
      "totalGrossRoi": 66,
      "investmentPeriod": 30,
      "funded": 103.4,
      "fundedAmount": 801350,
      "totalReturnRoi": 183006.54,
      "totalReturnRoiPercentage": 20.82,
      "renovationProgress": 100
    },
    "valuation": {
      "marketValue": null,
      "marketValuePercentage": 12.9,
      "saleProceed": 970773,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 1,
      "bathrooms": 1
    },
    "location": {
      "area": {
        "name": "JLT",
        "displayName": "JLT"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2022-09-05",
      "closeDate": "2022-07-31",
      "soldDate": "2022-09-05",
      "completionDate": null
    }
  },
  {
    "id": 631,
    "code": "SC-220",
    "title": "Fantastic 1-Bedroom in Dream Towers, Dubai Marina",
    "investmentType": "HOLD",
    "propertyCategory": "RESIDENTIAL",
    "price": 690000,
    "projectPrice": 690000,
    "propertyType": "APARTMENT",
    "investmentCategory": "SHORT_TERM",
    "propertyStatus": "EXITED",
    "renovationProgress": 100,
    "totalReturnRoi": 177290.02,
    "totalReturnRoiPercentage": 22.37,
    "investors": 207,
    "rental": {
      "grossYield": 16.86,
      "netYield": 15.21,
      "dividendYield": 10.16,
      "grossRent": 116344,
      "netRent": 82609.5,
      "totalRentalIncome": 95212.77,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 207,
      "annualized": 10.42,
      "totalGrossRoi": 68.55,
      "investmentPeriod": 29,
      "funded": 110.01,
      "fundedAmount": 759069,
      "totalReturnRoi": 177290.02,
      "totalReturnRoiPercentage": 22.37,
      "renovationProgress": 100
    },
    "valuation": {
      "marketValue": null,
      "marketValuePercentage": 19.57,
      "saleProceed": 898247,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 1,
      "bathrooms": 1
    },
    "location": {
      "area": {
        "name": "Dubai Marina",
        "displayName": "Dubai Marina"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2022-08-18",
      "closeDate": "2022-06-29",
      "soldDate": "2022-08-18",
      "completionDate": null
    }
  },
  {
    "id": 608,
    "code": "SC-211",
    "title": "1-Bedroom in Dream Towers, Dubai Marina",
    "investmentType": "HOLD",
    "propertyCategory": "RESIDENTIAL",
    "price": 600000,
    "projectPrice": 600000,
    "propertyType": "APARTMENT",
    "investmentCategory": "SHORT_TERM",
    "propertyStatus": "EXITED",
    "renovationProgress": 100,
    "totalReturnRoi": 264500.32,
    "totalReturnRoiPercentage": 38.09,
    "investors": 118,
    "rental": {
      "grossYield": 18.1,
      "netYield": 16.56,
      "dividendYield": 11.03,
      "grossRent": 108588,
      "netRent": 78469.75,
      "totalRentalIncome": 104887.4,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 118,
      "annualized": 10.55,
      "totalGrossRoi": 69.45,
      "investmentPeriod": 31,
      "funded": 107.46,
      "fundedAmount": 644760,
      "totalReturnRoi": 264500.32,
      "totalReturnRoiPercentage": 38.09,
      "renovationProgress": 100
    },
    "valuation": {
      "marketValue": null,
      "marketValuePercentage": 33.33,
      "saleProceed": 877205.42,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 1,
      "bathrooms": 1
    },
    "location": {
      "area": {
        "name": "Dubai Marina",
        "displayName": "Dubai Marina"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2022-06-29",
      "closeDate": "2022-05-12",
      "soldDate": "2022-06-29",
      "completionDate": null
    }
  },
  {
    "id": 605,
    "code": "SC-208",
    "title": "Fantastic 1-Bedroom in 8 Boulevard Walk, Downtown",
    "investmentType": "HOLD",
    "propertyCategory": "RESIDENTIAL",
    "price": 980000,
    "projectPrice": 980000,
    "propertyType": "APARTMENT",
    "investmentCategory": "SHORT_TERM",
    "propertyStatus": "EXITED",
    "renovationProgress": 100,
    "totalReturnRoi": 564131.52,
    "totalReturnRoiPercentage": 51.12,
    "investors": 112,
    "rental": {
      "grossYield": 17.41,
      "netYield": 15.69,
      "dividendYield": 11.27,
      "grossRent": 170638,
      "netRent": 121247.38,
      "totalRentalIncome": 178604.55,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 112,
      "annualized": 11.64,
      "totalGrossRoi": 71.3,
      "investmentPeriod": 43,
      "funded": 102.05,
      "fundedAmount": 1000090,
      "totalReturnRoi": 564131.52,
      "totalReturnRoiPercentage": 51.12,
      "renovationProgress": 100
    },
    "valuation": {
      "marketValue": null,
      "marketValuePercentage": 47.96,
      "saleProceed": 1531158.22,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 1,
      "bathrooms": 1
    },
    "location": {
      "area": {
        "name": "Downtown Dubai",
        "displayName": "Downtown Dubai"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2022-05-24",
      "closeDate": "2022-05-08",
      "soldDate": "2022-05-24",
      "completionDate": null
    }
  },
  {
    "id": 599,
    "code": "SC-202",
    "title": "Remarkable 2-Bedroom in Dubai Marina",
    "investmentType": "HOLD",
    "propertyCategory": "RESIDENTIAL",
    "price": 925000,
    "projectPrice": 925000,
    "propertyType": "APARTMENT",
    "investmentCategory": "SHORT_TERM",
    "propertyStatus": "EXITED",
    "renovationProgress": 100,
    "totalReturnRoi": 454605.86,
    "totalReturnRoiPercentage": 43.53,
    "investors": 126,
    "rental": {
      "grossYield": 18.45,
      "netYield": 17.19,
      "dividendYield": 11.82,
      "grossRent": 170638,
      "netRent": 126262.38,
      "totalRentalIncome": 140645.83,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 126,
      "annualized": 12.09,
      "totalGrossRoi": 74.75,
      "investmentPeriod": 32,
      "funded": 101.11,
      "fundedAmount": 935267.5,
      "totalReturnRoi": 454605.86,
      "totalReturnRoiPercentage": 43.53,
      "renovationProgress": 100
    },
    "valuation": {
      "marketValue": null,
      "marketValuePercentage": 51.35,
      "saleProceed": 1394948.78,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 2,
      "bathrooms": 1
    },
    "location": {
      "area": {
        "name": "Dubai Marina",
        "displayName": "Dubai Marina"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2022-04-28",
      "closeDate": "2022-04-08",
      "soldDate": "2022-04-28",
      "completionDate": null
    }
  },
  {
    "id": 598,
    "code": "SC-201",
    "title": "Stellar 1-Bedroom in Downtown Dubai",
    "investmentType": "HOLD",
    "propertyCategory": "RESIDENTIAL",
    "price": 950000,
    "projectPrice": 950000,
    "propertyType": "APARTMENT",
    "investmentCategory": "SHORT_TERM",
    "propertyStatus": "EXITED",
    "renovationProgress": 100,
    "totalReturnRoi": 430970.72,
    "totalReturnRoiPercentage": 40.49,
    "investors": 86,
    "rental": {
      "grossYield": 17.96,
      "netYield": 16.19,
      "dividendYield": 11.63,
      "grossRent": 170638,
      "netRent": 121265.38,
      "totalRentalIncome": 125016.16,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 86,
      "annualized": 12.13,
      "totalGrossRoi": 74.2,
      "investmentPeriod": 28,
      "funded": 100.88,
      "fundedAmount": 958360,
      "totalReturnRoi": 430970.72,
      "totalReturnRoiPercentage": 40.49,
      "renovationProgress": 100
    },
    "valuation": {
      "marketValue": null,
      "marketValuePercentage": 44.74,
      "saleProceed": 1407763.49,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 1,
      "bathrooms": 1
    },
    "location": {
      "area": {
        "name": "Downtown Dubai",
        "displayName": "Downtown Dubai"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2022-06-23",
      "closeDate": "2022-03-15",
      "soldDate": "2022-06-23",
      "completionDate": null
    }
  },
  {
    "id": 590,
    "code": "SC-193",
    "title": "1-Bedroom in Cascades Tower, Dubai Marina",
    "investmentType": "HOLD",
    "propertyCategory": "RESIDENTIAL",
    "price": 800000,
    "projectPrice": 800000,
    "propertyType": "APARTMENT",
    "investmentCategory": "SHORT_TERM",
    "propertyStatus": "EXITED",
    "renovationProgress": 100,
    "totalReturnRoi": 238338.17,
    "totalReturnRoiPercentage": 26.43,
    "investors": 160,
    "rental": {
      "grossYield": 15.12,
      "netYield": 12.92,
      "dividendYield": 8.91,
      "grossRent": 120998,
      "netRent": 80849.36,
      "totalRentalIncome": 72227.33,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 160,
      "annualized": 9.91,
      "totalGrossRoi": 65.4,
      "investmentPeriod": 19,
      "funded": 100.58,
      "fundedAmount": 804640,
      "totalReturnRoi": 238338.17,
      "totalReturnRoiPercentage": 26.43,
      "renovationProgress": 100
    },
    "valuation": {
      "marketValue": null,
      "marketValuePercentage": 34.38,
      "saleProceed": 1096762.09,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 1,
      "bathrooms": 1
    },
    "location": {
      "area": {
        "name": "Dubai Marina",
        "displayName": "Dubai Marina"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2022-04-12",
      "closeDate": "2022-03-25",
      "soldDate": "2022-04-12",
      "completionDate": null
    }
  },
  {
    "id": 584,
    "code": "SC-187",
    "title": "Yacht Bay Studio in Dubai Marina",
    "investmentType": "HOLD",
    "propertyCategory": "RESIDENTIAL",
    "price": 630000,
    "projectPrice": 630000,
    "propertyType": "APARTMENT",
    "investmentCategory": "SHORT_TERM",
    "propertyStatus": "EXITED",
    "renovationProgress": 100,
    "totalReturnRoi": 336488.24,
    "totalReturnRoiPercentage": 47.08,
    "investors": 60,
    "rental": {
      "grossYield": 13.9,
      "netYield": 12.76,
      "dividendYield": 8.62,
      "grossRent": 87600,
      "netRent": 63930,
      "totalRentalIncome": 165190.96,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 60,
      "annualized": 9.45,
      "totalGrossRoi": 59.95,
      "investmentPeriod": 47,
      "funded": 105.87,
      "fundedAmount": 666981,
      "totalReturnRoi": 336488.24,
      "totalReturnRoiPercentage": 47.08,
      "renovationProgress": 100
    },
    "valuation": {
      "marketValue": null,
      "marketValuePercentage": 46.03,
      "saleProceed": 910307.28,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 0,
      "bathrooms": 1
    },
    "location": {
      "area": {
        "name": "Downtown Dubai",
        "displayName": "Downtown Dubai"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2022-02-24",
      "closeDate": "2021-12-31",
      "soldDate": "2022-02-24",
      "completionDate": null
    }
  },
  {
    "id": 582,
    "code": "SC-185",
    "title": "Studio One",
    "investmentType": "HOLD",
    "propertyCategory": "RESIDENTIAL",
    "price": 730000,
    "projectPrice": 730000,
    "propertyType": "APARTMENT",
    "investmentCategory": "SHORT_TERM",
    "propertyStatus": "EXITED",
    "renovationProgress": 100,
    "totalReturnRoi": 273282.16,
    "totalReturnRoiPercentage": 33.23,
    "investors": 148,
    "rental": {
      "grossYield": 13.81,
      "netYield": 12.77,
      "dividendYield": 8.23,
      "grossRent": 100831,
      "netRent": 74451.42,
      "totalRentalIncome": 78335.55,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 148,
      "annualized": 9.32,
      "totalGrossRoi": 60.7,
      "investmentPeriod": 23,
      "funded": 100.22,
      "fundedAmount": 731606,
      "totalReturnRoi": 273282.16,
      "totalReturnRoiPercentage": 33.23,
      "renovationProgress": 100
    },
    "valuation": {
      "marketValue": null,
      "marketValuePercentage": 43.84,
      "saleProceed": 1044650.36,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 0,
      "bathrooms": 1
    },
    "location": {
      "area": {
        "name": "Dubai Marina",
        "displayName": "Dubai Marina"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2022-02-25",
      "closeDate": "2022-02-10",
      "soldDate": "2022-02-25",
      "completionDate": null
    }
  },
  {
    "id": 579,
    "code": "SC-182",
    "title": "Shamal Residence 2",
    "investmentType": "HOLD",
    "propertyCategory": "RESIDENTIAL",
    "price": 360000,
    "projectPrice": 360000,
    "propertyType": "APARTMENT",
    "investmentCategory": "LONG_TERM",
    "propertyStatus": "EXITED",
    "renovationProgress": 100,
    "totalReturnRoi": 206512.31,
    "totalReturnRoiPercentage": 49.89,
    "investors": 16,
    "rental": {
      "grossYield": 9.72,
      "netYield": 7.77,
      "dividendYield": 7.14,
      "grossRent": 35000,
      "netRent": 25707,
      "totalRentalIncome": 104537.81,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 16,
      "annualized": 8.68,
      "totalGrossRoi": 56.1,
      "investmentPeriod": 47,
      "funded": 100,
      "fundedAmount": 360000,
      "totalReturnRoi": 206512.31,
      "totalReturnRoiPercentage": 49.89,
      "renovationProgress": 100
    },
    "valuation": {
      "marketValue": null,
      "marketValuePercentage": 52.78,
      "saleProceed": 530318.25,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 0,
      "bathrooms": 1
    },
    "location": {
      "area": {
        "name": "JVC",
        "displayName": "JVC"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2022-01-31",
      "closeDate": "2021-12-31",
      "soldDate": "2022-01-31",
      "completionDate": null
    }
  },
  {
    "id": 578,
    "code": "SC-181",
    "title": "1-Bedroom in The Cascades, Dubai Marina",
    "investmentType": "HOLD",
    "propertyCategory": "RESIDENTIAL",
    "price": 800000,
    "projectPrice": 800000,
    "propertyType": "APARTMENT",
    "investmentCategory": "SHORT_TERM",
    "propertyStatus": "EXITED",
    "renovationProgress": 100,
    "totalReturnRoi": 277355.69,
    "totalReturnRoiPercentage": 30.76,
    "investors": 75,
    "rental": {
      "grossYield": 13.57,
      "netYield": 11.33,
      "dividendYield": 7.59,
      "grossRent": 108588,
      "netRent": 70312.16,
      "totalRentalIncome": 99303.22,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 75,
      "annualized": 8.8,
      "totalGrossRoi": 60.1,
      "investmentPeriod": 27,
      "funded": 100.56,
      "fundedAmount": 804480,
      "totalReturnRoi": 277355.69,
      "totalReturnRoiPercentage": 30.76,
      "renovationProgress": 100
    },
    "valuation": {
      "marketValue": null,
      "marketValuePercentage": 37.5,
      "saleProceed": 1109382.28,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 1,
      "bathrooms": 1
    },
    "location": {
      "area": {
        "name": "Dubai Marina",
        "displayName": "Dubai Marina"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2022-01-05",
      "closeDate": "2021-12-22",
      "soldDate": "2022-01-05",
      "completionDate": null
    }
  },
  {
    "id": 576,
    "code": "SC-179",
    "title": "One Bedroom in Fortunato Tower, JVC",
    "investmentType": "HOLD",
    "propertyCategory": "RESIDENTIAL",
    "price": 420000,
    "projectPrice": 420000,
    "propertyType": "APARTMENT",
    "investmentCategory": "LONG_TERM",
    "propertyStatus": "EXITED",
    "renovationProgress": 100,
    "totalReturnRoi": 310774.34,
    "totalReturnRoiPercentage": 63.92,
    "investors": 84,
    "rental": {
      "grossYield": 9.76,
      "netYield": 8.14,
      "dividendYield": 7.53,
      "grossRent": 41000,
      "netRent": 31625,
      "totalRentalIncome": 102375.65,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 84,
      "annualized": 7.95,
      "totalGrossRoi": 49.4,
      "investmentPeriod": 35,
      "funded": 104.27,
      "fundedAmount": 437934,
      "totalReturnRoi": 310774.34,
      "totalReturnRoiPercentage": 63.92,
      "renovationProgress": 100
    },
    "valuation": {
      "marketValue": null,
      "marketValuePercentage": 57.14,
      "saleProceed": 713403.07,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 1,
      "bathrooms": 1
    },
    "location": {
      "area": {
        "name": "JVC",
        "displayName": "JVC"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2021-11-24",
      "closeDate": "2021-11-24",
      "soldDate": "2021-11-24",
      "completionDate": null
    }
  },
  {
    "id": 575,
    "code": "SC-178",
    "title": "Studio in Marquise Square, Business Bay",
    "investmentType": "HOLD",
    "propertyCategory": "RESIDENTIAL",
    "price": 720000,
    "projectPrice": 720000,
    "propertyType": "APARTMENT",
    "investmentCategory": "LONG_TERM",
    "propertyStatus": "EXITED",
    "renovationProgress": 100,
    "totalReturnRoi": 457587.82,
    "totalReturnRoiPercentage": 56.24,
    "investors": 73,
    "rental": {
      "grossYield": 12.93,
      "netYield": 11.94,
      "dividendYield": 8.04,
      "grossRent": 93075,
      "netRent": 68712.5,
      "totalRentalIncome": 153257.69,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 73,
      "annualized": 9.06,
      "totalGrossRoi": 57,
      "investmentPeriod": 36,
      "funded": 102.61,
      "fundedAmount": 738792,
      "totalReturnRoi": 457587.82,
      "totalReturnRoiPercentage": 56.24,
      "renovationProgress": 100
    },
    "valuation": {
      "marketValue": null,
      "marketValuePercentage": 42.36,
      "saleProceed": 1148022.63,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 0,
      "bathrooms": 1
    },
    "location": {
      "area": {
        "name": "Business Bay",
        "displayName": "Business Bay"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2021-11-28",
      "closeDate": "2021-10-30",
      "soldDate": "2021-11-28",
      "completionDate": null
    }
  },
  {
    "id": 571,
    "code": "SC-174",
    "title": "Studio apartment in Mag 5, Dubai South",
    "investmentType": "HOLD",
    "propertyCategory": "RESIDENTIAL",
    "price": 291000,
    "projectPrice": 291000,
    "propertyType": "APARTMENT",
    "investmentCategory": "LONG_TERM",
    "propertyStatus": "EXITED",
    "renovationProgress": 100,
    "totalReturnRoi": 96827.07,
    "totalReturnRoiPercentage": 29.03,
    "investors": 69,
    "rental": {
      "grossYield": 17.06,
      "netYield": null,
      "dividendYield": 10.51,
      "grossRent": 49640,
      "netRent": 40179.8,
      "totalRentalIncome": 63350.17,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 69,
      "annualized": 7.31,
      "totalGrossRoi": 44.55,
      "investmentPeriod": 38,
      "funded": 105.67,
      "fundedAmount": 307499.7,
      "totalReturnRoi": 96827.07,
      "totalReturnRoiPercentage": 29.03,
      "renovationProgress": 100
    },
    "valuation": {
      "marketValue": null,
      "marketValuePercentage": 30.58,
      "saleProceed": 376885.78,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 0,
      "bathrooms": 1
    },
    "location": {
      "area": {
        "name": "Dubai South City",
        "displayName": "Dubai South City"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2021-11-04",
      "closeDate": "2021-09-29",
      "soldDate": "2021-11-04",
      "completionDate": null
    }
  },
  {
    "id": 568,
    "code": "SC-171",
    "title": "JBR - Murjan 2 - Studio",
    "investmentType": "HOLD",
    "propertyCategory": "RESIDENTIAL",
    "price": 850000,
    "projectPrice": 850000,
    "propertyType": "APARTMENT",
    "investmentCategory": "SHORT_TERM",
    "propertyStatus": "EXITED",
    "renovationProgress": 100,
    "totalReturnRoi": 344558.56,
    "totalReturnRoiPercentage": 36.13,
    "investors": 102,
    "rental": {
      "grossYield": 11.86,
      "netYield": 10.72,
      "dividendYield": 7.09,
      "grossRent": 100831,
      "netRent": 72260.42,
      "totalRentalIncome": 194125.05,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 102,
      "annualized": 8.44,
      "totalGrossRoi": 54.25,
      "investmentPeriod": 37,
      "funded": 101.69,
      "fundedAmount": 864365,
      "totalReturnRoi": 344558.56,
      "totalReturnRoiPercentage": 36.13,
      "renovationProgress": 100
    },
    "valuation": {
      "marketValue": null,
      "marketValuePercentage": 41.18,
      "saleProceed": 1134142.89,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 0,
      "bathrooms": 1
    },
    "location": {
      "area": {
        "name": "JBR",
        "displayName": "JBR"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2021-09-30",
      "closeDate": "2021-11-15",
      "soldDate": "2021-09-30",
      "completionDate": null
    }
  },
  {
    "id": 566,
    "code": "SC-169",
    "title": "2 bedroom in Studio One, Dubai Marina ",
    "investmentType": "HOLD",
    "propertyCategory": "RESIDENTIAL",
    "price": 1250000,
    "projectPrice": 1250000,
    "propertyType": "APARTMENT",
    "investmentCategory": "SHORT_TERM",
    "propertyStatus": "EXITED",
    "renovationProgress": 100,
    "totalReturnRoi": 773661.52,
    "totalReturnRoiPercentage": 55.77,
    "investors": 155,
    "rental": {
      "grossYield": 11.68,
      "netYield": 10.64,
      "dividendYield": 7.71,
      "grossRent": 146000,
      "netRent": 105913,
      "totalRentalIncome": 390224.5,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 155,
      "annualized": 9.32,
      "totalGrossRoi": 55.25,
      "investmentPeriod": 49,
      "funded": 101.72,
      "fundedAmount": 1271500,
      "totalReturnRoi": 773661.52,
      "totalReturnRoiPercentage": 55.77,
      "renovationProgress": 100
    },
    "valuation": {
      "marketValue": null,
      "marketValuePercentage": 44,
      "saleProceed": 1820625.77,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 2,
      "bathrooms": 2
    },
    "location": {
      "area": {
        "name": "Dubai Marina",
        "displayName": "Dubai Marina"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2021-10-31",
      "closeDate": "2021-10-31",
      "soldDate": "2021-10-31",
      "completionDate": null
    }
  },
  {
    "id": 565,
    "code": "SC-168",
    "title": "Boulevard Central 2, Studio",
    "investmentType": "HOLD",
    "propertyCategory": "RESIDENTIAL",
    "price": 875000,
    "projectPrice": 875000,
    "propertyType": "APARTMENT",
    "investmentCategory": "SHORT_TERM",
    "propertyStatus": "EXITED",
    "renovationProgress": 100,
    "totalReturnRoi": 453896.94,
    "totalReturnRoiPercentage": 46.39,
    "investors": 68,
    "rental": {
      "grossYield": 11.56,
      "netYield": 10.59,
      "dividendYield": 7.35,
      "grossRent": 101108,
      "netRent": 73930.56,
      "totalRentalIncome": 236297.44,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 68,
      "annualized": 10.5,
      "totalGrossRoi": 62.35,
      "investmentPeriod": 52,
      "funded": 105.29,
      "fundedAmount": 921287.5,
      "totalReturnRoi": 453896.94,
      "totalReturnRoiPercentage": 46.39,
      "renovationProgress": 100
    },
    "valuation": {
      "marketValue": null,
      "marketValuePercentage": 42.86,
      "saleProceed": 1229469.5,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 0,
      "bathrooms": 1
    },
    "location": {
      "area": {
        "name": "Downtown Dubai",
        "displayName": "Downtown Dubai"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2021-09-23",
      "closeDate": "2021-09-02",
      "soldDate": "2021-09-23",
      "completionDate": null
    }
  },
  {
    "id": 563,
    "code": "SC-166",
    "title": "Studio in Claren Tower 1, Downtown Dubai",
    "investmentType": "HOLD",
    "propertyCategory": "RESIDENTIAL",
    "price": 775000,
    "projectPrice": 775000,
    "propertyType": "APARTMENT",
    "investmentCategory": "SHORT_TERM",
    "propertyStatus": "EXITED",
    "renovationProgress": 100,
    "totalReturnRoi": 517382.86,
    "totalReturnRoiPercentage": 59.55,
    "investors": 63,
    "rental": {
      "grossYield": 13.05,
      "netYield": 11.56,
      "dividendYield": 7.75,
      "grossRent": 101108,
      "netRent": 70897.56,
      "totalRentalIncome": 254411.1,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 63,
      "annualized": 6.02,
      "totalGrossRoi": 43.6,
      "investmentPeriod": 51,
      "funded": 102.46,
      "fundedAmount": 794065,
      "totalReturnRoi": 517382.86,
      "totalReturnRoiPercentage": 59.55,
      "renovationProgress": 100
    },
    "valuation": {
      "marketValue": null,
      "marketValuePercentage": 51.61,
      "saleProceed": 1163985.51,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 0,
      "bathrooms": 1
    },
    "location": {
      "area": {
        "name": "Downtown Dubai",
        "displayName": "Downtown Dubai"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2021-08-29",
      "closeDate": "2021-08-15",
      "soldDate": "2021-08-29",
      "completionDate": null
    }
  },
  {
    "id": 562,
    "code": "SC-165",
    "title": "Two Bedroom in Emaar's Turia, The Views",
    "investmentType": "HOLD",
    "propertyCategory": "RESIDENTIAL",
    "price": 1100000,
    "projectPrice": 1100000,
    "propertyType": "APARTMENT",
    "investmentCategory": "LONG_TERM",
    "propertyStatus": "EXITED",
    "renovationProgress": 100,
    "totalReturnRoi": 635867.38,
    "totalReturnRoiPercentage": 52.77,
    "investors": 65,
    "rental": {
      "grossYield": 8.18,
      "netYield": 6.18,
      "dividendYield": 5.73,
      "grossRent": 90000,
      "netRent": 62975,
      "totalRentalIncome": 129858.18,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 65,
      "annualized": 9.85,
      "totalGrossRoi": 60.35,
      "investmentPeriod": 26,
      "funded": 100,
      "fundedAmount": 1100000,
      "totalReturnRoi": 635867.38,
      "totalReturnRoiPercentage": 52.77,
      "renovationProgress": 100
    },
    "valuation": {
      "marketValue": null,
      "marketValuePercentage": 36.36,
      "saleProceed": 1756922.95,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 2,
      "bathrooms": 3
    },
    "location": {
      "area": {
        "name": "The Views",
        "displayName": "The Views"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2021-08-22",
      "closeDate": "2021-10-25",
      "soldDate": "2021-08-22",
      "completionDate": null
    }
  },
  {
    "id": 560,
    "code": "SC-163",
    "title": "Mag 5 - 565 - Studio",
    "investmentType": "HOLD",
    "propertyCategory": "RESIDENTIAL",
    "price": 292006,
    "projectPrice": 292006,
    "propertyType": "APARTMENT",
    "investmentCategory": "LONG_TERM",
    "propertyStatus": "EXITED",
    "renovationProgress": 100,
    "totalReturnRoi": 112677.67,
    "totalReturnRoiPercentage": 33.88,
    "investors": 33,
    "rental": {
      "grossYield": 8.22,
      "netYield": null,
      "dividendYield": 7.63,
      "grossRent": 24000,
      "netRent": 22275,
      "totalRentalIncome": 70053.45,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 33,
      "annualized": 9.63,
      "totalGrossRoi": 56.25,
      "investmentPeriod": 46,
      "funded": 100.01,
      "fundedAmount": 292035.2,
      "totalReturnRoi": 112677.67,
      "totalReturnRoiPercentage": 33.88,
      "renovationProgress": 100
    },
    "valuation": {
      "marketValue": null,
      "marketValuePercentage": 36.98,
      "saleProceed": 386138.85,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 0,
      "bathrooms": 1
    },
    "location": {
      "area": {
        "name": "Dubai South City",
        "displayName": "Dubai South City"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2021-07-15",
      "closeDate": "2021-06-28",
      "soldDate": "2021-07-15",
      "completionDate": null
    }
  },
  {
    "id": 559,
    "code": "SC-162",
    "title": "Two Bedroom in Mag 5, Dubai South",
    "investmentType": "HOLD",
    "propertyCategory": "RESIDENTIAL",
    "price": 442944,
    "projectPrice": 442944,
    "propertyType": "APARTMENT",
    "investmentCategory": "LONG_TERM",
    "propertyStatus": "EXITED",
    "renovationProgress": 100,
    "totalReturnRoi": 232785.64,
    "totalReturnRoiPercentage": 46.85,
    "investors": 28,
    "rental": {
      "grossYield": 8.13,
      "netYield": null,
      "dividendYield": 7.6,
      "grossRent": 36000,
      "netRent": 33675,
      "totalRentalIncome": 113382.19,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 28,
      "annualized": 9.6,
      "totalGrossRoi": 55.9,
      "investmentPeriod": 46,
      "funded": 100,
      "fundedAmount": 442944,
      "totalReturnRoi": 232785.64,
      "totalReturnRoiPercentage": 46.85,
      "renovationProgress": 100
    },
    "valuation": {
      "marketValue": null,
      "marketValuePercentage": 42.23,
      "saleProceed": 633465.13,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 2,
      "bathrooms": 1
    },
    "location": {
      "area": {
        "name": "Dubai South City",
        "displayName": "Dubai South City"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2021-08-09",
      "closeDate": "2021-07-12",
      "soldDate": "2021-08-09",
      "completionDate": null
    }
  },
  {
    "id": 558,
    "code": "SC-161",
    "title": "Mag 5 - 560 - Studio",
    "investmentType": "HOLD",
    "propertyCategory": "RESIDENTIAL",
    "price": 292006,
    "projectPrice": 292006,
    "propertyType": "APARTMENT",
    "investmentCategory": "LONG_TERM",
    "propertyStatus": "EXITED",
    "renovationProgress": 100,
    "totalReturnRoi": 135360.38,
    "totalReturnRoiPercentage": 40.7,
    "investors": 26,
    "rental": {
      "grossYield": 8.22,
      "netYield": null,
      "dividendYield": 7.63,
      "grossRent": 24000,
      "netRent": 22275,
      "totalRentalIncome": 67570.63,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 26,
      "annualized": 9.59,
      "totalGrossRoi": 56,
      "investmentPeriod": 43,
      "funded": 108.56,
      "fundedAmount": 317001.71,
      "totalReturnRoi": 135360.38,
      "totalReturnRoiPercentage": 40.7,
      "renovationProgress": 100
    },
    "valuation": {
      "marketValue": null,
      "marketValuePercentage": 36.98,
      "saleProceed": 411304,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 0,
      "bathrooms": 1
    },
    "location": {
      "area": {
        "name": "Dubai South City",
        "displayName": "Dubai South City"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2021-07-15",
      "closeDate": "2021-06-09",
      "soldDate": "2021-07-15",
      "completionDate": null
    }
  },
  {
    "id": 557,
    "code": "SC-160",
    "title": "Studio in Silicon Gates 1, DSO",
    "investmentType": "HOLD",
    "propertyCategory": "RESIDENTIAL",
    "price": 250000,
    "projectPrice": 250000,
    "propertyType": "APARTMENT",
    "investmentCategory": "LONG_TERM",
    "propertyStatus": "EXITED",
    "renovationProgress": 100,
    "totalReturnRoi": 132292.84,
    "totalReturnRoiPercentage": 45.08,
    "investors": 20,
    "rental": {
      "grossYield": 10,
      "netYield": 7.99,
      "dividendYield": 7.28,
      "grossRent": 25000,
      "netRent": 18193,
      "totalRentalIncome": 52267.3,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 20,
      "annualized": 9.24,
      "totalGrossRoi": 60.65,
      "investmentPeriod": 38,
      "funded": 100,
      "fundedAmount": 250000,
      "totalReturnRoi": 132292.84,
      "totalReturnRoiPercentage": 45.08,
      "renovationProgress": 100
    },
    "valuation": {
      "marketValue": null,
      "marketValuePercentage": 44,
      "saleProceed": 383464.29,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 0,
      "bathrooms": 1
    },
    "location": {
      "area": {
        "name": "Silicon Oasis",
        "displayName": "Silicon Oasis"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2021-08-26",
      "closeDate": "2021-07-12",
      "soldDate": "2021-08-26",
      "completionDate": null
    }
  },
  {
    "id": 556,
    "code": "SC-159",
    "title": "Lincoln Park North Side",
    "investmentType": "HOLD",
    "propertyCategory": "RESIDENTIAL",
    "price": 430000,
    "projectPrice": 430000,
    "propertyType": "APARTMENT",
    "investmentCategory": "LONG_TERM",
    "propertyStatus": "EXITED",
    "renovationProgress": 100,
    "totalReturnRoi": 158488.65,
    "totalReturnRoiPercentage": 33.3,
    "investors": 74,
    "rental": {
      "grossYield": 9.77,
      "netYield": 7.69,
      "dividendYield": 7.18,
      "grossRent": 42000,
      "netRent": 30864,
      "totalRentalIncome": 64113.01,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 74,
      "annualized": 9.46,
      "totalGrossRoi": 59,
      "investmentPeriod": 35,
      "funded": 103.03,
      "fundedAmount": 443029,
      "totalReturnRoi": 158488.65,
      "totalReturnRoiPercentage": 33.3,
      "renovationProgress": 100
    },
    "valuation": {
      "marketValue": null,
      "marketValuePercentage": 22.09,
      "saleProceed": 585751.14,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 1,
      "bathrooms": 1
    },
    "location": {
      "area": {
        "name": "IMPZ",
        "displayName": "IMPZ"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2021-07-14",
      "closeDate": "2021-06-06",
      "soldDate": "2021-07-14",
      "completionDate": null
    }
  },
  {
    "id": 554,
    "code": "SC-157",
    "title": "Goldcrest Views 2 JLT - 6th floor",
    "investmentType": "HOLD",
    "propertyCategory": "RESIDENTIAL",
    "price": 350000,
    "projectPrice": 350000,
    "propertyType": "APARTMENT",
    "investmentCategory": "LONG_TERM",
    "propertyStatus": "EXITED",
    "renovationProgress": 100,
    "totalReturnRoi": 275393.03,
    "totalReturnRoiPercentage": 67.39,
    "investors": 52,
    "rental": {
      "grossYield": 9.86,
      "netYield": 8.04,
      "dividendYield": 6.17,
      "grossRent": 34500,
      "netRent": 25882,
      "totalRentalIncome": 67562.81,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 52,
      "annualized": 10.59,
      "totalGrossRoi": 64.35,
      "investmentPeriod": 32,
      "funded": 100.21,
      "fundedAmount": 350735,
      "totalReturnRoi": 275393.03,
      "totalReturnRoiPercentage": 67.39,
      "renovationProgress": 100
    },
    "valuation": {
      "marketValue": null,
      "marketValuePercentage": 64.29,
      "saleProceed": 632476.47,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 0,
      "bathrooms": 1
    },
    "location": {
      "area": {
        "name": "JLT",
        "displayName": "JLT"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2021-06-08",
      "closeDate": "2021-05-11",
      "soldDate": "2021-06-08",
      "completionDate": null
    }
  },
  {
    "id": 551,
    "code": "SC-154",
    "title": "Crystal Residence JVC",
    "investmentType": "HOLD",
    "propertyCategory": "RESIDENTIAL",
    "price": 340000,
    "projectPrice": 340000,
    "propertyType": "APARTMENT",
    "investmentCategory": "LONG_TERM",
    "propertyStatus": "EXITED",
    "renovationProgress": 100,
    "totalReturnRoi": 297376.74,
    "totalReturnRoiPercentage": 77.22,
    "investors": 70,
    "rental": {
      "grossYield": 11.18,
      "netYield": 9.53,
      "dividendYield": 7.4,
      "grossRent": 38000,
      "netRent": 29975,
      "totalRentalIncome": 112197.35,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 70,
      "annualized": 6.59,
      "totalGrossRoi": 49.15,
      "investmentPeriod": 50,
      "funded": 103.59,
      "fundedAmount": 352206,
      "totalReturnRoi": 297376.74,
      "totalReturnRoiPercentage": 77.22,
      "renovationProgress": 100
    },
    "valuation": {
      "marketValue": null,
      "marketValuePercentage": 70.59,
      "saleProceed": 586176.89,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 0,
      "bathrooms": 1
    },
    "location": {
      "area": {
        "name": "JVC",
        "displayName": "JVC"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2021-06-22",
      "closeDate": "2021-04-08",
      "soldDate": "2021-06-22",
      "completionDate": null
    }
  },
  {
    "id": 550,
    "code": "SC-153",
    "title": "Shamal Residence JVC",
    "investmentType": "HOLD",
    "propertyCategory": "RESIDENTIAL",
    "price": 365000,
    "projectPrice": 365000,
    "propertyType": "APARTMENT",
    "investmentCategory": "LONG_TERM",
    "propertyStatus": "EXITED",
    "renovationProgress": 100,
    "totalReturnRoi": 208378.45,
    "totalReturnRoiPercentage": 50.54,
    "investors": 82,
    "rental": {
      "grossYield": 10.41,
      "netYield": 8.44,
      "dividendYield": 7.87,
      "grossRent": 38000,
      "netRent": 28729,
      "totalRentalIncome": 119397.31,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 82,
      "annualized": 9.34,
      "totalGrossRoi": 57.25,
      "investmentPeriod": 53,
      "funded": 103.38,
      "fundedAmount": 377337,
      "totalReturnRoi": 208378.45,
      "totalReturnRoiPercentage": 50.54,
      "renovationProgress": 100
    },
    "valuation": {
      "marketValue": null,
      "marketValuePercentage": 43.84,
      "saleProceed": 515314.89,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 0,
      "bathrooms": 1
    },
    "location": {
      "area": {
        "name": "JVC",
        "displayName": "JVC"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2021-06-08",
      "closeDate": "2021-05-10",
      "soldDate": "2021-06-08",
      "completionDate": null
    }
  },
  {
    "id": 549,
    "code": "SC-152",
    "title": "Lago Vista C - Studio",
    "investmentType": "HOLD",
    "propertyCategory": "RESIDENTIAL",
    "price": 255000,
    "projectPrice": 255000,
    "propertyType": "APARTMENT",
    "investmentCategory": "LONG_TERM",
    "propertyStatus": "EXITED",
    "renovationProgress": 100,
    "totalReturnRoi": 88881.01,
    "totalReturnRoiPercentage": 30.37,
    "investors": 33,
    "rental": {
      "grossYield": 9.41,
      "netYield": 7.29,
      "dividendYield": 6.61,
      "grossRent": 24000,
      "netRent": 16849,
      "totalRentalIncome": 33234.32,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 33,
      "annualized": 9.46,
      "totalGrossRoi": 58.2,
      "investmentPeriod": 26,
      "funded": 100,
      "fundedAmount": 255000,
      "totalReturnRoi": 88881.01,
      "totalReturnRoiPercentage": 30.37,
      "renovationProgress": 100
    },
    "valuation": {
      "marketValue": null,
      "marketValuePercentage": 1.96,
      "saleProceed": 357490.44,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 0,
      "bathrooms": 1
    },
    "location": {
      "area": {
        "name": "IMPZ",
        "displayName": "IMPZ"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2021-06-07",
      "closeDate": "2021-04-11",
      "soldDate": "2021-06-07",
      "completionDate": null
    }
  },
  {
    "id": 545,
    "code": "SC-148",
    "title": "Marina Residence One-Bed",
    "investmentType": "HOLD",
    "propertyCategory": "RESIDENTIAL",
    "price": 530000,
    "projectPrice": 530000,
    "propertyType": "APARTMENT",
    "investmentCategory": "SHORT_TERM",
    "propertyStatus": "EXITED",
    "renovationProgress": 100,
    "totalReturnRoi": 327107.54,
    "totalReturnRoiPercentage": 54.24,
    "investors": 49,
    "rental": {
      "grossYield": 19.08,
      "netYield": 17.2,
      "dividendYield": 11.63,
      "grossRent": 101108,
      "netRent": 72434.56,
      "totalRentalIncome": 141828.61,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 49,
      "annualized": 9.67,
      "totalGrossRoi": 66.55,
      "investmentPeriod": 32,
      "funded": 100,
      "fundedAmount": 530000,
      "totalReturnRoi": 327107.54,
      "totalReturnRoiPercentage": 54.24,
      "renovationProgress": 100
    },
    "valuation": {
      "marketValue": null,
      "marketValuePercentage": 27.36,
      "saleProceed": 809332.68,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 1,
      "bathrooms": 1
    },
    "location": {
      "area": {
        "name": "Dubai Marina",
        "displayName": "Dubai Marina"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2021-03-17",
      "closeDate": "2021-02-14",
      "soldDate": "2021-03-17",
      "completionDate": null
    }
  },
  {
    "id": 542,
    "code": "SC-145",
    "title": "Bay Central Studio",
    "investmentType": "HOLD",
    "propertyCategory": "RESIDENTIAL",
    "price": 530000,
    "projectPrice": 530000,
    "propertyType": "APARTMENT",
    "investmentCategory": "SHORT_TERM",
    "propertyStatus": "EXITED",
    "renovationProgress": 100,
    "totalReturnRoi": 219562.66,
    "totalReturnRoiPercentage": 36.62,
    "investors": 53,
    "rental": {
      "grossYield": 13.5,
      "netYield": 11.7,
      "dividendYield": 7.13,
      "grossRent": 71553,
      "netRent": 48580.46,
      "totalRentalIncome": 74393.34,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 53,
      "annualized": 9.79,
      "totalGrossRoi": 59.3,
      "investmentPeriod": 17,
      "funded": 100,
      "fundedAmount": 530000,
      "totalReturnRoi": 219562.66,
      "totalReturnRoiPercentage": 36.62,
      "renovationProgress": 100
    },
    "valuation": {
      "marketValue": null,
      "marketValuePercentage": 0,
      "saleProceed": 765173.07,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 0,
      "bathrooms": 1
    },
    "location": {
      "area": {
        "name": "Dubai Marina",
        "displayName": "Dubai Marina"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2021-02-18",
      "closeDate": "2021-01-27",
      "soldDate": "2021-02-18",
      "completionDate": null
    }
  },
  {
    "id": 540,
    "code": "SC-143",
    "title": "Lakeside Studio Tower C",
    "investmentType": "HOLD",
    "propertyCategory": "RESIDENTIAL",
    "price": 210000,
    "projectPrice": 210000,
    "propertyType": "APARTMENT",
    "investmentCategory": "LONG_TERM",
    "propertyStatus": "EXITED",
    "renovationProgress": 100,
    "totalReturnRoi": 104156.82,
    "totalReturnRoiPercentage": 44.25,
    "investors": 27,
    "rental": {
      "grossYield": 10.95,
      "netYield": 8.71,
      "dividendYield": 7.92,
      "grossRent": 23000,
      "netRent": 16625,
      "totalRentalIncome": 39806.44,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 27,
      "annualized": 7.39,
      "totalGrossRoi": 52,
      "investmentPeriod": 32,
      "funded": 100,
      "fundedAmount": 210000,
      "totalReturnRoi": 104156.82,
      "totalReturnRoiPercentage": 44.25,
      "renovationProgress": 100
    },
    "valuation": {
      "marketValue": null,
      "marketValuePercentage": 19.05,
      "saleProceed": 307881.63,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 0,
      "bathrooms": 1
    },
    "location": {
      "area": {
        "name": "Dubailand",
        "displayName": "Dubailand"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2021-01-26",
      "closeDate": "2021-01-20",
      "soldDate": "2021-01-26",
      "completionDate": null
    }
  },
  {
    "id": 535,
    "code": "SC-142",
    "title": "One Bedroom with Two Balconies in DSO",
    "investmentType": "HOLD",
    "propertyCategory": "COMMERCIAL",
    "price": 340000,
    "projectPrice": 340000,
    "propertyType": "APARTMENT",
    "investmentCategory": "LONG_TERM",
    "propertyStatus": "EXITED",
    "renovationProgress": 100,
    "totalReturnRoi": 102371.11,
    "totalReturnRoiPercentage": 27.09,
    "investors": 42,
    "rental": {
      "grossYield": 10,
      "netYield": 7.79,
      "dividendYield": 7.13,
      "grossRent": 34000,
      "netRent": 24246,
      "totalRentalIncome": 61043.55,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 42,
      "annualized": 8.32,
      "totalGrossRoi": 55.55,
      "investmentPeriod": 38,
      "funded": 100.53,
      "fundedAmount": 341802,
      "totalReturnRoi": 102371.11,
      "totalReturnRoiPercentage": 27.09,
      "renovationProgress": 100
    },
    "valuation": {
      "marketValue": null,
      "marketValuePercentage": 22.06,
      "saleProceed": 430506.26,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 1,
      "bathrooms": 1
    },
    "location": {
      "area": {
        "name": "Silicon Oasis",
        "displayName": "Silicon Oasis"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2021-01-26",
      "closeDate": "2020-12-29",
      "soldDate": "2021-01-26",
      "completionDate": null
    }
  },
  {
    "id": 534,
    "code": "SC-141",
    "title": "Studio One",
    "investmentType": "HOLD",
    "propertyCategory": "RESIDENTIAL",
    "price": 500000,
    "projectPrice": 500000,
    "propertyType": "APARTMENT",
    "investmentCategory": "SHORT_TERM",
    "propertyStatus": "EXITED",
    "renovationProgress": 100,
    "totalReturnRoi": 425928.57,
    "totalReturnRoiPercentage": 76.5,
    "investors": 60,
    "rental": {
      "grossYield": 14,
      "netYield": 12.76,
      "dividendYield": 7.96,
      "grossRent": 69998,
      "netRent": 50598.36,
      "totalRentalIncome": 149965.51,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 60,
      "annualized": 7.33,
      "totalGrossRoi": 54.9,
      "investmentPeriod": 37,
      "funded": 100.89,
      "fundedAmount": 504450,
      "totalReturnRoi": 425928.57,
      "totalReturnRoiPercentage": 76.5,
      "renovationProgress": 100
    },
    "valuation": {
      "marketValue": null,
      "marketValuePercentage": 48,
      "saleProceed": 855095.06,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 0,
      "bathrooms": 1
    },
    "location": {
      "area": {
        "name": "Dubai Marina",
        "displayName": "Dubai Marina"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2021-02-16",
      "closeDate": "2021-02-16",
      "soldDate": "2021-02-16",
      "completionDate": null
    }
  },
  {
    "id": 529,
    "code": "SC-140",
    "title": "Affordable Studio in Silicon Oasis",
    "investmentType": "HOLD",
    "propertyCategory": "RESIDENTIAL",
    "price": 208000,
    "projectPrice": 208000,
    "propertyType": "APARTMENT",
    "investmentCategory": "LONG_TERM",
    "propertyStatus": "EXITED",
    "renovationProgress": 100,
    "totalReturnRoi": 58051.25,
    "totalReturnRoiPercentage": 24.41,
    "investors": 30,
    "rental": {
      "grossYield": 11.54,
      "netYield": 8.55,
      "dividendYield": 7.71,
      "grossRent": 24000,
      "netRent": 16038.75,
      "totalRentalIncome": 44668.76,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 30,
      "annualized": 6.87,
      "totalGrossRoi": 51.4,
      "investmentPeriod": 31,
      "funded": 100,
      "fundedAmount": 208000,
      "totalReturnRoi": 58051.25,
      "totalReturnRoiPercentage": 24.41,
      "renovationProgress": 100
    },
    "valuation": {
      "marketValue": null,
      "marketValuePercentage": 20.19,
      "saleProceed": 257785.24,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 0,
      "bathrooms": 1
    },
    "location": {
      "area": {
        "name": "Silicon Oasis",
        "displayName": "Silicon Oasis"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2020-10-27",
      "closeDate": "2020-11-16",
      "soldDate": "2020-10-27",
      "completionDate": null
    }
  },
  {
    "id": 527,
    "code": "SC-138",
    "title": "Al Waha Villas - 2 bhk townhome",
    "investmentType": "HOLD",
    "propertyCategory": "RESIDENTIAL",
    "price": 765000,
    "projectPrice": 765000,
    "propertyType": "TOWN_HOUSE",
    "investmentCategory": "LONG_TERM",
    "propertyStatus": "EXITED",
    "renovationProgress": 100,
    "totalReturnRoi": 904205.44,
    "totalReturnRoiPercentage": 107.19,
    "investors": 86,
    "rental": {
      "grossYield": 9.93,
      "netYield": 9.09,
      "dividendYield": 8.52,
      "grossRent": 76000,
      "netRent": 65200,
      "totalRentalIncome": 193520.9,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 86,
      "annualized": 8.06,
      "totalGrossRoi": 46.7,
      "investmentPeriod": 39,
      "funded": 102.33,
      "fundedAmount": 782824.5,
      "totalReturnRoi": 904205.44,
      "totalReturnRoiPercentage": 107.19,
      "renovationProgress": 100
    },
    "valuation": {
      "marketValue": null,
      "marketValuePercentage": 86.27,
      "saleProceed": 1596208.92,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 2,
      "bathrooms": 2
    },
    "location": {
      "area": {
        "name": "Dubailand",
        "displayName": "Dubailand"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2021-02-22",
      "closeDate": "2020-12-29",
      "soldDate": "2021-02-22",
      "completionDate": null
    }
  },
  {
    "id": 526,
    "code": "SC-137",
    "title": "Marina View - One Bedroom",
    "investmentType": "HOLD",
    "propertyCategory": "RESIDENTIAL",
    "price": 650000,
    "projectPrice": 650000,
    "propertyType": "APARTMENT",
    "investmentCategory": "SHORT_TERM",
    "propertyStatus": "EXITED",
    "renovationProgress": 100,
    "totalReturnRoi": 486023.02,
    "totalReturnRoiPercentage": 68.38,
    "investors": 58,
    "rental": {
      "grossYield": 8.92,
      "netYield": 7.37,
      "dividendYield": 6.9,
      "grossRent": 58000,
      "netRent": 44837,
      "totalRentalIncome": 132960.64,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 58,
      "annualized": 7.1,
      "totalGrossRoi": 46.65,
      "investmentPeriod": 29,
      "funded": 100,
      "fundedAmount": 650000,
      "totalReturnRoi": 486023.02,
      "totalReturnRoiPercentage": 68.38,
      "renovationProgress": 100
    },
    "valuation": {
      "marketValue": null,
      "marketValuePercentage": 30.77,
      "saleProceed": 1092676.13,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 1,
      "bathrooms": 1
    },
    "location": {
      "area": {
        "name": "Dubai Marina",
        "displayName": "Dubai Marina"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2020-10-10",
      "closeDate": "2020-11-18",
      "soldDate": "2020-10-10",
      "completionDate": null
    }
  },
  {
    "id": 521,
    "code": "SC-132",
    "title": "Belgravia 2 by Ellington",
    "investmentType": "HOLD",
    "propertyCategory": "RESIDENTIAL",
    "price": 430000,
    "projectPrice": 430000,
    "propertyType": "APARTMENT",
    "investmentCategory": "LONG_TERM",
    "propertyStatus": "EXITED",
    "renovationProgress": 100,
    "totalReturnRoi": 320894.25,
    "totalReturnRoiPercentage": 67.99,
    "investors": 53,
    "rental": {
      "grossYield": 8.84,
      "netYield": 7.19,
      "dividendYield": 6.74,
      "grossRent": 38000,
      "netRent": 28997,
      "totalRentalIncome": 140357.6,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 53,
      "annualized": 7.05,
      "totalGrossRoi": 46.9,
      "investmentPeriod": 56,
      "funded": 113.99,
      "fundedAmount": 490157,
      "totalReturnRoi": 320894.25,
      "totalReturnRoiPercentage": 67.99,
      "renovationProgress": 100
    },
    "valuation": {
      "marketValue": null,
      "marketValuePercentage": 60.47,
      "saleProceed": 670789.15,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 0,
      "bathrooms": 1
    },
    "location": {
      "area": {
        "name": "JVC",
        "displayName": "JVC"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2020-10-14",
      "closeDate": "2020-10-01",
      "soldDate": "2020-10-14",
      "completionDate": null
    }
  },
  {
    "id": 520,
    "code": "SC-131",
    "title": "Eaton Place by Ellington",
    "investmentType": "HOLD",
    "propertyCategory": "RESIDENTIAL",
    "price": 890000,
    "projectPrice": 890000,
    "propertyType": "APARTMENT",
    "investmentCategory": "LONG_TERM",
    "propertyStatus": "EXITED",
    "renovationProgress": 100,
    "totalReturnRoi": 302953.33,
    "totalReturnRoiPercentage": 31.88,
    "investors": 124,
    "rental": {
      "grossYield": 7.3,
      "netYield": null,
      "dividendYield": 7.21,
      "grossRent": 65000,
      "netRent": 64212,
      "totalRentalIncome": 226969.1,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 124,
      "annualized": 11.17,
      "totalGrossRoi": 63.9,
      "investmentPeriod": 51,
      "funded": 100.47,
      "fundedAmount": 894183,
      "totalReturnRoi": 302953.33,
      "totalReturnRoiPercentage": 31.88,
      "renovationProgress": 100
    },
    "valuation": {
      "marketValue": null,
      "marketValuePercentage": 25.28,
      "saleProceed": 1089385.98,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 1,
      "bathrooms": 1
    },
    "location": {
      "area": {
        "name": "JVC",
        "displayName": "JVC"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2020-11-26",
      "closeDate": "2020-11-16",
      "soldDate": "2020-11-26",
      "completionDate": null
    }
  },
  {
    "id": 513,
    "code": "SC-124",
    "title": "Silicon Gates 1 (DSO)",
    "investmentType": "HOLD",
    "propertyCategory": "RESIDENTIAL",
    "price": 210000,
    "projectPrice": 210000,
    "propertyType": "APARTMENT",
    "investmentCategory": "LONG_TERM",
    "propertyStatus": "EXITED",
    "renovationProgress": 100,
    "totalReturnRoi": 199587.84,
    "totalReturnRoiPercentage": 81.55,
    "investors": 41,
    "rental": {
      "grossYield": 10.48,
      "netYield": 8.05,
      "dividendYield": 7.15,
      "grossRent": 22000,
      "netRent": 15020,
      "totalRentalIncome": 76459.43,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 41,
      "annualized": 7.13,
      "totalGrossRoi": 53.25,
      "investmentPeriod": 54,
      "funded": 105.29,
      "fundedAmount": 221109,
      "totalReturnRoi": 199587.84,
      "totalReturnRoiPercentage": 81.55,
      "renovationProgress": 100
    },
    "valuation": {
      "marketValue": null,
      "marketValuePercentage": 90.48,
      "saleProceed": 377746.79,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 0,
      "bathrooms": 1
    },
    "location": {
      "area": {
        "name": "Silicon Oasis",
        "displayName": "Silicon Oasis"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2020-07-09",
      "closeDate": "2020-06-24",
      "soldDate": "2020-07-09",
      "completionDate": null
    }
  },
  {
    "id": 510,
    "code": "SC-121",
    "title": "The Spirit Tower - 1 BHK (second)",
    "investmentType": "HOLD",
    "propertyCategory": "RESIDENTIAL",
    "price": 450000,
    "projectPrice": 450000,
    "propertyType": "APARTMENT",
    "investmentCategory": "LONG_TERM",
    "propertyStatus": "EXITED",
    "renovationProgress": 100,
    "totalReturnRoi": 108274.95,
    "totalReturnRoiPercentage": 21.94,
    "investors": 52,
    "rental": {
      "grossYield": 10.67,
      "netYield": 7.81,
      "dividendYield": 7.1,
      "grossRent": 48000,
      "netRent": 31943,
      "totalRentalIncome": 62840.99,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 52,
      "annualized": 6.22,
      "totalGrossRoi": 47.75,
      "investmentPeriod": 26,
      "funded": 100,
      "fundedAmount": 450000,
      "totalReturnRoi": 108274.95,
      "totalReturnRoiPercentage": 21.94,
      "renovationProgress": 100
    },
    "valuation": {
      "marketValue": null,
      "marketValuePercentage": 0,
      "saleProceed": 553610.21,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 1,
      "bathrooms": 2
    },
    "location": {
      "area": {
        "name": "Sports city",
        "displayName": "Sports city"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2020-08-18",
      "closeDate": "2020-06-11",
      "soldDate": "2020-08-18",
      "completionDate": null
    }
  },
  {
    "id": 509,
    "code": "SC-120",
    "title": "The Spirit Tower - One BHK",
    "investmentType": "HOLD",
    "propertyCategory": "RESIDENTIAL",
    "price": 450000,
    "projectPrice": 450000,
    "propertyType": "APARTMENT",
    "investmentCategory": "LONG_TERM",
    "propertyStatus": "EXITED",
    "renovationProgress": 100,
    "totalReturnRoi": 75577.1,
    "totalReturnRoiPercentage": 15.32,
    "investors": 46,
    "rental": {
      "grossYield": 10.67,
      "netYield": 7.81,
      "dividendYield": 7.1,
      "grossRent": 48000,
      "netRent": 31943,
      "totalRentalIncome": 65387.32,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 46,
      "annualized": 6.22,
      "totalGrossRoi": 47.75,
      "investmentPeriod": 24,
      "funded": 100,
      "fundedAmount": 450000,
      "totalReturnRoi": 75577.1,
      "totalReturnRoiPercentage": 15.32,
      "renovationProgress": 100
    },
    "valuation": {
      "marketValue": null,
      "marketValuePercentage": 0,
      "saleProceed": 517316.03,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 1,
      "bathrooms": 2
    },
    "location": {
      "area": {
        "name": "Sports city",
        "displayName": "Sports city"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2020-09-08",
      "closeDate": "2020-09-08",
      "soldDate": "2020-09-08",
      "completionDate": null
    }
  },
  {
    "id": 507,
    "code": "SC-118",
    "title": "Concorde Tower",
    "investmentType": "HOLD",
    "propertyCategory": "RESIDENTIAL",
    "price": 450000,
    "projectPrice": 450000,
    "propertyType": "APARTMENT",
    "investmentCategory": "LONG_TERM",
    "propertyStatus": "EXITED",
    "renovationProgress": 100,
    "totalReturnRoi": 418414.89,
    "totalReturnRoiPercentage": 83.96,
    "investors": 70,
    "rental": {
      "grossYield": 10,
      "netYield": 7.92,
      "dividendYield": 7.5,
      "grossRent": 45000,
      "netRent": 33737,
      "totalRentalIncome": 166218.56,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 70,
      "annualized": 8.33,
      "totalGrossRoi": 56.35,
      "investmentPeriod": 53,
      "funded": 102.16,
      "fundedAmount": 459720,
      "totalReturnRoi": 418414.89,
      "totalReturnRoiPercentage": 83.96,
      "renovationProgress": 100
    },
    "valuation": {
      "marketValue": null,
      "marketValuePercentage": 50,
      "saleProceed": 770782.72,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 1,
      "bathrooms": 1
    },
    "location": {
      "area": {
        "name": "JLT",
        "displayName": "JLT"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2020-06-23",
      "closeDate": "2020-05-13",
      "soldDate": "2020-06-23",
      "completionDate": null
    }
  },
  {
    "id": 506,
    "code": "SC-117",
    "title": "Damac's Lakeside Tower Studio",
    "investmentType": "HOLD",
    "propertyCategory": "RESIDENTIAL",
    "price": 225000,
    "projectPrice": 225000,
    "propertyType": "APARTMENT",
    "investmentCategory": "LONG_TERM",
    "propertyStatus": "EXITED",
    "renovationProgress": 100,
    "totalReturnRoi": 101434.08,
    "totalReturnRoiPercentage": 39.56,
    "investors": 24,
    "rental": {
      "grossYield": 13.33,
      "netYield": 11.57,
      "dividendYield": 10.62,
      "grossRent": 30000,
      "netRent": 23888,
      "totalRentalIncome": 51680.78,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 24,
      "annualized": 7.67,
      "totalGrossRoi": 51.9,
      "investmentPeriod": 39,
      "funded": 100.31,
      "fundedAmount": 225697.5,
      "totalReturnRoi": 101434.08,
      "totalReturnRoiPercentage": 39.56,
      "renovationProgress": 100
    },
    "valuation": {
      "marketValue": null,
      "marketValuePercentage": 11.11,
      "saleProceed": 314267.05,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 0,
      "bathrooms": 1
    },
    "location": {
      "area": {
        "name": "IMPZ",
        "displayName": "IMPZ"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2020-05-27",
      "closeDate": "2020-05-02",
      "soldDate": "2020-05-27",
      "completionDate": null
    }
  },
  {
    "id": 504,
    "code": "SC-115",
    "title": "Royal Residence 2, Sports City (Studio)",
    "investmentType": "HOLD",
    "propertyCategory": "RESIDENTIAL",
    "price": 270000,
    "projectPrice": 270000,
    "propertyType": "APARTMENT",
    "investmentCategory": "LONG_TERM",
    "propertyStatus": "EXITED",
    "renovationProgress": 100,
    "totalReturnRoi": 61106.93,
    "totalReturnRoiPercentage": 20.51,
    "investors": 34,
    "rental": {
      "grossYield": 11.85,
      "netYield": 9.7,
      "dividendYield": 8.82,
      "grossRent": 32000,
      "netRent": 23804,
      "totalRentalIncome": 50782.57,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 34,
      "annualized": 8.52,
      "totalGrossRoi": 58.05,
      "investmentPeriod": 42,
      "funded": 104,
      "fundedAmount": 280800,
      "totalReturnRoi": 61106.93,
      "totalReturnRoiPercentage": 20.51,
      "renovationProgress": 100
    },
    "valuation": {
      "marketValue": null,
      "marketValuePercentage": -5.56,
      "saleProceed": 316623.11,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 0,
      "bathrooms": 1
    },
    "location": {
      "area": {
        "name": "Sports city",
        "displayName": "Sports city"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2020-05-05",
      "closeDate": "2020-03-24",
      "soldDate": "2020-05-05",
      "completionDate": null
    }
  },
  {
    "id": 503,
    "code": "SC-114",
    "title": "Remraam by Dubai Properties (1 Bed)",
    "investmentType": "HOLD",
    "propertyCategory": "RESIDENTIAL",
    "price": 435000,
    "projectPrice": 435000,
    "propertyType": "APARTMENT",
    "investmentCategory": "LONG_TERM",
    "propertyStatus": "EXITED",
    "renovationProgress": 100,
    "totalReturnRoi": 142877.63,
    "totalReturnRoiPercentage": 30.04,
    "investors": 43,
    "rental": {
      "grossYield": 10.34,
      "netYield": 8.2,
      "dividendYield": 7.5,
      "grossRent": 45000,
      "netRent": 32632,
      "totalRentalIncome": 133542.99,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 43,
      "annualized": 9.36,
      "totalGrossRoi": 59.8,
      "investmentPeriod": 53,
      "funded": 102.57,
      "fundedAmount": 446179.5,
      "totalReturnRoi": 142877.63,
      "totalReturnRoiPercentage": 30.04,
      "renovationProgress": 100
    },
    "valuation": {
      "marketValue": null,
      "marketValuePercentage": 14.94,
      "saleProceed": 498022.14,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 1,
      "bathrooms": 1
    },
    "location": {
      "area": {
        "name": "Emirates Living",
        "displayName": "Emirates Living"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2020-05-17",
      "closeDate": "2020-04-27",
      "soldDate": "2020-05-17",
      "completionDate": null
    }
  },
  {
    "id": 500,
    "code": "SC-111",
    "title": "Marina Diamond 1 by Diamond Developers (Studio)",
    "investmentType": "HOLD",
    "propertyCategory": "RESIDENTIAL",
    "price": 420000,
    "projectPrice": 420000,
    "propertyType": "APARTMENT",
    "investmentCategory": "SHORT_TERM",
    "propertyStatus": "EXITED",
    "renovationProgress": 100,
    "totalReturnRoi": 277485.69,
    "totalReturnRoiPercentage": 59.24,
    "investors": 39,
    "rental": {
      "grossYield": 13.1,
      "netYield": 11.49,
      "dividendYield": 9.08,
      "grossRent": 55000,
      "netRent": 44737,
      "totalRentalIncome": 155829.19,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 39,
      "annualized": 10.64,
      "totalGrossRoi": 71.2,
      "investmentPeriod": 44,
      "funded": 100,
      "fundedAmount": 420000,
      "totalReturnRoi": 277485.69,
      "totalReturnRoiPercentage": 59.24,
      "renovationProgress": 100
    },
    "valuation": {
      "marketValue": null,
      "marketValuePercentage": 21.43,
      "saleProceed": 605817.75,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 0,
      "bathrooms": 1
    },
    "location": {
      "area": {
        "name": "Dubai Marina",
        "displayName": "Dubai Marina"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2020-03-19",
      "closeDate": "2020-03-02",
      "soldDate": "2020-03-19",
      "completionDate": null
    }
  },
  {
    "id": 499,
    "code": "SC-110",
    "title": "Dubai Properties' Remraam (1 Bed)",
    "investmentType": "HOLD",
    "propertyCategory": "RESIDENTIAL",
    "price": 442000,
    "projectPrice": 442000,
    "propertyType": "APARTMENT",
    "investmentCategory": "LONG_TERM",
    "propertyStatus": "EXITED",
    "renovationProgress": 100,
    "totalReturnRoi": 126545.44,
    "totalReturnRoiPercentage": 26.19,
    "investors": 53,
    "rental": {
      "grossYield": 12.44,
      "netYield": 10.38,
      "dividendYield": 9.58,
      "grossRent": 55000,
      "netRent": 42362.5,
      "totalRentalIncome": 114091.86,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 53,
      "annualized": 9,
      "totalGrossRoi": 59.1,
      "investmentPeriod": 57,
      "funded": 101.2,
      "fundedAmount": 447304,
      "totalReturnRoi": 126545.44,
      "totalReturnRoiPercentage": 26.19,
      "renovationProgress": 100
    },
    "valuation": {
      "marketValue": null,
      "marketValuePercentage": 13.12,
      "saleProceed": 495553.33,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 1,
      "bathrooms": 1
    },
    "location": {
      "area": {
        "name": "Remraam",
        "displayName": "Remraam"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2020-02-26",
      "closeDate": "2020-01-28",
      "soldDate": "2020-02-26",
      "completionDate": null
    }
  },
  {
    "id": 498,
    "code": "SC-109",
    "title": "JVC Townhouse by Nakheel (1 Bed)",
    "investmentType": "HOLD",
    "propertyCategory": "RESIDENTIAL",
    "price": 980000,
    "projectPrice": 980000,
    "propertyType": "TOWN_HOUSE",
    "investmentCategory": "LONG_TERM",
    "propertyStatus": "EXITED",
    "renovationProgress": 100,
    "totalReturnRoi": 503143.95,
    "totalReturnRoiPercentage": 47.3,
    "investors": 67,
    "rental": {
      "grossYield": 8.67,
      "netYield": null,
      "dividendYield": 7.89,
      "grossRent": 85000,
      "netRent": 77344,
      "totalRentalIncome": 206410.72,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 67,
      "annualized": 7.76,
      "totalGrossRoi": 41.6,
      "investmentPeriod": 39,
      "funded": 100,
      "fundedAmount": 980000,
      "totalReturnRoi": 503143.95,
      "totalReturnRoiPercentage": 47.3,
      "renovationProgress": 100
    },
    "valuation": {
      "marketValue": null,
      "marketValuePercentage": 27.55,
      "saleProceed": 1397239.48,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 1,
      "bathrooms": 2
    },
    "location": {
      "area": {
        "name": "JVC",
        "displayName": "JVC"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2020-06-08",
      "closeDate": "2020-02-16",
      "soldDate": "2020-06-08",
      "completionDate": null
    }
  },
  {
    "id": 497,
    "code": "SC-108",
    "title": "Emaar's The Greens (Studio)",
    "investmentType": "HOLD",
    "propertyCategory": "RESIDENTIAL",
    "price": 460000,
    "projectPrice": 460000,
    "propertyType": "APARTMENT",
    "investmentCategory": "LONG_TERM",
    "propertyStatus": "EXITED",
    "renovationProgress": 100,
    "totalReturnRoi": 180431.9,
    "totalReturnRoiPercentage": 35.95,
    "investors": 36,
    "rental": {
      "grossYield": 9.57,
      "netYield": 7.95,
      "dividendYield": 6.86,
      "grossRent": 44000,
      "netRent": 33749,
      "totalRentalIncome": 98316.21,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 36,
      "annualized": 6.84,
      "totalGrossRoi": 47.25,
      "investmentPeriod": 47,
      "funded": 100,
      "fundedAmount": 460000,
      "totalReturnRoi": 180431.9,
      "totalReturnRoiPercentage": 35.95,
      "renovationProgress": 100
    },
    "valuation": {
      "marketValue": null,
      "marketValuePercentage": 6.52,
      "saleProceed": 599821.94,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 0,
      "bathrooms": 1
    },
    "location": {
      "area": {
        "name": "The Greens",
        "displayName": "The Greens"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2019-04-29",
      "closeDate": "2019-11-27",
      "soldDate": "2019-04-29",
      "completionDate": null
    }
  },
  {
    "id": 496,
    "code": "SC-107",
    "title": "Studio in Al Thamam Building, Remraam",
    "investmentType": "HOLD",
    "propertyCategory": "RESIDENTIAL",
    "price": 287000,
    "projectPrice": 287000,
    "propertyType": "APARTMENT",
    "investmentCategory": "LONG_TERM",
    "propertyStatus": "EXITED",
    "renovationProgress": 100,
    "totalReturnRoi": 153973.36,
    "totalReturnRoiPercentage": 49.72,
    "investors": 38,
    "rental": {
      "grossYield": 11.5,
      "netYield": 9.37,
      "dividendYield": 8.01,
      "grossRent": 33000,
      "netRent": 26275,
      "totalRentalIncome": 91446.59,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 38,
      "annualized": 7.56,
      "totalGrossRoi": 56.92,
      "investmentPeriod": 62,
      "funded": 103.99,
      "fundedAmount": 298451.3,
      "totalReturnRoi": 153973.36,
      "totalReturnRoiPercentage": 49.72,
      "renovationProgress": 100
    },
    "valuation": {
      "marketValue": null,
      "marketValuePercentage": 21.95,
      "saleProceed": 382415.77,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 0,
      "bathrooms": 1
    },
    "location": {
      "area": {
        "name": "Remraam",
        "displayName": "Remraam"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2019-10-02",
      "closeDate": "2019-07-28",
      "soldDate": "2019-10-02",
      "completionDate": null
    }
  },
  {
    "id": 495,
    "code": "SC-106",
    "title": "Pulse Smart Residence, JVC (1 Bed)",
    "investmentType": "HOLD",
    "propertyCategory": "RESIDENTIAL",
    "price": 455000,
    "projectPrice": 455000,
    "propertyType": "APARTMENT",
    "investmentCategory": "LONG_TERM",
    "propertyStatus": "EXITED",
    "renovationProgress": 100,
    "totalReturnRoi": 178509.33,
    "totalReturnRoiPercentage": 35.95,
    "investors": 51,
    "rental": {
      "grossYield": 10.99,
      "netYield": 9.01,
      "dividendYield": 8.05,
      "grossRent": 50000,
      "netRent": 39125,
      "totalRentalIncome": 117356.45,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 51,
      "annualized": 6.56,
      "totalGrossRoi": 48.1,
      "investmentPeriod": 71,
      "funded": 112.29,
      "fundedAmount": 510919.5,
      "totalReturnRoi": 178509.33,
      "totalReturnRoiPercentage": 35.95,
      "renovationProgress": 100
    },
    "valuation": {
      "marketValue": null,
      "marketValuePercentage": 31.87,
      "saleProceed": 557725.38,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 1,
      "bathrooms": 1
    },
    "location": {
      "area": {
        "name": "JVC",
        "displayName": "JVC"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2019-10-29",
      "closeDate": "2019-09-30",
      "soldDate": "2019-10-29",
      "completionDate": null
    }
  },
  {
    "id": 494,
    "code": "SC-105",
    "title": "Al Arta 1 (1 Bed)",
    "investmentType": "HOLD",
    "propertyCategory": "RESIDENTIAL",
    "price": 683000,
    "projectPrice": 683000,
    "propertyType": "APARTMENT",
    "investmentCategory": "LONG_TERM",
    "propertyStatus": "EXITED",
    "renovationProgress": 100,
    "totalReturnRoi": 140666.77,
    "totalReturnRoiPercentage": 18.89,
    "investors": 25,
    "rental": {
      "grossYield": 9.37,
      "netYield": 7.57,
      "dividendYield": 6.54,
      "grossRent": 64000,
      "netRent": 47894.36,
      "totalRentalIncome": 127955.48,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 25,
      "annualized": 6.19,
      "totalGrossRoi": 45.75,
      "investmentPeriod": 40,
      "funded": 100,
      "fundedAmount": 683000,
      "totalReturnRoi": 140666.77,
      "totalReturnRoiPercentage": 18.89,
      "renovationProgress": 100
    },
    "valuation": {
      "marketValue": null,
      "marketValuePercentage": 0,
      "saleProceed": 777754.04,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 1,
      "bathrooms": 1
    },
    "location": {
      "area": {
        "name": "The Greens",
        "displayName": "The Greens"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2019-07-21",
      "closeDate": "2019-08-04",
      "soldDate": "2019-07-21",
      "completionDate": null
    }
  },
  {
    "id": 483,
    "code": "SC-104",
    "title": "Marina Quays ( Dubai Marina)",
    "investmentType": "HOLD",
    "propertyCategory": "RESIDENTIAL",
    "price": 841500,
    "projectPrice": 841500,
    "propertyType": "APARTMENT",
    "investmentCategory": "SHORT_TERM",
    "propertyStatus": "EXITED",
    "renovationProgress": 100,
    "totalReturnRoi": 246806.34,
    "totalReturnRoiPercentage": 26.46,
    "investors": 35,
    "rental": {
      "grossYield": 11,
      "netYield": 8.77,
      "dividendYield": 8.12,
      "grossRent": 92529,
      "netRent": 73187.4,
      "totalRentalIncome": 199433.07,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 35,
      "annualized": 6.74,
      "totalGrossRoi": 47.35,
      "investmentPeriod": 48,
      "funded": 100,
      "fundedAmount": 841500,
      "totalReturnRoi": 246806.34,
      "totalReturnRoiPercentage": 26.46,
      "renovationProgress": 100
    },
    "valuation": {
      "marketValue": null,
      "marketValuePercentage": 0,
      "saleProceed": 1006473.97,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 1,
      "bathrooms": 2
    },
    "location": {
      "area": {
        "name": "Dubai Marina",
        "displayName": "Dubai Marina"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2019-03-03",
      "closeDate": "2019-03-03",
      "soldDate": "2019-03-03",
      "completionDate": null
    }
  },
  {
    "id": 482,
    "code": "SC-103",
    "title": "Marina Diamond 1 (Studio)",
    "investmentType": "HOLD",
    "propertyCategory": "RESIDENTIAL",
    "price": 475000,
    "projectPrice": 475000,
    "propertyType": "APARTMENT",
    "investmentCategory": "SHORT_TERM",
    "propertyStatus": "EXITED",
    "renovationProgress": 100,
    "totalReturnRoi": 225453.45,
    "totalReturnRoiPercentage": 42.08,
    "investors": 48,
    "rental": {
      "grossYield": 11.81,
      "netYield": 10.32,
      "dividendYield": 7.68,
      "grossRent": 56119,
      "netRent": 48412,
      "totalRentalIncome": 168575.64,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 48,
      "annualized": 6.69,
      "totalGrossRoi": 52.6,
      "investmentPeriod": 53,
      "funded": 100.64,
      "fundedAmount": 478040,
      "totalReturnRoi": 225453.45,
      "totalReturnRoiPercentage": 42.08,
      "renovationProgress": 100
    },
    "valuation": {
      "marketValue": null,
      "marketValuePercentage": 7.37,
      "saleProceed": 608888.06,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 0,
      "bathrooms": 1
    },
    "location": {
      "area": {
        "name": "Dubai Marina",
        "displayName": "Dubai Marina"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2019-05-01",
      "closeDate": "2019-04-24",
      "soldDate": "2019-05-01",
      "completionDate": null
    }
  },
  {
    "id": 481,
    "code": "SC-102",
    "title": "Lake View Studio",
    "investmentType": "HOLD",
    "propertyCategory": "RESIDENTIAL",
    "price": 500000,
    "projectPrice": 500000,
    "propertyType": "APARTMENT",
    "investmentCategory": "LONG_TERM",
    "propertyStatus": "EXITED",
    "renovationProgress": 100,
    "totalReturnRoi": 264165.36,
    "totalReturnRoiPercentage": 48.36,
    "investors": 29,
    "rental": {
      "grossYield": 11,
      "netYield": 9.9,
      "dividendYield": 8.73,
      "grossRent": 55000,
      "netRent": 46393,
      "totalRentalIncome": 164243.61,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 29,
      "annualized": 13.37,
      "totalGrossRoi": 79.75,
      "investmentPeriod": 62,
      "funded": 101.87,
      "fundedAmount": 509350,
      "totalReturnRoi": 264165.36,
      "totalReturnRoiPercentage": 48.36,
      "renovationProgress": 100
    },
    "valuation": {
      "marketValue": null,
      "marketValuePercentage": 0,
      "saleProceed": 663874.89,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 0,
      "bathrooms": 1
    },
    "location": {
      "area": {
        "name": "JLT",
        "displayName": "JLT"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2018-10-15",
      "closeDate": null,
      "soldDate": "2018-10-15",
      "completionDate": null
    }
  },
  {
    "id": 654,
    "code": "ID-228",
    "title": "Miami House Collection 25",
    "investmentType": "FLIP",
    "propertyCategory": "RESIDENTIAL",
    "price": 15472500,
    "projectPrice": 19222500,
    "propertyType": "VILLA",
    "investmentCategory": null,
    "propertyStatus": "EXITED",
    "renovationProgress": 100,
    "totalReturnRoi": 2995189.92,
    "totalReturnRoiPercentage": 15.58,
    "investors": 494,
    "rental": {
      "grossYield": null,
      "netYield": null,
      "dividendYield": null,
      "grossRent": 0,
      "netRent": 0,
      "totalRentalIncome": 0,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 494,
      "annualized": null,
      "totalGrossRoi": null,
      "investmentPeriod": 12,
      "funded": 68.93,
      "fundedAmount": 13250069.25,
      "totalReturnRoi": 2995189.92,
      "totalReturnRoiPercentage": 15.58,
      "renovationProgress": 100
    },
    "valuation": {
      "marketValue": null,
      "marketValuePercentage": 0,
      "saleProceed": 25000000,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 4,
      "bathrooms": 3
    },
    "location": {
      "area": {
        "name": "Jumeriah Islands",
        "displayName": "Jumeriah Islands"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2023-10-06",
      "closeDate": "2023-12-29",
      "soldDate": "2023-10-06",
      "completionDate": "2024-02-10"
    }
  },
  {
    "id": 650,
    "code": "ID-227",
    "title": "Miami House Collection 22",
    "investmentType": "FLIP",
    "propertyCategory": "RESIDENTIAL",
    "price": 12682000,
    "projectPrice": 15932000,
    "propertyType": "VILLA",
    "investmentCategory": null,
    "propertyStatus": "EXITED",
    "renovationProgress": 100,
    "totalReturnRoi": 3002035.84,
    "totalReturnRoiPercentage": 18.84,
    "investors": 514,
    "rental": {
      "grossYield": 20.97,
      "netYield": 20.97,
      "dividendYield": 18.88,
      "grossRent": 2660000,
      "netRent": 2394000,
      "totalRentalIncome": 0,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 514,
      "annualized": null,
      "totalGrossRoi": null,
      "investmentPeriod": 17,
      "funded": 58.37,
      "fundedAmount": 9299508.4,
      "totalReturnRoi": 3002035.84,
      "totalReturnRoiPercentage": 18.84,
      "renovationProgress": 100
    },
    "valuation": {
      "marketValue": null,
      "marketValuePercentage": 0,
      "saleProceed": 21750000,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 4,
      "bathrooms": 3
    },
    "location": {
      "area": {
        "name": "Jumeriah Islands",
        "displayName": "Jumeriah Islands"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2023-05-26",
      "closeDate": "2023-02-06",
      "soldDate": "2023-05-26",
      "completionDate": "2024-03-30"
    }
  },
  {
    "id": 648,
    "code": "ID-226",
    "title": "Miami House Collection 9",
    "investmentType": "FLIP",
    "propertyCategory": "RESIDENTIAL",
    "price": 9252774.6,
    "projectPrice": 13170000,
    "propertyType": "VILLA",
    "investmentCategory": null,
    "propertyStatus": "EXITED",
    "renovationProgress": 100,
    "totalReturnRoi": 5932250.66,
    "totalReturnRoiPercentage": 45.04,
    "investors": 332,
    "rental": {
      "grossYield": null,
      "netYield": null,
      "dividendYield": null,
      "grossRent": 0,
      "netRent": 0,
      "totalRentalIncome": 0,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 332,
      "annualized": null,
      "totalGrossRoi": null,
      "investmentPeriod": 11,
      "funded": 38.36,
      "fundedAmount": 5052012,
      "totalReturnRoi": 5932250.66,
      "totalReturnRoiPercentage": 45.04,
      "renovationProgress": 100
    },
    "valuation": {
      "marketValue": null,
      "marketValuePercentage": 0,
      "saleProceed": 23000000,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 4,
      "bathrooms": 3
    },
    "location": {
      "area": {
        "name": "Jumeriah Islands",
        "displayName": "Jumeriah Islands"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2023-02-03",
      "closeDate": "2022-11-01",
      "soldDate": "2023-02-03",
      "completionDate": "2023-08-21"
    }
  },
  {
    "id": 635,
    "code": "ID-224",
    "title": "Miami House Collection 8",
    "investmentType": "FLIP",
    "propertyCategory": "RESIDENTIAL",
    "price": 12569412.49,
    "projectPrice": 15932000,
    "propertyType": "VILLA",
    "investmentCategory": null,
    "propertyStatus": "EXITED",
    "renovationProgress": 100,
    "totalReturnRoi": 4660662.4,
    "totalReturnRoiPercentage": 29.25,
    "investors": 299,
    "rental": {
      "grossYield": null,
      "netYield": null,
      "dividendYield": null,
      "grossRent": 0,
      "netRent": 0,
      "totalRentalIncome": 0,
      "returnFrequency": "MONTHLY"
    },
    "performance": {
      "investors": 299,
      "annualized": null,
      "totalGrossRoi": null,
      "investmentPeriod": 18,
      "funded": 48.96,
      "fundedAmount": 7800307.2,
      "totalReturnRoi": 4660662.4,
      "totalReturnRoiPercentage": 29.25,
      "renovationProgress": 100
    },
    "valuation": {
      "marketValue": null,
      "marketValuePercentage": 0,
      "saleProceed": 22000000,
      "expectedSaleProceed": null
    },
    "physical": {
      "bedrooms": 4,
      "bathrooms": 3
    },
    "location": {
      "area": {
        "name": "Jumeriah Islands",
        "displayName": "Jumeriah Islands"
      },
      "city": {
        "name": "Dubai",
        "displayName": "Dubai"
      }
    },
    "auction": {
      "fundedDate": "2023-01-10",
      "closeDate": "2022-10-03",
      "soldDate": "2023-01-10",
      "completionDate": "2024-08-10"
    }
  }
] as const satisfies Property[];

export const allProperties: Property[] = [
  ...liveProperties,
  ...fundedProperties,
  ...exitedProperties,
];
