## #User

**POST**   | **Register**

```textile
localhost:3000/users/register
```

---

**Body** urlencoded

| nama         | ... |
| ------------ | --- |
| **kota**     | ... |
| **email**    | ... |
| **password** | ... |

---

##### Response - Input Kurang atau Kosong.

HTTP Response : **422 Unprocessable Entity**

```json
{
  "message": "Silahkan cek inputan anda kembali"
}
```

#####

##### Response - Sukses Membuat Akun.

HTTP Response : **201 Created**

```json
{
  "message": "Akun sudah terdaftar",
  "userId": 4,
  "nama": "latif"
}
```

#####

##### Response - Email Sudah Terdaftar.

HTTP Response : **409 Conflict**

```json
{
  "message": "Email sudah terdaftar"
}
```

---

**POST** | **Login**

```textile
localhost:3000/users/login
```

---

**Body** urlencoded

**email**

**password**

---

**Response - Email / Password Salah.**

HTTP Response : **422 Unprocessable Entity**

```json
{
  "message": "Email / Password Salah"
}
```

##### Response - Sukses login.

HTTP Response : **200 Ok**

```json
{
  "message": "login success",
  "YourToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQsImlhdCI6MTYzMzEwMTM5Mn0.S0JwC5bUQ74WvY4V-Egu2aF3zcO-M3sG_QkDBTNzPRk"
}
```

---

**GET** | **Get Data By Id**

```textile
localhost:3000/users/:id
```

---

**Headers**

| accesstoken | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQsImlhdCI6MTYzMzEwMTU1M30.T7hr9YGD-rYvYekzZXUm8fOoNvh7Wf8gQX6zUkJ5_Fk |
| ----------- | :----------------------------------------------------------------------------------------------------------------------- |

---

**Response - (user)Get By Id, tidak memasukan accesstoken.**

HTTP Response: **401 Unauthorized**

```json
{
  "message": "Required Access Token"
}
```

**Response - (user) Memasukan userId tidak sesuai user yang sedang login.**

HTTP Response : **422 Unprocessable Entity**

```json
{
  "message": "Anda tidak bisa mengakses data ini"
}
```

##### Response - (user) Sukses Get Data By Id.

HTTP Response : **200 Ok**

```json
{
  "message": "Sukses mengambil data",
  "user": {
    "id": 4,
    "nama": "latif",
    "kota": "Cilacap",
    "email": "latif@gmail.com",
    "password": "$2a$10$MOK8tKXN5s..4koSWQChreoRdhspddCIYGyxumQTtqwkKBzpIw2gG",
    "role": "user"
  }
}
```

**Response - (admin) Get By ID**

HTTP Response : **200 Ok**

```json
{
  "message": "Sukses mengambil data",
  "user": {
    "id": 4,
    "nama": "latif",
    "kota": "Cilacap",
    "email": "latif@gmail.com",
    "password": "$2a$10$MOK8tKXN5s..4koSWQChreoRdhspddCIYGyxumQTtqwkKBzpIw2gG",
    "role": "user"
  }
}
```

---

**GET** | **Get All Data.**

```textile
localhost:3000/users/:id
```

---

**Headers**

| accesstoken | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQsImlhdCI6MTYzMzEwMTU1M30.T7hr9YGD-rYvYekzZXUm8fOoNvh7Wf8gQX6zUkJ5_Fk |
| ----------- | :----------------------------------------------------------------------------------------------------------------------- |

---

**Response - (admin)Get All transaksi, tidak memasukan accesstoken.**

HTTP Response: **401 Unauthorized**

```json
{
  "message": "Required Access Token"
}
```

##### Response - (admin)Get All.

HTTP Response : **200 Ok**

```json
{
  "message": "sukses mengambil data",
  "data": [
    {
      "id": 1,
      "nama": "dimas",
      "kota": "Depok",
      "email": "dimas@gmail.com",
      "password": "$2a$10$HQOYqpGeFbcwEiPj1uDY1.HSkTiee9u0Z17kohQzyE1RED7p73MSa",
      "role": "admin"
    },
    {
      "id": 2,
      "nama": "gilang",
      "kota": "Bogor",
      "email": "gilang@gmail.com",
      "password": "$2a$10$GzWOes4YwQPxnBezCBoQvOV8l2SNaBX.6MImVIbu.TskWgTSQIX82",
      "role": "admin"
    },
    {
      "id": 3,
      "nama": "saeful",
      "kota": "Jakarta",
      "email": "saeful@gmail.com",
      "password": "$2a$10$0crqzjoCZwJ05CTGUjD6oOF2g2cSOScWuqg3NKymqLXjbcXuwlKT2",
      "role": "admin"
    },
    {
      "id": 4,
      "nama": "latif",
      "kota": "Cilacap",
      "email": "latif@gmail.com",
      "password": "$2a$10$MOK8tKXN5s..4koSWQChreoRdhspddCIYGyxumQTtqwkKBzpIw2gG",
      "role": "user"
    }
  ],
  "currentUser": {
    "id": 1,
    "nama": "dimas",
    "kota": "Depok",
    "email": "dimas@gmail.com",
    "password": "$2a$10$HQOYqpGeFbcwEiPj1uDY1.HSkTiee9u0Z17kohQzyE1RED7p73MSa",
    "role": "admin"
  }
}
```

