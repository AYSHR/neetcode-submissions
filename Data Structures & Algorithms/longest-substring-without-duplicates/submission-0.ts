class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        let left = 0;
        let right = 0;
        let len = 0;
        let unique = new Set<string>();

        while ( right < s.length ) {
            if ( unique.has(s[right]) ) {
                unique.delete(s[left]);
                left++;
            } else {
                unique.add(s[right]);
                len = Math.max(len, right - left + 1);
                right++;
            }
        }
        return len;
    }
}