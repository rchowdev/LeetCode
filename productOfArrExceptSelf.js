/*
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  const numsRight = [];
  nums.reduceRight((acc, curr, i) => {
    numsRight[i] = acc;
    return acc * curr;
  }, 1);

  nums.reduce((acc, curr, i) => {
    numsRight[i] *= acc;
    return acc * curr;
  }, 1);

  return numsRight;
};
