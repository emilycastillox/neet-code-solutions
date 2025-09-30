const checkInclusion = (s1, s2) => {
     if (s1.length > s2.length) return false;

    let s1Map = new Map();
    let windowMap = new Map();

    // build frequency map for s1
    for (let char of s1) {
        s1Map.set(char, (s1Map.get(char) || 0) + 1);
    }

    let left = 0;
    for (let right = 0; right < s2.length; right++) {
        let char = s2[right];
        windowMap.set(char, (windowMap.get(char) || 0) + 1);

        // shrink window if it's larger than s1
        if (right - left + 1 > s1.length) {
            let leftChar = s2[left];
            windowMap.set(leftChar, windowMap.get(leftChar) - 1);
            if (windowMap.get(leftChar) === 0) {
                windowMap.delete(leftChar);
            }
            left++;
        }

        // compare maps when window size matches
        if (right - left + 1 === s1.length && mapsAreEqual(s1Map, windowMap)) {
            return true;
        }
    }

    return false;
};

// helper to compare two maps
const mapsAreEqual = (map1, map2) => {
    if (map1.size !== map2.size) return false;
    for (let [key, val] of map1) {
        if (map2.get(key) !== val) return false;
    }
    return true;
}