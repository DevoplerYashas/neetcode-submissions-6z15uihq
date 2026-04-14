class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let set = new Set(nums);
        let max = 0;

        for (let num of nums) {
            let cur = num;
            let len = 0;
            while (set.has(cur)) {
                cur++;
                len++;
            }
            max = len > max ? len : max;
        }

        return max;
    }
}
