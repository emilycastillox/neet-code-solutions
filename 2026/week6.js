const binarySearchWithMap = (nums, target) => {
  const map = new Map();

  // store value → index pairs
  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], i);
  }

  // lookup directly
  return map.has(target) ? map.get(target) : -1;
}

const binarySearchMinEatingSpeed = (piles, h) =>{
        let l = 1;
        let r = Math.max(...piles);
        let res = r;

        while (l <= r) {
            const k = Math.floor((l + r) / 2);

            let totalTime = 0;
            for (const p of piles) {
                totalTime += Math.ceil(p / k);
            }
            if (totalTime <= h) {
                res = k;
                r = k - 1;
            } else {
                l = k + 1;
            }
        }
        return res;
    }

const binarySearchFindMin = (nums) => {
        let l = 0;
        let r = nums.length - 1;

        while (l < r) {
            const m = Math.floor((l + r) / 2);

            if (nums[m] > nums[r]) {
                l = m + 1;
            }
            else {
                r = m;
            }
        }
        return nums[l];
    }

const binarySearchMatrix = (matrix, target) => {
        const ROWS = matrix.length;
        const COLS = matrix[0].length;

        let top = 0;
        let bot = ROWS - 1;
        while (top <= bot) {
            const row = Math.floor((top + bot) / 2);
            if (target > matrix[row][COLS - 1]) {
                top = row + 1;
            } else if (target < matrix[row][0]) {
                bot = row - 1;
            } else {
                break;
            }
        }

        if (!(top <= bot)) {
            return false;
        }
        const row = Math.floor((top + bot) / 2);
        let l = 0;
        let r = COLS - 1;
        while (l <= r) {
            const m = Math.floor((l + r) / 2);
            if (target > matrix[row][m]) {
                l = m + 1;
            } else if (target < matrix[row][m]) {
                r = m - 1;
            } else {
                return true;
            }
        }
        return false;
    }

const binarySearch = (nums, target) => {
        let left = 0;
        let right = nums.length - 1;
        
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            if (nums[mid] === target) {
                return mid;
            }

            // Determine which side is properly sorted
            if (nums[left] <= nums[mid]) {
                // Left side is sorted
                if (target >= nums[left] && target < nums[mid]) {
                    right = mid - 1; // Target is in the left side
                } else {
                    left = mid + 1; // Target is in the right side
                }
            }else {
                // Right side is sorted
                if (target > nums[mid] && target <= nums[right]) {
                    left = mid + 1; // Target is in the right side
                } else {
                    right = mid - 1; // Target is in the left side
                } 
            }
        }
        return -1;
    }
    