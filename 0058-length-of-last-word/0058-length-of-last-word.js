/**
 * @param {string} s
 * @return {number}
 */
 let s="Hello World";

var lengthOfLastWord = function(s) {
    let count=0;
     s = s.trim();
    for(let i=s.length-1; i>=0; i--){
        if(s[i] == ' '){
            console.log("hello")
            break;
        }
        count=count+1;
    }
    return count;
};
let output=lengthOfLastWord(s)