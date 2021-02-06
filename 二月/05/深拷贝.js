function clone(target, map = new Map()) {
  if (Object.prototype.toString.call(target) === "[object Object]") {
    let cloneTarget = Array.isArray(target) ? [] : {};
    //如果map里有

    if (map.get(target)) {
      return map.get(target);
    }
    //没有就存进去
    map.set(target, cloneTarget);
    for (const key in target) {
      if (target[key] instanceof RegExp) {
        cloneTarget[key] = new RegExp(clone(target[key], map));
      }
      cloneTarget[key] = clone(target[key], map);
    }
    return cloneTarget;
  } else {
    return target;
  }
}

const target = {
  field1: 1,
  field2: undefined,
  reg: /sf/,
  field3: {
    child: "child",
  },
  field4: [2, 4, 8],
  fn: function () {
    console.log(233);
  },
};

//循环引用
target.p = target;

const obj = clone(target);
obj.name = "丁时二";

console.log(obj, target);
