// n 歌的数量   s每首歌的秒数   l一张cd的容量
// 每首歌间隔1秒  cd的数量不能被13整除
function compute(n, s, l) {
  var songNum =
    Math.floor((l + 1) / (s + 1)) > n ? n : Math.floor((l + 1) / (s + 1));
  if (songNum % 13 == 0) {
    songNum -= 1;
  }
  CDnum = Math.ceil(n / songNum);
  if (
    n % songNum != 0 &&
    (n % songNum) % 13 == 0 &&
    n % songNum == songNum - 1
  ) {
    CDnum += 1;
  }
  return CDnum;
}

console.log(compute(63, 1, 99))
