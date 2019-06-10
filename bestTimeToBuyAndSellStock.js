/*
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    //Keep track of minimum value so far
    //Check if the profit is < current Profit
    let minVal = prices[0];
    let maximumProfit = 0;
    for(let i = 0; i < prices.length; i++) {
        minVal = Math.min(minVal, prices[i])
        maximumProfit = Math.max(maximumProfit, prices[i] - minVal)
    }

    return maximumProfit
};
