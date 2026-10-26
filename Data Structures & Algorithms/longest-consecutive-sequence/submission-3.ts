class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        let maxCons = 0;
        let numSet = new Set(nums);

        for ( const num of nums ) {
            if ( !numSet.has(num - 1) ) {
                let curr = num;
                let cons = 1;

                while ( numSet.has(curr + 1) ) {
                    curr++;
                    cons++;
                }

                maxCons = Math.max(maxCons, cons);
            }
        }
        return maxCons;
    }
}
