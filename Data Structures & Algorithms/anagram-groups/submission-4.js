class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        if (strs.length === 0) return [];
        const wordGrp = {};
        
        strs.forEach(word => {
            const sorted = word.split('').sort().join('');

            if(wordGrp[sorted] !== undefined) {
                wordGrp[sorted].push(word);
            } else {
                wordGrp[sorted] = [word];
            }
        })

        return Object.values(wordGrp);
    }
}
