//https://leetcode.com/problems/valid-palindrome-ii/
// Given a string s, return true if the s can be palindrome after deleting at most one character from it.
export default function isPalindrome2(str) {
  // edge case
  if (str.length === 0) return false;

  // two pointers
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) {
      return (
        isPalindrome(str, left + 1, right) || isPalindrome(str, left, right - 1)
      );
    }
    left++;
    right--;
  }

  return true;
}

function isPalindrome(str, left, right) {
  while (left < right) {
    if (str[left] !== str[right]) return false;
    left++;
    right--;
  }

  return true;
}
