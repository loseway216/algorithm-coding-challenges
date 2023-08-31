import characterReplacement from "./characterReplacement";

describe("characterReplacement", () => {
  it("should return the length of the longest substring with the same letters", () => {
    expect(characterReplacement("ABAB", 2)).toBe(4);
  });
});
