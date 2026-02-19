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
