// https://leetcode.com/problems/find-median-from-data-stream/
// The median is the middle value in an ordered integer list.
// If the size of the list is even, there is no middle value,
// and the median is the mean of the two middle values.

import Heap from "../utils/Heap";

export default class medianOfStream {
  constructor() {
    this.minHeap = new Heap(Heap.minComparator);
    this.maxHeap = new Heap(Heap.maxComparator);
  }

  insertNum(num) {
    if (this.maxHeap.peek() === null || num < this.maxHeap.peek()) {
      this.maxHeap.push(num);
    } else {
      this.minHeap.push(num);
    }

    if (this.maxHeap.size - this.minHeap.size > 1) {
      this.minHeap.push(this.maxHeap.pop());
    } else if (this.minHeap.size - this.maxHeap.size > 1) {
      this.maxHeap.push(this.minHeap.pop());
    }
  }

  findMedian() {
    if (this.maxHeap.size > this.minHeap.size) {
      return this.maxHeap.peek();
    } else if (this.maxHeap.size < this.minHeap.size) {
      return this.minHeap.peek();
    } else {
      return (this.maxHeap.peek() + this.minHeap.peek()) / 2;
    }
  }
}
