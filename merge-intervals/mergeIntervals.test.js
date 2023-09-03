import mergeIntervals from "./mergeIntervals";

describe("mergeIntervals", () => {
  it("should merge the intervals", () => {
    expect(
      mergeIntervals([
        [1, 4],
        [2, 5],
        [7, 9],
      ])
    ).toEqual([
      [1, 5],
      [7, 9],
    ]);
  });

  it("should merge the intervals", () => {
    expect(
      mergeIntervals([
        [6, 7],
        [2, 4],
        [5, 9],
      ])
    ).toEqual([
      [2, 4],
      [5, 9],
    ]);
  });

  it("should merge the intervals", () => {
    expect(
      mergeIntervals([
        [1, 4],
        [2, 6],
        [3, 5],
      ])
    ).toEqual([[1, 6]]);
  });
});
