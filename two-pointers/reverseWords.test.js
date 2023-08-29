import reverseWord from "./reverseWords";

describe("reverseWord", () => {
  it("should return empty string for empty string", () => {
    expect(reverseWord("")).toBe("");
  });

  it("should reverse a word", () => {
    expect(reverseWord("hello")).toBe("hello");
  });

  it("should reverse a sentence", () => {
    expect(reverseWord("hello world")).toBe("world hello");
  });
});
