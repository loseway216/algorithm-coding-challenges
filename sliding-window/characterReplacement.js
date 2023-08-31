// https://leetcode.com/problems/longest-repeating-character-replacement/
export default function characterReplacement(s, k) {
  // edge case
  if (s.length < 2) {
    return s.length;
  }

  let left = 0;
  let right = 0;
  let max = 0;
  const charCounts = {};
  let maxCount = 0;

  while (right < s.length) {
    const char = s[right];
    charCounts[char] = charCounts[char] + 1 || 1;
    maxCount = Math.max(maxCount, charCounts[char]);
    const windowSize = right - left + 1;
    const replacementsNeeded = windowSize - maxCount;

    if (replacementsNeeded > k) {
      charCounts[s[left]]--;
      left++;
    } else {
      max = Math.max(max, windowSize);
    }

    right++;
  }

  return max;
}
