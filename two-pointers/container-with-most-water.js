const maxArea = (heights) => {
    let left = 0, right = heights.length - 1;
    let max = 0;

    while (left < right) {
        let minHeight = Math.min(heights[left], heights[right]);
        let width = right - left;
        max = Math.max(max, minHeight * width);

        // Move the pointer with smaller height
        if (heights[left] < heights[right]) {
            left++;
        } else {
            right--;
        }
    }
    return max;
    }