module.exports = function getZerosCount(number, base) {
  let i = 2;
  let arr = [];
  let zeroStr = 0;
  let workObj = {};
  let testArr = [];

  
  for (i = 2; i <= base; i++){
    while (base % i == 0){
      base = base / i;
      arr.push(i);
      if (i in workObj) {workObj[i] = workObj[i]+1}
      else {workObj[i] = 1};
    }
  }

  for (key in workObj){
    let num = number;
    zeroStr = 0;
    while (num !== 0){
      num = Math.floor(num / key);
      zeroStr += num;
    }
    testArr.push(Math.floor(zeroStr/workObj[key]));
  }
return(Math.min.apply(null, testArr));
}  