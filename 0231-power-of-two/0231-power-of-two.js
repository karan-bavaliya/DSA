let n = 16;

var isPowerOfTwo = function (n) {
    if (n <= 0) {
        return false;
    }
    let result = Math.log2(n);
    return Number.isInteger(result);
};

if (isPowerOfTwo(n)) {
    console.log("Success");
} else {
    console.log("False");
}