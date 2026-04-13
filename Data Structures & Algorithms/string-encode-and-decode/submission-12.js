class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let res = '';
        for (const e of strs) {
            res += e.length + '#' + e;
        }
        return res;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let i = 0, j = 0;
        const finalRes = [];

        while (i < str.length) {
            while (str[j] != '#') {
                j++;
            }
            const curWordLen = str.slice(i, j);
            i = j + 1;
            j = i + parseInt(curWordLen);

            finalRes.push(str.slice(i, j));
            i = j;
        }

        return finalRes;
    }
}
