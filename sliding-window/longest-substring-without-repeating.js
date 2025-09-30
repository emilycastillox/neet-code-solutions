const lengthOfLongestSubstring = (s) => {
    let map = new Map(); // character -> index
    let maxLength = 0;
    let start = 0; // left boundary of the window

    for (let i = 0; i < s.length; i++) {
        let char = s[i];

        // If char is in map and inside the current window
        if (map.has(char) && map.get(char) >= start) {
            start = map.get(char) + 1; // move start to the right of last seen char
        }

        map.set(char, i); // update latest index of char
        maxLength = Math.max(maxLength, i - start + 1);
    }

    return maxLength;
};