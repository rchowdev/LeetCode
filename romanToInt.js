/*
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
   const R_N = {
       "I": 1,
       "V": 5,
       "X": 10,
       "L": 50,
       "C": 100,
       "D": 500,
       "M": 1000,
       "IV": 4,
       "IX": 9,
       "XL": 40,
       "XC": 90,
       "CD": 400,
       "CM": 900
   }
   let total = 0
   for(let i = 0; i < s.length; i++) {
       if(R_N[s.slice(i, i+2)]) {
            total += R_N[s.slice(i, i+2)];
            i++;
       } else {
            total += R_N[s[i]]
       }
   }
    return total
};
