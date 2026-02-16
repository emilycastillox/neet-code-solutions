const productExceptSelf = (nums) => {
        const n = nums.length;
        const res = new Array(n).fill(1);

        for (let i = 1; i < n; i++) {
            res[i] = res[i - 1] * nums[i - 1];
        }

        let postfix = 1;
        for (let i = n - 1; i >= 0; i--) {
            res[i] *= postfix;
            postfix *= nums[i];
        }
        return res;
        
    }


const hasDuplicate = (nums) => {
        const set = new Set();

        for (let i = 0; i < nums.length; i++){
            if (set.has(nums[i])){
                return true
            } set.add(nums[i])
        } 
        return false
    }

const  isAnagram = (s, t) => {  
    return s.split("").sort().join("") == t.split("").sort().join("")
    }

const twoSum = (nums, target) => {
        const prevMap = new Map();

        for (let i = 0; i < nums.length; i++) {
            const diff = target - nums[i];
            if (prevMap.has(diff)) {
                return [prevMap.get(diff), i];
            }

            prevMap.set(nums[i], i);
        }

        return [];
    }

const groupAnagrams = (strs) => {
        const res = {};
        for (let s of strs) {
            const count = new Array(26).fill(0);
            for (let c of s) {
                count[c.charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
            }
            const key = count.join(',');
            if (!res[key]) {
                res[key] = [];
            }
            res[key].push(s);
        }
        return Object.values(res);
    }

