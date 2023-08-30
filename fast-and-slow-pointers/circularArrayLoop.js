// https://leetcode.com/problems/circular-array-loop/
export default function circularArrayLoop(nums) {
  // edge case
  if (nums.length === 0) return false;

  for (let i = 0; i < nums.length; i++) {
    // skip elements that are already marked
    if (nums[i] === 0) continue;

    // two pointers
    let slow = i;
    let fast = i;

    // mark elements that are visited
    while (nums[slow] * nums[fast] > 0 && nums[fast] !== 0) {
      slow = getNextIndex(nums, slow);
      fast = getNextIndex(nums, fast);

      if (nums[fast] !== 0) {
        fast = getNextIndex(nums, fast);
      }

      if (slow === fast) {
        if (slow === getNextIndex(nums, slow)) break;
        return true;
      }
    }

    // unmark visited elements
    slow = i;
    while (nums[slow] * nums[getNextIndex(nums, slow)] > 0) {
      const next = getNextIndex(nums, slow);
      nums[slow] = 0;
      slow = next;
    }
  }

  return false;
}

function getNextIndex(nums, i) {
  const n = nums.length;
  return (((i + nums[i]) % n) + n) % n;
}
