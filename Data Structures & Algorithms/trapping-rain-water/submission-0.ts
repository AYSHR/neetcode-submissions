class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height: number[]): number {
        let cap = 0;
        let left = 0;
        let right = height.length - 1;
        let leftMax = 0;
        let rightMax = 0;

        while ( left < right ) {
            if ( height[left] <= height[right] ) {
                if ( leftMax <= height[left] ) {
                    leftMax = height[left];
                } else {
                    cap += leftMax - height[left];
                }

                left++;
            } else {
                ( rightMax <= height[right] ) 
                    ? rightMax = height[right]
                    : cap += rightMax - height[right];

                right--;
            }
        }
        return cap;
    }
}
