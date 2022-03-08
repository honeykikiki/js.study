const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

input = input[0];
input = input.split(" ").map((v) => +v);

solution(input[0]);
function solution(A) {
  // Write your code
  let result = 0;
  for (let i = 1; i <= A; i++) {
    result = result + i;
  }
  console.log(result);
}
