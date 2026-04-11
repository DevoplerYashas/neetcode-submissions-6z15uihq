class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;

        const res = {};
        for(let i=0; i < s.length; i++) {
            res[s[i]] = (res[s[i]] || 0) + 1;
            res[t[i]] = (res[t[i]] || 0) - 1;
        }

        return Object.values(res).every(val => val === 0);
    }
}