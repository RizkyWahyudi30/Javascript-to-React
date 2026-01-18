var penumpang = ["Nida", undefined, "Uju"];

function tambahPenumpang(namaPenumpang, bangkuPenumpang) {
  // validasi jika bangkuPenumpang masih kosong
  if (bangkuPenumpang.length === 0) {
    bangkuPenumpang.push(namaPenumpang);
    return bangkuPenumpang;
  } else {
    // buat perulangan untuk jika angkot sudah ada isinya
    for (var i = 0; i < bangkuPenumpang.length; i++) {
      // cek apakah ada kursi kosong yant tidak terisi
      if (bangkuPenumpang[i] === undefined) {
        bangkuPenumpang[i] = namaPenumpang;
        return bangkuPenumpang;

        // validasi jika ada penumpang yang nama nya sama
      } else if (bangkuPenumpang[i] === namaPenumpang) {
        console.log(namaPenumpang, "Sudah ada di dalam");
        return bangkuPenumpang;

        // jika bangku sudah penuh, tambah bangku diakhir / tidak ada batasnya
      } else if (i === bangkuPenumpang.length - 1) {
        bangkuPenumpang.push(namaPenumpang);
        return bangkuPenumpang;
      }
    }
  }
}

console.log(tambahPenumpang("wahyu", penumpang));
console.log(tambahPenumpang("joko", penumpang));
console.log(tambahPenumpang("dede", penumpang));
console.log(tambahPenumpang("dede", penumpang));

function turunPenumpang(namaPenumpang, bangkuPenumpang) {
  if (bangkuPenumpang.length == 0) {
    console.log("Bangku masih kosong");
    return bangkuPenumpang;
  } else {
    for (var i = 0; i < bangkuPenumpang.length; i++) {
      if (bangkuPenumpang[i] === namaPenumpang) {
        bangkuPenumpang[i] = undefined;
        return bangkuPenumpang;
      } else if (i === bangkuPenumpang.length - 1) {
        console.log(namaPenumpang, "Tidak ditemkan");
        return bangkuPenumpang;
      }
    }
  }
}

console.log(turunPenumpang("Uju", penumpang));
console.log(turunPenumpang("Hadis", penumpang));
