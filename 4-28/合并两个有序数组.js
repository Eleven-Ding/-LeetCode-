
//合并两个有序数组

const arr1 = [1, 3, 5, 7, 9];
const arr2 = [2, 4, 6, 8, 10];

function combineArray(arr1, arr2) {
    let newArr = [];
    while (arr1.length && arr2.length) {
        if (arr1[0] < arr2[0]) {
            newArr.push(arr1.shift())
        } else {
            newArr.push(arr2.shift())
        }
    }
    if (arr1.length) {
        newArr.push(...arr1)
    }
    if (arr2.length) {
        newArr.push(...arr2)
    }
    return newArr
}

console.log(combineArray(arr1, arr2));


//引出归并排序

const arr = [1, 4, 42, 5, 6, 465, 7, 8, 9, 65, 78]
function mergeSort(arr) {
    if (arr.length === 1) {
        return arr
    }
    //对数组进行一个拆分
    let middle = parseInt(arr.length / 2)
    let left = arr.slice(0, middle)
    let right = arr.slice(middle)
    return combineArray(mergeSort(left), mergeSort(right))
}
console.log(mergeSort(arr));