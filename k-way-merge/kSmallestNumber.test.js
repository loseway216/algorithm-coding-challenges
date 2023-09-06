import kSmallestNumber from "./kSmallestNumber";

describe("kSmallestNumber", () => {
  it("should return null if both arrays are null", () => {
    expect(kSmallestNumber([[-5]], 1)).toBe(-5);
  });

  it("should return the k smallest numbers", () => {
    expect(
      kSmallestNumber(
        [
          [1, 5, 9],
          [10, 11, 13],
          [12, 13, 15],
        ],
        8
      )
    ).toBe(13);
  });
});
