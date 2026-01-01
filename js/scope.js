// Scope itu seperti cakupan dari variabel yang kita buat
// ada 3 : global, block, function

// global
let nama = "wahyudi";
function aksesNama() {
  // ini di dalam function
  console.log(nama); // bisa diakses
}
aksesNama();
{
  // ini di dalam block
  nama = "vumi";
  console.log(nama); // ini juga bisa
}

// block
let umur = 17;
{
  console.log(umur); // ini global

  const hari = "kamis";
  console.log(hari); // hanya bisa diakses di dalam block
}
// tidak bisa diakses
// console.log(hari); // ReferenceError: hari is not defined

// function
let keadaan = "baik";
function cekKondisi() {
  const musim = "panas";
  console.log(musim);
}
// tidak akan bisa
// console.log(musim); // ReferenceError: musim is not defined
