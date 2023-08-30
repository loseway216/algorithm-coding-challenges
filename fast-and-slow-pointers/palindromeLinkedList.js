// https://leetcode.com/problems/palindrome-linked-list/
// check if a linked list is a palindrome
export default function palindromeLinkedList(head) {
  // edge case
  if (!head || !head.next) {
    return false;
  }

  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  let reversed = reverse(slow);
  let original = head;

  while (reversed) {
    if (reversed.val !== original.val) {
      return false;
    }
    reversed = reversed.next;
    original = original.next;
  }

  return true;
}

function reverse(head) {
  let prev = null;
  let curr = head;
  let next = null;

  while (curr) {
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  return prev;
}