---

## #Transaksi

**POST** | **Membuat Transaksi.**

```textile
localhost:3000/transaksis
```

---

**Headers**

| accesstoken | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQsImlhdCI6MTYzMzEwMTU1M30.T7hr9YGD-rYvYekzZXUm8fOoNvh7Wf8gQX6zUkJ5_Fk |
| ----------- | :----------------------------------------------------------------------------------------------------------------------- |

**Body** urlencoded

| namaLukisan   | ... |
| ------------- | :-: |
| **author**    | ... |
| **tahunBuat** | ... |
| **deskripsi** | ... |

---

**Response - (user)Membuat transaksi, tidak memasukan accesstoken.**

HTTP Response: **401 Unauthorized**

```json
{
  "message": "Required Access Token"
}
```

**Response - (user)Membuat Transaksi.**

HTTP Response : **201 Ok**

```json
{
  "message": "sukses membuat transaksi",
  "data_Lukisan": {
    "id": 1,
    "userId": 4,
    "namaLukisan": "mentari pagi",
    "author": "yusril",
    "tahunBuat": "2019",
    "deskripsi": "lukisan tentang keindahan"
  },
  "data_transaksi": {
    "id": 1,
    "lukisanId": 1
  }
}
```

**Response - (user)Create Transaksi, Inputan kurang / tidak mengirim data.**

HTTP Response : **422 Unprocessable Entity**

```json
{
  "message": "Tolong cek lagi inputan anda"
}
```

**Response - (admin)Create Transaksi.**

HTTP Response : **403 Forbidden**

```json
{
  "message": "Unauthorized Access"
}
```

---

**PATCH** | **Updating Transaksi.**

```textile
localhost:3000/transaksis/:id
```

---

**Headers**

| accesstoken | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQsImlhdCI6MTYzMzEwMTU1M30.T7hr9YGD-rYvYekzZXUm8fOoNvh7Wf8gQX6zUkJ5_Fk |
| ----------- | ------------------------------------------------------------------------------------------------------------------------ |

**Body** urlencoded

| namaLukisan   | ... |
| ------------- | --- |
| **author**    | ... |
| **tahunBuat** | ... |
| **deskripsi** | ... |

---

**Response - (user)Membuat transaksi, tidak memasukan accesstoken.**

HTTP Response: **401 Unauthorized**

```json
{
  "message": "Required Access Token"
}
```

**Response - (user)Update Transaksi.**

HTTP Response : **200 Ok**

```json
{
  "message": "Sukses melakukan updating data.",
  "new_data": {
    "id": 5,
    "userId": 5,
    "namaLukisan": "ibasfasd",
    "author": "latif",
    "tahunBuat": "2011",
    "deskripsi": "pengaranganya ngabluu"
  }
}
```

**Response - (user)Update Transaksi. Pada data orang lain**

HTTP Response : **403 Forbidden**

```json
{
  "message": "Anda tidak bisa mengakses data ini"
}
```

**Response - (admin)Update Transaksi.**

HTTP Response : **200 Ok**

```json
{
  "message": "Sukses melakukan updating data.",
  "new_data": {
    "id": 5,
    "userId": 5,
    "namaLukisan": "Sakura",
    "author": "latif",
    "tahunBuat": "2011",
    "deskripsi": "Pelukisan sakura realistik"
  }
}
```

---

**GET | Mengambil Data Lukisan By ID**

```textile
localhost:3000/lukisans/:id
```

---

**Headers**

| accesstoken | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQsImlhdCI6MTYzMzEwMTU1M30.T7hr9YGD-rYvYekzZXUm8fOoNvh7Wf8gQX6zUkJ5_Fk |
| ----------- | ------------------------------------------------------------------------------------------------------------------------ |

---

**Response - (user)Mengambil lukisan berdasarkan Id, tidak memasukan accesstoken.**

HTTP Response: **401 Unauthorized**

```json
{
  "message": "Required Access Token"
}
```

**Response - (user)Mengambil lukisan berdasarkan Id, tidak sesuai id miliknya sendiri.**

HTTP Response: **403 Forbidden**

```json
{
  "message": "Anda tidak bisa mengakses data ini"
}
```

**Response - (user)Mengambil lukisan berdasarkan Id.**

HTTP Response: **200 Ok**

```json
{
  "message": "Sukses mendapatkan data",
  "data_lukisan": {
    "id": 5,
    "userId": 5,
    "namaLukisan": "Sakura",
    "author": "latif",
    "tahunBuat": "2011",
    "deskripsi": "Pelukisan sakura realistik"
  }
}
```

