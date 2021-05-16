//JSON.stringify() 方法将一个 JavaScript 对象或值转换为 JSON 字符串，
//如果指定了一个 replacer 函数，则可以选择性地替换值，或者指定的 replacer 是数组，则可选择性地仅包含数组指定的属性。


//如果是undefined Symbol function 是会被忽略的
function stringify(obj) {
    //对obj进行判断
    const typeObj = typeof obj;
    if (typeObj === "undefined" || typeObj === "function" || typeObj === "symbol") {
        return ""
    }
    if (typeObj !== "object") {
        //如果是string 那么就返回string
        if (typeObj === "number") {
            return `${obj}`
        }
        if (typeObj === "string") {
            return `'${obj}'`
        }
    } else {
        let json = [];

        let arr = Array.isArray(obj)
        //如果obj是object了
        for (let key in obj) {
            let value = obj[key];
            value = stringify(value);
            if (value) {
                //这个是取项里面的值
                json.push((arr ? "" : '"' + key + '":') + String(value));
            }
        }
        return (arr ? "[" : "{") + String(json) + (arr ? "]" : "}");
    }
}
console.log(stringify({ a: 1, name: '233', arr: [1, 2, 3, 4, 5, { name: 233 }, undefined] }));