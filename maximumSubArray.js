/*
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let currSum = 0
    let topSum = Number.NEGATIVE_INFINITY

    for(let i = 0; i < nums.length; i++) {
        currSum = Math.max(currSum, 0) + nums[i]
        topSum = Math.max(topSum, currSum)
    }
    return topSum
};
