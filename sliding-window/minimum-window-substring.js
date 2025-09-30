const minWindow = (s, t) => {
 if (t.length > s.length) return "";

    let tMap = new Map();
    for (let char of t) {
        tMap.set(char, (tMap.get(char) || 0) + 1);
    }

    let windowMap = new Map();
    let have = 0, need = tMap.size;
    let left = 0;
    let res = [0, Infinity]; // [start, end]

    for (let right = 0; right < s.length; right++) {
        let char = s[right];

        if (tMap.has(char)) {
            windowMap.set(char, (windowMap.get(char) || 0) + 1);

            if (windowMap.get(char) === tMap.get(char)) {
                have++;
            }
        }

        // contract window until invalid
        while (have === need) {
            // update result
            if (right - left < res[1] - res[0]) {
                res = [left, right];
            }

            let leftChar = s[left];
            if (tMap.has(leftChar)) {
                windowMap.set(leftChar, windowMap.get(leftChar) - 1);
                if (windowMap.get(leftChar) < tMap.get(leftChar)) {
                    have--;
                }
            }
            left++;
        }
    }

    let [start, end] = res;
    return res[1] === Infinity ? "" : s.slice(start, end + 1);
};
