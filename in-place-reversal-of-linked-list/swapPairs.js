// https://leetcode.com/problems/swap-nodes-in-pairs/
import ListNode from "../utils/ListNode";

export default function swapPairs(head) {
  // edge case
  if (head === null || head.next === null) return head;

  let dummy = new ListNode(0, head);
  let prev = dummy;
  let curr = head;
  let next = null;

  while (curr !== null && curr.next !== null) {
    next = curr.next.next;
    prev.next = curr.next;
    curr.next.next = curr;
    curr.next = next;

    prev = curr;
    curr = next;
  }

  return dummy.next;
}
