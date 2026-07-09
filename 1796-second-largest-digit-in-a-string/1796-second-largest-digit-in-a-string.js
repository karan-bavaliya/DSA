/**
 * @param {string} s
 * @return {number}
 */
var secondHighest = function(s) {
    let largest = -1;
    let secondLargest = -1;

    for (let char of s) {
        if (char >= '0' && char <= '9') {
            let num = Number(char);

            if (num > largest) {
                secondLargest = largest;
                largest = num;
            } 
            else if (num < largest && num > secondLargest) {
                secondLargest = num;
            }
        }
    }

    return secondLargest;
};