// https://leetcode.com/problems/binary-search/
export default function binarySearch(nums, target) {
  if (!nums || !nums.length) return -1;

  let start = 0;
  let end = nums.length - 1;
  let mid;

  while (start <= end) {
    mid = Math.floor((start + end) / 2);
    if (nums[mid] === target) {
      return mid;
    }
    if (nums[mid] > target) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return -1;
}
