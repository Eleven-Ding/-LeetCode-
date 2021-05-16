function quickSort(arr) {
    if (arr.length === 0) {
        return []
    }


    let middlePoint = arr.length / 2;
    const middle  = arr.splice(middlePoint,1)[0]
    let left = [];
    let right = [];
    for(let i=0;i<arr.length;i++){
        arr[i] < middle ? left.push(arr[i]) : right.push(arr[i]);
    }
    return [...quickSort(left),middle,...quickSort(right)]
}

console.log(quickSort([5,6,32,3,6,8,9,3]));