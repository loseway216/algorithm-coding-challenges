import maxProfit from "./maxProfit";

describe("best time to buy and sell stock", () => {
  it("should return the maximum profit", () => {
    expect(maxProfit([7, 1, 5, 3, 6, 4])).toBe(5);
  });
});

it("should return 0 if the input array is empty", () => {
  expect(maxProfit([])).toBe(0);
});

it("should return 0 if the input array is sorted in descending order", () => {
  expect(maxProfit([7, 6, 4, 3, 1])).toBe(0);
});
