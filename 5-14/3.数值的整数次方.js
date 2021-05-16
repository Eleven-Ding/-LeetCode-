var myPow = function (x, n) {
    let reusult = 1.0
    if (n < 0) {
        x = 1 / x
        n = -n
    }
    while (n > 0) {
        if (n & 1) {
            reusult *= x
        }
        x *= x
        n = n >>> 1
    }
    return reusult
};