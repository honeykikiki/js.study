const x = "x";

function c() {
  const y = "y";
  console.log("c");
}

function a() {
  const x = "x";
  console.log("a");
  function b() {
    const z = "z";
    console.log("b");
    c();
  }
  b();
}

a(); // a b c
c(); // c

if (1 > 3) {
}
