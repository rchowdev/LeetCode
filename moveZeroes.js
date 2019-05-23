/*
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let zeroCount = 0;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] === 0){
            zeroCount++
        } else {
            nums[i - zeroCount] = nums[i]
        }
    }
    while(zeroCount > 0){
        nums[nums.length - zeroCount] = 0
        zeroCount--
    }
};
