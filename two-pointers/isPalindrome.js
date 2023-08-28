// check if a string is a palindrome
export default function isPalindrome(str) {
  // edge case
  if (str.length === 0) return false;

  // two pointers
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) return false;
    left++;
    right--;
  }

  return true;
}
