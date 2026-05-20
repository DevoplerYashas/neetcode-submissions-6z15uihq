class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let res = 0;
        const uniquChars = new Set(s);

        for (let char of uniquChars) {
            let maxFreq = 0, l = 0;
            for (let r = 0; r < s.length; r++) {
                if (s[r] === char) {
                    maxFreq++;
                }

                while (r - l + 1 - maxFreq > k) {
                    if (s[l] === char) {
                        maxFreq--;
                    }
                    l++;
                }

                res = Math.max(res, r - l + 1);
            }
        }
        return res;
    }
}
