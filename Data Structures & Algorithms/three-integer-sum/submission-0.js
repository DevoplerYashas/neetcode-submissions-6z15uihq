class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
       // brute force
        // const res = [];
        // let tempArr = [];
        // let keyObj = {};

        // for (let i = 0; i < nums.length; i++) {
        //     for (let j = i + 1; j < nums.length; j++) {
        //         for (let k = j + 1; k < nums.length; k++) {
        //             if (nums[i] + nums[j] + nums[k] === 0) {
        //                 tempArr = [];
        //                 tempArr.push(nums[i]);
        //                 tempArr.push(nums[j]);
        //                 tempArr.push(nums[k]);
        //                 tempArr.sort();

        //                 const key = tempArr.join(",");

        //                 if(keyObj[key] === undefined) {
        //                     keyObj[key] = 0;
        //                     res.push([nums[i], nums[j], nums[k]])
        //                 }
        //             }
        //         } 
        //     } 
        // } 

        // return res;


        const res = [];
        nums.sort((a, b) => a - b);

        for (let i = 0; i < nums.length; i++) {
            if(i > 0 && nums[i - 1] === nums[i]) {
                continue;
            }
            let l = i + 1;
            let r = nums.length - 1;

            while(l < r) {
                const sum = nums[i] + nums[l] + nums[r];

                if(sum > 0) {
                    r--;
                } else if(sum < 0) {
                    l++;
                } else {
                    res.push([nums[i], nums[l], nums[r]])
                    l++;
                    r--;
                    while (nums[l] === nums[l - 1] && l < r) {
                        l++;
                    }
                    while (nums[r] === nums[r + 1] && l < r) {
                        r--;
                    }
                }
            }
        }
        return res;
    }
}
