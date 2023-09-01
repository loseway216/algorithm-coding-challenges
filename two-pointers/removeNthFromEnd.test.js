import ListNode from "../utils/ListNode";
import removeNthFromEnd from "./removeNthFromEnd";

describe("removeNthFromEnd", () => {
  it("should return null for empty list", () => {
    expect(removeNthFromEnd(null, 1)).toBe(null);
  });

  it("should return the list for n = 0", () => {
    const head = new ListNode(1, new ListNode(2, new ListNode(3)));
    expect(removeNthFromEnd(head, 0)).toBe(head);
  });

  it("should remove the head for n = 1", () => {
    const head = new ListNode(1, new ListNode(2, new ListNode(3)));
    expect(removeNthFromEnd(head, 1)).toEqual(new ListNode(1, new ListNode(2)));
  });

  it("should remove the nth node from the end", () => {
    const head = new ListNode(
      1,
      new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
    );
    expect(removeNthFromEnd(head, 2)).toEqual(
      new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(5))))
    );
  });
});
