import scheduleTasks from "./scheduleTasks";

describe("schedule tasks on minimum machines", () => {
  it("should return the minimum number of machines required to schedule all tasks", () => {
    expect(
      scheduleTasks([
        [1, 1],
        [5, 5],
        [8, 8],
        [4, 4],
        [6, 6],
        [10, 10],
        [7, 7],
      ])
    ).toEqual(1);

    expect(
      scheduleTasks([
        [1, 7],
        [1, 7],
        [1, 7],
        [1, 7],
        [1, 7],
        [1, 7],
      ])
    ).toEqual(6);

    expect(
      scheduleTasks([
        [1, 3],
        [3, 5],
        [5, 9],
        [9, 12],
        [12, 13],
        [13, 16],
        [16, 17],
      ])
    ).toEqual(1);

    expect(
      scheduleTasks([
        [12, 13],
        [13, 15],
        [17, 20],
        [13, 14],
        [19, 21],
        [18, 20],
      ])
    ).toEqual(3);
  });
});
