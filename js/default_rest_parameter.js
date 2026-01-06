// Membahas perbedaan Default dan Rest Parameter
// rest parameter mirip seperti spread operator

// --- Default parameter
function perkenalan(nama = "user") {
  console.log(`nama saya: ${nama}`);
}
perkenalan(); // kalau isi nya kosong, akan digantikan dengan default value di parameter itu
perkenalan("wahyu"); // kalau ada isinya ya pakai isinya
perkenalan(""); // string kosong tetap terbaca true, jadi ya nanti kosong aja

function createUser(username, password = "hello", admin = "user") {
  return {
    username: username,
    password: password,
    admin: admin,
  };
}
// console.log(buatUser())
console.log(createUser("user1", "user1"));
// console.log(buatUser("admin"));

// --- Rest Parameter ---
/**
 * Kalau spread operator itu untuk memecah/membongkar/menyebarkan array menjadi elemen elemen
 * spread bisa digunakan untuk :  - mengirim data
 *                                - memecah data
 *                                - menggabungkan data
 * spread dipakai dipakai saat memanggil, bentuk hasilnya biasanya dalam bentuk elemen
 *
 *
 * Rest parameter itu untuk menangkap banyak argumen untuk dijadikan satu array, dipakai nya ketika saat kita menerima, bentuk hasilnya biasanya elemen
 * rest parameter itu harus paling akhir, jadi gabisa diawal atau ditengah
 *
 */
function jumlahAngka(...angka) {
  let total = 0;
  for (let hitung of angka) {
    total += hitung;
  }
  return total;
}
console.log(jumlahAngka(23, 24, 25));
console.log(jumlahAngka(92, 11, 102, 120, 33));

function totalBelanja(...belanjaan) {
  return belanjaan.reduce((total, harga) => total + harga, 0);
}
console.log(totalBelanja(100000, 210211, 20002));

function hitungTagihan(nama, diskon = 0, ...harga) {
  const pendapatanKotor = harga.reduce(
    (totalKotor, harga) => totalKotor + harga,
    0
  );

  // diskon
  const dis = pendapatanKotor * (diskon / 100);
  const totalBersih = pendapatanKotor - dis;

  return `Pelanggan: ${nama}, Total: ${totalBersih}`;
}
console.log(hitungTagihan("wahyu", 30, 5000, 20000, 1200210));
console.log(hitungTagihan("kuio", 0, 1000, 2000));
console.log(hitungTagihan("Rizky", 10, 50000, 20000, 30000));
console.log(hitungTagihan("Budi", undefined, 100000, 50000));

// --- Studi kasus: spread operator, default parameter dan rest parameter

// -> pakai default parameter
function hitungHarga(harga, qty = 1) {
  return harga * qty;
}
console.log(hitungHarga(10000));
console.log(hitungHarga(10000, 3));

// pakai rest parameter
function jumlahkanAngka(...angka) {
  let totalAngka = 0;
  for (let total of angka) {
    totalAngka += total;
  }

  return totalAngka;
}
console.log(jumlahkanAngka(1, 2, 3, 4));

// menggunakan spread operator
const buah = ["Apel", "Mangga"];

const tambahBuah = ["Jeruk", ...buah, "Anggur"];
console.log(tambahBuah);

// spread object
const user = {
  name: "Andi",
  age: 20,
};

const tambahData = {
  ...user,
  age: 21,
  role: "admin",
};
console.log(tambahData);
console.log(user);

// rest parameter + default parameter
function buatUser(name, role = "user", ...skills) {
  return {
    //   name: name,
    //   role: role,
    //   skills: skills,
    name: name,
    ...(role !== "user" && { role }),
    skills: skills,
  };
}
console.log(buatUser("Andi", "admin", "JS", "React"));

const products = [
  { id: 1, name: "Laptop", price: 15000000 },
  { id: 2, name: "Mouse", price: 150000 },
];

const updatePrice = (id, newPrice, items) =>
  items.map((item) => (item.id === id ? { ...item, price: newPrice } : item));
console.log(updatePrice(2, 200000, products));
console.log(products);

function Button({ text = "submit", ...props }) {
  return {
    Text: text,
    Props: props,
  };
}
console.log(Button({ text: "Login", type: "submit", color: "blue" }));
console.log(Button({ type: "submit", color: "blue" }));

// -------- latihan tambahan aja ----------
const prices = [10, 20, 30, 40];

// cara 1
const toRupiah = () => prices.map((price) => price * 15000);
console.log(toRupiah());

// cara 2
const toRupiah2 = prices.map((price) => price * 15000);
console.log(toRupiah2);

// coba kita buah agar nilai array nya langsung dikirim, bukan diambil
// cara 3
const toRupiah3 = (...items) => items.map((item) => item * 15000);
console.log(toRupiah3(10, 20, 30, 40));

// cara 4
const toRupiah4 = (items) => items.map((item) => item * 15000);
console.log(toRupiah4([10, 20, 30, 40]));

// HASILNYA SAMA SEMUA

const users = [
  { id: 1, name: "Andi", age: 15, email: "andi@mail.com" },
  { id: 2, name: "Budi", age: 20, email: "budi@mail.com" },
  { id: 3, name: "Caca", age: 25, email: "caca@mail.com" },
];

const returnUser = users
  .filter(({ age }) => age >= 18) // pakai desctructing, karena lebih simpel aja
  .map(({ name, email, ...data }) => ({
    name: name,
    email: email,
    ...data,
    status: "Verified",
  }));
console.log(returnUser);

function hitungTotal(...items) {
  return items.reduce((jumlah, total) => jumlah + total, 0);
}
console.log(hitungTotal(1000, 2000, 3000));

function updateStock({ id, name, stock, ...rest }) {
  return {
    id: id,
    namaProduk: name,
    stock: stock + 5,
    ...rest,
  };
}
console.log(
  updateStock({ id: 101, name: "Laptop", stock: 10, color: "Silver" })
);
