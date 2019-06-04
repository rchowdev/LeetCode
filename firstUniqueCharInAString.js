/*
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    const charMap = {}

    for(let i = 0; i < s.length; i++){
        if(charMap[s[i]] >= 0){
            charMap[s[i]] = s.length + 1
        } else {
            charMap[s[i]] = i
        }
    }

    const sortedValues = Object.values(charMap).sort((a, b) => a - b )
    if(sortedValues[0] >= 0 && sortedValues[0] < s.length){
        return sortedValues[0]
    } else {
        return -1
    }

};
