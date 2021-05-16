//reduce的使用方法

Array.prototype.myReduce = function (reducer, initialState) {
    //取到array
    const arr = this
    //如果initialState存在的话 那么就从0开始 如果不存在那么就从1开始
    let value = typeof initialState === "undefined" ? arr[0] : initialState;
    let startIndex = typeof initialState === "undefined" ? 0 : 1
    //遍历
    for (let i = startIndex; i < arr.length; i++) {
        value = reducer(value, arr[i], i, arr)
    }
    return value
}
const arr = [1, 2, 3, 4, 5];

console.log(arr.myReduce((pre, now) => {
    return pre + now
}, 0));