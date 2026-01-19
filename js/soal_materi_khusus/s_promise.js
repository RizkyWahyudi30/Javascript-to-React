// =========================================================== //
// MULAI LATIHAN SOAL

// soal 1 - Promise dasar
function delayMessage(message, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(message);
    }, delay);
  });
}

delayMessage("Hello promise", 2000).then((result) => console.log(result));

// soal 2 - Promise reject (error)
function checkAge(age) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (age >= 18) return resolve("Access granted");

      reject("Access denied");
    }, 1000);
  });
}

checkAge(20)
  .then((check) => console.log(check))
  .catch((err) => console.log(err));

// soal 3 - promise chaining
function addFive(n) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`[1] Angka yang user masukkan: ${n}`);
      resolve(n + 5);
    }, 1000);
  });
}

function multiplyTwo(n) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`[2] Lalu hasil: ${n}`);
      resolve(n * 2);
    }, 1000);
  });
}

function minusThree(n) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`[3] Dan hasil setelah diatas: ${n}`);
      resolve(n - 3);
    }, 1000);
  });
}

addFive(14)
  .then((val) => {
    return multiplyTwo(val);
  })
  .then((val) => {
    return minusThree(val);
  })
  .then((finalRes) => console.log("[4] Final result:", finalRes));

// soal 4 - Promise dengan object
function getUser({ id, name, role }) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (role !== "admin") return reject("Data not approved");

      resolve({ id, name, role });
    }, 1000);
  });
}

getUser({ id: 1, name: "kukumi", role: "user" })
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

// soal 5 - Simulasi Callback Hell
