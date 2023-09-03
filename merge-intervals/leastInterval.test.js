import leastInterval from "./leastInterval";

describe("leastInterval", () => {
  it("should return the least interval", () => {
    expect(leastInterval(["A", "A", "A", "B", "B", "B"], 2)).toBe(8);
  });

  it("should return the least interval", () => {
    expect(leastInterval(["A", "A", "A", "B", "B", "B"], 0)).toBe(6);
  });

  it("should return the least interval", () => {
    expect(
      leastInterval(["A", "A", "A", "A", "A", "A", "B", "C", "D", "E"], 2)
    ).toBe(16);
  });
});
