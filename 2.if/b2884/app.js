const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

input = input[0];
// console.log(input);
input = input.split(" ").map((item) => +item);

solution(input[0], input[1]);

function solution(A, B) {
  // Write your code
  let H;
  let M = B - 45;
  if (M < 0) {
    if (A !== 0) {
      H = A - 1;
    } else {
      H = 23;
    }
    M = M + 60;
  } else {
    H = A;
  }
  console.log(H, M);
  // console.log(23 !== 0);
}
