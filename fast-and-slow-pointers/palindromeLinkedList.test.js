import ListNode from "../utils/ListNode";
import palindromeLinkedList from "./palindromeLinkedList";

describe("palindromeLinkedList", () => {
  it("should return true for a palindrome linked list", () => {
    const head = new ListNode(1);
    head.next = new ListNode(2);
    head.next.next = new ListNode(2);
    head.next.next.next = new ListNode(1);

    expect(palindromeLinkedList(head)).toBe(true);
  });

  it("should return false for a non-palindrome linked list", () => {
    const head = new ListNode(1);
    head.next = new ListNode(2);
    head.next.next = new ListNode(3);

    expect(palindromeLinkedList(head)).toBe(false);
  });
});
