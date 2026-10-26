class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        let i = 0;
        let j = heights.length - 1;
        let maxCap = 0;

        while ( i < j ) {
            let curr = ( j - i ) * Math.min(heights[j], heights[i]);
            maxCap = Math.max(curr, maxCap);
            ( heights[i] <= heights[j] ) ? i++ : j--;
        }
        return maxCap;
    }
}
