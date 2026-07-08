/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
  s = "anagram",
  t = "nagaram"
var isAnagram = function(s, t) {
    let stringFreq={}
    let count =0;
    
     if (s.length !== t.length) {
        return false;
    }

    for (ch of s ){
        stringFreq[ch] = (stringFreq[ch] || 0) + 1;
    }
    for(ch of t ){
        if(!stringFreq[ch]){
            return false;
        }
        else{
            stringFreq[ch]--;
        }
    }
    return true
};
let output =isAnagram(s,t)