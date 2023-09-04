import ListNode from "../utils/ListNode";
import swapPairs from "./swapPairs";

describe("swap every two adjacent nodes and return its head", () => {
  it("should return null if head is null", () => {
    expect(swapPairs(null)).toEqual(null);
  });

  it("should return the head if head.next is null", () => {
    const head = new ListNode(1);
    expect(swapPairs(head)).toEqual(head);
  });

  it("should return the swapped list", () => {
    const head = new ListNode(
      1,
      new ListNode(2, new ListNode(3, new ListNode(4)))
    );
    const swapped = new ListNode(
      2,
      new ListNode(1, new ListNode(4, new ListNode(3)))
    );

    expect(swapPairs(head)).toEqual(swapped);
  });
});
