const maxDepth = (root) => {
  if (!root) return 0;                        // base case: empty tree = depth 0

  let leftDepth = maxDepth(root.left);        // depth of left subtree
  let rightDepth = maxDepth(root.right);      // depth of right subtree

  return Math.max(leftDepth, rightDepth) + 1; // +1 for current node
};
