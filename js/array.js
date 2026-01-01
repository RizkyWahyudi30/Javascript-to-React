// Array ya kayak gini aja
const buah = ["mangga", "manggis", "apel", "semangka", "jerul"];
console.log(buah); // akses semuanya

console.log(buah[0]); // akses by index
console.log(buah[2]);

console.log(buah[1]);
buah[1] = "pepaya"; // ubah index 1
console.log(buah);

// kita bisa hitung panjang pakai .length()
console.log(buah.length); // 5 -> dihitung nya emang bukan pakai kayak index, jadi biasa saja

// lalu kita juga punya beberapa method yang sering dipakai :
// 1. push = tambah elemen ke index akhir
buah.push("kelengkeng");

// 2. pop = hapus elemen terakhir
buah.pop();

// 3. shift = menghapus elemen index pertama
buah.shift();

// 4. unshift = menambah elemen di index pertama
buah.unshift("tomat");

// 5. forEach = simpelnya, hanya untuk mengeksekusi aksi dan tidak dapat membuat array baru
buah.forEach((elemArr, indexArr) => {
  console.log(`index: ${indexArr} -- value: ${elemArr}`);
});

// 6. map = simpelny, dapat return array baru dan juga me-iterate setiap element
let editBuah = buah.map((namaBuah) => namaBuah.toUpperCase());
console.log(editBuah); // membuat array baru dan tidak merusak array lama

/**
 * YANG MEMBEDAKAN DENGAN FOREACH, FOREACH TIDAK BISA DIMASUKKAN KEDALAM SEBUAH VARIABLE
 *
 */

// 7. filter = menyaring array dan membuat array baru (berdasarkan true atau false)
const cekBuah = buah.filter((cekBuah) => cekBuah.startsWith("a"));
console.log(cekBuah);

// atau bisa kayak gini, tapi jarang banget
const junkfood = new Array("spagetti", "kfc", "pizza", "mie");
console.log(junkfood);

// ---------------------- STUDI KASUS agar lebih paham ------------------------

// data default
const users = ["Andi", "Budi", "Citra", "Doni", "Ani"];

users.forEach(
  (elem, index) =>
    console.log(`index-element: ${index}, element-value: ${elem}`) // pake arrow function
);

const upperText = users.map((user) => user.toUpperCase());
console.log(upperText);

const filtText = users.filter((user) => user.startsWith("A"));
console.log(filtText);

const searchText = users
  .filter((user) => user.includes("i"))
  .map((user) => user.toUpperCase());
console.log(searchText);

// kita juga bisa melakukan "apus" (bukan apus sih, cuman kayak ga dimasukin aja)
const newUsers = users.filter((newUser) => newUser !== "Budi");
console.log(newUsers);

const newUser = [...users, "Rizky", "Danang"];
console.log(newUser);

let count = 0;

newUser.forEach((user) => user.length > 1 && count++);
console.log(count);

// jika data lebih kompleks
const products = [
  { id: 1, name: "Laptop", price: 15000000 },
  { id: 2, name: "Mouse", price: 150000 },
  { id: 3, name: "Keyboard", price: 350000 },
  { id: 4, name: "Monitor", price: 2500000 },
];

products.forEach((product) =>
  console.log(`nama: ${product.name} - price: ${product.price}`)
);

const nameProduct = products.map((prod) => prod.name);
console.log(nameProduct);

const filtPrice = products.filter((prod) => prod.price > 1000000);
console.log(filtPrice);

const discountProd = products.map((prod) => ({
  // ({ .. }) namanya = Implicit Return for Object Literals.
  ...prod,
  price: prod.price * 0.9,
}));

const searchProd = products.filter((prod) =>
  prod.name.toLowerCase().includes("lap")
);
console.log(searchProd);

const updateProd = products.filter((prod) => prod.id !== 2);
console.log(updateProd);

// ---------------------- COBA LAGI -------------------------
const students = ["Andi", "Budi", "Citra", "Doni", "Ani", "Rizky"];

students.forEach((student) => console.log(`nama: ${student}`));

const upperStudent = students.map((student) => student.toUpperCase());
console.log(upperStudent);

const takeStudent = students.filter((student) => student.length > 4);
console.log(takeStudent);

const takeSpecial = students.filter((student) => student.includes("i"));
console.log(takeSpecial);

const splitStudent = students.filter((student) => student !== "Budi");
console.log(splitStudent);

const newFormat = students.map((student, index) => `${index + 1}. ${student}`);
console.log(newFormat);

const product = [
  { id: 1, name: "Laptop", price: 15000000 },
  { id: 2, name: "Mouse", price: 150000 },
  { id: 3, name: "Keyboard", price: 350000 },
  { id: 4, name: "Monitor", price: 2500000 },
];

const nameProd = product.map((prod) => prod.name);
console.log(nameProd);

const priceProd = product.filter((prod) => prod.price > 1000000);
console.log(priceProd);

const discount = product.map((prod) => ({
  // ({ .. }) namanya = Implicit Return for Object Literals.
  ...prod,
  price: prod.price * 0.9, // price: -> adalah properti, key -> price: , value nya sisanya
}));
console.log(discount);

const selectProd = product.filter((prod) => prod.id !== 2);
console.log(selectProd);

const searchName = product.filter((prod) => prod.name.includes("o"));
console.log(searchName);

const filtProd = product
  .filter((prod) => prod.price > 300000)
  .map((prod) => `${prod.name} - Rp${prod.price}`);
console.log(filtProd);
