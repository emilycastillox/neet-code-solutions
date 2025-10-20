// map based memoization approach

function minEatingSpeed(piles, h) {
  const memo = new Map();

  // helper to calculate total hours at a given speed
  function hoursNeeded(speed) {
    if (memo.has(speed)) return memo.get(speed);

    let hours = 0;
    for (let pile of piles) {
      hours += Math.ceil(pile / speed);
    }

    memo.set(speed, hours);
    return hours;
  }

  let left = 1;
  let right = Math.max(...piles);
  let result = right;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const hours = hoursNeeded(mid);

    if (hours <= h) {
      result = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return result;
}

// standard binary search approach

const binarySearchMinEatingSpeed = (piles, h) =>{
        let l = 1;
        let r = Math.max(...piles);
        let res = r;

        while (l <= r) {
            const k = Math.floor((l + r) / 2);

            let totalTime = 0;
            for (const p of piles) {
                totalTime += Math.ceil(p / k);
            }
            if (totalTime <= h) {
                res = k;
                r = k - 1;
            } else {
                l = k + 1;
            }
        }
        return res;
    }