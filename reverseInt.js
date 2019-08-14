/*
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  let revNum = 0;
  const sign = x < 0;
  x = Math.abs(x);
  while (x) {
    revNum = revNum * 10 + (x % 10);
    x = Math.floor(x / 10);
  }
  return revNum > 0x7fffffff ? 0 : sign ? -revNum : revNum;
};
