import medianSlidingWindow from "./medianSlidingWindow";

describe("find the median of a sliding window", () => {
  it("should return the median of the sliding window", () => {
    expect(medianSlidingWindow([], 0)).toEqual([]);
  });

  it("should return the median of the sliding window", () => {
    expect(medianSlidingWindow([1, 2, -1, 3, 5], 2)).toEqual([1.5, 0.5, 1, 4]);
  });

  it("should return the median of the sliding window", () => {
    expect(medianSlidingWindow([1, 2, -1, 3, 5], 3)).toEqual([1, 2, 3]);
  });

  it("should return the median of the sliding window", () => {
    expect(medianSlidingWindow([1, 2, -1, 3, 5], 4)).toEqual([1.5, 2.5]);
  });
});
