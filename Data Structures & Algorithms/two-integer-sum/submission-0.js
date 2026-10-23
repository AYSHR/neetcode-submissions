class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const unique = new Map();

        for ( let i = 0; i < nums.length; i++ ) {
            const complement = target - nums[i];

            if ( unique.has(complement) ) {
                return [unique.get(complement), i];
            } else {
                unique.set(nums[i], i);
            }
            
        }

        return [];
    }
}
