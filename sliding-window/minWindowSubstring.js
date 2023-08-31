// https://leetcode.com/problems/minimum-window-substring/
// the order of substring does not matter
export default function minWindowSubstring(s, t) {
  if (t === "") {
    return "";
  }

  const reqCount = {};
  const window = {};

  for (let i = 0; i < t.length; i++) {
    const c = t.charAt(i);
    reqCount[c] = 1 + (reqCount[c] || 0);
  }

  for (let i = 0; i < t.length; i++) {
    const c = t.charAt(i);
    window[c] = 0;
  }

  let current = 0;
  const required = Object.keys(reqCount).length;

  let res = [-1, -1];
  let resLen = Infinity;

  let left = 0;
  for (let right = 0; right < s.length; right++) {
    const c = s.charAt(right);

    if (t.indexOf(c) !== -1) {
      window[c] = 1 + (window[c] || 0);
    }

    if (reqCount[c] && window[c] === reqCount[c]) {
      current += 1;
    }

    while (current === required) {
      if (right - left + 1 < resLen) {
        res = [left, right];
        resLen = right - left + 1;
      }

      const leftChar = s.charAt(left);
      if (t.indexOf(leftChar) !== -1) {
        window[leftChar] -= 1;
      }

      if (reqCount[leftChar] && window[leftChar] < reqCount[leftChar]) {
        current -= 1;
      }
      left += 1;
    }
  }
  const [leftIndex, rightIndex] = res;

  return resLen !== Infinity ? s.slice(leftIndex, rightIndex + 1) : "";
}
