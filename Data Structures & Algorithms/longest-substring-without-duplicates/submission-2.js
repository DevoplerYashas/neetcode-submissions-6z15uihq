class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let res = 0,
        l = 0,
        r = 0;
        const uniqueSubStr = new Set();

        for (let r = 0; r < s.length; r++) {
            while(uniqueSubStr.has(s[r])) {
                uniqueSubStr.delete(s[l]);
                l++;
            }
            uniqueSubStr.add(s[r]);
            res = Math.max(res, (r - l + 1));
        }
        return res;
    }
}
