import kthLargestNumber from "./kthLargestNumber";

describe("kthLargestNumber", () => {
  test("should return null if nums is null or empty", () => {
    expect(kthLargestNumber(null)).toBe(null);
    expect(kthLargestNumber([])).toBe(null);
  });

  test("should return the number if nums has only one number", () => {
    expect(kthLargestNumber([1])).toEqual(1);
  });

  test("should return the kth largest number", () => {
    expect(kthLargestNumber([3, 1, 5, 12, 2, 11], 3)).toEqual(5);
    expect(kthLargestNumber([5, 12, 11, -1, 12], 3)).toEqual(11);
  });
});
