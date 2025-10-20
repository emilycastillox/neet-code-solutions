// map version

const search = (nums, target) => {
  const map = new Map();

  // Store each number → its index
  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], i);
  }

  // Check if target exists
  return map.has(target) ? map.get(target) : -1;
}

// binary search version

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
    



