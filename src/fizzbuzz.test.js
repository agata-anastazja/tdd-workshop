import { fizzbuzz } from "./fizzbuzz";

describe("fizzbuzz", () => {
  it("should return the numbers passed in that are not divisible by 3 or 5", () => {
    expect(fizzbuzz(1)).toBe(1)
  });
});
