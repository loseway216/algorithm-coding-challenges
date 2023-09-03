import employeeFreeTime from "./employeeFreeTime";

describe("employeeFreeTime", () => {
  it("should return the free time of the employees", () => {
    expect(
      employeeFreeTime([
        [
          [1, 3],
          [6, 7],
        ],
        [[2, 4]],
        [
          [2, 5],
          [9, 12],
        ],
      ])
    ).toEqual([
      [5, 6],
      [7, 9],
    ]);
  });

  it("should return the free time of the employees", () => {
    expect(
      employeeFreeTime([
        [
          [1, 3],
          [9, 12],
        ],
        [[2, 4]],
        [[6, 8]],
      ])
    ).toEqual([
      [4, 6],
      [8, 9],
    ]);
  });

  it("should return the free time of the employees", () => {
    expect(
      employeeFreeTime([
        [
          [1, 3],
          [6, 7],
        ],
        [[2, 4]],
        [
          [2, 5],
          [9, 12],
        ],
      ])
    ).toEqual([
      [5, 6],
      [7, 9],
    ]);
  });
});
