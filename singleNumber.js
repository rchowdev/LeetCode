/*
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
   return nums.reduce((total, curr) => total ^ curr, 0)
};
