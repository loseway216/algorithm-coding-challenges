import findMaximizedCapital from "./findMaximizedCapital";

describe("find the maximum capital", () => {
  it("should return 0 if the input is invalid", () => {
    expect(findMaximizedCapital(0, 0, [], [])).toEqual(0);
  });

  it("should return the maximum capital", () => {
    expect(findMaximizedCapital(1, 2, [1, 2, 2, 3], [2, 4, 6, 8])).toEqual(11);
    // expect(findMaximizedCapital(2, 2, [1, 2, 3, 4], [1, 3, 5, 7])).toEqual(12);
    // expect(
    //   findMaximizedCapital(1, 3, [1, 2, 3, 11, 19, 21], [2, 7, 9, 16, 17, 18])
    // ).toEqual(28);
  });
});
