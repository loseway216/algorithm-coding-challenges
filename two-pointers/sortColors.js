// https://leetcode.com/problems/sort-colors/
export default function sortColors(nums) {
  // edge case
  if (nums.length === 0) return [];

  // two pointers
  let left = 0;
  let right = nums.length - 1;

  // move all 0s to the left
  while (left < right) {
    if (nums[left] === 0) {
      left++;
    } else {
      [nums[left], nums[right]] = [nums[right], nums[left]];
      right--;
    }
  }

  // move all 2s to the right
  right = nums.length - 1;
  while (left < right) {
    if (nums[right] === 2) {
      right--;
    } else {
      [nums[left], nums[right]] = [nums[right], nums[left]];
      left++;
    }
  }

  return nums;
}
