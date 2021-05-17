import { fizzbuzz } from "./fizzbuzz";

describe("fizzbuzz", () => {
  it("when passed 1 returns 1", () => {
    expect(fizzbuzz(1)).toBe(1)
  });
});
