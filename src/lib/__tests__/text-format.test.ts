import { describe, it, expect } from "vitest";
import { wordsToDigits } from "../text-format";

// --- Simple units ---

describe("wordsToDigits", () => {
  describe("simple units (zero–nineteen)", () => {
    it("converts single number words", () => {
      expect(wordsToDigits("zero")).toBe("0");
      expect(wordsToDigits("one")).toBe("1");
      expect(wordsToDigits("ten")).toBe("10");
      expect(wordsToDigits("nineteen")).toBe("19");
    });

    it("is case-insensitive", () => {
      expect(wordsToDigits("Three")).toBe("3");
      expect(wordsToDigits("FIVE")).toBe("5");
    });
  });

  // --- Tens ---

  describe("tens (twenty–ninety)", () => {
    it("converts tens", () => {
      expect(wordsToDigits("twenty")).toBe("20");
      expect(wordsToDigits("fifty")).toBe("50");
      expect(wordsToDigits("ninety")).toBe("90");
    });
  });

  // --- Compound tens ---

  describe("compound tens", () => {
    it("converts hyphenated compound tens", () => {
      expect(wordsToDigits("sixty-six")).toBe("66");
      expect(wordsToDigits("twenty-one")).toBe("21");
      expect(wordsToDigits("ninety-nine")).toBe("99");
    });

    it("converts space-separated compound tens", () => {
      expect(wordsToDigits("sixty six")).toBe("66");
      expect(wordsToDigits("thirty two")).toBe("32");
    });
  });

  // --- Hundreds ---

  describe("hundreds", () => {
    it("converts hundreds", () => {
      expect(wordsToDigits("three hundred")).toBe("300");
      expect(wordsToDigits("one hundred")).toBe("100");
    });

    it("converts hundreds with tens", () => {
      expect(wordsToDigits("three hundred and fifty")).toBe("350");
      expect(wordsToDigits("two hundred and thirty-five")).toBe("235");
    });

    it("converts hundreds with units", () => {
      expect(wordsToDigits("five hundred and twelve")).toBe("512");
    });
  });

  // --- Thousands ---

  describe("thousands", () => {
    it("converts simple thousands", () => {
      expect(wordsToDigits("five thousand")).toBe("5,000");
    });

    it("converts complex thousands", () => {
      expect(wordsToDigits("eight hundred thirty-five thousand")).toBe(
        "835,000"
      );
    });

    it("converts thousands with remainder", () => {
      expect(
        wordsToDigits("three hundred and fifty thousand six hundred and twelve")
      ).toBe("350,612");
    });
  });

  // --- Millions ---

  describe("millions", () => {
    it("converts simple millions", () => {
      expect(wordsToDigits("two million")).toBe("2,000,000");
    });

    it("converts millions with thousands", () => {
      expect(
        wordsToDigits("one million five hundred thousand")
      ).toBe("1,500,000");
    });
  });

  // --- Decimals ---

  describe("decimals", () => {
    it("converts simple decimals", () => {
      expect(wordsToDigits("six point zero seven")).toBe("6.07");
    });

    it("converts decimals with larger integer part", () => {
      expect(wordsToDigits("ten point five")).toBe("10.5");
    });

    it("converts zero point decimals", () => {
      expect(wordsToDigits("zero point seven five")).toBe("0.75");
    });
  });

  // --- Mixed text ---

  describe("mixed text (numbers within sentences)", () => {
    it("converts numbers within a sentence", () => {
      expect(wordsToDigits("about eight hundred thousand")).toBe(
        "about 800,000"
      );
    });

    it("preserves surrounding text", () => {
      expect(
        wordsToDigits("the yield is six point zero seven percent")
      ).toBe("the yield is 6.07 percent");
    });

    it("handles multiple numbers in one string", () => {
      expect(
        wordsToDigits("from twenty to fifty units")
      ).toBe("from 20 to 50 units");
    });

    it("preserves punctuation after numbers", () => {
      expect(wordsToDigits("about three hundred.")).toBe("about 300.");
    });

    it("handles numbers followed by commas", () => {
      expect(wordsToDigits("twenty, thirty, and forty")).toBe(
        "20, 30, and 40"
      );
    });
  });

  // --- Ordinals preserved ---

  describe("ordinals", () => {
    it("preserves ordinal words", () => {
      expect(wordsToDigits("the first property")).toBe("the first property");
      expect(wordsToDigits("the second floor")).toBe("the second floor");
      expect(wordsToDigits("the third option")).toBe("the third option");
    });

    it("preserves ordinals while converting regular numbers", () => {
      expect(
        wordsToDigits("the first property costs three hundred thousand")
      ).toBe("the first property costs 300,000");
    });
  });

  // --- Edge cases ---

  describe("edge cases", () => {
    it("returns empty string for empty input", () => {
      expect(wordsToDigits("")).toBe("");
    });

    it("returns text unchanged when no number words present", () => {
      expect(wordsToDigits("hello world")).toBe("hello world");
    });

    it("handles standalone 'a hundred'", () => {
      expect(wordsToDigits("a hundred")).toBe("a 100");
    });

    it("does not convert 'and' alone", () => {
      expect(wordsToDigits("come and see")).toBe("come and see");
    });

    it("handles 'hundred' as standalone", () => {
      expect(wordsToDigits("hundred")).toBe("100");
    });
  });
});
