// https://leetcode.com/problems/reverse-nodes-in-k-group/
import ListNode from "../utils/ListNode";

export default function reverseKGroups(head, k) {
  // edge case
  if (head === null || head.next === null) return head;

  let dummy = new ListNode(0, head);
  let groupPrev = dummy;
  let groupNext = null;
  let kth = null;

  while (true) {
    kth = getKth(groupPrev, k);
    if (kth === null) break;
    groupNext = kth.next;

    // reverse the k nodes between groupPrev and groupNext
    let prev = kth.next;
    let curr = groupPrev.next;
    let temp = null;
    while (curr != groupNext) {
      temp = curr.next;
      curr.next = prev;
      prev = curr;
      curr = temp;
    }

    temp = groupPrev.next;
    groupPrev.next = kth;
    groupPrev = temp;
  }

  return dummy.next;
}

function getKth(curr, k) {
  while (curr !== null && k > 0) {
    curr = curr.next;
    k--;
  }
  return curr;
}
