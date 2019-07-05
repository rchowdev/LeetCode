/*
 * @param {number} n
 * @return {number}
 */
const trailingZeroes = n => {
    let res = 0;
    for (let i = 5; n >= i; i *= 5) {
       res += n / i | 0;
    }
    return res;
};
