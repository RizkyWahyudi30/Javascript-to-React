// DI FILE INI KITA AKAN BAHAS BEBERAPA MATERI FUNCTION :

// first-class func, declarative/expresive/arrow func, pure func

// 1. First-class function
// yaitu function yang diperlakukan seperti data biasa
/**
 *
 * Function bisa :
 * 1. disimpan di variable
 * 2. dikirim sebagai parameter
 * 3. dikembalikkan dari function lain
 *
 */

const sayHello = () => "Hellow";

const greet = sayHello; // function disimpan ke dalam variable
console.log(greet()); // kirim outputnya

// 2. Function declarative
// Seperti function pada umum nya saja
// declarative function dapat digunakan untuk hoisted

function sum(a, b) {
  console.log(a + b);
}
sum(10, 20);

// 3. Expresive variable
// seperti ini, jadi masuk ke dalam sebuah variable
const minus = function (a, b) {
  return a - b;
};
console.log(minus(10, 30));

// 4. Arrow function
// ini gampang
const kali = (a, b) => a * b;
console.log(kali(10, 20));

// 5. Pure function
// artinya function yang bersih, ciri ciri nya
/**
 *
 * 1. input saama -> output selalu sama
 * 2. tidak mengubah data di luar function (no-side effect)
 *
 */

let total = 0;
function bagi(x) {
  return total === 0 ? 0 : x / total;
}
console.log(bagi(20));
