const add = (a, b) => a + b;

function calculator(func, a, b) {
  return func(a, b);
}

add(3, 5); //8
calculator(add, 3, 5); //8

const onClick = () => (event) => {
  console.log("hello");
};

document.querySelector("#header").addEventListener("click", onClick());
