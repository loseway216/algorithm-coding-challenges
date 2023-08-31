import minWindowSubstring from "./minWindowSubstring";

describe("minWindowSubstring", () => {
  it("should return the minimum window substring", () => {
    expect(minWindowSubstring("ADOBECODEBANC", "ABC")).toBe("BANC");
  });

  it("should return an empty string if the input string is empty", () => {
    expect(minWindowSubstring("", "ABC")).toBe("");
  });

  it("should return an empty string if the input substring is empty", () => {
    expect(minWindowSubstring("ADOBECODEBANC", "")).toBe("");
  });

  it("should return an empty string if the input string is smaller than the input substring", () => {
    expect(minWindowSubstring("A", "ABC")).toBe("");
  });
});
