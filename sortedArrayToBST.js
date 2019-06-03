/*
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {

    return treeHelper(nums, 0, nums.length - 1)
};

function treeHelper(nums, left, right){
    if(left > right){
        return null
    }

    let midIndex = Math.floor((left+right) /2)
    const root = new TreeNode(nums[midIndex])

    root.left = treeHelper(nums, left, midIndex - 1)
    root.right = treeHelper(nums, midIndex + 1, right)

    return root
}
