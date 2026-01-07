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
