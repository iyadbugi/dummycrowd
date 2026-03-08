/**
 * Converts number-words in a string to digits.
 * Designed for ElevenLabs agent output which spells numbers as words.
 *
 * Handles: units (zero-nineteen), tens (twenty-ninety), compound tens
 * (sixty-six), hundreds, thousands, millions, decimals (six point zero seven),
 * and comma-formats large numbers. Preserves ordinals (first, second, third).
 */

const ONES: Record<string, number> = {
  zero: 0,
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
  ten: 10,
  eleven: 11,
  twelve: 12,
  thirteen: 13,
  fourteen: 14,
  fifteen: 15,
  sixteen: 16,
  seventeen: 17,
  eighteen: 18,
  nineteen: 19,
};

const TENS: Record<string, number> = {
  twenty: 20,
  thirty: 30,
  forty: 40,
  fifty: 50,
  sixty: 60,
  seventy: 70,
  eighty: 80,
  ninety: 90,
};

const MAGNITUDES: Record<string, number> = {
  hundred: 100,
  thousand: 1_000,
  million: 1_000_000,
  billion: 1_000_000_000,
};

const ORDINALS = new Set([
  "first",
  "second",
  "third",
  "fourth",
  "fifth",
  "sixth",
  "seventh",
  "eighth",
  "ninth",
  "tenth",
  "eleventh",
  "twelfth",
  "thirteenth",
  "fourteenth",
  "fifteenth",
  "sixteenth",
  "seventeenth",
  "eighteenth",
  "nineteenth",
  "twentieth",
  "thirtieth",
  "fortieth",
  "fiftieth",
  "sixtieth",
  "seventieth",
  "eightieth",
  "ninetieth",
  "hundredth",
  "thousandth",
  "millionth",
  "billionth",
]);

// All words that can be part of a number expression
const NUMBER_WORDS = new Set([
  ...Object.keys(ONES),
  ...Object.keys(TENS),
  ...Object.keys(MAGNITUDES),
  "and",
  "point",
]);

function isNumberWord(word: string): boolean {
  return NUMBER_WORDS.has(word);
}

function isOrdinal(word: string): boolean {
  return ORDINALS.has(word);
}

function wordValue(word: string): number | undefined {
  return ONES[word] ?? TENS[word] ?? undefined;
}

/**
 * Evaluate a sequence of number words into a numeric value.
 * Handles patterns like "three hundred and fifty thousand six hundred and twelve"
 */
function evaluateNumberWords(words: string[]): number {
  // Filter out "and" — it's grammatical glue
  const filtered = words.filter((w) => w !== "and");
  if (filtered.length === 0) return 0;

  let result = 0;
  let current = 0; // accumulator for the current group

  for (const word of filtered) {
    if (word === "point") break; // handled separately

    const mag = MAGNITUDES[word];
    if (mag !== undefined) {
      if (mag === 100) {
        // "three hundred" — multiply current group by 100
        current = (current || 1) * 100;
      } else {
        // thousand / million / billion — flush current group scaled by magnitude
        current = (current || 1) * mag;
        result += current;
        current = 0;
      }
    } else {
      const val = wordValue(word);
      if (val !== undefined) {
        current += val;
      }
    }
  }

  result += current;
  return result;
}

/**
 * Format a number with commas for thousands separators.
 */
function formatWithCommas(n: number): string {
  return n.toLocaleString("en-US");
}

/**
 * Convert number-word sequences in text to digit representations.
 */
