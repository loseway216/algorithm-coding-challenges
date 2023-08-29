import threeSum from "./threeSum";

describe("threeSum", () => {
  it("should return empty array for empty array", () => {
    expect(threeSum([])).toEqual([]);
  });

  it("should return empty array for array with less than 3 elements", () => {
    expect(threeSum([1, 2])).toEqual([]);
  });

  it("should return duplicates triplets", () => {
    expect(threeSum([0, 0, 0])).toEqual([[0, 0, 0]]);
  });

  it("should return triplets", () => {
    expect(threeSum([-1, 0, 1, 2, -1, -4])).toEqual([
      [-1, -1, 2],
      [-1, 0, 1],
    ]);
  });
});
