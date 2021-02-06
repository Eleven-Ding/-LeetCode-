const p1 = new Promise((_) => {
  setTimeout(() => {
    _("promise1");
  }, 2000);
});

const p2 = new Promise((_) => {
  _("promise2");
});

// All([p1, p2]).then((res) => {
//   console.log(res);
// });
function All(promises) {
  const len = promises.length;
  const arr = new Array(len);
  let j = 0;
  return new Promise((resolve) => {
    for (let i = 0; i < len; i++) {
      promises[i].then((res) => {
        j++;
        arr[i] = res;
        if (j == len) {
          resolve(arr);
        }
      });
    }
  });
}

function Race(promises) {
  const len = promises.length;
  return new Promise((resolve) => {
    for (let i = 0; i < len; i++) {
      promises[i].then((res) => {
        resolve(res);
      });
    }
  });
}
Race([p1, p2]).then((res) => {
  console.log(res);
});
