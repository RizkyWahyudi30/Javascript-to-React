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
