const isPalindrome = (s) => {
       let updatedString = s.toLowerCase().replace(/[^a-z0-9]/g, '')
        let end = updatedString.length - 1;
       
       for (let i = 0; i < updatedString.length; i++){
         let endPointer = end - i
         if (updatedString[i] !== updatedString[endPointer]){
            return false
         } 
       }
       return true
    }

const twoSumTwo = (numbers, target) => {
     let l = 0
     let r = numbers.length - 1

     while (l < r) {
        let sum = numbers[l] + numbers[r]
        if (sum === target){
            return [l + 1, r + 1]
        } else if (sum < target){
            l++
        } else {
            r--
        }
     }

    }

const maxArea = (heights) => {
        let l = 0;
        let r = heights.length - 1;
        let max = 0

        while (l < r) {
           let lowest
            if (heights[l] > heights[r]) {
                 lowest = heights[r]
            } else {
                lowest = heights[l]
            }
            if (lowest * (r - l) > max) {
                max = lowest * (r - l)
                console.log(max)
            }
            if (heights[l] > heights[r]) {
                r--
            } else {
                l++
            }
        }
        return max
    }


const trap = (height) => {
    let left = 0, right = height.length - 1;
    let leftMax = 0, rightMax = 0;
    let water = 0;

    while (left < right) {
        if (height[left] < height[right]) {
            if (height[left] >= leftMax) {
                leftMax = height[left];
            } else {
                water += leftMax - height[left];
            }
            left++;
        } else {
            if (height[right] >= rightMax) {
                rightMax = height[right];
            } else {
                water += rightMax - height[right];
            }
            right--;
        }
    }

    return water;
}


const threeSum = (nums) => {
        nums.sort((a, b) => a - b);
        const res = [];

        for (let i = 0; i < nums.length; i++) {
            if (nums[i] > 0) break;
            if (i > 0 && nums[i] === nums[i - 1]) continue;

            let l = i + 1;
            let r = nums.length - 1;
            while (l < r) {
                const sum = nums[i] + nums[l] + nums[r];
                if (sum > 0) {
                    r--;
                } else if (sum < 0) {
                    l++;
                } else {
                    res.push([nums[i], nums[l], nums[r]]);
                    l++;
                    r--;
                    while (l < r && nums[l] === nums[l - 1]) {
                        l++;
                    }
                }
            }
        }
        return res;
    }