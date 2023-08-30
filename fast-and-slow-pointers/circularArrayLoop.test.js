import circularArrayLoop from "./circularArrayLoop";

describe("detect circular array loop", () => {
  it("should return false for empty array", () => {
    expect(circularArrayLoop([])).toBe(false);
  });

  it("should return false for an array of length 1", () => {
    expect(circularArrayLoop([1])).toBe(false);
  });

  it("should return true for a circular array", () => {
    expect(circularArrayLoop([1, 2, -1, 2, 2])).toBe(true);
  });

  it("should return false for a non-circular array", () => {
    expect(circularArrayLoop([2, 1, -1, -2, 2])).toBe(false);
  });
});
