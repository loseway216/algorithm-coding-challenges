import isHappyNumber from "./isHappyNumber";

describe("isHappyNumber", () => {
  it("should return false for negative numbers", () => {
    expect(isHappyNumber(-1)).toBe(false);
  });

  it("should return false for zero", () => {
    expect(isHappyNumber(0)).toBe(false);
  });

  it("should return true for a happy number", () => {
    expect(isHappyNumber(23)).toBe(true);
  });

  it("should return false for an unhappy number", () => {
    expect(isHappyNumber(12)).toBe(false);
  });

  it("should return true for a happy number with a single digit", () => {
    expect(isHappyNumber(7)).toBe(true);
  });
});
