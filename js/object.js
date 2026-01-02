// Basic aja sih

// cara 1. jarang banget ini
const siswa = new Object();
// tambahnya begini :
siswa.nama = "wahyu";
siswa.umur = 17;
siswa.kelas = 11;
siswa.jurusan = "TKJ";
siswa.sekolah = "Grapika";

console.log(siswa);

// cara 2. paling umum
const mahasiswa = {
  nama: "wahyudi",
  jurusan: "Teknik Informatika",
  angkatan: "akt 26",
  prodi: "Informatika",
};
console.log(mahasiswa);

// akses nya 2 cara :
// 1. dot notation
console.log(siswa.nama);
console.log(mahasiswa.jurusan);

// 2. bracket notation
/**
 * Ini digunakan ketika :
 * 1. nama property berasal dari variable (dinamis)
 * 2. nama property mengandung karakter khusus atau spasi
 * 3. ketika kita looping
 *
 */

// 1. variable dynamic
const chooseKey = "prodi";
console.log(mahasiswa[chooseKey]);

// 2. special char or another
const dataAnak = {
  nama: "anak siapa jir",
  "tanda lahir": "di leher",
  "target hidup": "kaga tau",
};
console.log(dataAnak["tanda lahir"]);
console.log(dataAnak["target hidup"]);

// 3. looping
const motor = { merk: "Yamaha", cc: 155, pemilik: "wahyu" };

for (let data in motor) {
  console.log(data); // akan menampilkan key nya saja: merk, cc. pemilik
  console.log(motor[data]); // akan menampilkan semuanya, dan yang diatas akan ditimpa gitu, baca aja lah ya
}
