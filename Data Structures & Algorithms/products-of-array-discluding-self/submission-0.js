class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const len = nums.length;
        const res = [1];

        for(let i = 0; i < len-1; i++){
            res[i+1] = res[i] * nums[i];
        }

        let sufix = 1;
        for(let i = len-1; i >= 0; i--){
            res[i] *= sufix;
            sufix *= nums[i];
        }

        return res;
    }
}
