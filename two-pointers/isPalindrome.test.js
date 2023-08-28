import isPalindrome from "./isPalindrome";

describe("isPalindrome", () => {
  it("should return false for empty string", () => {
    expect(isPalindrome("")).toBe(false);
  });

  it("should return true for a palindrome", () => {
    expect(isPalindrome("abba")).toBe(true);
  });

  it("should return false for a non-palindrome", () => {
    expect(isPalindrome("abc")).toBe(false);
  });
});
