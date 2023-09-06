import mergeKList from "./mergeKLists";

describe("mergeKList", () => {
  test("should return null if lists is null or empty", () => {
    expect(mergeKList(null)).toBe(null);
    expect(mergeKList([])).toBe(null);
  });

  test("should return the list if lists has only one list", () => {
    expect(mergeKList([[1, 2, 3]])).toEqual([1, 2, 3]);
  });

  test("should merge 3 lists", () => {
    expect(
      mergeKList([
        [1, 4, 5],
        [1, 3, 4],
        [2, 6],
      ])
    ).toEqual([1, 1, 2, 3, 4, 4, 5, 6]);
  });
});
