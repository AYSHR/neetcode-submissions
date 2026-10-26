class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        const len = nums.length;
        const result = new Array(len).fill(1);

        for ( let i = 0; i < len - 1; i++ ) {
            result[i+1] = result[i] * nums[i];
            // 1, 1, 2, 8
        }

        let prod = 1;
        for ( let j = len - 2; j >= 0; j-- ) {
            prod *= nums[j+1];
            result[j] *= prod;
        }

        return result;
    }
}
