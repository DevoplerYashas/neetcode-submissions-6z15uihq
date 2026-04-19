class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let l = 0, r = 1, maxProfit = 0;

        while (r < prices.length) {
            if (prices[l] < prices[r]) {
                let curProfit =  prices[r] - prices[l];
                maxProfit = maxProfit < curProfit ? curProfit : maxProfit;
            } else {
                l = r;
            }

            r++;
        }

        return maxProfit;
    }
}
