class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if(nums.length === 0){
        return 0;
    }
   
    nums = [...new Set(nums)];
    
    let cnt = 0; 
    let maxCnt = 1;
    let i = 0;

    for (let curVal of nums) {
        if (!nums.includes(curVal - 1)) {
            cnt = 1;

            while (nums.includes(curVal + cnt)) {
                cnt++;
            }

            if (cnt > maxCnt) {
                maxCnt = cnt;
            }
        }
    }
        
    return maxCnt;
    }
}
