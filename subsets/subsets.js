// https://leetcode.com/problems/subsets/
export default function subsets(nums) {
  // edge case
  if (!nums || !nums.length) return [];

  let result = [[]];

  for (let i = 0; i < nums.length; i++) {
    let size = result.length;
    for (let j = 0; j < size; j++) {
      let subset = result[j].slice();
      subset.push(nums[i]);
      result.push(subset);
    }
  }

  return result;
}
