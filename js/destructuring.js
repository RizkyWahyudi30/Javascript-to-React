// Materi destructuring & restructuring

// Destrucuting
// mengambil nilai dari array atau object dan menyimpan ke dalam variable

// ## DESTRUCTURING ARRAY ##
// * tanpa destructuring
const angka = [1, 2, 3, 4];

const satu = angka[0];
const dua = angka[1];
const tiga = angka[2];

console.log(satu, dua, tiga);
// ini terlalu lama

// * dengan desctructuring
const [angkaSatu, angkaDua, angkaTiga] = angka;
console.log(angkaSatu, angkaDua, angkaTiga);

// lebih cepat dan ringkas

// kalau mau ada yang tidak di-include kan atau di skip, bisa seperti ini :
const [pertama, , ketiga] = angka;
console.log(pertama);
console.log(ketiga);

// desctructuring & rest parameter pada array
const warna = ["merah", "kuning", "hijau", "biru"];

const [warna1, ...siwaWarna] = warna;
console.log(warna1);
console.log(siwaWarna);

// kita juga bisa membuat default value pada destructuring
// const [a, b, c = "yellow"] = ["red", "green"];
// console.log(a, b, c);

// ## DECTRUCTURING OBJECT ##
// tanpa destructuring
const user = {
  nama: "Rudi",
  umur: 30,
};

const nama = user.nama;
const umur = user.umur;
console.log(nama, umur);

// dengan destructuring
const user2 = {
  namaUsn: "Gumam",
  umurUsn: 43,
};

// ketiga menggunakan destructuring pada object, variable yang dimasukkan ke dalam kurung kurawal sesuai dengan nama key pada referensi
const { namaUsn, umurUsn } = user2;
console.log(namaUsn, umurUsn);

// tapi kita bisa ubah nama variable nya, jadi tidak harus mengikuti key nya
const guru = {
  nama: "arina",
  umur: 20,
  status: "active",
};

const { nama: namaGuru, umur: umurGuru, status: statusGuru } = guru;
console.log(namaGuru, umurGuru, statusGuru);

// Kurang lebih destructuring seperti itu
// nested desctructuring
const listMurid = [
  {
    nama: "dinda",
    umur: 17,
    kelas: "12 IPA",
    alamat: {
      kota: "Jakarta",
      negara: "Indonesia",
    },
  },
  {
    nama: "imumi",
    umur: 15,
    kelas: "10 IPS",
    alamat: {
      kota: "Bandung",
      negara: "Indonesia",
    },
  },
];

// ada beberapa cara terkait tujuannya, karena ini bentuknya array of object

// cara 1 -> simpel cuman mengambil urutan dari index nya saja
const [murid1, murid2] = listMurid;
console.log(murid1.nama);
console.log(murid2.alamat);

// cara 2 -> langsung mengambil isi properti objek nya
const [
  {
    nama: namaMurid1,
    alamat: { kota: alamatMurid1 },
  },
  {
    nama: namaMurid2,
    alamat: { negara: negaraImumi },
  },
] = listMurid;
console.log(namaMurid1);
console.log(namaMurid2);
console.log(alamatMurid1);
console.log(negaraImumi);

listMurid.forEach(({ nama, alamat: { kota } }) => {
  console.log(`Murid bernama ${nama}, tinggal di kota ${kota}`);
});

// latihan 10 soal destructuring
// soal 1 : penukaran value
let a = "kanan";
let b = "kiri";

// pakai desctructuring
[a, b] = [b, a];
/**
 * bagian kiri ([a, b]), sisi a, mengambil bagian kanan ([b, a]) sisi kanan
 * sebaliknya juga begitu
 *
 * bagian kiri sisi b, mengambil bagian kanan sisi kanan / a
 *
 */

console.log(a);
console.log(b);

// soal 2 : alias sederhana / rename variable
const price = { id: 1, price: 5000 };

const { price: hargaBarang } = price;
console.log(hargaBarang);

// soal 3 -> default value
const usn = {}; // kalau ini ada isinya, berarti pakai yang ini

// yang default value yang ini
const { username = "Rizky" } = usn;
console.log(username);

// soal 4 -> skipping elements
const colors = ["red", "yellow", "green", "blue"];

const [elem1, , elem3] = colors;
console.log(elem1);
console.log(elem3);

// soal 5 -> rest operator di array
const players = ["Andi", "Budi", "Caca", "Dedi"];

const [winner, ...others] = players;
console.log(winner);
console.log(others);

// soal 6 -> Nested object
const employee = {
  name: "Budi",
  address: {
    city: "Bandung",
    zip: 4013,
  },
};
const {
  address: { city: kotaAsal },
} = employee;
console.log(kotaAsal);

// soal 7 -> array di dalam object
const person = {
  nama: "Siska",
  hobbies: ["Reading", "Gaming", "Cooking"],
};

const {
  hobbies: [, elem2],
} = person;
console.log(elem2);

// soal 8 -> destructuring parameter
const tampilkanInfo = ({ judul, penulis }) => {
  console.log(`Buku ${judul} ditulis oleh ${penulis}`);
};

tampilkanInfo({ judul: "Laskar pelangi", penulis: "Andrea Hirata" });

// soal 9 -> destructuring dalam map
const products = [
  { id: 1, name: "Laptop", stock: 10 },
  { id: 2, name: "Mouse", stock: 5 },
];

const checkProd = products.map(({ name }) => name);
console.log(checkProd);

// soal 10 -> desttructuring kompleks
const apiResponse = [
  {
    id: 1,
    location: {
      coords: { lat: -6.2, lng: 106.8 },
    },
  },
];

const [
  {
    location: {
      coords: { lat: latitude, lng: longitude },
    },
  },
] = apiResponse;
console.log(latitude, longitude);

// soal 11 -> nested object, rename, default
const dataUser = {
  id: 1,
  profile: {
    username: "rizky",
    email: "rizky@gmail.com",
  },
};

const {
  profile: { username: names, email },
  role = "user",
} = dataUser;
console.log(names, email, role);

// soal 12 -> array, skip, rest
const scores = [90, 80, 70, 60, 50];

const [firstScore, , ...restScore] = scores;
console.log(firstScore);
console.log(restScore);

// soal 13 -> destructuring parameter
const printOrder = ({ product, price, qty = 1 }) => {
  console.log(`Order: ${product} | Qty: ${qty} | Total: ${price * qty}`);
};
printOrder({ product: "Laptop", qty: 2, price: 15000000 });

// soal 14 -> desctruturing, rest
const settings = { theme: "dark", language: "id", layout: "grid", debug: true };

const { theme, ...otherSettings } = settings;
console.log(theme);
console.log(otherSettings);

// soal 15 -> api style response
const response = {
  status: 200,
  data: {
    user: {
      id: 1,
      name: "Andi",
      address: {
        city: "Jakarta",
        country: "Indonesia",
      },
    },
  },
};

const {
  data: {
    user: {
      name,
      address: { city, country },
    },
  },
} = response;
console.log(name);
console.log(city);
console.log(country);
