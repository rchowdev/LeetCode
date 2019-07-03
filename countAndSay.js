/*
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    let sol = '1'
    for (let i = 1; i <= n; i++) {
        if (i === 1) {
            sol = '1'
        } else {
            sol = sol.match(/(\d)\1*/g).map(e => e.length + e[0]).join('')
        }
    }
    return sol
}
