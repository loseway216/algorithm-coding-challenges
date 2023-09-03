import findSets from "./findSets";

describe("meeting rooms ii", () => {
  it("should return the minimum number of meeting rooms required", () => {
    expect(
      findSets([
        [0, 30],
        [5, 10],
        [15, 20],
      ])
    ).toEqual([
      [
        [0, 30],
        [5, 10],
      ],
      [[15, 20]],
    ]);
  });
});
