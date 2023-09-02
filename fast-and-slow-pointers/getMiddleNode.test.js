import ListNode from "../utils/ListNode";
import getMiddleNode from "./getMiddleNode";

describe("find the middle node of a linked list", () => {
  it("should return null for empty list", () => {
    expect(getMiddleNode(null)).toBe(null);
  });

  it("should return the middle node for odd length list", () => {
    const head = new ListNode(1);
    head.next = new ListNode(2);
    head.next.next = new ListNode(3);

    expect(getMiddleNode(head)).toEqual(head.next);
  });

  it("should return the middle node for even length list", () => {
    const head = new ListNode(1);
    head.next = new ListNode(2);
    head.next.next = new ListNode(3);
    head.next.next.next = new ListNode(4);

    expect(getMiddleNode(head)).toEqual(head.next.next);
  });
});
