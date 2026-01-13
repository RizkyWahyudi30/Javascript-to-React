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

// cara 1. Disimpan dalam variable
const sayHello = () => "Hellow";

const greets = sayHello; // function disimpan ke dalam variable
console.log(greets()); // kirim outputnya

// cara 2. dikirim sebagai argumen (callback)
const lari = () => "saya lari";

function jalankanAksi(aksi) {
  return aksi(); // menjalankan function yang dikirim lewat parameter
}
console.log(jalankanAksi(lari));

// cara 3. dikembalikan oleh function lain (return)

function buatPenyapa(kata) {
  return () => console.log(kata);
}

const sapaHello = buatPenyapa("Halo bos");
sapaHello();

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

// Latihan soal, biar nambah paham
// soal 1. declarative function

function greet(name) {
  return `Halo, nama saya ${name}`;
}
console.log(greet("Rizal"));

// soal 2. Expressive function

const square = function (x) {
  return `Hasil dari kuadrat: ${x ** 2}`;
};
console.log(square(3));

// soal 4. arrow function

const multiply = (x, y) => {
  return `Hasil dari perkalian ${x} dan ${y}: ${x * y}`;
};
console.log(multiply(2, 5));

// soal 5. first-class function
const sayHellos = () => "Hello world";

const hello = sayHello;
console.log(hello());

// soal 6. pure function
let totals = 0;
function addA(x) {
  totals += x;
}
console.log(addA(20));
// Ini bukan pure function, karena mengubah value dari variable totals

function addB(a, b) {
  return a + b;
}
console.log(addB(20, 30));
// tidak mengubah apapun di luar function nya

// soal 7. pure function (praktik)

function calculateDiscount(price) {
  return price * 0.9;
}
console.log(calculateDiscount(30000));

// soal 8. arrow + pure func
const convertToUpper = (text) => {
  return text.toUpperCase();
};
console.log(convertToUpper("hello"));

// soal 9. membedakan bentuk function

// ini function declarative
function foo() {
  console.log("hello world");
}

// ini function expressive
const bar = function (text) {
  console.log("hello");
};

// ini arrow function
const baz = () => {
  console.log("hello");
};

// soal 10. mini case
const formatUser = (name, age) => {
  return {
    name,
    age,
    isAdult: true,
  };
};
console.log(formatUser("rizal", 30));

// Soal Lagi

// soal 1
// let counter = 0;

// function increment() {
//   counter++;
//   return counter;
// }
// kode diatas bukanlah function pure, karena mengubah nilai di luar function

// ini yang versi benar
function increment(counter) {
  counter++;
  return counter;
}
console.log(increment(0));

// soal 2
function createLogger(prefix) {
  // arrow function
  return (message) => {
    return `${prefix}: ${message}`;
  };
}

const errorLogger = createLogger("ERROR");
console.log(errorLogger("Server down"));

// soal 3

// kode 1
sayHi();

function sayHi() {
  console.log("Hi");
}
// kode ini tetap berjalan, function tidak terpengaruh hoisting

// ** Kalau ini tidak bisa, karena ia mencoba mengakses variable function yang belum ada
// sayHello();

// const sayHello = function () {
//   console.log("Hello");
// };

// soal 4

const formatPrice = (price) => {
  const changeFormat = price.toLocaleString("id-ID");
  return `Rp ${changeFormat}`;
};
console.log(formatPrice(25000));

// soal 5

const isEven = (num) => num % 2 === 0;
console.log(isEven(4));
console.log(isEven(3));

// soal 6

const createUser = (name, age) => {
  return {
    name,
    age,
    status: age >= 18 ? "adult" : "minor",
  };
};

// soal 7

function updateTitle(title) {
  document.title = title;
}
// ini bukan pure function, karena ini mengubah element diluar function

// soal lagi

// Bagian A

// soaal 1
function increasePrice(price, percent) {
  const increment = price * (percent / 100);
  return price + increment;
}
console.log(increasePrice(50000, 10));

// soal 2
const isAdult = ({ name, age }) => {
  return { name, age, status: age >= 18 };
};
console.log(isAdult({ name: "test", age: 12 }));

