/*
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const visitedDiff = {}
    for(let i = 0; i < nums.length; i++){
        if(visitedDiff[nums[i]] >= 0){
            return [visitedDiff[nums[i]],i]
        } else {
            visitedDiff[target - nums[i]] = i
        }
    }
};
