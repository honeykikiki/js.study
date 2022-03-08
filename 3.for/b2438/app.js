const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

solution(+input[0]);

function solution(A) {
  // Write your code
  for (let i = 1; i <= A; i++) {
    let star = "";
    for (let l = 0; l < i; l++) {
      star += "*";
    }
    console.log(star);
  }
}
