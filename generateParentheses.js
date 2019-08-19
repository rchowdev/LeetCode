/*
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  const res = [];
  generate(n, n, "");
  return res;

  function generate(left, right, str) {
    if (!left && !right && str.length) return res.push(str);
    if (left) generate(left - 1, right, str + "(");
    if (right > left) generate(left, right - 1, str + ")");
  }
};
