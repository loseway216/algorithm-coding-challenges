import canJump from "./canJump";

describe("canJump", () => {
  it("should return true if it can jump to the last index", () => {
    expect(canJump([2, 3, 1, 1, 4])).toBe(true);
  });

  it("should return false if it cannot jump to the last index", () => {
    expect(canJump([3, 2, 1, 0, 4])).toBe(false);
  });

  it("should return true if it can jump to the last index", () => {
    expect(canJump([2, 0])).toBe(true);
  });

  it("should return true if it can jump to the last index", () => {
    expect(canJump([0])).toBe(true);
  });
});
