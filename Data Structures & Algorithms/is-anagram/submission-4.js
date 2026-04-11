class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) {
            return false;
        }

        const res = new Array(26).fill(0);

        for (let i=0; i < s.length; i++) {
            res[s.charCodeAt(i) - 97]++;
            res[t.charCodeAt(i) - 97]--;
        }

        return res.every(val => val === 0);
    }
}
