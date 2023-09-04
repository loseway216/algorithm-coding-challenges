import ListNode from "../utils/ListNode";
import reverseEvenLengthGroups from "./reverseEvenLengthGroups";

describe("reverseEvenLengthGroups", () => {
  it("should return null for empty list", () => {
    expect(reverseEvenLengthGroups(null)).toBe(null);
  });

  it("should return the head of the reversed list", () => {
    // [1, 1, 0 ,6] -> [1, 0, 1, 6]
    const head = new ListNode(
      1,
      new ListNode(1, new ListNode(0, new ListNode(6)))
    );
    const reversed = new ListNode(
      1,
      new ListNode(0, new ListNode(1, new ListNode(6)))
    );

    expect(reverseEvenLengthGroups(head)).toEqual(reversed);
  });

  it("should return the head of the reversed list", () => {
    // [1,1,0,6,5] -> [1,0,1,5,6]
    const head = new ListNode(
      1,
      new ListNode(1, new ListNode(0, new ListNode(6, new ListNode(5))))
    );
    const reversed = new ListNode(
      1,
      new ListNode(0, new ListNode(1, new ListNode(5, new ListNode(6))))
    );

    expect(reverseEvenLengthGroups(head)).toEqual(reversed);
  });

  it("should return the head of the reversed list", () => {
    // [5,2,6,3,9,1,7,3,8,4] -> [5,6,2,3,9,1,4,8,3,7]
    const head = new ListNode(
      5,
      new ListNode(
        2,
        new ListNode(
          6,
          new ListNode(
            3,
            new ListNode(
              9,
              new ListNode(
                1,
                new ListNode(
                  7,
                  new ListNode(3, new ListNode(8, new ListNode(4)))
                )
              )
            )
          )
        )
      )
    );
    const reversed = new ListNode(
      5,
      new ListNode(
        6,
        new ListNode(
          2,
          new ListNode(
            3,
            new ListNode(
              9,
              new ListNode(
                1,
                new ListNode(
                  4,
                  new ListNode(8, new ListNode(3, new ListNode(7)))
                )
              )
            )
          )
        )
      )
    );
    expect(reverseEvenLengthGroups(head)).toEqual(reversed);
  });
});
