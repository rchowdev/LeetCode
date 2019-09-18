/*
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  if (!root) {
    return [];
  }

  const res = [];
  const queue = [];

  queue.push(root);
  while (queue.length) {
    let queueSize = queue.length;
    const level = [];
    for (let i = 0; i < queueSize; i++) {
      let node = queue.shift();
      level.push(node.val);

      if (node.left) queue.push(node.left);

      if (node.right) queue.push(node.right);
    }
    res.push(level);
  }

  return res;
};
