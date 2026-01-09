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
  usn: "Sandi",
  age: 20,
};

// Hanya menggunakan destructuring
const { usn, age } = user;
console.log(usn, age);

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

// ambil pakai destructuring
const { product_id, product_name, product_price } = apiProduct;

// kirim dalam bentuk restructuring
const prod = {
  id: product_id,
  name: product_name,
  formattedPrice: product_price,
};
console.log(prod);

// jika data nya seperti ini :
const productsApi = {
  status: "terkirim",
  data: {
    product: [
      { id: 1, product_name: "Lemari", product_price: 560000 },
      { id: 2, product_name: "Motor", product_price: 10500000 },
      { id: 3, product_name: "Mobil", product_price: 105000000 },
    ],
  },
};

// cara nya seperti ini
// kurang seperti react
// const listProd = {
//   name: productsApi.data.product.map((data) => data.product_name),
//   price: productsApi.data.product.map((data) => data.product_price),
// };
// console.log(listProd);

const listProd = productsApi.data.product.map(
  ({ id, product_name, product_price }) => ({
    // pakai implicit return
    id: id,
    name: product_name,
    price: product_price,
  })
);
console.log(listProd);

// soal 2 -> buang field sensitif
const apiUsers = {
  id: 1,
  name: "Andi",
  email: "andi@gmail.com",
  password: "secret123",
};

const { password, ...safeUser } = apiUsers;
console.log(safeUser);

// soal 3 -> restructuring array (List UI)
const products = [
  { id: 1, name: "Laptop", price: 15000000 },
  { id: 2, name: "Mouse", price: 150000 },
];

// Explicit return
const listUI = products.map(({ id, name, price }) => {
  return {
    id: id,
    label: `${name} - ${price}`,
  };
});
console.log(listUI);

// selain itu bisa menggunakan impilicit return
const listAPI = products.map(({ id, name, price }) => ({
  id: id,
  label: `${name} - ${price}`,
}));
console.log(listAPI);

// soal 4 -> update data (immutable)
const users2 = [
  { id: 1, name: "Andi", active: false },
  { id: 2, name: "Budi", active: false },
];

// ini mengguankan explicit return
const updateUsers = users2.map((data) => {
  return data.id === 2 ? { ...data, active: true } : data;
});
console.log(updateUsers);

// soal 5 -> API, Components props
const responseAPI = {
  data: {
    post: {
      id: 10,
      title: "Belajar React",
      author: {
        name: "Rizky",
        email: "rizky@gmail.com",
      },
    },
  },
};

// pakai restructuring, lebih simpel
const restrucResponse = {
  id: responseAPI.data.post.id,
  title: responseAPI.data.post.title,
  authorName: responseAPI.data.post.author.name,
};
console.log(restrucResponse);

// Agar lebih clean, pakai destructuring untuk bongkar object, dan restructuring untuk gabungin object jadi object

// pakai destructuring
const {
  data: {
    post: {
      id,
      title,
      author: { name },
    },
  },
} = responseAPI;
// console.log(id, title, name);
// output : Rizky { id: 10, title: 'Belajar React' }

// pakai restructuring lagi
const listResponse = {
  id: id,
  title: title,
  authorName: name,
};
console.log(listResponse);

// ----------- SOAL LAGI --------------
// nguatin

// soal 6 -> React components
const props = {
  post: {
    id: 1,
    title: "Belajar laravel",
    author: {
      name: "Sandi",
      email: "sandi@gmail.com",
    },
  },
};
