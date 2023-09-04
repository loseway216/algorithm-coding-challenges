import ListNode from "../utils/ListNode";
import reverseBetween from "./reverseBetween";

describe("reverseBetween", () => {
  let head;
  beforeEach(() => {
    // [7, -9, 2, -10, 1, -8, 6];
    head = new ListNode(
      7,
      new ListNode(
        -9,
        new ListNode(
          2,
          new ListNode(-10, new ListNode(1, new ListNode(-8, new ListNode(6))))
        )
      )
    );
  });

  it("should return null if head is null", () => {
    expect(reverseBetween(null, 1, 2)).toEqual(null);
  });

  it("should return the head if m is 1 and n is 1", () => {
    const head = new ListNode(1);
    expect(reverseBetween(head, 1, 1)).toEqual(head);
  });

  it("should return the head if m is 2 and n is 3", () => {
    const reversed = new ListNode(
      7,
      new ListNode(
        2,
        new ListNode(
          -9,
          new ListNode(-10, new ListNode(1, new ListNode(-8, new ListNode(6))))
        )
      )
    );
    expect(reverseBetween(head, 2, 3)).toEqual(reversed);
  });

  it("should return the head if m is 2 and n is 7", () => {
    const reversed = new ListNode(
      7,
      new ListNode(
        6,
        new ListNode(
          -8,
          new ListNode(1, new ListNode(-10, new ListNode(2, new ListNode(-9))))
        )
      )
    );
    expect(reverseBetween(head, 2, 7)).toEqual(reversed);
  });
});
