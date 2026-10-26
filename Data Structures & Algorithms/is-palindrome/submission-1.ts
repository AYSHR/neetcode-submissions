class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        const len = s.length;
        let i = 0;
        let j = len - 1;

        s = s.toLowerCase();
        const isNotAlpha = (str) => !(/^[a-z0-9]+$/.test(str));

        while ( i < j ) {
            if ( isNotAlpha(s[i]) ) {
                i++;
                continue;
            } 

            if ( isNotAlpha(s[j]) ) {
                j--;
                continue;
            }

            if (s[i] !== s[j] ) {
                return false;
            }

                i++;
                j--;
        }

        return true;
    }
}
