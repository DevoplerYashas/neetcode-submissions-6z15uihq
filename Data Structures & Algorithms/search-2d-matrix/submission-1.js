class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let l = 0, r = matrix.length - 1;

        while (l <= r) {
            const mid = l + Math.floor((r - l) / 2);

            let subL = 0, subR = matrix[mid].length - 1;
            const subArr = matrix[mid];

            if (target >= subArr[subL] && target <= subArr[subR]) {
                while (subL <= subR) {
                    const subMid = subL + Math.floor((subR - subL) / 2);

                    if (target === subArr[subMid]) {
                        return true;
                    } else if (target > subArr[subMid]) {
                        subL = subMid + 1;
                    } else {
                        subR = subMid - 1;
                    }
                }
                return false;
            } else if (target > subArr[subR]) {
                l = mid + 1;
            } else {
                r = mid - 1;
            }
        }
        return false;
    }
}
