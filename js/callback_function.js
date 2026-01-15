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
 * function handleData() : tidak dipanggil langsung agar fetchData lebih fleksibel dan supatya bisa digtanti callback lain
 *
 * Callback : fetchData(callback)
 *
 * Callback itu adalah function yang dikirim, bukan yang dijalankan
 *
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
  if (typeof number === "number") {
    callback(number);
  } else {
    console.log("not a number");
  }
}

validateNumber(123, function (number) {
  console.log(number);
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

setState({ count: 1 }, ({ count }) => {
  console.log(`New state: ${count}`);
});

// bentuk yang lainnya bisa seperti ini :
// function setState(newState, callback) {
//   console.log("State updated");
//   callback(newState);
// }

// setState({ count: 1 }, (state) => {
//   console.log(`New state: `, state);
// });
// output nya : New state: { count: 1 }

// Soal lagi
// Latihan soal 2

// soal 1. callback formater
function transformText(text, callback) {
  callback(text);
}

transformText("Hello world", (text) => {
  console.log(text.toUpperCase());
});

transformText("Hello World", (text) => {
  console.log(text.toLowerCase());
});

transformText("Hello WORLD", (text) => {
  console.log(text.split(" "));
});

// soal 2. callback validator
function validateUser(user, onSuccess, onError) {
  if (user.username.length >= 5 && user.age >= 18) {
    onSuccess(user);
  } else {
    onError(user);
  }
}

validateUser(
  { username: "Shintya", age: 30 },
  (user) => {
    console.log("Berhasil:", user.username, user.age);
  },
  (user) => {
    console.log("Gagal");
  }
);

// soal 3. Callback data processor
function processNumber(number, callback) {
  callback(number);
}

function dikali(number) {
  console.log(number.reduce((total, angka) => total * angka, 1));
}

function dikuadratkan(number) {
  console.log(number.map((num) => num ** 2));
}

function difilter(number) {
  console.log(number.filter((num) => (num % 2 === 0 ? num : null)));
}

const dataArrNum = [1, 2, 3, 4, 5];

processNumber(dataArrNum, dikali);
processNumber(dataArrNum, dikuadratkan);
processNumber(dataArrNum, difilter);

// soal 4. Callback control flow
function runSequence(callback1, callback2, callback3) {
  callback1();
  callback2();
  callback3();
  console.log("Langkah selesai");
}

runSequence(
  () => {
    console.log("Langkah 1: dijalankan");
  },
  () => {
    console.log("Langkah 2: dijalankan");
  },
  () => {
    console.log("Langkah 3: dijalankan");
  }
);

// soal 5. Callback Error Handling
function safeDivide(a, b, callErr, callSucc) {
  if (b === 0) {
    callErr(a, b);
  } else {
    callSucc(a, b);
  }
}

safeDivide(
  10,
  0,
  () => {
    console.log("Error");
  },
  (value) => {
    console.log(value);
  }
);

// soal 6. Callback Object Modifier
function updateProfile(user, callback) {
  const updateUser = callback(user);
  return updateUser;
}

const updateData = updateProfile(
  { id: 1, username: "rizal", age: 30 },
  (value) => {
    return {
      ...value,
      age: value.age + 1,
    };
  }
);

console.log(updateData);

// soal 7. Callback Array Mapper
function renderList(data, callback) {
  return data.map(callback);
}

const dataList = (list, index) => `index-${index} | data: ${list}`;

// jika data nya array
const dataArr = ["satu", "dua", "tiga", "empat", "lima"];
console.log(renderList(dataArr, dataList));

// jika data array of objects

// bisa seperit ini
const dataListObj1 = (data) => `${data.name} - ${data.role}`;

// atau dengan destructuring
const dataListObj2 = ({ name, role }) => `${name} - ${role}`;

const dataArrObj = [
  { id: 1, name: "Raja Ayam", role: "Siswa" },
  { id: 2, name: "Ikan Lele", role: "Guru" },
];

console.log(renderList(dataArrObj, dataListObj1));
console.log(renderList(dataArrObj, dataListObj2));

// soal 8. Callback async simulation
function fetchData(data, callback) {
  console.log("Menghubungi server...");

  setTimeout(() => {
    callback(data);
  }, 3000);
}

fetchData({ id: 1, username: "kink" }, (value) => {
  console.log("Data:", value);
});

// soal 9. Callback State Updater
function setState(prevState, callback) {
  return callback(prevState);
}

// bisa seperti ini
const stateBaru = setState({ number: 2 }, ({ number }) => {
  return {
    number: number + 2,
  };
});
console.log(stateBaru);

// seperti ini juga
const stateBaru2 = setState({ text: "halo", name: "Gemini" }, (prev) => ({
  ...prev,
  text: prev.text.toUpperCase(),
}));
console.log(stateBaru2);

// dan juga seperti ini
const hasil = setState(50, (number) => number * 100);
console.log(hasil);

// soal 10. Callback Composition
function pipeLine(data, callback) {
  // hasil sementara disimpan di sebuah variable
  let resultData = data;

  // perulangan untuk menjalankan callback satu per satu
  for (let i = 0; i < callback.length; i++) {
    // menjalankan fungsi saat ini dengan input hasil sebelumnya
    resultData = callback[i](resultData);
  }

  // kirim hasil akhirnya
  return resultData;
}

const diTambah = (n) => n + 5;
const diBagi = (n) => n / 3;
const diKali = (n) => n * 2;
const diSisabagi = (n) => n % 3;
const formatHasil = (n) => `Rp${n}`;

const hasilAkhir = pipeLine(541, [diTambah, diBagi, diKali, diSisabagi]);
console.log(hasilAkhir);

// 5 SOAL TERAKHIR

// 1. Conditional Callback

// checkLogin(.., onSuccess, onFail) -> adalah callback function nya
function checkLogin(user, onSuccess, onFail) {
  if (user.isLogin === true) {
    onSuccess(user);
  } else {
    onFail(user);
  }
}

// kemudian dipanggil disini
checkLogin(
  { username: "Rizky", isLogin: false },
  // ini argumen callback nya (onSuccess)
  (user) => {
    console.log("Selamat datang", user.username);
  },
  // ini argumen callback nya juga (onFail)
  () => {
    console.log("Silakan login terlebih dahulu");
  }
);

// 2. Callback Transformer Berantai / Callback S
function ProcessText(text, callback1, callback2) {
  console.log("Proses dimulai...");

  setTimeout(() => {
    // simpan data
    const returnCallback = callback1(text);

    // kirim ke callback2
    callback2(returnCallback);
    console.log("Proses selesai.");
  }, 2000);
}

ProcessText(
  "Hello world",
  (text) => {
    const upgradeText = text.toUpperCase();
    console.log("Upgrade: ", upgradeText);

    return upgradeText;
  },
  (returnData) => {
    console.log(returnData);
  }
);

// 3. Callback Validator + Modifier
function updateAge(user, callback) {
  if (user.age >= 18) {
    callback({ ...user, status: "Adult" });
  } else {
    callback({ ...user, status: "Minor" });
  }
}

updateAge({ name: "Furima", age: 12 }, (dataUser) => {
  console.log(dataUser);
});

// 4. Async Callback Simulation
function saveData(data, onLoading, onSuccess) {
  onLoading();

  setTimeout(() => {
    onSuccess(data);

    console.log("Save data user selesai");
  }, 2000);
}

saveData(
  "data user",
  () => {
    console.log("Proses penyimpanan...");
  },
  (dataUser) => {
    console.log(dataUser);
  }
);

// 5. React-Style setState Callback
function setState2(prevState, callback) {
  return callback(prevState);
}

const newState2 = setState2({ text: "Anjay bro" }, (newState) => ({
  text: newState.text + ", WUHUUU",
}));
console.log(newState2);
