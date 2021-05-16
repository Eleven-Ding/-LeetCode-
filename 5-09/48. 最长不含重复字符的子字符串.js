/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function (s) {
    if (s.length === 0) {
        return 0
    }
    let stack = [];
    let max = 0;
    for (let i = 0; i < s.length; i++) {
        const index = stack.indexOf(s[i]);
        stack.push(s[i])
        if (index !== -1) {
            stack = stack.slice(index+1)
        }
        max = Math.max(max, stack.length);
    }
    return max
};