// soal 3
function formatUsers(username) {
  return {
    username,
    isVerified: false,
  };
}
console.log(formatUsers("kucing"));

// soal 4
// function calculateTotal({ price, qty }) {
//   const total = [];
//   total.push({ price: price, qty: qty, total: price * qty });
//   return total;
// }
// console.log(calculateTotal({ price: 30000, qty: 4 }));
function calculateTotal(cart) {
  return cart.reduce((sum, item) => sum + item.price * item.qty, 0);
}

const items = [
  { name: "Jam tangan", price: 450000, qty: 1 },
  { name: "Sepatu", price: 800000, qty: 3 },
  { name: "Earphone", price: 230000, qty: 1 },
];

console.log(calculateTotal(items));

// soal 5
function normalizeEmail(email) {
  return `${email.toLowerCase()}`;
}
console.log(normalizeEmail("TeStER@gmail.com"));

// Bagian B
// soal 6
// const runTwice = (k) => {
//   return (v) => {
//     return `${k}. ${v}`;
//   };
// };

// const run = runTwice("website");
// console.log(run("tester"));

const runTwice = (fn) => {
  fn();
  return fn();
};

let count = 0;
const tambahSatu = () => (count += 1);
runTwice(tambahSatu);

console.log(count);

// akan terbuat hingga dua kali
runTwice(() => console.log("Belajar JS"));

// jika argumen yang dikirimkan dua, maka pada parameter bisa menggunakan spread operator
const spreadRunTwice = (fn, ...args) => {
  fn(...args);
  return fn(...args);
};

const tambah2 = (a, b) => a + b;

console.log(spreadRunTwice(tambah2, 5, 10));

// soal 7
function createDiscount(percent) {
  return (price) => {
    const discount = price * (percent / 100);
    const cost = price + discount;
    return `Harga akhir: ${cost}`;
  };
}

const disc = createDiscount(20);
console.log(disc(30000));

// soal 8
function withLog(a) {
  return (b) => {
    const hitung = a + b;
    console.log(hitung);
  };
}

const hitung = withLog(4);
hitung(5);

// soal 9
const validatorUser = function ({ username, password }) {
  return username.length >= 5 && password.toString().length >= 8;
};
console.log(validatorUser({ username: "Wahyu", password: 2010 }));

// soal 10
const executeIf = (condition) => {
  return (...fn) => {
    // if (typeof condition === "number") {
    //   return `hasilnya: ${fn}`;
    // } else {
    //   return `error!`;
    // }

    const validator = fn.every((n) => typeof n === "number");

    if (!validator) return "error!";

    return `hasilnya: ${condition(...fn)}`;
  };
};

const tambah = (a, b) => a + b;

const addExecute = executeIf(tambah);
console.log(addExecute(5, 10));

// soal 11
const updateUserActive = (users, targetID) => {
  return users.map((user) => {
    if (user.id === targetID) {
      return { ...user, active: true };
    }

    return user;
  });
};

const dataUser = [
  { id: 1, name: "Wahyu", active: false },
  { id: 2, name: "Rizky", active: false },
  { id: 3, name: "Andi", active: false },
];

const update = updateUserActive(dataUser, 2);
console.log("Data baru: ", update);

// soal 12
const mapToOptions = (users) => {
  return users.map((user) => {
    return { value: user.id, label: { ...user } };
  });
};

const dataUsers = [
  { id: 1, name: "test", active: false },
  { id: 2, name: "test", active: false },
  { id: 3, name: "test", active: false },
];

const testing = mapToOptions(dataUsers);

console.log(testing);

// soal 13
function initUserState({ id, username, email }) {
  return {
    id,
    username,
    isLogin: email.includes("@"),
  };
}

console.log(
  initUserState({ id: 1, username: "testing", email: "testing@gmail.com" })
);

// soal 14
function toggleButton(value) {
  return !value;
}
console.log(toggleButton(true));
console.log(toggleButton(false));

// soal 15
const composeGreeting = (greeting) => {
  return (name) => {
    return `${greeting}, ${name}`;
  };
};

const formatter = composeGreeting("Halo");
console.log(formatter("rizal"));
