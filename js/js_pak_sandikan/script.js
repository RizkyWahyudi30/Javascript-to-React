// ===== KONSEP THIS ==== //
// console.log(this); // object window atau object global
// console.log(window)
// atau bisa menuliskannya dengan window
// console.log(window === this); // true

// jika seperti ini :
var a = 10;

// console.log(a); // ataupun dibawah
// console.log(window.a);
// console.log(this.a);

// ======================================= //

// Membuat object

// caara 1
// ** menggunakan function declaration
// function halo() {
//   console.log(this);
//   console.log("Helo");
// }
// this.halo();
// this. mengembalikkan object global

// cara 2
// ** menggunakan object literal
// let obj = { a: 10, name: "hahau" };
// obj.halo = function () {
//   console.log(this);
//   console.log("halo");
// };
// obj.halo();
// this. mengembalikkan object yang bersangkutan

// cara 3
// ** menggunakan constructor function
function Halo() {
  console.log(this);
  console.log("halo");
}
var obj1 = new Halo();
var obj2 = new Halo();
// this. mengembalikkan object yang baru dibuat

// =============================================== //
