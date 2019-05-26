/*
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const countMap = {}
    for(let i = 0; i < nums.length; i++){
        if(countMap[nums[i]]){
            countMap[nums[i]]++
        } else {
            countMap[nums[i]] = 1
        }
    }

    return (Object.keys(countMap).reduce((acc, curr) => {
        return countMap[acc] < countMap[curr] ? curr : acc
    }))
};
