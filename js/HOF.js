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
// LATIHAN SOAL HOF

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
const mapData = (data, formatterFn) => data.map(formatterFn);

const dataMapObj = [{ name: "Andi" }, { name: "Budi" }, { name: "Citra" }];

const transformData = ({ name }) => ({ username: name });
console.log(mapData(dataMapObj, transformData));

// soal 4. Logger wrapper
function WithLogger(fn) {
  return (...args) => {
    console.log("Function dijalankan");
    return fn(...args);
  };
}

// Ini namanya -> Double Parentheses
const returnFunc = WithLogger((text) => text)("Hello World");
console.log(returnFunc);

// kalau yang biasanya seperti ini
const name = (usn) => usn;
const wrappedName = WithLogger(name);

console.log(wrappedName("Riza"));

// soal 5. Conditional executor
function executeIf(validFn, fn, value) {
  if (validFn(value) === true) return fn(value);
  return "Invalid";
}

// menggunakan Double Parantheses
const isGenap = executeIf(
  (n) => n % 2 === 0,
  (check) => `Angka: ${check}`,
  10,
);
console.log(isGenap);

// atau data yang lain seperti ini
const users2 = [
  { name: "Kuki", level: "gold", price: 130 },
  { name: "Fukuma", level: "silver", price: 90 },
  { name: "Kimonu", level: "AAA gold", price: 780 },
];

const applyGoldDiscount = users2.map((user) => {
  return executeIf(
    (us) => us.level === "gold" || us.level === "AAA gold",
    (us) => us.price * 0.3,
    user,
  );
});

console.log(applyGoldDiscount);

// soal 6. State updater
function setState(prevState, updaterFn) {
  // untuk menyimpan state yang baru
  const newState = updaterFn(prevState);

  // menampilkan state yang sudah diubah dan diperbarui
  return newState;
}

// data : Jika data objects
let dataCurrentState1 = { count: 1, text: "Hello" };

// penggunaan HOF
dataCurrentState1 = setState(dataCurrentState1, (prevSta) => {
  return {
    ...prevSta,
    text: "Hello, im Data Current 1 State",
  };
});
console.log(dataCurrentState1);

// data : jika data array
let dataCurrentState2 = [102, 30, 2121, 12, "helowws"];

dataCurrentState2 = setState(dataCurrentState2, (prevSate) => {
  return [...prevSate, "Henol"];
});
console.log(dataCurrentState2);

// data: jika data array of objects
let dataCurrentState3 = [
  { id: 1, name: "Andi", goal: "App Developer" },
  { id: 2, name: "Budi", goal: "Web Developer" },
];

dataCurrentState3 = setState(dataCurrentState3, (prevData) => {
  // return [...prevData, { goal: "Fullstack Developer" }];
  // buat variable untuk mengirim data yang baru
  const newItem = { id: 1, name: "Andi", goal: "Fullstack Developer" };

  // cek apakah data sudah ada (UNTUK UPDATE)
  const isExist = prevData.some((item) => item.id === newItem.id);

  if (isExist) {
    // Cek jika ada, maka update dan membuat array baru
    return prevData.map((item) =>
      item.id === newItem.id ? { ...item, ...newItem } : item,
    );
  }

  // Jika tidak ada, maka akan ditambahkan sebagai data baru
  return [...prevData, newItem];
});
console.log(dataCurrentState3);

// soal 7. Function Composer
function pipe(value, fnArray) {
  // variable untuk menyimpan data sementara
  let duringData = value;

  // menggunakan perulangan
  for (let i = 0; i < fnArray.length; i++) {
    duringData = fnArray[i](duringData);
  }

  return duringData;
}

const tambahAngka = (num) => num + 10;
const kurangAngka = (num) => num - 5;
const kaliAngka = (num) => num * 5;
const bagiAngka = (num) => num / 3;
const formatAngka = (num) => `Return: ${num}`;

const pipeAngka = pipe(20, [
  tambahAngka,
  kurangAngka,
  kaliAngka,
  bagiAngka,
  formatAngka,
]);
console.log(pipeAngka);

// soal 8. Permission wrapper
const currentUser = { name: "Fuma", isAdmin: true };

function withPermission(fn) {
  return (...args) => {
    if (!currentUser.isAdmin) return "Forbidden!";
    return fn(...args);
  };
}

const user = withPermission(() => {
  return { id: 1, name: "Admin" };
});
console.log(user());

// soal 9. Dynamic Event Handler
// ini reusable
function createClickHandler(fn) {
  return (id) => {
    return fn(id);
  };
}

const clickUser = createClickHandler((id) => {
  console.log(`ID User: ${id}`);
});
clickUser(10);

