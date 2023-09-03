import insertIntervals from "./insertIntervals";

describe("insertIntervals", () => {
  it("should insert the interval", () => {
    expect(
      insertIntervals(
        [
          [1, 3],
          [6, 9],
        ],
        [2, 5]
      )
    ).toEqual([
      [1, 5],
      [6, 9],
    ]);
  });

  it("should insert the interval", () => {
    expect(
      insertIntervals(
        [
          [1, 2],
          [3, 5],
          [6, 7],
          [8, 10],
          [12, 16],
        ],
        [4, 8]
      )
    ).toEqual([
      [1, 2],
      [3, 10],
      [12, 16],
    ]);
  });
});
