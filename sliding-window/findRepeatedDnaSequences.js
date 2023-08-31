// https://leetcode.com/problems/repeated-dna-sequences/
export default function findRepeatedDnaSequences(s) {
  // edge case
  if (s.length < 10) {
    return [];
  }

  const seen = new Set();
  const seenTwice = new Set();

  for (let i = 0; i < s.length - 9; i++) {
    const sequence = s.slice(i, i + 10);

    if (seen.has(sequence)) {
      seenTwice.add(sequence);
    } else {
      seen.add(sequence);
    }
  }

  return Array.from(seenTwice);
}
