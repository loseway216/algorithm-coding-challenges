import minSubArrayLen from "./minSubArrayLen";

describe("minSubArrayLen", () => {
  it("should return the minimum length of a contiguous subarray of which the sum is greater than or equal to the input number", () => {
    expect(minSubArrayLen([2, 3, 1, 2, 4, 3], 7)).toBe(2);
  });

  it("should return 0 if no such subarray exists", () => {
    expect(minSubArrayLen([2, 1, 6, 5, 4], 19)).toBe(0);
  });

  it("should return 0 if the input array is empty", () => {
    expect(minSubArrayLen([], 7)).toBe(0);
  });
});
