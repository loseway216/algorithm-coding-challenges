import minWindowSubsequence from "./minWindowSubsequence";

describe("minWindowSubsequence", () => {
  it("should return an empty string if the input string is empty", () => {
    expect(minWindowSubsequence("", "ABC")).toBe("");
  });

  it("should return an empty string if the input string is smaller than the substring", () => {
    expect(minWindowSubsequence("A", "ABC")).toBe("");
  });

  it("should return the minimum window", () => {
    expect(minWindowSubsequence("abcdedeaqdweq", "aqeq")).toBe("aqdweq");
  });

  it("should return the minimum window", () => {
    expect(minWindowSubsequence("fgrqsqsnodwmxzkzxwqegkndaa", "kzed")).toBe(
      "kzxwqegknd"
    );
  });
});
