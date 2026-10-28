class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix: number[][], target: number): boolean {
        for ( let i = 0; i < matrix.length; i++ ) {
            let left = 0;
            let right = matrix[0].length - 1;

            while ( left <= right ) {
                const mid = Math.floor((left + right) / 2);
                console.log(mid, matrix[i][mid]);

                if ( matrix[i][mid] === target ) {
                    return true;
                } else if ( matrix[i][mid] > target ) {
                    right = mid - 1;
                } else {
                    left = mid + 1;
                }
            } 
        }
        return false;
    }
}
