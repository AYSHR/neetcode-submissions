class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        if ( !nums.length ) return 0;

        let cons = 1;
        nums.sort((a,b) => a - b);
        let curr = nums[0];
        let maxCons = 1;

        console.log(nums);

        for ( let i = 1; i < nums.length; i++ ) {
            if ( curr + 1 === nums[i] ) {
                cons++;
            } else if ( curr !== nums[i] ) {
                maxCons = Math.max(maxCons, cons);
                cons = 1;
            }
            
            curr = nums[i];
        } 

        return Math.max(maxCons, cons);
    }
}
