// https://leetcode.com/problems/linked-list-cycle/
// Given the head of a Singly LinkedList, write a function to determine if the LinkedList has a cycle in it or not.
export default function detectCycle(head) {
  // edge case
  if (!head) return false;

  // two pointers
  let fast = head;
  let slow = head;

  // move fast pointer n steps ahead
  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;

    // cycle detected
    if (fast === slow) {
      return true;
    }
  }

  return false;
}
