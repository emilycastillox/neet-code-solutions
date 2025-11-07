const postorderTraversal = (root) => {
  let result = [];

  function dfs(node) {
    if (!node) return;          // base case: if null, stop
    dfs(node.left);             // 1️⃣ go left
    dfs(node.right);            // 2️⃣ go right
    result.push(node.val);      // 3️⃣ visit root
  }

  dfs(root);
  return result;
};
