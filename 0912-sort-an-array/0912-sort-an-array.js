/**
 * @param {number[]} nums
 * @return {number[]}
 */

function merge(left, right) {
    let result = [];
    let i = 0;
    let j = 0;

    // Compare both arrays
    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }

    // Add remaining elements from left
    while (i < left.length) {
        result.push(left[i]);
        i++;
    }

    // Add remaining elements from right
    while (j < right.length) {
        result.push(right[j]);
        j++;
    }

    return result;
}

function sortArray(nums) {
    // Base case
    if (nums.length <= 1) {
        return nums;
    }

    // Find middle
    let middle = Math.floor(nums.length / 2);

    // Divide
    let left = nums.slice(0, middle);
    let right = nums.slice(middle);

    // Recursively sort both halves
    let sortedLeft = sortArray(left);
    let sortedRight = sortArray(right);

    // Merge
    return merge(sortedLeft, sortedRight);
}

// Test
let nums = [3, 5, 1, 2];

let output = sortArray(nums);

console.log(output);