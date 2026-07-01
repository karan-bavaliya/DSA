/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let sum=0;
    for(let i=0; i<nums.length; i++){
      sum = sum ^ nums[i];
    }
    return sum;
};
let nums=[2,2,1]
let output= singleNumber(nums)