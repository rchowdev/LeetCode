/*
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
   return n.toString(2).split("").reduce((total, curr) => total + Number(curr), 0)
};
