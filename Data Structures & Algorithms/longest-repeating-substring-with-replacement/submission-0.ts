class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s: string, k: number): number {
        let count = new Array(26).fill(0);
        let l = 0;
        let res = 0;
        let maxF = 0;

        for ( let r = 0; r < s.length; r++ ) {
            const idx = s.charCodeAt(r) - 65;
            count[idx]++;
            maxF = Math.max(maxF,count[idx]);

            while ( ( r - l + 1 ) - maxF > k ) {
                const prevIdx = s.charCodeAt(l) - 65;
                count[prevIdx] = count[prevIdx] - 1;
                l++;
            }
            res = Math.max(res, ( r - l + 1));
        }

        return res;
    }
}
