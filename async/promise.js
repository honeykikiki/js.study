"use strict";

// promise is a javascript object for asyncchronous operation
// state: pending -> fulfilled or rejected
// produce vs consumer

// 1. produce
// when bew promise is ceated, the execuror runs automartocally
const promise = new Promise((resolve, reject) => {
  // doing some heavy Worker(network, read files)
  console.log("doing...");
  setTimeout(() => {
    resolve("ellie");
    // reject(new Error("no nerwork"));
  }, 2000);
});

// 2.consumer : then, catch, finally
promise
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("finally");
  });

// 3. promise chaining
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
});

fetchNumber
  .then((num) => num * 2)
  .then((num) => num * 3)
  .then((num) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(num - 1), 1000);
    });
  })
  .then((num) => {
    console.log(num);
  });
