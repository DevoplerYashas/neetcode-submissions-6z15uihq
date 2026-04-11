class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        const res = {};

        for (const i in numbers) {
            res[numbers[i]] = i;
        }

        for (let i = 0; i < numbers.length; i < i++) {
            let sum = target - numbers[i];

            if(res[sum] !== undefined && i !== res[sum]) {
                return [(i + 1), parseInt(res[sum]) + 1]
            }
        }
    }
}
