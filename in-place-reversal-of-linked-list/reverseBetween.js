// https://leetcode.com/problems/reverse-linked-list-ii/
export default function reverseBetween(head, m, n) {
  // edge case
  if (!head) return null;

  let prev = null;
  let curr = head;

  // move curr to the m-th node
  while (m > 1) {
    prev = curr;
    curr = curr.next;
    m--;
    n--;
  }

  // save prev and tail for later
  let tail = curr;
  let con = prev;

  // reverse the nodes between m and n
  while (n > 0) {
    let next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
    n--;
  }

  // connect the head and tail
  if (con) con.next = prev;
  else head = prev;
  tail.next = curr;

  return head;
}
