/*
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    return strs.length ? strs.reduce((acc, curr) => {
        let res = ""
        for(let i = 0; i < acc.length; i++) {
            if(acc[i] === curr[i]) {
                res += acc[i]
            } else {
                return res
            }
        }
        return res
    }) : ""
};
