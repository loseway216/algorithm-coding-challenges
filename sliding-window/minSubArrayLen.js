// https://leetcode.com/problems/minimum-size-subarray-sum/
export default function minSubArrayLen(nums, target) {
  // edge case
  if (nums.length === 0) {
    return 0;
  }

  let minSubLen = Infinity;
  let sum = 0;
  let start = 0;

  for (let end = 0; end < nums.length; end++) {
    sum += nums[end];
    while (sum >= target) {
      minSubLen = Math.min(minSubLen, end - start + 1);
      sum -= nums[start];
      start++;
    }
  }

  return minSubLen === Infinity ? 0 : minSubLen;
}
