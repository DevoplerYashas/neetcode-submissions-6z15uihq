class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        const arrLen = nums.length;
        if(arrLen === 0){
            return -1;
        }
        
        for(let i=0; i<arrLen; i++){
            if(nums[i] === target){
                return i;
            }
        }

        return -1;
    }
}
