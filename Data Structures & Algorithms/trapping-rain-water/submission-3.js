class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        if (!height || height.length === 0) {
            return 0;
        }

        let l = 0, 
        r = height.length - 1,
        maxL = height[l],
        maxR = height[r],
        area = 0;

        while (l < r) {
            if(height[l] < height[r]){
                l++;
                maxL = Math.max(height[l], maxL);
                area += maxL - height[l];
            } else {
                r--;
                maxR = Math.max(height[r], maxR);
                area += maxR - height[r];
            }
        }

        return area;
    }
}
