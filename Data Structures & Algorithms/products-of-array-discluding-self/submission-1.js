class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const len = nums.length;
        const prefix = [1], suffix = new Array(len), res = [];

        suffix[len] = 1;

        for (let i = len; i >= 0; i--) {
            suffix[i - 1] = nums[i - 1] * suffix[i];
        }

        for (let i = 0; i < len; i++) {
            prefix[i + 1] = nums[i] * prefix[i];

            res[i] = prefix[i] * suffix[i+1];
        }

        return res;
    }
}
