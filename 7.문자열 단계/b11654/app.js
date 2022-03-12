const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

// for (let i = 0; i < input.length; i++) {
// }
// input = input[0].split(" ").map((item) => item);
console.log(input.toString().charCodeAt(0));
// solution(input);

function solution(input) {
  // Write your code
  console.log(input.charCodeAt());
}