export function wordsToDigits(text: string): string {
  // Pre-pass: convert mixed digit+magnitude patterns like "20 million" → "20,000,000"
  // and "3.57 million" → "3,570,000"
  text = text.replace(
    /(\d+(?:\.\d+)?)\s*(million|billion|thousand)/gi,
    (_, num, mag) => {
      const n = parseFloat(num);
      const multiplier = MAGNITUDES[mag.toLowerCase()];
      if (multiplier === undefined) return _;
      return formatWithCommas(Math.round(n * multiplier));
    }
  );

  // Split into tokens, preserving whitespace and punctuation structure
  const tokens = text.split(/(\s+)/);
  const result: string[] = [];
  let numberWords: string[] = [];
  let numberTokens: string[] = []; // original tokens for fallback
  let pendingWhitespace = ""; // whitespace between number collection and next token

  function flushNumber() {
    if (numberWords.length === 0) return;

    // Check if the sequence is ONLY "and" or "point" with no actual numbers
    const meaningful = numberWords.filter(
      (w) => w !== "and" && w !== "point"
    );
    if (meaningful.length === 0) {
      result.push(...numberTokens);
      numberWords = [];
      numberTokens = [];
      return;
    }

    // Split at "point" for decimal handling
    const pointIdx = numberWords.indexOf("point");
    let integerPart: string[];
    let decimalWords: string[] = [];

    if (pointIdx !== -1) {
      integerPart = numberWords.slice(0, pointIdx);
      decimalWords = numberWords.slice(pointIdx + 1);
    } else {
      integerPart = numberWords;
    }

    const intValue = integerPart.length > 0 ? evaluateNumberWords(integerPart) : 0;

    let formatted: string;
    if (decimalWords.length > 0) {
      const decimalDigits = decimalWords
        .filter((w) => w !== "and")
        .map((w) => {
          const v = wordValue(w);
          return v !== undefined ? v.toString() : w;
        })
        .join("");
      formatted = `${formatWithCommas(intValue)}.${decimalDigits}`;
    } else {
      formatted = formatWithCommas(intValue);
    }

    result.push(formatted);
    numberWords = [];
    numberTokens = [];
  }

  for (const token of tokens) {
    // Whitespace tokens
    if (/^\s+$/.test(token)) {
      if (numberWords.length > 0) {
        // Hold whitespace — don't commit until we know the next token is a number word
        pendingWhitespace = token;
      } else {
        result.push(token);
      }
      continue;
    }

    // Strip trailing punctuation for matching, but preserve it
    const punctMatch = token.match(/^(.+?)([.,;:!?]+)$/);
    const bare = punctMatch ? punctMatch[1] : token;
    const trailingPunct = punctMatch ? punctMatch[2] : "";

    // Handle hyphenated compounds like "sixty-six"
    const hyphenParts = bare.toLowerCase().split("-");
    const isHyphenatedNumber =
      hyphenParts.length === 2 &&
      TENS[hyphenParts[0]] !== undefined &&
      ONES[hyphenParts[1]] !== undefined;

    const lower = bare.toLowerCase();

    // Check if this is an ordinal — if so, don't convert
    if (isOrdinal(lower)) {
      flushNumber();
      if (pendingWhitespace) {
        result.push(pendingWhitespace);
        pendingWhitespace = "";
      }
      result.push(token);
      continue;
    }

    // "and" should only be part of a number if we already have number words accumulated
    // (e.g., "three hundred AND fifty" but not standalone "and forty")
    const isAndWithoutContext =
      lower === "and" &&
      numberWords.filter((w) => w !== "and").length === 0;

    if (isAndWithoutContext) {
      flushNumber();
      if (pendingWhitespace) {
        result.push(pendingWhitespace);
        pendingWhitespace = "";
      }
      result.push(token);
      continue;
    }

    if (isHyphenatedNumber || isNumberWord(lower)) {
      // Commit pending whitespace into number token sequence
      if (pendingWhitespace) {
        numberTokens.push(pendingWhitespace);
        pendingWhitespace = "";
      }
      if (isHyphenatedNumber) {
        numberWords.push(hyphenParts[0], hyphenParts[1]);
      } else {
        numberWords.push(lower);
      }
      numberTokens.push(token);
      if (trailingPunct) {
        flushNumber();
        result.push(trailingPunct);
      }
    } else {
      // Not a number word — flush any accumulated number, restore pending whitespace
      flushNumber();
      if (pendingWhitespace) {
        result.push(pendingWhitespace);
        pendingWhitespace = "";
      }
      result.push(token);
    }
  }

  // Flush any remaining number words
  flushNumber();
  if (pendingWhitespace) {
    result.push(pendingWhitespace);
  }

  return result.join("");
}
