/**
 * @param {number} x
 * @return {boolean}
 */
 let x=121
  

var isPalindrome = function(x) {
      if (x < 0) {
        return false;
    }
    let num=x;
    let sum =0;
    while(x>0){
         let rem = x%10;
         sum = (sum*10)+rem;
         x = Math.floor(x / 10);
    }
    if(num == sum){
        return true;
    }
    else{
        return false;
    }
};
if(isPalindrome(x)){
    console.log("it is palindrome")
}
else{
    console.log("it is not palindrome")
}