const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const [inputN, inputX] = input[0].split(" ").map((item) => +item);
const arrayA = input[1].split(" ").map((item) => +item);
// console.log(inputN, inputX, arrayA);
solution(inputN, inputX, arrayA);
function solution(N, X, A) {
  // Write your code
  const result = [];
  for (let i = 0; i < N; i++) {
    if (A[i] < X) {
      result.push(A[i]);
    }
  }
  console.log(result.join(" "));
}
