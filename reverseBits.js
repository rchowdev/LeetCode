/*
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    const numOfZeroes = 32 - n.toString(2).length;
    const zeroesStr = Array(numOfZeroes).fill(0).join("")
    return parseInt(reverseStr(n.toString(2)) + zeroesStr, 2)
};

const reverseStr = (str, numOfZeroes) => {
    let reverse = ""
    for(let ch of str) {
        reverse = ch + reverse
    }
    return reverse
}
