/*
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  const res = [];
  dfs([], 0);

  function dfs(currArr, index) {
    res.push(currArr);
    for (let i = index; i < nums.length; i++) {
      dfs(currArr.concat(nums[i]), i + 1);
    }
  }

  return res;
};
