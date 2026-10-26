class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {
        let valid = true;
        let row = Array.from({length: 9}, () => new Set());
        let col = Array.from({length: 9}, () => new Set());
        let boxes = Array.from({length: 9}, () => new Set());

        for ( let i = 0; i < 9; i++ ) {
            for ( let j = 0; j < 9; j++ ) {
                const current = board[i][j];

                if ( current === '.' ) continue;

                const boxIdx = Math.floor(i / 3) * 3 + Math.floor(j / 3);

                if ( row[i].has(current) || col[j].has(current) || 
                  boxes[boxIdx].has(current )) return false;

                 row[i].add(current); 
                 col[j].add(current); 
                 boxes[boxIdx].add(current); 
            }
        }

        return valid;
    }
}
