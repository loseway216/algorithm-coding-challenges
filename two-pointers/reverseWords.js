// https://leetcode.com/problems/reverse-words-in-a-string/
export default function reverseWord(str) {
  // edge case
  if (str.length === 0) return "";

  // convert string to array
  str = str.split("");

  // two pointers
  let left = 0;
  let right = str.length - 1;

  // reverse the whole string
  str = reverse(str, left, right);

  // reverse each word
  left = 0;
  right = 0;
  while (right < str.length) {
    if (str[right] === " ") {
      str = reverse(str, left, right - 1);
      left = right + 1;
    }
    right++;
  }
  str = reverse(str, left, right - 1);

  return str.join("");
}

function reverse(str, left, right) {
  while (left < right) {
    [str[left], str[right]] = [str[right], str[left]];
    left++;
    right--;
  }

  return str;
}
