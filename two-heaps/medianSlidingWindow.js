// https://leetcode.com/problems/sliding-window-median/
import Heap from "../utils/Heap";

export default function medianSlidingWindow(nums, k) {
  // edge case
  if (nums.length === 0 || k === 0) return [];

  let medians = [];

  let outgoingNum = {};

  let smallList = new Heap(Heap.minComparator);
  let largeList = new Heap(Heap.minComparator);

  for (let i = 0; i < k; i++) {
    smallList.push(-1 * nums[i]);
  }

  for (let i = 0; i < Math.floor(k / 2); i++) {
    largeList.push(-1 * smallList.pop());
  }

  let balance = 0;

  let i = k;
  while (true) {
    if ((k & 1) === 1) {
      medians.push(parseFloat(smallList.peek() * -1));
    } else {
      medians.push(
        (parseFloat(smallList.peek() * -1) + parseFloat(largeList.peek())) * 0.5
      );
    }

    if (i >= nums.length) break;

    const outNum = nums[i - k];

    const inNum = nums[i];
    i += 1;

    if (outNum <= smallList.peek() * -1) balance -= 1;
    else balance += 1;

    if (outNum in outgoingNum) outgoingNum[outNum] = outgoingNum[outNum] + 1;
    else outgoingNum[outNum] = 1;

    if (smallList.size > 0 && inNum <= smallList.peek() * -1) {
      balance += 1;
      smallList.push(inNum * -1);
    } else {
      balance -= 1;
      largeList.push(inNum);
    }

    if (balance < 0) {
      smallList.push(-1 * largeList.pop());
    } else if (balance > 0) {
      largeList.push(-1 * smallList.pop());
    }

    balance = 0;

    while (
      smallList.peek() * -1 in outgoingNum &&
      outgoingNum[smallList.peek() * -1] > 0
    ) {
      outgoingNum[smallList.peek() * -1] =
        outgoingNum[smallList.pop() * -1] - 1;
    }

    while (
      largeList.size > 0 &&
      largeList.peek() in outgoingNum &&
      outgoingNum[largeList.peek()] > 0
    ) {
      outgoingNum[largeList.peek()] = outgoingNum[largeList.pop()] - 1;
    }
  }
  return medians;
}
