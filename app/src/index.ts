export function fizzbuzz(n: number): string {
  if (!Number.isInteger(n) || n < 1) {
    throw new RangeError(`n must be a positive integer: ${n}`);
  }
  if (n % 15 === 0) return "FizzBuzz";
  if (n % 3 === 0) return "Fizz";
  if (n % 5 === 0) return "Buzz";
  return String(n);
}

export function fizzbuzzRange(max: number): string[] {
  return Array.from({ length: max }, (_, i) => fizzbuzz(i + 1));
}
