import binarySearch from "./binarySearch";

describe("binarySearch", () => {
  test("should return -1 if nums is null or empty", () => {
    expect(binarySearch(null, 1)).toEqual(-1);
    expect(binarySearch([], 1)).toEqual(-1);
  });

  test("should return the index of the target", () => {
    expect(binarySearch([1, 2, 3, 4, 5], 3)).toEqual(2);
    expect(binarySearch([1, 2, 3, 4, 5], 5)).toEqual(4);
    expect(binarySearch([1, 2, 3, 4, 5], 1)).toEqual(0);
  });

  test("should return -1 if the target is not in the array", () => {
    expect(binarySearch([1, 2, 3, 4, 5], 6)).toEqual(-1);
  });
});
