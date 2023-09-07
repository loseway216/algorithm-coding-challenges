// https://leetcode.com/problems/kth-largest-element-in-an-array/
import Heap from "../utils/Heap";

// Time Complexity: O(N log K)
// Space Complexity: O(K)
export default function findKthLargest(nums, k) {
  if (!nums || !nums.length) return null;
  if (nums.length === 1) return nums[0];

  const minHeap = new Heap(Heap.minComparator);

  for (let i = 0; i < nums.length; i++) {
    minHeap.push(nums[i]);
    if (minHeap.size > k) minHeap.pop();
  }

  return minHeap.peek();
}
