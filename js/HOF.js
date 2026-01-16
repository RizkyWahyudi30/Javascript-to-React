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

// DATA

const users = [
  { id: 1, name: "Andi" },
  { id: 2, name: "Budi" },
];

// 1. HOF dengan Array
// .map() -> transform data

const result = users.map((user) => user.name);
console.log(result);
/**
 * map() adalah HOF
 * callback = function di dalamnya
 *
 */

// 2. filter() -> seleksi data
const adults = users.filter((user) => user.id > 1);
console.log(adults);

// 3. reduce() -> akumulasi
const total = [1, 2, 3, 4, 5].reduce((total, number) => total + number, 0);
console.log(total);

// ## Higher Order Component (HOC)
// HOC ini sebenarnya konsep yang sering digunakan di Reactjs, tapi ini penerapannya jika menggunakan javascript murni

const withAuth = (renderFunc) => {
  // mengembalikan fungsi baru (wrapper)
  return (props) => {
    if (!props.isLogin) {
      return `<p>Silahkan login terlebih dahulu</p>`;
    }

    // jika login, jalankan fungsi render aslinya
    return renderFunc(props);
  };
};

// fungsi "Komponen" murni
const Dashboard = (props) => `<h1>Selamat datang, ${props.username}</h1>`;

// bungkus fungsi
const Authenticated = withAuth(Dashboard);
console.log(Authenticated(Dashboard));

// testing
console.log(Authenticated({ isLogin: false }));
console.log(Authenticated({ username: "rizal", isLogin: true }));

// ## POLA POLA HOF YANG WAJIB DIKETAHUI

// 1. Validator
// pola ini digunakan untuk memberikan satpam pada fungsi asli. Fungsi "sayHello" merupakan fungsi yang akan dibungkus
const withValidation = (fn) => {
  return (value) => {
    if (!value) return "invalid";
    return fn(value);
  };
};

const sayHello = (name) => `Hello, ${name}`;
// membungkus fungsi asli dengan validator
const validateSayHello = withValidation(sayHello);

console.log(validateSayHello("Yuhi"));
console.log(validateSayHello("Kuma"));

// 2. Logger / Wrapper
// mencoba pola untuk men-debug data apa saja yang masuk ke dalam fungsi
const withLoggers = (fn) => {
  return (...args) => {
    console.log("Run with:", args);
    return fn(...args);
  };
};

const jumlahkan = (a, b, c) => a + b + c;

// membungkus fungsi
const loggedJumlahkan = withLoggers(jumlahkan);

console.log(loggedJumlahkan(20, 10, 30));

// 3. Transformer
// tidak mengembalikkan fungsi baru, tapi langsung mengembalikkan nilai
const transform = (fn, value) => fn(value);

const keRupiah = (angka) => `Rp. ${angka.toLocaleString("id-ID")}`;

// langsung eksekusi, masukkan fungsi pengolahan dan nilainya
const hargaFinal = transform(keRupiah, 20000);
// console.log(hargaFinal);
console.log(transform(keRupiah, 3500000));

// ========================================================== //
// LATIHA SOAL HOF

// soal 1. Callback executor
function execute(fn, value) {
  return fn(value);
}

const executeHasil = (value) => `Return: ${value}`;
console.log(execute(executeHasil, 10));

// soal 2. Formatter creator
function createFormatter(prefix) {
  return (text) => {
    return `${prefix}: ${text}`;
  };
}

const prefixFormatter = createFormatter("INFO");

console.log(prefixFormatter("Data berhasil"));

// soal 3. Array transformer
const mapData = (data, formatterFn) => formatterFn(data);

const dataMapObj = [{ name: "Andi" }, { name: "Budi" }, { name: "Citra" }];

const transformData = (arrData) =>
  arrData.map(({ name }) => ({ username: name }));
console.log(mapData(dataMapObj, transformData));

// soal 4. Logger wrapper
function WithLogger(fn) {
  console.log("Function dijalankan");
  fn();
}

WithLogger(() => {
  console.log("Funtion telah dijalankan");
});
