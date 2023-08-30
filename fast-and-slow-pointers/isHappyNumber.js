// https://leetcode.com/problems/happy-number/
export default function isHappyNumber(num) {
  // edge case
  if (num <= 0) return false;

  let slow = num;
  let fast = num;

  do {
    slow = findSquareSum(slow);
    fast = findSquareSum(findSquareSum(fast));
  } while (slow !== fast);

  return slow === 1;
}

function findSquareSum(num) {
  let sum = 0;

  while (num > 0) {
    const digit = num % 10;
    sum += digit * digit;
    num = Math.floor(num / 10);
  }

  return sum;
}
