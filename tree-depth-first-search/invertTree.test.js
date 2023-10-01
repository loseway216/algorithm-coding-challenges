import TreeNode from "../utils/TreeNode";
import invertTree from "./invertTree";

describe("invertTree", () => {
  it("should return the root of the inverted tree", () => {
    const root = new TreeNode(
      4,
      new TreeNode(2, new TreeNode(1), new TreeNode(3)),
      new TreeNode(7, new TreeNode(6), new TreeNode(9))
    );

    const inverted = new TreeNode(
      4,
      new TreeNode(7, new TreeNode(9), new TreeNode(6)),
      new TreeNode(2, new TreeNode(3), new TreeNode(1))
    );

    expect(invertTree(root)).toEqual(inverted);
  });
});
