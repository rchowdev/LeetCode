/*
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @param {number[]} D
 * @return {number}
 */
var fourSumCount = function(A, B, C, D) {
  const map = {};

  for (let i = 0; i < C.length; i++) {
    for (let j = 0; j < D.length; j++) {
      const sum = C[i] + D[j];
      map[sum] = map[sum] + 1 || 1;
    }
  }

  let counter = 0;

  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < B.length; j++) {
      const sum = A[i] + B[j];
      counter += map[-1 * sum] || 0;
    }
  }

  return counter;
};
