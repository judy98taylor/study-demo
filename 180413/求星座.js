let obj = {
  '白羊': [3.21, 4.19],
  '金牛': [4.20, 5.20],
  '双子': [5.21, 6.21],
  '巨蟹': [6.22, 7.22],
  '狮子': [7.23, 8.22],
  '处女': [8.23, 9.22],
  '天秤': [9.23, 10.23],
  '天蝎': [10.24, 11.22],
  '射手': [11.23, 12.21],
  '摩羯': [12.22, 1.19],
  '水瓶': [1.20, 2.18],
  '双鱼': [2.19, 3.20]
};

let aa = '31';
let arr1 = [1, 3, 5, 7, 8, 10, 12];
// let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
let arr2 = arr1.map((v) => {
  v = Number(v + '.' + aa);
  xingzuo(v);
  return v;
});
console.log(arr1);
console.log(arr2);

function xingzuo(date) {
  let r = '';
  for (let i = 0; i < Object.keys(obj).length; i++) {
    if (obj[Object.keys(obj)[i]][0] <= date && ((obj[Object.keys(obj)[i]][1] <= date && obj[Object.keys(obj)[i]][1] === 1.19) || (obj[Object.keys(obj)[i]][1] >= date))) {
      console.log(Object.keys(obj)[i], obj[Object.keys(obj)[i]], date);
    }
  }

  return r;
}
