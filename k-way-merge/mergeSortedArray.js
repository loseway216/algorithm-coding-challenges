// https://leetcode.com/problems/merge-sorted-array/
export default function mergeSortedArray(nums1, m, nums2, n) {
  // edge case
  if (nums1 == null) return nums2;
  else if (nums2 == null) return nums1;
  else if (m === 0) return nums2;
  else if (n === 0) return nums1;

  let i = m - 1;
  let j = n - 1;
  let k = m + n - 1;

  // merge nums1 and nums2, starting from the last element
  while (i >= 0 && j >= 0) {
    if (nums1[i] > nums2[j]) {
      nums1[k--] = nums1[i--];
    } else {
      nums1[k--] = nums2[j--];
    }
  }

  // if there are still elements in nums2, add them to nums1
  while (j >= 0) {
    nums1[k--] = nums2[j--];
  }

  return nums1;
}
