// https://leetcode.com/problems/reverse-linked-list/
export default function reverseLinkedListIterative(head) {
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

export function reverseLinkedListRecursive(head) {
  // edge case
  if (head === null || head.next === null) return head;

  const reversedList = reverseLinkedListRecursive(head.next);
  head.next.next = head;
  head.next = null;
  return reversedList;
}
