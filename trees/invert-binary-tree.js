const invertTree = (root) => {
  if (!root) return null;        // base case: empty tree

  // swap left and right
  let temp = root.left;
  root.left = root.right;
  root.right = temp;

  // recursively invert subtrees
  invertTree(root.left);
  invertTree(root.right);

  return root;
};
