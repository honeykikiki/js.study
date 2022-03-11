const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

solution();
function d(num) {
  let sum = 0;
  const strNum = String(num);
  for (let i = 0; i < strNum.length; ++i) {
    sum += +strNum[i];
  }
  return num + sum;
}
function solution() {
  const arr = Array(10001).fill(0);
  for (let i = 1; i <= 10000; ++i) {
    const ans = d(i);
    if (ans <= 10000) {
      arr[ans]++;
    }
  }
  for (let i = 1; i <= 10000; ++i) {
    if (arr[i] === 0) {
      console.log(i);
    }
  }
}
