const characaterReplacement = (s, k) => {
    let map = new Map();
    let left = 0;
    let maxCount = 0;   // max frequency of a single char in the window
    let result = 0;

    for (let right = 0; right < s.length; right++) {
        let char = s[right];

        // update frequency of current char
        map.set(char, (map.get(char) || 0) + 1);
        maxCount = Math.max(maxCount, map.get(char));

        // if window is invalid, shrink from left
        while ((right - left + 1) - maxCount > k) {
            let leftChar = s[left];
            map.set(leftChar, map.get(leftChar) - 1);
            left++;
        }

        result = Math.max(result, right - left + 1);
    }

    return result;
};