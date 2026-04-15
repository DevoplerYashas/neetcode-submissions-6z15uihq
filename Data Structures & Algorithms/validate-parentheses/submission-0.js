class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const op = new Set(['(', '{', '[']);
        const cp = {
            ')' : '(',
            '}' : '{',
            ']' : '[',
        }

        const stack = [];

        for (const ele of s) {
            if (op.has(ele)) {
                stack.push(ele);
            } else {
                if (cp[ele] === stack[stack.length - 1]) {
                    stack.pop();
                } else {
                    return false;
                }
            }
        }

        return stack.length === 0 ? true : false;
    }
}
