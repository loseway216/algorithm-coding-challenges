// https://leetcode.com/problems/remove-nth-node-from-end-of-list/
export default function removeNthFromEnd(head, n) {
  // edge case
  if (!head) return null;

  // n = 0, return the list
  if (n === 0) return head;

  // two pointers
  let fast = head;
  let slow = head;

  // move fast pointer n steps ahead
  for (let i = 0; i < n; i++) {
    fast = fast.next;
  }

  // if fast is null, remove the head
  if (!fast) return head.next;

  // move both pointers until fast reaches the end
  while (fast.next) {
    fast = fast.next;
    slow = slow.next;
  }

  // remove the nth node
  slow.next = slow.next.next;

  return head;
}
