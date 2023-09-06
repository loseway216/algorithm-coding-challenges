import mergeSortedArray from "./mergeSortedArray";

describe("mergeSortedArray", () => {
  it("should return null if both arrays are null", () => {
    expect(mergeSortedArray(null, 1, null, 1)).toEqual(null);
  });

  it("should return the first array if the second array is null", () => {
    expect(mergeSortedArray([1, 2, 3], 1, null, 1)).toEqual([1, 2, 3]);
  });

  it("should return the second array if the first array is null", () => {
    expect(mergeSortedArray(null, 1, [1, 2, 3], 1)).toEqual([1, 2, 3]);
  });

  it("should return the merged array", () => {
    expect(mergeSortedArray([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)).toEqual([
      1, 2, 2, 3, 5, 6,
    ]);
  });
});
