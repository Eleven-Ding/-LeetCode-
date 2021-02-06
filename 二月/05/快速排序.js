function quickSort(arr){
  if(arr.length==0){
      return arr
  }
  const middlePoint = Math.floor((arr.lenght)/2);
  const middle = arr.splice(middlePoint,1)[0]
  let left = [],right = [];
  
  for(let i=0;i<arr.length;i++){
      arr[i]>middle?right.push(arr[i]):left.push(arr[i]);
  }
  
  return [...quickSort(left),middle,...quickSort(right)]
};

let num  =  [1,2,5,2,3,5,6,7,96,2];
console.log(quickSort(num))