class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        if (heights.length === 0) return 0;
        let max = 0, l = 0, r = heights.length - 1;

        while (l <  r) {
            let area = Math.min(heights[l], heights[r]) * (r - l);

            max = area > max ? area : max;

            if (heights[l] <= heights[r]) {
                l++;
            } else {
                r--;
            }
        }

        return max;
    }
}
