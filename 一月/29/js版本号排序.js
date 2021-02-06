//JS写版本号排序，

//如传入参数['1.5','2.0','1.7','1.1.5'] 返回 ['1.1.5','1.5','1.7','2.0']

function versionSort(versions) {
  let len = versions.length;
  let max = 0;
  for (let i = 0; i < len; i++) {
    versions[i] = versions[i].split(".").join("");
    if (versions[i].length > max) {
      max = versions[i].length;
    }
  }
  let i = 0;
  while (i < max - 1) {
    versions = versions.sort((a, b) => {
      return Number(a.slice(0, i + 1)) - Number(b.slice(0, i + 1));
    });
    // console.log(versions);
    i++;
  }
  console.log(
    versions.map((item) => {
      return item.split("").join(".");
    })
  );
}
const versions = ["1.5", "2.0", "1.7", "1.5.5"];

versionSort(versions);
