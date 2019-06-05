/*
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
//     const numsPair = {}

//     for(let i = 0; i < nums.length; i++){
//         if(numsPair[nums[i]] >= 0 || nums[i] * 2 === nums.length) {
//             delete numsPair[nums[i]]
//         } else {
//             numsPair[nums.length - nums[i]] = nums[i]
//         }
//     }

//     return Object.keys(numsPair)[0] || nums.length / 2

    return (nums.length + 1) / 2 * nums.length - nums.reduce((total, curr) => total + curr)
}
