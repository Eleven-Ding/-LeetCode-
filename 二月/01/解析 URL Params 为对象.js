let url =
  "http://www.domain.com/?user=anonymous&id=123&id=456&id=789&city=自贡市";

function parseParam(url) {
  //先找到?
  let str = url.slice(url.indexOf("?") + 1);
  const result = {};
  const arr = str.split("&");
  for (let i = 0; i < arr.length; i++) {
    const [key, value] = arr[i].split("=");
    if (!result.hasOwnProperty(key)) {
      result[key] = value;
    } else {
      if (Array.isArray(result[key])) {
        result[key].push(value);
      } else {
        result[key] = [result[key], value];
      }
    }
  }
  console.log(result);

  ///对arr进行遍历
}

parseParam(url);
