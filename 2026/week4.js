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

        const lengthOfLongestSubstring = (s) => {
        let existingCharacters = new Set();
        let l = 0
        let maxLength = 0

        for (let r = 0; r < s.length; r++){
            while (existingCharacters.has(s[r])){
                existingCharacters.delete(s[l]);
                l++;
            }
            existingCharacters.add(s[r]);
            maxLength = Math.max(maxLength, r - l + 1);
        }
       return maxLength;
    }

    const characterReplacement = (s, k) => {
        let maxLength = 0
        let count = new Map();
        
        let l = 0,  
            maxf = 0;
        for (let r = 0; r < s.length; r++){
            count.set(s[r], (count.get(s[r]) || 0) + 1)

            maxf = Math.max(maxf, count.get(s[r]));

            while (r - l + 1 - maxf > k){
                count.set(s[l], count.get(s[l]) - 1);
                l++;
            }
            maxLength = Math.max(maxLength, r - l + 1);
    }
    return maxLength;
}

