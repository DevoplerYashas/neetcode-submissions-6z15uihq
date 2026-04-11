class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const res = [];
        
        nums.forEach(val => !res.includes(val) && res.push(val))

        return nums.length === res.length ? false : true;
    }
}
