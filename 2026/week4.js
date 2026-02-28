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

const minWindow = (s, t) => {
 if (t.length > s.length) return "";

    let tMap = new Map();
    for (let char of t) {
        tMap.set(char, (tMap.get(char) || 0) + 1);
    }

    let windowMap = new Map();
    let have = 0, need = tMap.size;
    let left = 0;
    let res = [0, Infinity]; // [start, end]

    for (let right = 0; right < s.length; right++) {
        let char = s[right];

        if (tMap.has(char)) {
            windowMap.set(char, (windowMap.get(char) || 0) + 1);

            if (windowMap.get(char) === tMap.get(char)) {
                have++;
            }
        }

        // contract window until invalid
        while (have === need) {
            // update result
            if (right - left < res[1] - res[0]) {
                res = [left, right];
            }

            let leftChar = s[left];
            if (tMap.has(leftChar)) {
                windowMap.set(leftChar, windowMap.get(leftChar) - 1);
                if (windowMap.get(leftChar) < tMap.get(leftChar)) {
                    have--;
                }
            }
            left++;
        }
    }

    let [start, end] = res;
    return res[1] === Infinity ? "" : s.slice(start, end + 1);
};


const checkInclusion = (s1, s2) => {
     if (s1.length > s2.length) return false;

    let s1Map = new Map();
    let windowMap = new Map();

    // build frequency map for s1
    for (let char of s1) {
        s1Map.set(char, (s1Map.get(char) || 0) + 1);
    }

    let left = 0;
    for (let right = 0; right < s2.length; right++) {
        let char = s2[right];
        windowMap.set(char, (windowMap.get(char) || 0) + 1);

        // shrink window if it's larger than s1
        if (right - left + 1 > s1.length) {
            let leftChar = s2[left];
            windowMap.set(leftChar, windowMap.get(leftChar) - 1);
            if (windowMap.get(leftChar) === 0) {
                windowMap.delete(leftChar);
            }
            left++;
        }

        // compare maps when window size matches
        if (right - left + 1 === s1.length && mapsAreEqual(s1Map, windowMap)) {
            return true;
        }
    }

    return false;
};

// helper to compare two maps
const mapsAreEqual = (map1, map2) => {
    if (map1.size !== map2.size) return false;
    for (let [key, val] of map1) {
        if (map2.get(key) !== val) return false;
    }
    return true;
}