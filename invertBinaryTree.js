/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
	if (!root) return null;
	if (root.left === null && root.right === null) return root;

	let temp = root.left;
	root.left = root.right;
	root.right = temp;

	invertTree(root.left);
	invertTree(root.right);

	return root;
};