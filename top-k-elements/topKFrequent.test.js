import topKFrequent from "./topKFrequent";

describe("topKFrequent", () => {
  test("should return [] if nums is null or empty", () => {
    expect(topKFrequent(null)).toEqual([]);
    expect(topKFrequent([])).toEqual([]);
  });

  test("should return the number if nums has only one number", () => {
    expect(topKFrequent([1], 1)).toEqual([1]);
  });

  test("should return the kth largest number", () => {
    expect(topKFrequent([1, 1, 1, 2, 2, 3], 2)).toEqual([1, 2]);
    expect(topKFrequent([1], 1)).toEqual([1]);
  });
});
