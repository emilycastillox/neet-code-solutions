const preorderTraversal = (root) => {
   let result = [];

  function dfs(node) {
    if (!node) return;          // base case: stop if node is null
    result.push(node.val);      // 1️⃣ Visit the current node (root)
    dfs(node.left);             // 2️⃣ Recurse on left subtree
    dfs(node.right);            // 3️⃣ Recurse on right subtree
  }

  dfs(root);
  return result;
    }