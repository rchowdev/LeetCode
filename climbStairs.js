/*
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    const staircase = []
    staircase[1] = 1
    staircase[2] = 2
    for(let i = 3; i < n+1; i++) {
        staircase[i] = staircase[i-1] + staircase[i-2]
    }

    console.log(staircase)
    return staircase[n]
};
