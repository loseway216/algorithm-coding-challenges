//https://leetcode.com/problems/minimum-window-subsequence/
// Given two strings, str1 and str2, find the shortest substring in str1 such that str2 is a subsequence of that substring.
// A substring is defined as a contiguous sequence of characters within a string.
// A subsequence is a sequence that can be derived from another sequence by deleting zero or more elements
// without changing the order of the remaining elements.
export default function minWindowSubsequence(str1, str2) {
  let sizeStr1 = str1.length;
  let sizeStr2 = str2.length;
  let minSubLen = Infinity;
  let indexS1 = 0;
  let indexS2 = 0;
  let minSubsequence = "";
  while (indexS1 < sizeStr1) {
    if (str1[indexS1] === str2[indexS2]) {
      indexS2++;
      if (indexS2 === sizeStr2) {
        let start = indexS1;
        let end = indexS1;
        indexS2--;
        while (indexS2 >= 0) {
          if (str1[start] === str2[indexS2]) {
            indexS2--;
          }
          start--;
        }
        start++;
        if (end - start + 1 < minSubLen) {
          minSubLen = end - start + 1;
          minSubsequence = str1.slice(start, end + 1);
        }
        indexS1 = start;
        indexS2 = 0;
      }
    }
    indexS1++;
  }
  return minSubsequence;
}
