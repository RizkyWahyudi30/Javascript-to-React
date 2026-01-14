// CALLBACK FUNCTION
// yaitu function yang dikirim sebagai Argumen ke function lain
// lalu dipanggil di dalam function tersebut

// * contoh

// callback function biasa
function sayHello() {
  console.log("Hello");
}

function runCallback(callback) {
  callback();
}

runCallback(sayHello);

// sayHello() adalah callback
// runCallback() adalah yang memanggil callback

// * callback function dengan parameter
function greet(name) {
  console.log("Hello", name);
}

function runCallback(callback) {
  callback("Wahyu");
}

runCallback(greet);

// * callback menggunakann arrow function
function run(callback) {
  callback(10);
}

run((num) => {
  console.log(num * 2);
});

// * callback pada array method
// 1. map
const numbers = [1, 2, 3, 4, 5];

const resultMap = numbers.map((num) => {
  return num * 3;
});
console.log(resultMap);

// 2. filter
const resultFilter = numbers.filter((num) => {
  return num > 2;
});
console.log(resultFilter);

// 3. reduce
console.log(
  numbers.reduce((total, num) => {
    return total + num;
  }, 0)
);

// LATIHAN MENTAL / KONSEP CALLBACK

// ini adalah bagian mengirim callback
function process(callback) {
  // inin adalah bagian callback dipanggil
  callback("react js");
}

// (text) => { ... } // ini baru callback
process((text) => {
  console.log(text.toUpperCase());
});

// soal biasa lagi

// cook(food, callback) : bagian untuk mengirim callback
function cook(food, callback) {
  // disinilah callback dipanggil
  callback(food);
}

// (makanan) => { ... } // ini adalah callback
cook("mie ayam", (makanan) => {
  console.log("Masak", makanan);
});

//
// 10 Soal

// soal 1.

// ini yang mengirim callback nya
function fnGreet(callback) {
  // ini cara bagian untuk memanggil callback nya
  callback("rizky");
}

// (name) => {...} : ini callback nya
fnGreet((name) => {
  console.log("Hellow, ", name); // output nya "Hello, rizky"
});

// soal 2.
function calculate(a, b, callback) {
  const result = a + b;
  callback(result);
}

calculate(10, 20, (total) => {
  console.log(`Total: ${total}`);
});

/**
 * Alur data :
 *
 * 1. calculate(10, 20 ...) mengirim data ke calculate(a, b, callback)
 * 2. buat variable untuk menghitung variable a + b
 * 3. lalu callback(result) => ambil hasil penghitungannya dan callback(result) => akan kirim ke callback (total) => {}
 * 4. (total) => {...} ini callback nya, callback nya akan mengelola data yang sudah dikirim
 *
 */

// soal 3.
function fecthData(callback) {
  const data = "Data API";
  callback(data);
}

function handleData(result) {
  console.log(result.toUpperCase());
}

fecthData(handleData);

/**
 * function handleData() : tidak dipanggil langsung karena callback nya baru dibuat dibawah fecthData
 *
 * Callback : fetchData(callback)
 */

// soal 4.
function processText(text, callback) {
  callback(text);
}

processText("react js", function (value) {
  console.log(value.split(" "));
});

/**
 * processText() dan anonymous function berhubungan untuk saling mengirim value tanpa mengambil nama function nya dahulu
 *
 *
 */

// soal 5.
function logger(callback) {
  console.log("Start");
  callback();
  console.log("End");
}

logger(() => {
  console.log("Process running");
});

/**
 * Urutan output : Start -> Process running -> End
 *
 * Urutannya bisa seperti ini karena ketika dideklarasikan callback nya, function nya langsung menjalankan Start
 * Setelah itu baru mengambil data dari pengirim callback, baru setelah itu running console terakhir
 *
 */

// soal 6
function runTask(callback) {
  callback("Belajar callback");
}

runTask((text) => {
  console.log(text);
});

// soal 7.
function formatText(text, callback) {
  callback(text);
}

formatText("hello world", function (text) {
  console.log(text.toUpperCase());
});

// soal 8.
function validateNumber(number, callback) {
  callback(number);
}

validateNumber(123, function (number) {
  if (typeof number === "number") {
    console.log(number);
  } else {
    console.log("not a number");
  }
});

// soal 9.
function printUser(user, callback) {
  callback(user);
}

printUser({ name: "qu", age: 12 }, function ({ name, age }) {
  console.log(`name: ${name}, age: ${age}`);
});

// soal 10.
function setState(newState, callback) {
  console.log("State updated");
  callback(newState);
}

setState(() => {
  console.log("new state to updated");
});
