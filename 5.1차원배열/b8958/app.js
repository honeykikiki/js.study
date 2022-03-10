const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const arrayLength = +input[0];
const items = input.slice(1);

// console.log(items, arrayLength);
solution(arrayLength, items);

function solution(T, N) {
  // Write your code
  for (let i = 0; i < T; i++) {
    const arr = N[i];
    let result = 0;
    let scr = 0;
    for (let j = 0; j < arr.length; j++) {
      const arry = arr[j];
      if (arry === "O") {
        scr++;
        result += scr;
      } else {
        scr = 0;
      }
    }
    console.log(result);
  }
}
