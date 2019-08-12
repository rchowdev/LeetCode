/*
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    if(!s) return true
    s = s.replace(/\W/g, '').toLowerCase()
    const reverse = reverseStr(s);
    return reverse === s
};

function reverseStr(s) {
    let rev = ""
    for(let ch of s){
        rev = ch + rev
    }
    return rev
}
