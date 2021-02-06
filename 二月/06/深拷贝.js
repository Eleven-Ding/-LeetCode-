function clone(obj, map = new WeakMap()) {
  if (Object.prototype.toString.call(obj) === "[object Object]") {
    if (map.get(obj)) {
      return map.get(obj);
    }
    let cloneObj = Array.isArray(obj) ? [] : {};
    map.set(obj, cloneObj);
    const keys = Object.keys(obj);
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      cloneObj[key] = clone(obj[key], map);
    }
    return cloneObj;
  } else {
    return obj;
  }
}

const obj = {
  name: "丁时一",
};

obj.a = obj;
const target = clone(obj);
target.name = "丁时二";
console.log(target, obj);
