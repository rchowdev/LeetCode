/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(matrix, k) {
  return matrix.reduce((acc, row) => acc.concat(row).sort((a, b) => a - b), [])[
    k - 1
  ];
};
