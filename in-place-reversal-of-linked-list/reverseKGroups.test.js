import ListNode from "../utils/ListNode";
import reverseKGroups from "./reverseKGroups";

describe("reverseKGroups", () => {
  let head;
  beforeEach(() => {
    head = new ListNode(
      1,
      new ListNode(
        2,
        new ListNode(
          3,
          new ListNode(4, new ListNode(5, new ListNode(6, new ListNode(7))))
        )
      )
    );
  });

  it("should return null for empty list", () => {
    expect(reverseKGroups(null, 1)).toBe(null);
  });

  it("should return the head of the reversed list in 2 group", () => {
    const reversed = new ListNode(
      2,
      new ListNode(
        1,
        new ListNode(
          4,
          new ListNode(3, new ListNode(6, new ListNode(5, new ListNode(7))))
        )
      )
    );

    expect(reverseKGroups(head, 2)).toEqual(reversed);
  });

  it("should return the head of the reversed list in 3 group", () => {
    const reversed = new ListNode(
      3,
      new ListNode(
        2,
        new ListNode(
          1,
          new ListNode(6, new ListNode(5, new ListNode(4, new ListNode(7))))
        )
      )
    );

    expect(reverseKGroups(head, 3)).toEqual(reversed);
  });
});
