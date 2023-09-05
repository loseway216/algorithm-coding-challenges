// https://leetcode.com/problems/ipo/
import Heap from "../utils/Heap";

export default function findMaximizedCapital(c, k, capitals, profits) {
  // edge case
  if (c === 0 || k === 0 || capitals.length === 0 || profits.length === 0)
    return 0;

  // two heaps
  const minCapitalHeap = new Heap(Heap.minComparator);
  const maxProfitHeap = new Heap(Heap.maxComparator);

  // push all projects to the minCapitalHeap
  for (let i = 0; i < capitals.length; i++) {
    minCapitalHeap.push([capitals[i], profits[i]]);
  }

  // find all projects that can be selected within the available capital
  let availableCapital = c;

  for (let i = 0; i < k; i++) {
    while (
      minCapitalHeap.size > 0 &&
      minCapitalHeap.peek()[0] <= availableCapital
    ) {
      maxProfitHeap.push(minCapitalHeap.pop());
    }

    // terminate if no project can be selected
    if (maxProfitHeap.size === 0) break;

    // select the project with the maximum profit
    availableCapital += maxProfitHeap.pop()[1];
  }

  return availableCapital;
}
