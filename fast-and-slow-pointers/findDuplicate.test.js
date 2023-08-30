import findDuplicate from "./findDuplicate";

describe("find duplicate number in an array", () => {
  it("should return -1 for empty array", () => {
    expect(findDuplicate([])).toBe(-1);
  });

  it("should return -1 for an array of length 1", () => {
    expect(findDuplicate([1])).toBe(-1);
  });

  it("should return the duplicate number", () => {
    expect(findDuplicate([1, 3, 4, 2, 2])).toBe(2);
  });

  it("should return the duplicate number", () => {
    expect(findDuplicate([3, 1, 3, 4, 2])).toBe(3);
  });
});
