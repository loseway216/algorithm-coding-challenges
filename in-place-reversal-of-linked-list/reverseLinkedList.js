// https://leetcode.com/problems/reverse-linked-list/
export default function reverseLinkedList(head) {
  // edge case
  if (head === null || head.next === null) return head;

  let current = head;
  let previous = null;
  let next = null;

  while (current !== null) {
    next = current.next;
    current.next = previous;
    previous = current;
    current = next;
  }

  return previous;
}
