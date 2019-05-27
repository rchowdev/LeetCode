/*
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    const original = mapStringToCharMap(s)
    const test = mapStringToCharMap(t)

    if(Object.keys(original).length !== Object.keys(test).length) {
        return false
    }

    for(let ch in original){
        if(original[ch] !== test[ch]){
            return false
        }
    }
    return true
};

function mapStringToCharMap(s){
    const charMap = {}
    for(let i = 0; i < s.length; i++) {
        charMap[s[i]] = (charMap[s[i]] || 0) + 1
    }
    return charMap
}
