class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        if(!nums.length){
            return [];
        }

        const res = {};

        for(const val of nums) {
           if(!res[val]){
            res[val] = 0;
           } 
           res[val] += 1;
        }

        const resArr = [];
        for(const key in res) {
            resArr.push([res[key],key]);
        }
        resArr.sort((a,b) => b[0] - a[0]);

        return resArr.filter((val, key) => key < k).map(val => val[1]);
    }
}
