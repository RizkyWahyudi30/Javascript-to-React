// MATERI PROMISE
// object di javascript yang mewakili hasil dari proses asynchronous yang belum selesai sekarang, tapi akan selesai di masa depan

// Promise punya 2 kemungkinan
// berhasil -> resolve | gagal -> reject

/**
 * Setiap promise punya 3 status :

| State      | meaning          |
|-------------------------------|
| pending    | proses berjalan  |
| fulfilled  | berhasil         |
| rejected   | gagal            |
|-------------------------------|
 * 
 * Promise tidak bisa balik state (fulfilled / rejected adalah final)
 * 
 */

// contoh sederhana
const janji = new Promise((resolve, reject) => {
  resolve("Berhasil");
});

janji.then((result) => {
  console.log(result);
});

// Proses promise
const fetchData = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve("DATA API");
    reject("SERVER ERROR");
  }, 2000);
});

fetchData
  .then((data) => {
    console.log("Success:", data);
  })
  .catch((err) => {
    console.log("Error:", err);
  });

// atau seperti ini bentuknya
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const condition = true;

    if (condition) return resolve("Data success");

    reject("Data error");
  }, 1000);
});

myPromise
  .then((successMessage) => {
    console.log("Succes:", successMessage);
  })
  .catch((errorMessage) => {
    console.log("Error:", errorMessage);
  })
  .finally(() => {
    console.log("Promise finished");
  });

/**
 * 1. Promise dibuat -> pending
 * 2. setTimeOut berjalan
 * 3. resolve("DATA API") dipanggil
 * 4. Promise jadi fulfilled
 * 5. .then() dieksekusi
 * 6. .catch() dilewati
 *
 */
