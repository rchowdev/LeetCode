/*
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  const res = [];
  permutations([], nums);
  return res;

  function permutations(curr, tail) {
    if (!tail.length) {
      res.push(curr);
    } else {
      for (let i = 0; i < tail.length; i++) {
        curr.push(tail[i]);
        permutations([...curr], tail.slice(0, i).concat(tail.slice(i + 1)));
        curr.pop();
      }
    }
  }
};
