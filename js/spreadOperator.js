// Spread operator => fitur untuk menyebarkan/membongkar isi array/object menjadi elemen tunggal

// Dengan Array
// 1. Menyebarkan/membongkar array
const angka = [1, 2, 3, 4, 5];
console.log(...angka); // output: 1 2 3 4 5
// tanpa spread operator
console.log(angka); // [ 1, 2, 3, 4, 5 ]

// 2. Menggabungkan 2 atau lebih array
const buah1 = ["mangga", "semangka", "durian"];
const buah2 = ["jeruk", "srikaya", "pisang"];
const buah3 = ["apel", "nanas"];

// dengan spread, kita juga bisa menambahkan value ke dalam lagi
// 3. Ini juga bisa, simpelnya kita bisa salin dan menambahkan
const combine = [...buah1, ...buah2, ...buah3, "anggur"];
console.log(combine);

// tanpa spread, kita juga bisa sebenarnya pakai concat()
const mergedConcat = buah1.concat(buah2, buah3, "buah"); // bisa seperti ini
console.log(mergedConcat);

// Dengan object
const user = {
  nama: "Diana",
  umur: 25,
};

// menyalin, lalu menambahkan properti baru
const userBaru = {
  ...user,
  pekerjaan: "Programmer",
};
console.log(userBaru);

const dataUser = [
  { nama: "kurumi", umur: 19, gender: "perempuan" },
  { nama: "sisia", umur: 17, gender: "perempuan" },
  { nama: "muro", umur: 20, gender: "laki laki" },
];
console.log(dataUser);

// ini yang tidak menggunakan method khusus
const tambahData = {
  ...dataUser,
  test: "halo",
};
console.log(tambahData);
/**
 * Ini return nya
{
  '0': { nama: 'kurumi', umur: 19, gender: 'perempuan' },
  '1': { nama: 'sisia', umur: 17, gender: 'perempuan' },
  '2': { nama: 'muro', umur: 20, gender: 'laki laki' },
  test: 'halo'
}
 */

// untuk menambahkan object bisa seperti ini
const tambahDataObj = dataUser.map((data) => ({
  ...data,
  status: true,
}));
console.log(tambahDataObj); // ini akan menambahkan properti ke setiap item array nya

// jika ingin menambahkan properti ke salah satu item saja bisa seperti ini
const spesificData = dataUser.map((data) => {
  return data.nama === "kurumi" ? { ...data, "cita-cita": "jadi anime" } : data;
});
console.log(spesificData);

// ============== Dengan function ==================
// sebenarnya jika dengan function, bisa menggunakan rest parameter

// misalnya function menerima banyak parameter (biasanya bentuk nya array)
function tambah(a, b, c) {
  return a + b + c;
}
const param = [2, 4, 1];
console.log(tambah(...param));
