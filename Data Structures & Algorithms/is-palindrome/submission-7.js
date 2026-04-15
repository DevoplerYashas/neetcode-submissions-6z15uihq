class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isAlphaNumeric(val) {
        let RegEx = /^[a-zA-Z0-9]+$/i; 
        return RegEx.test(val);
    }

    isPalindrome(s) {
        if (s.length === 0) return false;

        let i = 0, j = s.length - 1;

        while (i <= j) {
            while (i < j && !this.isAlphaNumeric(s[i])) {
                i++;
            }

            while (j > i && !this.isAlphaNumeric(s[j])) {
                j--;
            }

            if (s[i].toLowerCase() != s[j].toLowerCase()) {
                return false;
            }
            i++;
            j--;
        }

        return true;
    }
}
