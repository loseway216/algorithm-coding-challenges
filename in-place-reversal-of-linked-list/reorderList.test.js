import ListNode from "../utils/ListNode";
import reorder from "./reorderList";

describe("reorder a linked list", () => {
  it("should return null if head is null", () => {
    expect(reorder(null)).toEqual(null);
  });

  it("should return the head if head.next is null", () => {
    const head = new ListNode(1);
    expect(reorder(head)).toEqual(head);
  });

  it("should return the reordered list", () => {
    const head = new ListNode(
      1,
      new ListNode(2, new ListNode(3, new ListNode(4)))
    );
    const reversed = new ListNode(
      1,
      new ListNode(4, new ListNode(2, new ListNode(3)))
    );

    expect(reorder(head)).toEqual(reversed);
  });
});
