// https://leetcode.com/problems/sliding-window-maximum/
export default function maxSlidingWindow(nums, k) {
  // edge case
  if (nums.length === 0) {
    return [];
  }

  const result = [];
  const window = [];

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    // remove the first element if it's outside the window
    if (i >= k && window[0] <= i - k) {
      window.shift();
    }

    // remove all elements smaller than the current element
    while (window.length > 0 && nums[window[window.length - 1]] <= num) {
      window.pop();
    }

    // add the current element
    window.push(i);

    // add the maximum to the result
    if (i >= k - 1) {
      result.push(nums[window[0]]);
    }
  }

  return result;
}
