function parseToMoney(num) {
  //先找到.的为止
  let str = String(num);
  const index = str.indexOf(".");
  let front = "";
  let end = "";
  if (index != -1) {
    end = str.slice(index);
    front = front = str.slice(0, index);
  } else {
    front = str;
  }
  let temp = "";
  let result = [];

  for (let i = front.length - 1; i >= 0; i--) {
    temp = front[i] + temp;

    if (temp.length == 3) {
      result.unshift(temp);
      temp = "";
    }
  }
  if (temp != "") {
    result.unshift(temp);
  }
  console.log(result.join(",") + end);
}

parseToMoney(1234.56); // return '1,234.56'
parseToMoney(123456789); // return '123,456,789'
parseToMoney(1087654.321); // return '1,087,654.321'
