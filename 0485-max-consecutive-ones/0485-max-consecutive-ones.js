/**
 * @param {number[]} nums
 * @return {number}
 */
let nums = [1, 1, 0, 1, 1, 1];

var findMaxConsecutiveOnes = function(nums) {
    let currentCount = 0;
    let maxCount = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            currentCount++;
        } else {
            currentCount = 0;
        }

        maxCount = Math.max(maxCount, currentCount);
    }

    return maxCount;
};

let output = findMaxConsecutiveOnes(nums);
console.log(output);