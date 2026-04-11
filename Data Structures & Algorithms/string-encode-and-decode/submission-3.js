class Solution {
    // encode(strs) {
    //     const res = [];
    //     for(let str of strs){
    //         let encodedStr = '';
    //         for (let char of str){
    //             const newChar = char.charCodeAt(0) + 1;
    //             encodedStr += String.fromCharCode(newChar);
    //         }
    //         res.push(encodedStr);
    //     }
    //     return res;
    // }

    encode(strs) {
        let res = "";
        for (let s of strs) {
            res += s.length + "#" + s;
        }
        return res;
    }

   
    // decode(str) {
    //     const res = [];
    //     for(let chars of str){
    //         let decodedStr = '';
    //         for (let char of chars){
    //             const newChar = char.charCodeAt(0) - 1;
    //             decodedStr += String.fromCharCode(newChar);
    //         }
    //         res.push(decodedStr);
    //     }
    //     return res;
    // }

    decode (str){
        const res = [];
        let i = 0;
        while(i < str.length){
            let j = i;
            while (str[j] !== "#"){
                j++;
            }

            const len = parseInt(str.substring(i, j));
            
            i = j + 1;
            j = i + len;
            res.push(str.substring(i, j));
            i = j;
        }
        return res;
    }
}
