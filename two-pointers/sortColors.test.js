import sortColors from "./sortColors";

describe("sortColors", () => {
  it("should return empty array for empty array", () => {
    expect(sortColors([])).toEqual([]);
  });

  it("should sort an array of 0s, 1s, and 2s", () => {
    expect(sortColors([2, 0, 2, 1, 1, 0])).toEqual([0, 0, 1, 1, 2, 2]);
  });
});
