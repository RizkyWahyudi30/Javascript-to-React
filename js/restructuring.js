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
      idU: 10,
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
  id: responseAPI.data.post.idU,
  title: responseAPI.data.post.title,
  authorName: responseAPI.data.post.author.name,
};
console.log(restrucResponse);

// Agar lebih clean, pakai destructuring untuk bongkar object, dan restructuring untuk gabungin object jadi object

// pakai destructuring
const {
  data: {
    post: {
      idU,
      title,
      author: { name },
    },
  },
} = responseAPI;
// console.log(id, title, name);
// output : Rizky { id: 10, title: 'Belajar React' }

// pakai restructuring lagi
const listResponse = {
  id: idU,
  title: title,
  authorName: name,
};
console.log(listResponse);

// ----------- SOAL LAGI --------------
// nguatin

// soal 6 -> React components
const props = {
  post: {
    ids: 1,
    titles: "Belajar laravel",
    authors: {
      names: "Sandi",
      emails: "sandi@gmail.com",
    },
  },
};

// pakai destructuring
const {
  post: {
    ids,
    titles,
    authors: { names },
  },
} = props;

// pakai restructuring
const upList = {
  id: ids,
  title: titles,
  author: names,
};
console.log(upList);

// soal 7 -> API Response List
const respAPI = {
  data: {
    users: [
      { id: 1, full_name: "Andi", role: "admin" },
      { id: 2, full_name: "Budi", role: "user" },
    ],
  },
};

// pakai explicit return
const res = respAPI.data.users.map(({ id, full_name }) => ({
  id: id,
  name: `${full_name}`,
}));
console.log(res);

// soal 8 -> useState initial value
const ApiUser = {
  id: 1,
  username: "rizky",
  email: "rizky@gmail.com",
};

// hanya pakai restructuring
const resApi = {
  id: ApiUser.id,
  name: ApiUser.username,
  isLogin: true,
};

// saya gatau maksudnya pakai useState initial value, bisakah kamu berikan aku contohnya

// soal 9 -> update state
const dataUsers = [
  { id: 1, name: "Andi", active: false },
  { id: 2, name: "Budi", active: false },
];

const data = dataUsers.map((data) => {
  return data.id === 1 ? { ...data, active: true } : data;
});
console.log(data);

// kalau ada pengkondisian tidak usah seperti : => ({ ... })
const data2 = dataUsers.map((data) =>
  // ini menggunakan implicit return
  data.id === 1 ? { ...data, active: true } : data
);

// soal 10 -> Filter + restructuring
const product2 = [
  { id: 1, name: "Iphone", price: 21000000 },
  { id: 2, name: "Jam tangan", price: 45000 },
];

const filterPrice = product2
  .filter((data) => data.price > 500000)
  .map(({ id, name, price }) => ({
    id: id,
    label: `${name} - ${price}`,
  }));
console.log(filterPrice);

// soal 11 -> destructuring parameter (component)
function ProductCard({ id, name, price }) {
  // return `Id: ${id} | Nama produk: ${name} - price: ${price}`;

  return {
    id: id,
    product: `${name} - ${price}`,
  };
}

const prodCard = product2
  .filter(({ price }) => price > 500000)
  .map((item) => ProductCard(item));
console.log(prodCard);
// output nya : [ { id: 1, product: 'Iphone - 21000000' } ]

// atau menggunakan ini :
function ProductCard2(props) {
  const { id, name, price } = props;

  return {
    id: id,
    name_product: name,
    price_product: price,
  };
}
const prodCard2 = product2
  .filter(({ price }) => price > 500000)
  .map((item) => ProductCard2(item));
console.log(prodCard2);
// output : [ { id: 1, name_product: 'Iphone', price_product: 21000000 } ]

// soal 12 -> API Nested + Rename
const response2 = {
  data: {
    order: {
      order_id: 10,
      total_price: 500000,
    },
  },
};

const {
  data: {
    order: { order_id: id, total_price: total },
  },
} = response2;

console.log({ id, total });

// soal 13 -> Remove Sensitive Field
const user2 = {
  id: 1,
  name: "Rizky",
  passwordU: "12345",
};

const { passwordU, ...otherData } = user2;
console.log(otherData);

// soal 14 -> Combine Props + Default Value
const props2 = {
  title2: "Dashboard",
};

const { title2, role = "user" } = props2;
console.log({ title2, role });

// soal 15 ->
const response3 = {
  data: {
    posts: [
      {
        idRes: 1,
        titleRes: "React",
        author: { name: "Rizky" },
      },
    ],
  },
};

const {
  data: { posts },
} = response3;

const resPon3 = posts.map(({ idRes, titleRes, author: { name } }) => ({
  id: idRes,
  title: titleRes,
  author: name,
}));
console.log(resPon3);
