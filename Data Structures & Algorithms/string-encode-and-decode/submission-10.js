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
        let i = 0;
        const finalRes = [];

        while (i < str.length) {
            let j = i;
            while (str[j] != '#') {
                j++;
            }
            const curWordLen = parseInt(str.slice(i, j));
            i = j + 1;
            j = i + parseInt(curWordLen);

            finalRes.push(str.slice(i, j));
            i = j;
        }

        return finalRes;
    }
}
