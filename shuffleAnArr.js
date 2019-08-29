/*
 * @param {number[]} nums
 */
var Solution = function(nums) {
  this.original = nums;
};

/*
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function() {
  return this.original;
};

/*
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
  const shuffled = [...this.original];
  const n = this.original.length;
  for (let i = 0; i < n; i++) {
    const j = Math.floor(n * Math.random());
    const tmp = shuffled[i];
    shuffled[i] = shuffled[j];
    shuffled[j] = tmp;
  }
  return shuffled;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */
