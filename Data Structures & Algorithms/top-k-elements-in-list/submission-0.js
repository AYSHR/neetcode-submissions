class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const count = new Map();

        for ( let num of nums ) {
            if ( count.has(num) ) {
                count.set(num, count.get(num) + 1);
            } else {
                count.set(num, 1);
            }
        }

        console.log(count);

        return Array.from(count.entries())
                    .sort((a, b) => b[1] - a[1])
                    .map(entry => entry[0])
                    .slice(0, k);
    }
}
