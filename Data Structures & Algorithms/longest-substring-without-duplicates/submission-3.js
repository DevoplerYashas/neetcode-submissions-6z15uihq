class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let l = 0, r = 0, maxLen = 0; 
        const subStr = new Set();

        while (r < s.length) {
            while(subStr.has(s[r])) {
                subStr.delete(s[l]);
                l++;
            }
            subStr.add(s[r]);

            r++;
            maxLen = Math.max(maxLen, subStr.size);
        }

        return maxLen;
    }
}
