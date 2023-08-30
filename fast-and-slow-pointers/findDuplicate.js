// https://leetcode.com/problems/find-the-duplicate-number/
export default function findDuplicate(nums) {
  // edge case
  if (nums.length === 0 || nums.length === 1) return -1;

  // two pointers
  let slow = nums[0];
  let fast = nums[0];

  // find the intersection point of the two runners
  do {
    slow = nums[slow];
    fast = nums[nums[fast]];
  } while (slow !== fast);

  // find the "entrance" to the cycle
  slow = nums[0];
  while (slow !== fast) {
    slow = nums[slow];
    fast = nums[fast];
  }

  return slow;
}
