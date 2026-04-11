class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const sqr = {};
        for(let r = 0; r < 9; r++){
            let col = new Set();
            let row = new Set();

            for(let c = 0; c < 9; c++){
                let curRow = board[r][c];
                let curCol = board[c][r];
                if(!sqr[`${Math.floor(r/3)}, ${Math.floor(c/3)}`]){
                    sqr[`${Math.floor(r/3)}, ${Math.floor(c/3)}`] = new Set();
                }
                const curSqr = sqr[`${Math.floor(r/3)}, ${Math.floor(c/3)}`]; 

                if(curRow !== "."){
                    if(row.has(curRow)){
                        return false;
                    } else {
                        row.add(curRow);
                    }

                    if(curSqr.has(curRow)){
                        return false;
                    } else {
                        curSqr.add(curRow);
                    }
                }

                if(curCol !== "."){
                    if(col.has(curCol)){
                        return false;
                    } else {
                        col.add(curCol);
                    }
                } 
            }
        }
        return true;
    }
}
