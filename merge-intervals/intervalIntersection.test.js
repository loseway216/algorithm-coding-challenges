import intervalIntersection from "./intervalIntersection";

describe("intervalIntersection", () => {
  it("should return the intersection of the two intervals", () => {
    expect(
      intervalIntersection(
        [
          [0, 2],
          [5, 10],
          [13, 23],
          [24, 25],
        ],
        [
          [1, 5],
          [8, 12],
          [15, 24],
          [25, 26],
        ]
      )
    ).toEqual([
      [1, 2],
      [5, 5],
      [8, 10],
      [15, 23],
      [24, 24],
      [25, 25],
    ]);
  });
});
