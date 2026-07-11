/**
 * @param {numsber[]} nums
 * @param {numsber} val
 * @return {numsber}
 */
 let nums=[3,2,2,3];
 let val =3;
var removeElement = function(nums, val) {
    let left =0;

    for(let right =0; right<nums.length; right++){
       if(nums[right] !== val){
          nums[left]=nums[right];
          left++
       }
    }
    return left;
};
let output =removeElement(nums,val)