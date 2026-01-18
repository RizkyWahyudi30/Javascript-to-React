## PENGELOLAAN PENUMPAN

ATURAN PROGRAM

- Penumpang angkot
  - func - 1 : tambahPenumpang(namaPenumpang, penumpang)
    - rules :
      1. jika angkot kosong, maka penumpang naik duduk di kursi pertama
      2. penumpang berikutnya duduk di kursi berikutnya
      3. jika ada kursi kosong (karena penumpang turun), penumpang yang naik berikutnya duduk di kursi kosong terlebih dahulu
      4. asumsikan kursi tidak akan penuh dan akan bertambah jika ada penumpang yang naik
      5. nama penumpang yang naik tidak boleh sama, untuk menghindari kebingungan ketika nanti penumpang turun

  - func - 2 : turunPenumpang(namaPenumpang, arrayPenumpang)
    - rules :
      1. jika angkot kosong, tampilkan pesan bahwa angkot kosong
      2. jika ada penumpang yang namanya sesuai, hapus nama penumpang pada array dengan memberi nilai undefined
      3. jika tidak ada penumpang yang namanya sesuai, tampilkan pesan kesalahannya
