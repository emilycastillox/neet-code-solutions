const maxProfit = (prices) => {
    let minPrice = prices[0];
    let maxProfit = 0;

    for (let i = 1; i < prices.length; i++) {
        let currentPrice = prices[i];
        let potentialProfit = currentPrice - minPrice;

        maxProfit = Math.max(maxProfit, potentialProfit);
        minPrice = Math.min(minPrice, currentPrice);
    }

    return maxProfit;
};