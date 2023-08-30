// https://leetcode.com/problems/middle-of-the-linked-list/
export default function getMiddleNode(head) {
  // edge case
  if (!head) return null;

  // two pointers
  let fast = head;
  let slow = head;

  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
  }

  return slow;
}
