const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let = testCaseArray = [];
// for (let i = 0; i < input.length; i++) {
// }
input = input.map((item) => +item);
// console.log(input);

solution(input);

function solution(items) {
  // Write your code
  // let result = input[0] * input[1] * input[2];

  // console.log(result);
  const num = items[0] * items[1] * items[2];

  const strNum = String(num);

  const answer = Array(10).fill(0);

  for (let i = 0; i < strNum.length; ++i) {
    const nowChar = +strNum[i];
    answer[nowChar]++;
  }
  for (let i = 0; i < answer.length; ++i) {
    console.log(answer[i]);
  }
}
