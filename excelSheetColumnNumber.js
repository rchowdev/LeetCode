/*
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
    const alphaMap = alphabetMap()
    let total = 0

   for(let i = 0; i < s.length; i++){
      total += (Math.pow(26, (s.length - i - 1)) * (alphaMap[s[i]]))
   }
    return total
};

function alphabetMap() {
    const ALPHA = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const alphaMap = {}
    for(let i = 0; i < ALPHA.length; i++){
        alphaMap[ALPHA[i]] = i + 1
    }
    return alphaMap
}
