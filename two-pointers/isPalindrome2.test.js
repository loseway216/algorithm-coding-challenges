import isPalindrome2 from "./isPalindrome2";

describe("isPalindrome2", () => {
  it("should return false for empty string", () => {
    expect(isPalindrome2("")).toBe(false);
  });

  it("should return true for a palindrome", () => {
    expect(isPalindrome2("abba")).toBe(true);
  });

  it("should return false for a non-palindrome", () => {
    expect(isPalindrome2("abc")).toBe(false);
  });

  it("should return true for a palindrome with one character removed", () => {
    expect(isPalindrome2("abca")).toBe(true);
  });
});
