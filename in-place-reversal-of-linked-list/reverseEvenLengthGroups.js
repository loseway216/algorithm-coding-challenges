// https://leetcode.com/problems/reverse-nodes-in-even-length-groups/
export default function reverseEvenLengthGroups(head) {
  // edge case
  if (head === null || head.next === null) return head;

  let prev = head;
  let groupLen = 2;

  while (prev.next != null) {
    let node = prev,
      numNodes = 0;
    for (let i = 0; i < groupLen; i++) {
      if (node.next == null) break;
      numNodes++;
      node = node.next;
    }
    if (numNodes % 2) prev = node;
    else {
      let reverse = node.next;
      let curr = prev.next,
        currNext;

      for (let j = 0; j < numNodes; j++) {
        currNext = curr.next;
        curr.next = reverse;
        reverse = curr;
        curr = currNext;
      }

      let prevNext = prev.next;
      prev.next = node;
      prev = prevNext;
    }
    groupLen++;
  }

  return head;
}
