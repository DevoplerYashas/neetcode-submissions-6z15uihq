class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        if (nums.length === 0) return false;

        const indexObj = {};

        for (let i=0; i < nums.length; i++) {
            const res = target - nums[i];

            if(indexObj[res] !== undefined && i !== indexObj[res]){
                return [i, indexObj[res]];
            }
            indexObj[nums[i]] = i;
        }
    }
}
