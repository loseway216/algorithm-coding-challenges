// LeetCode 15 Sum of Three Values
export default function threeSum(nums) {
  // edge case
  if (nums.length < 3) return [];

  // sort the array
  nums.sort((a, b) => a - b);

  const triplets = [];

  for (let i = 0; i < nums.length; i++) {
    // skip duplicates
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    // two pointers
    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      if (sum === 0) {
        triplets.push([nums[i], nums[left], nums[right]]);
        left++;
        right--;

        // skip duplicates
        while (left < right && nums[left] === nums[left - 1]) left++;
        while (left < right && nums[right] === nums[right + 1]) right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }

  return triplets;
}
