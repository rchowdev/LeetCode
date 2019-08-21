/*
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
  const numsFreq = {};

  for (let i = 0; i < nums.length; i++) {
    let number = nums[i];
    if (numsFreq[number]) {
      numsFreq[number]++;
    } else {
      numsFreq[number] = 1;
    }
  }

  const sortedKeys = Object.keys(numsFreq).sort(
    (a, b) => numsFreq[b] - numsFreq[a]
  );
  return sortedKeys.splice(0, k);
};
