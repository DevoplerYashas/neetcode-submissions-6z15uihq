class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */

    //dont' use this method as array.includes take O(n2) to find 
    // in the array values

    // longestConsecutive(nums) {
    //     if(nums.length === 0){
    //         return 0;
    //     }
    
    //     nums = [...new Set(nums)];
        
    //     let cnt = 0; 
    //     let maxCnt = 1;
    //     let i = 0;

    //     for (let curVal of nums) {
    //         if (!nums.includes(curVal - 1)) {
    //             cnt = 1;

    //             while (nums.includes(curVal + cnt)) {
    //                 cnt++;
    //             }

    //             if (cnt > maxCnt) {
    //                 maxCnt = cnt;
    //             }
    //         }
    //     }
            
    //     return maxCnt;
    // }

    longestConsecutive(nums) {
        if (nums.length === 0) {
            return 0;
        }

        let cnt = 0;
        let maxCnt = 0;
        const numSet = new Set(nums);

        for (let num of numSet) {
            if(!numSet.has(num - 1)) {
                cnt = 1;

                while (numSet.has(num + cnt)) {
                    cnt++;
                }

                if(cnt > maxCnt) {
                    maxCnt = cnt;
                }
            }
        }

        return maxCnt;
    }
}
