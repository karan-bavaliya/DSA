/**
 * @param {number} x
 * @return {number}
 */
 let num =123;
var reverse = function(x) {
    let rev=0;
    let sign;
    if(x<0){
     sign = -1;
    }
    else{
      sign =1;
    }
    x = Math.abs(x);
   while(x>0){
    let rem = x%10;
    rev = (rev * 10)+ rem;
    x = Math.floor(x/10);
   }
  rev = rev * sign;

if (rev < -(2 ** 31) || rev > (2 ** 31) - 1) {
    return 0;
}

return rev;
   
};
console.log(reverse(num)); 