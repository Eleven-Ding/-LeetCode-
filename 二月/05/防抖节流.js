function debounce(fn, delay) {
  let timer = null;

  return function () {
    timer && clearTimeout(timer);

    timer = setTimeout(() => {
      fn.apply(this, arguments);
    }, delay);
  };
}

//节流
function throttle(fn, delay) {
  let flag = true;
  return function () {
    if (!flag) return;
    flag = false;
    setTimeout(() => {
      fn.apply(this, arguments);
      flag = true;
    }, delay);
  };
}

function throttle2(fn, delay) {
  let pre = Date.now();

  return function () {
    let now = Date.now();
    if (now - pre >= delay) {
      fn.apply(fn, arguments);
      pre = now;
    }
  };
}
