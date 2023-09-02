import ListNode from "../utils/ListNode";
import detectCycle from "./detectCycle";

describe("detect cycle in a linked list", () => {
  it("should return false for empty list", () => {
    expect(detectCycle(null)).toBe(false);
  });

  it("should return false for list with one node", () => {
    const head = new ListNode(1);
    expect(detectCycle(head)).toBe(false);
  });

  it("should return true for list with a cycle", () => {
    const head = new ListNode(1);
    head.next = new ListNode(2);
    head.next.next = head;
    expect(detectCycle(head)).toBe(true);
  });
});
