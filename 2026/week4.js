const maxProfit = (prices) => {
        let l = 0; // date we are buying on
        let r = 1; // sell date
        let maxProfit = 0; // profit = sell -  buy
        let minPrice = prices[l]; // the best price to buy 
        

        while (r < prices.length){
            if (prices[r] < minPrice){
                minPrice = prices[r]
            } else {
               let profit = prices[r] - minPrice 
               //find the best price to SELL at
                if (maxProfit < profit){
                    maxProfit = profit
                }
            }
            r++
            }
            return maxProfit;
        }
