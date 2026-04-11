class Solution {
    twoSum(nums, target) {
        const obj = {};

        nums.forEach((val, index) => {
            obj[val] = index;
        });

        // for (let i = 0; i < nums.length; i++) {
        //     let diff = target - nums[i];
        //     if (obj[diff] !== undefined && obj[diff] !== i) {
        //         return [i, obj[diff]];
        //     }
        // }

        return nums.map((val, index) => {
            const diff = target - val;

            if (obj[diff] !== undefined && obj[diff] !== index) {
                return [index, obj[diff]];
            }
        }).filter(result => result !== undefined)[0]; 

        return [];
    }
}
