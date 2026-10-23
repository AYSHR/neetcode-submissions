class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encoded = '';

        for ( let str of strs ) {
            encoded += str.length + '#' + str;
        }

        return encoded;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let decoded = [];
        let i = 0;

        while ( i < str.length ) {
            let j = i;
            while ( str[j] !== '#' ) {
                j++;
            }

            const strLen = parseInt(str.substring(i, j));
            const res = str.substring(j+1, j+1+strLen);
            decoded.push(res);

            i = j + 1 + strLen;
        }
        return decoded;
    }
}
