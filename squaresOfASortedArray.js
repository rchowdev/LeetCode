/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function(A) {
    const res = [];
    let l = 0, r = A.length - 1;
    
    while(l <= r) {
        if(Math.abs(A[l]) > A[r]) {
            res.unshift(Math.pow(A[l], 2));
            l++;
        } else {
            res.unshift(Math.pow(A[r], 2));
            r--;
        }
    }
    
    return res;
};