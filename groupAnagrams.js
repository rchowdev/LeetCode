/*
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  const strsMap = {};

  for (let s of strs) {
    const key = [...s].sort().join("");

    if (strsMap[key]) {
      strsMap[key].push(s);
    } else {
      strsMap[key] = [s];
    }
  }
  return Object.values(strsMap);
};
