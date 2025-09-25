const twoSum = (numbers, target) => {
        let map = new Map();

        for (let i = 0; i < numbers.length; i++) {
        let complement = target - numbers[i];

        if (map.has(complement)) {
            return [map.get(complement) + 1, i + 1];
        }

        map.set(numbers[i], i);
        }
    }