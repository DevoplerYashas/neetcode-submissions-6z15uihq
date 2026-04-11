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
            if(res[s[i]] !== undefined) {
                res[s[i]] = res[s[i]] + 1;
            } else {
                res[s[i]] = 1;
            }
 
            if(res[t[i]] !== undefined) {
                res[t[i]] = res[t[i]] - 1;
            } else {
                res[t[i]] = -1;
            }
        }
        console.log('res=', res);
        return Object.values(res).filter(val => val !== 0).length === 0 ? true : false;;
    }
}
