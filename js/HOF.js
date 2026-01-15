// H0OF atau Higher Order Function

// yaitu function yang menerima function sebagai parameter atau mengembalikkan function sebagai hasil return

// ## Bentuk dasar HOF
function run(fn) {
  fn();
}

run(() => {
  console.log("Hello world");
});
/**
 * Penjelasan :
 * 1. run = HOF
 * 2. fn = callback
 *
 */

// ## Function mengembalikkan function
function greetCreator(name) {
  return function () {
    console.log("Hello", name);
  };
}

const greetRizal = greetCreator("Rizal");
greetRizal();
// ini clossure dan HOF

// ## Menerima  & mengembalikkan function
function withLogger(fn) {
  return function (...args) {
    console.log("Function dijalankan");
    return fn(...args);
  };
}

const sum = (a, b) => a + b;

const submitLogger = withLogger(sum);
console.log(submitLogger(2, 5));

// 1. HOF dengan Array
