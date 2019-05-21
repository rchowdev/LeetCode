/*
 * @param {string} S
 * @return {string}
 */
var removeDuplicates = function(S) {
    const resArr = []
    for(let i = 0; i < S.length; i++){
        resArr[resArr.length - 1] === S[i] ?
            resArr.pop()
            : resArr.push(S[i])
    }
    return resArr.join('')
};
