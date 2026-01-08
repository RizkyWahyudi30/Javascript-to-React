// RESTRUCTURING

// yaitu mengambil data lama, lalu membuat struktur baru tanpa mengubah data asli (immutable)

/**
 *  Restructuring hampir mirip dengan desctructuring
 *
 * Beda nya: restructuring membentuk struktur baru, lalu kita juga membentuk ulang data
 *
 * Destructuring itu alat
 * sementara restructuring itu tujuan / proses
 *
 */

const user = {
  name: "Sandi",
  age: 20,
};

// Hanya menggunakan destructuring
const { name, age } = user;
console.log(name, age);

/**
 * struktur user tetap sama
 * dan juga hanya membongkar object
 *
 * fokus: extract
 *
 */

// menggunakan restructuring
const userCard = {
  owner: user.name,
  data: user.age,
};
console.log(userCard);

/**
 * membentuk struktur baru, dan
 * juga biasanya untuk kebutuhan UI / State / API
 *
 * fokus: transform
 */

// ----------------------------------------- //
// contoh seperti API
const apiUser = {
  user_id: 1,
  username: "sandi",
  email: "sandianjay@gmail.com",
  status: "done",
  created_at: "2023-01-22",
};

// hanya menggunakan destructuring saja
const { username, email } = apiUser;
console.log(`${username} | ${email}`);
// data belum siap untuk UI

// dengan restructuring
const { user_id, status } = apiUser;

const restrucUser = {
  id: user_id,
  status: status,
};
console.log(restrucUser);

// Pengertian lainnya
/**
 * Restructuring biasanya melibatkan
 * - destructuring
 * - spread operator
 * - rest parameter
 * - method map / filter
 * - conditional logic
 */

// contoh lagi
const response = {
  data: {
    users: [
      { id: 1, name: "Sandi", address: "Jl. Angan - angan" },
      { id: 2, name: "Piku", address: "Jl. Mimumu" },
    ],
  },
};

// restructuring
const {
  data: { users },
} = response;
console.log(users);

// atau jika ingin lebih spesifik
const userName = users.map((user) => user.name);
console.log(userName);

// --------- Latihan soal Restructuring ------------

// soal 1
const apiProduct = {
  product_id: 1,
  product_name: "Laptop",
  product_price: 15000000,
};

const prod = {
  id: apiProduct.product_id,
  name: apiProduct.product_name,
  formattedPrice: apiProduct.product_price,
};
console.log(prod);

// jika data nya seperti ini :
const productsApi = {
  status: "terkirim",
  data: "",
};
