import maxSlidingWindow from "./maxSlidingWindow";

describe("Find Maximum in Sliding Window", () => {
  it("should return the maximum in a sliding window", () => {
    expect(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3)).toEqual([
      3, 3, 5, 5, 6, 7,
    ]);
  });

  it("should return an empty array if the input array is empty", () => {
    expect(maxSlidingWindow([], 3)).toEqual([]);
  });
});
