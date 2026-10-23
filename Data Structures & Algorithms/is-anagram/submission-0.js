class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const len = s.length;

        if ( len !== t.length ) return false;

        const count = new Array(26).fill(0);

        for ( let i = 0; i < len; i++ ) {
            count[s.charCodeAt(i) - 97]++;
            count[t.charCodeAt(i) - 97]--;
        }

        return !count.find(c => c !== 0);
    }
}
