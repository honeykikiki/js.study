for (let i = 10; i > 0; i--) {
  if (i % 2 === 0) continue;
  console.log("*".repeat(i));
}

let ii = 10;
while (ii > 0) {
  ii--;
  if (ii % 2 === 0) continue;
  console.log("*".repeat(ii));
}
// for (let i = 0; i < 10; i++) {
//   if (i % 2 === 0) continue;
//   console.log("*".repeat(i));
// }

// for (let i = 5; i >= 1; i--) {
//   // if (i % 2 === 0) continue;
//   console.log(" ".repeat(5 - i) + "*".repeat(i));
// }

// for (let i = 1; i <= 5; i++) {
//   // if (i % 2 === 0) continue;
//   console.log(" ".repeat(5 - i) + "*".repeat(i));
// }

// for (let i = 10; i >= 0; i--) {
//   if (i % 2 === 0) continue;
//   // for (let k = 5; k >= 0; k--) {
//   //   console.log(" ".repeat(k) + "*".repeat(i));
//   //   // console.log(k);
//   // }
//   console.log(" ".repeat(9 - i / 2) + "*".repeat(i));
// }

// for (let i = 0; i <= 5; i++) {
//   if (i % 2 === 0) continue;
//   console.log("*".repeat(i));
// }

var star = "";
for (var i = 0; i < 9; i++) {
  if (i < 5) {
    for (var j = 4; j > i; j--) {
      star += " ";
    }
    for (var k = 0; k <= i * 2; k++) {
      star += "*";
    }
    star += "\n";
  } else {
    for (var j = 4; j < i; j++) {
      star += " ";
    }
    for (var k = 17; k > i * 2; k--) {
      star += "*";
    }
    star += "\n";
  }
}
console.log(star);
