const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

input = input[0];
input = input.split(" ").map((item) => +item);

solution(input[0]);

function solution(A) {
  // Write your code
  if ((A % 4 === 0 && A % 100 !== 0) || A % 400 === 0) {
    console.log(1);
    return;
  }
  console.log(0);
}
