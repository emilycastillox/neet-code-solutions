// map based version

const findMin = (nums) => {
  const map = new Map();

  // store index → value
  for (let i = 0; i < nums.length; i++) {
    map.set(i, nums[i]);
  }

  // find minimum by iterating the map values
  let min = Infinity;
  for (let value of map.values()) {
    if (value < min) min = value;
  }

  return min;
}

// binary search version

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
