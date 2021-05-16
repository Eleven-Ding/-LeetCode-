/**
 * @param {number} n
 * @return {number}
 */
var cuttingRope = function (n) {
    if (n <= 2) {
        return 1
    }
    //  
    let max = 0
    for (let i = 2; i < n; i++) {
        let value = n / i;
        if (value === parseInt(value)) {
            max = Math.max(Math.pow(value, i), max)
            console.log(Math.pow(value, i));
        } else {
            let value1
            const x = parseInt(value) + 1;
            const count = parseInt(n / x);
            const yu = n - count * x;
            if (x - yu > 1) {
                value1 = Math.pow(x, count - 1) * (yu + 1) * (x - 1)
            } else {
                value1 = Math.pow(x, count) * yu
            }
            max = Math.max(value, max)
        }
    }
    return max
};
