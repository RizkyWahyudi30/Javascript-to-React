// Hosting adalah mengeksekusi sebelum kode di deklarasikan
// var => akan memberikan reponse undefined
// let, const => memberikan response ReferenceError

console.log(a); // undefined
var a = "Hello world";
console.log(a);

// console.log(b); // ReferenceError: Cannot access 'b' before initialization
let b = "Wahyu ganteng";
console.log(b);

// console.log(c); // ReferenceError: Cannot access 'c' before initialization
const c = "Hanya kamu";
console.log(c);

// tapi jika kita hoisted pada function declaration (bukan expression)
greeting("wahyu"); // ini tetap jalan
function greeting(nama) {
  console.log(nama); // dan ini tetap tereksekusi
}

// jika expression akan error, sama saja seperti mendeklarasikan variable
// const user = getName("ciku"); // ReferenceError: Cannot access 'getName' before initialization
const getName = function (name) {
  //
  console.log(name);
};
const name = getName("rizky"); // tidak usah di console.log, karena di function sudah di console.log
