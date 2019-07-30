/*
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if(!s) return true
    const stack = []
    for(let ch of s){
        switch(ch){
            case '(':
                stack.push(')')
                break
            case '[':
                stack.push(']')
                break
            case '{':
                stack.push('}')
                break
            default:
                if(stack.pop() !== ch) return false
        }
    }
    return !stack.length
};
