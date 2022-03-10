const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const inputC = +input[0];
const inputTestCase = [];

for (let i = 1; i <= inputC; ++i) {
  const arr = input[i].split(" ").map((item) => +item);
  const newArr = [];
  for (let i = 1; i <= arr[0]; ++i) {
    newArr.push(arr[i]);
  }
  const testCase = {
    N: arr[0],
    arr: newArr,
  };
  inputTestCase.push(testCase);
}

solution(inputC, inputTestCase);

function solution(C, testCase) {
  // Write your code
  for (let testCaseIdx = 0; testCaseIdx < C; testCaseIdx++) {
    const n = testCase[testCaseIdx].N;
    const arr = testCase[testCaseIdx].arr;

    let scoreNum = 0;
    for (let i = 0; i < n; i++) {
      scoreNum += arr[i];
    }
    const average = scoreNum / n;
    let cnt = 0;
    for (let i = 0; i < n; i++) {
      if (average < arr[i]) {
        cnt++;
      }
    }
    const ratio = ((cnt / n) * 100).toFixed(3);
    console.log(ratio + "%");
  }
}
