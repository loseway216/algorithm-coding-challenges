// https://leetcode.com/problems/swapping-nodes-in-a-linked-list/
export default function swapNodes(head, k) {
  // edge case
  if (head === null || head.next === null) return head;

  let count = 0;
  let front = null;
  let end = null;
  let curr = head;

  while (curr != null) {
    count++;

    if (end != null) end = end.next;

    if (count == k) {
      front = curr;
      end = head;
    }

    curr = curr.next;
  }

  swap(front, end);

  return head;
}

function swap(node1, node2) {
  let temp = node1.val;
  node1.val = node2.val;
  node2.val = temp;
}
