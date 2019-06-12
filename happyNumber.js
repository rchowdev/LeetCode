/*
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    const seen = {}
    while(n !== 1 && !seen[n]){
        seen[n] = 1
        n = sumOfSquares(n)
    }

    return n === 1
};

function sumOfSquares(n){
    return (n + "").split('').reduce((total, curr) => {
        return Number(curr)**2 + total
    }, 0)
}
