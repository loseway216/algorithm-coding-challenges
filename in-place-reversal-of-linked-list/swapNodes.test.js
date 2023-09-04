import ListNode from "../utils/ListNode";
import swapNodes from "./swapNodes";

describe("swap nodes in a linked list", () => {
  it("should return null if head is null", () => {
    expect(swapNodes(null, 1)).toEqual(null);
  });

  it("should return the head if head.next is null", () => {
    const head = new ListNode(1);
    expect(swapNodes(head, 1)).toEqual(head);
  });

  it("should return the swapped list", () => {
    const head = new ListNode(
      1,
      new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
    );
    const swapped = new ListNode(
      1,
      new ListNode(4, new ListNode(3, new ListNode(2, new ListNode(5))))
    );

    expect(swapNodes(head, 2)).toEqual(swapped);
  });
});
