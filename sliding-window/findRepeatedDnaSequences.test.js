import findRepeatedDnaSequences from "./findRepeatedDnaSequences";

describe("findRepeatedDnaSequences", () => {
  it("should return the repeated DNA sequences", () => {
    expect(
      findRepeatedDnaSequences("AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT")
    ).toEqual(["AAAAACCCCC", "CCCCCAAAAA"]);
  });

  it("should return an empty array if there are no repeated DNA sequences", () => {
    expect(findRepeatedDnaSequences("A")).toEqual([]);
  });
});