const cekData = createClickHandler((id) => {
  console.log(`Profile ID User ${id}`);
});
cekData(11);

const hapusData = createClickHandler((id) => {
  console.log(`Hapus data ID User ${id}`);
});
hapusData(12);

// soal 10. Mini React Mental Model | return function untuk menjalankan fn dengan log sebelum dan sesudah
function useAction(fn) {
  return (...args) => {
    console.log("Sebelum dijalankan");

    const res = fn(...args);

    console.log("Sudah dijalankan");
    return res;
  };
}

const runAction = useAction((act) => {
  console.log(act);

  // ** kalau menggunakan return, maka tereksekusi nya setelah console.log sudah dijalankan
  // return act;
});
runAction("Hello world, im running now");

runAction(130 + 20);

//
//
//

// LATIHAN SOAL LAGI

// soal 1. Callback formatter
function processText(text, callback) {
  return callback(text);
}

const processText1 = processText("Hai, aku web developer", (text) => {
  return text.toUpperCase();
});
console.log(processText1);

const processText2 = processText("Hai, aku Web Developer", (text) => {
  return text.split(" ");
});
console.log(processText2);

const processText3 = processText("Hai, aku WEB DEVELOPER", (text) => {
  return text.length;
});
console.log(processText3);

// soal 2. Callback Validator
function ValidateUser(user, onSuccess, onError) {
  if (user.username.length > 5 && user.password.length > 8)
    return onSuccess(user);

  onError("DATA FAILED. PLEASE FILL FIELD CORRECTLY");
}

ValidateUser(
  { username: "user", password: "hello1212" },
  (data) => {
    console.log({ ...data, isValid: true });
  },
  (messageErr) => {
    console.log("FAILED!", messageErr);
  },
);

// JIKA INGIN LEBIH DETAIL BISA SEPERTI INI
function ValidateUser2(user, onSuccess, onFail) {
  /**
   *
   * @validator
   * Cek satu satu untuk username dan password, serta memberikan response yang berbeda
   *
   */

  // username
  if (user.username.length < 5) {
    return onFail("Username must be minimum 5 character");
  }

  // password
  if (user.password.length < 8) {
    return onFail("Password must be minimum 8 character");
  }

  onSuccess(user);
}

ValidateUser2(
  { username: "admi", password: "admin12admin12" },
  (messageSuccess) => {
    console.log("SUCCESS, DATA!", messageSuccess);
  },
  (messageErr) => {
    console.log("FAILED!", messageErr);
  },
);

// soal 3. HOF + Array + Destructuring
function mapUsers(users, formatterFn) {
  /**
   *
   * Menggunakan metode ADAPTER PATTERN
   *
   */

  // transform data
  const transformUsers = ({ id: value, name, role }) => {
    // digabungkan langsung saat proses destructuring
    const label = `${name}  (${role})`;

    // desctructuring + rename
    return formatterFn({ value, label });
  };

  // Handling Polymorphism atau untuk menangani data berbentuk object / array of object
  return Array.isArray(users)
    ? users.map(transformUsers)
    : transformUsers(users);
}

// PENGGUNAAN
const usersObj = mapUsers(
  { id: 1, name: "admin telkom", role: "teknisi" },
  (item) => item,
);
console.log(usersObj);

const usersArrObj = mapUsers(
  [
    { id: 1, name: "Alice", role: "Admin" },
    { id: 2, name: "Bob", role: "Teknisi" },
  ],
  (item) => item,
);
console.log(usersArrObj);

// soal 4. Rest parameter calculator
function calculate(type, ...numbers) {
  return (calcNum) => {
    if (type === "sum")
      return calcNum(numbers.reduce((total, sum) => total + sum, 0));
    if (type === "multiply")
      return calcNum(numbers.reduce((total, mult) => total * mult, 1));
  };
}

// Menggunakan Double Parentheses
const sumCalc = calculate("sum", 12, 12)((res) => res);
console.log(sumCalc);

const multiCalc = calculate("multiply", 2, 3, 4)((res) => res);
console.log(multiCalc);

// soal 5. Spread + immutable update
function toggleUser(users, targetID) {
  return users.map((user) => {
    if (user.id === targetID) {
      const { id, name, active } = user;

      return {
        id,
        name,
        active: !active,
      };
    }
    return user;
  });
}

const dataUser = toggleUser(
  [
    { id: 1, name: "Andi", active: false },
    { id: 2, name: "Budi", active: false },
  ],
  2,
);
console.log(dataUser);

// soal 6. Destructuring parameter (React Style)

// soal 7. Callback + Conditional Flow

// soal 8. HOF Logger wrapper

// soal 9. Restructuring API Response

// soal 10. Mini React setState + Callback
