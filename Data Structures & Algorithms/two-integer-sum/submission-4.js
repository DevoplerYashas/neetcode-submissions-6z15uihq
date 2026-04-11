class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        if (nums.length === 0) return false;

        const indexObj = {};
        const res = [];

        for(let i=0; i<nums.length; i++) {
            indexObj[nums[i]] = i;
        }

        for (let i=0; i < nums.length; i++) {
            const resIndex = indexObj[target - nums[i]];

            if(resIndex !== undefined && i !== resIndex){
                res.push([i, resIndex]);

                break;
            }
        }

        return res[0];
    }
}
