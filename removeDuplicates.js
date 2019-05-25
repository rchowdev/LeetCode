/*
 * @param {string} S
 * @return {string}
 */
const removeDuplicates = (S) => {
    const resArr = []
    for(let ch of S) {
        resArr[resArr.length - 1] === ch ? resArr.pop() : resArr.push(ch)
    }
    return resArr.join('')
};
