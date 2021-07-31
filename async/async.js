// async await
// clear style of using promise

// 1. async
// function fetchUser() {
//   return new Promise((resolve, reject) => {
//     resolve("ellie");
//   });
// }
async function fetchUser() {
  return "ellie";
}

const user = fetchUser();
user.then(console.log);
console.log(user);

// 2. await

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getApple() {
  await delay(2000);

  return "Apple";
}

async function getBanana() {
  await delay(1000);
  return "Banana";
}

function pick() {
  return getApple().then((apple) => {
    return getBanana().then((banana) => `${apple} + ${banana}`);
  });
}

async function pick2() {
  const applePrimise = getBanana();
  const bananaPrimise = getApple();
  const apple = await applePrimise;
  const banana = await bananaPrimise;
  return `${apple} + ${banana}`;
}

// pick().then(console.log);
pick2().then(console.log);

// 3. promise api
function pickAll() {
  return Promise.all([getApple(), getBanana()]).then((food) => {
    return food.join(" + ");
  });
}

pickAll().then(console.log);

function pickOnluOne() {
  return Promise.race([getApple(), getBanana()]);
}

pickOnluOne().then(console.log);
