const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

// input = input.split(" ").map((item) => +item);

solution(+input[0]);
function solution(A) {
  // Write your code
  for (let i = A; i > 0; i--) {
    console.log(i);
  }
}
