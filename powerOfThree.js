/*
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    // return n.toString(3).split("").reduce((total, curr) => Number(curr) + total, 0) === 1
    //Converts Number to string with base of 3: RegEx check to see if it begins with one and ends with any number of 0's
    return /^10*$/.test(n.toString(3));

};
