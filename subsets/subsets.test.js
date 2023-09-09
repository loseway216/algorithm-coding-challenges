import subsets from "./subsets";

describe("subsets", () => {
  test("should return [] if nums is null or empty", () => {
    expect(subsets(null)).toEqual([]);
    expect(subsets([])).toEqual([]);
  });

  test("should return the subsets of the nums", () => {
    expect(subsets([1, 2, 3])).toEqual([
      [],
      [1],
      [2],
      [1, 2],
      [3],
      [1, 3],
      [2, 3],
      [1, 2, 3],
    ]);
  });
});
