import { describe, expect, it } from "vitest";
import { fizzbuzz, fizzbuzzRange } from "@/index";

describe("fizzbuzz", () => {
  it.each([1, 2, 4, 7, 98])("returns the number itself for %i", (n) => {
    expect(fizzbuzz(n)).toBe(String(n));
  });

  it.each([3, 6, 9, 99])("returns Fizz for multiples of 3 (%i)", (n) => {
    expect(fizzbuzz(n)).toBe("Fizz");
  });

  it.each([5, 10, 20, 100])("returns Buzz for multiples of 5 (%i)", (n) => {
    expect(fizzbuzz(n)).toBe("Buzz");
  });

  it.each([15, 30, 45, 90])("returns FizzBuzz for multiples of 15 (%i)", (n) => {
    expect(fizzbuzz(n)).toBe("FizzBuzz");
  });

  it.each([0, -3, 1.5, Number.NaN])("throws RangeError for invalid input %s", (n) => {
    expect(() => fizzbuzz(n)).toThrow(RangeError);
  });
});

describe("fizzbuzzRange", () => {
  it("returns the sequence from 1 to max", () => {
    expect(fizzbuzzRange(15)).toEqual([
      "1",
      "2",
      "Fizz",
      "4",
      "Buzz",
      "Fizz",
      "7",
      "8",
      "Fizz",
      "Buzz",
      "11",
      "Fizz",
      "13",
      "14",
      "FizzBuzz",
    ]);
  });

  it("returns an empty array for 0", () => {
    expect(fizzbuzzRange(0)).toEqual([]);
  });
});
