class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const unique = new Map();

        for ( let str of strs ) {
            const sorted = str.split('').sort().join('');
            let current = [ str ]

            if ( unique.has(sorted) ) {
                current = [ str, ...unique.get(sorted) ];
            }
            
            unique.set(sorted, current);
        }

        return Array.from(unique.values());  
    }
}
