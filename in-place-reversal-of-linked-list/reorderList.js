// https://leetcode.com/problems/reorder-list/
export default function reorder(head) {
  // edge case
  if (head === null || head.next === null) return head;

  // find the middle of the list
  let slow = head;
  let fast = head;
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // reverse the second half of the list
  let prev = null;
  let curr = slow;
  let temp = null;
  while (curr !== null) {
    temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }

  // merge the two lists
  let first = head;
  let second = prev;
  while (second.next !== null) {
    temp = first.next;
    first.next = second;
    first = temp;

    temp = second.next;
    second.next = first;
    second = temp;
  }

  return head;
}
