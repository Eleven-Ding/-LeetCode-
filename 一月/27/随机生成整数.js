//2.请写出一个可以生成整型随机数数组（内部元素不重复）的函数，
//并可以根据参数设置随机数生成的范围和数量。例如：函数

//从m 到  n的 长度未count的随机整数数组
function RandomArray(m, n, count) {
  let set = new Set();
  if (n - m < count) {
    return new Error("错误");
  }
  let i = 0;
  while (i < count) {
    //(Math.floor 0 ~ 1)
    const counter = parseInt(Math.random() * (n - m) - m);
    if (!set.has(counter)) {
      set.add(counter);
      i++;
    }
  }
  return [...set];
}
console.log(RandomArray(0, 200, 100));
