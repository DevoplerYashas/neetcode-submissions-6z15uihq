class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        if (nums.length === 0) return [];
        const res = {};

        for (let i=0; i<nums.length; i++) {
            res[nums[i]] = (res[nums[i]] || 0) + 1;
        }

        const finalRes = Object.keys(res).map(val => [val, res[val]]).sort((a,b) => b[1] - a[1]);

        const topK = [];
        for (let i=0; i<k; i++) {
            topK.push(finalRes[i][0]);
        }
        return topK;
    }
}
