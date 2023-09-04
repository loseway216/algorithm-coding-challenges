import ListNode from "../utils/ListNode";
import reverseLinkedList from "./reverseLinkedList";

describe("reverse a linked list", () => {
  it("should return null for empty list", () => {
    expect(reverseLinkedList(null)).toBe(null);
  });

  it("should return the head of the reversed list", () => {
    const head = new ListNode(1, new ListNode(2, new ListNode(3)));
    const reversed = new ListNode(3, new ListNode(2, new ListNode(1)));

    expect(reverseLinkedList(head)).toEqual(reversed);
  });
});
