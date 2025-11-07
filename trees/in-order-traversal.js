const inorderTraversal = (root) => {
  let result = [];

  function dfs(node) {
    if (!node) return;          // base case: if node is null, stop
    dfs(node.left);             // 1️⃣ traverse the left subtree
    result.push(node.val);      // 2️⃣ visit the current node
    dfs(node.right);            // 3️⃣ traverse the right subtree
  }

  dfs(root);                    // start from the root
  return result;
};