**Response - (admin)Mengambil lukisan berdasarkan Id.**

HTTP Response: **200 Ok**

```json
{
  "message": "Sukses mengambil data",
  "data_lukisan": {
    "id": 2,
    "userId": 5,
    "namaLukisan": "Bungakuu",
    "author": "dimas",
    "tahunBuat": "2021",
    "deskripsi": "Lukisan tangis darah"
  },
  "currentUser": {
    "nama": "dimas",
    "role": "admin"
  }
}
```

---

**GET** | **Get All Data.**

```textile
localhost:3000/lukisans
```

---

**Headers**

| accesstoken | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQsImlhdCI6MTYzMzEwMTU1M30.T7hr9YGD-rYvYekzZXUm8fOoNvh7Wf8gQX6zUkJ5_Fk |
| ----------- | ------------------------------------------------------------------------------------------------------------------------ |

---

**Response - (admin)Get All Lukisan, tidak memasukan accesstoken.**

HTTP Response: **401 Unauthorized**

```json
{
  "message": "Required Access Token"
}
```

##### Response - (admin)Get All.

HTTP Response : **200 Ok**

```json
{
  "message": "Sukess mendapatkan data",
  "data": [
    {
      "id": 1,
      "userId": 4,
      "namaLukisan": "TajMahal",
      "author": "yusril",
      "tahunBuat": "2010",
      "deskripsi": "Tempat terindah"
    },
    {
      "id": 2,
      "userId": 4,
      "namaLukisan": "Panca",
      "author": "Yusril",
      "tahunBuat": "2015",
      "deskripsi": "lukisan tentang indra"
    },
    {
      "id": 3,
      "userId": 4,
      "namaLukisan": "absurb",
      "author": "yusril",
      "tahunBuat": "2010",
      "deskripsi": "Lukisan peninggalan"
    }
  ]
}
```

---

**GET | Mengambil Data By ID**

```textile
localhost:3000/transaksis/:id
```

---

**Headers**

| accesstoken | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQsImlhdCI6MTYzMzEwMTU1M30.T7hr9YGD-rYvYekzZXUm8fOoNvh7Wf8gQX6zUkJ5_Fk |
| ----------- | ------------------------------------------------------------------------------------------------------------------------ |

---

**Response - (user)Mengambil transaksi berdasarkan Id, tidak memasukan accesstoken.**

HTTP Response: **401 Unauthorized**

```json
{
  "message": "Required Access Token"
}
```

**Response - (user)Mengambil transaksi berdasarkan Id, tidak sesuai id miliknya sendiri.**

HTTP Response: **403 Forbidden**

```json
{
  "message": "Anda tidak bisa mengakses data ini"
}
```

**Response - (user)Mengambil transaksi berdasarkan Id.**

HTTP Response: **200 Ok**

```json
{
  "message": "Sukses mengambil data",
  "transaksi": {
    "id": 2,
    "lukisanId": 2,
    "status": true,
    "tanggalSimpan": "2021-10-02T00:46:37.000Z",
    "tanggalAmbil": null
  }
}
```

**Response - (admin)Mengambil transaksi berdasarkan Id.**

HTTP Response: **200 Ok**

```json
{
  "message": "Sukses mengambil data",
  "transaksi": {
    "id": 2,
    "lukisanId": 2,
    "status": true,
    "tanggalSimpan": "2021-10-02T02:40:42.000Z",
    "tanggalAmbil": null
  },
  "currentUser": {
    "nama": "dimas",
    "role": "admin"
  }
}
```

---

**GET** | **Get All Data.**

```textile
localhost:3000/transaksis/:id
```

---

**Headers**

| accesstoken | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQsImlhdCI6MTYzMzEwMTU1M30.T7hr9YGD-rYvYekzZXUm8fOoNvh7Wf8gQX6zUkJ5_Fk |
| ----------- | ------------------------------------------------------------------------------------------------------------------------ |

---

**Response - (admin)Get All Transaksi, tidak memasukan accesstoken.**

HTTP Response: **401 Unauthorized**

```json
{
  "message": "Required Access Token"
}
```

##### Response - (admin)Get All.

HTTP Response : **200 Ok**

```json
{
  "message": "Sukses mendapatkan data",
  "data": [
    {
      "id": 1,
      "lukisanId": 1,
      "status": true,
      "tanggalSimpan": "2021-10-02T00:46:37.000Z",
      "tanggalAmbil": null
    },
    {
      "id": 2,
      "lukisanId": 2,
      "status": true,
      "tanggalSimpan": "2021-10-02T00:46:37.000Z",
      "tanggalAmbil": null
    },
    {
      "id": 3,
      "lukisanId": 3,
      "status": true,
      "tanggalSimpan": "2021-10-02T00:46:37.000Z",
      "tanggalAmbil": null
    }
  ]
}
```

---
