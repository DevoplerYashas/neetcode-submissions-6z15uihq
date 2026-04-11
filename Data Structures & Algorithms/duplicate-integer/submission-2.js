class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        // Inefficient for large arrays. O(n²)
        // const res = [];
        // nums.forEach(val => !res.includes(val) && res.push(val))
        // return nums.length === res.length ? false : true;

        // Works well for small-to-medium arrays. O(n)
        // return new Set(nums).size < nums.length; 

        // works well for Large arrays where duplicates
        // are likely near the start. O(n)
        const resSet = new Set();

        for (const val of nums) {
            if(resSet.has(val)) {
                return true;
            }
            resSet.add(val);
        }

        return false;
    }
}
