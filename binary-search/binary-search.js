// Map Based approach

const binarySearchWithMap = (nums, target) => {
  const map = new Map();

  // store value → index pairs
  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], i);
  }

  // lookup directly
  return map.has(target) ? map.get(target) : -1;
}

// Standard Binary Search approach

const binarySearch = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}