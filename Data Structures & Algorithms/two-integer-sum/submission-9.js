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
            const resIndex = indexObj[target - nums[i]];

            if(resIndex !== undefined && i !== resIndex){
                return [i, resIndex];
            }
            indexObj[nums[i]] = i;
        }
    }
}
