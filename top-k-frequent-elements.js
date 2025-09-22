const topKFrequent = (nums, k) => {
        let map = new Map();

        for (let i = 0; i < nums.length; i++){
            map.set(nums[i], (map.get(nums[i]) || 0) + 1)
        }

        let sortedArray = Array.from(map.entries()).sort((a, b) => b[1] - a[1])
        return sortedArray.slice(0, k).map(entry => entry[0])
    }