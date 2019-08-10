/*
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if(!needle || needle === haystack) return 0;
    for(let i = 0; i < haystack.length; i++){
        if(haystack[i] === needle[0]){
            const subStr = haystack.substring(i, i + needle.length)
            if(subStr === needle) return i
        }
    }
    return -1
};
