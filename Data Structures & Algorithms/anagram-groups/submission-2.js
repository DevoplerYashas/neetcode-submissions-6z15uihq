class Solution {
    groupAnagrams(strs) {
        if(strs.length === 0)
            return [];

        const res = {};

        strs.forEach((val) => {
            const tempArr = new Array(26).fill(0);
            
            for (const ele of val){
                tempArr[ele.charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
            }
            
            const key = tempArr.join(",");
            if(res[key] === undefined){
                res[key] = [];
            }
            res[key].push(val);
        });

        return Object.values(res);
    }
}
