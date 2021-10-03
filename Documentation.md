## #User

**POST** | **Register**

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

**Response - (user)Membuat Transaksi.**

HTTP Response : **201 Ok**

```json
{
  "message": "sukses membuat transaksi",
  "data_Lukisan": {
    "id": 4,
    "userId": 7,
    "namaLukisan": "brahma",
    "author": "dedy",
    "tahunBuat": "2020",
    "deskripsi": "dunia penuh rasa benci"
  },
  "data_transaksi": {
    "id": 4,
    "lukisanId": 4,
    "status": true,
    "tanggalSimpan": "2021-10-03T10:01:44.000Z",
    "tanggalAmbil": null,
    "rakId": 4
  }
}
```

**Response - (user)Membuat transaksi, tidak memasukan accesstoken.**

HTTP Response: **401 Unauthorized**

```json
{
  "message": "Required Access Token"
}
```

**Response - (user)Membuat transaksi, dan memasukan nama lukisan dan author yang sudah terdaftar.**

HTTP Response : **403 Forbidden**

```json
{
  "message": "Lukisan sudah ada, silahkan masukan data lain"
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

**Response - (admin)Create Transaksi, tidak memasukan access token pada header**

```json
{
  "message": "Required Access Token"
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

**Response - (user)Update Transaksi.**

HTTP Response : **200 Ok**

```json
{
  "message": "Sukses melakukan updating data.",
  "new_data": {
    "id": 5,
    "userId": 5,
    "namaLukisan": "Senja bersama kopi",
    "author": "Abdul latif",
    "tahunBuat": "2011",
    "deskripsi": "Sebuah lukisan tentang senja dan cerita bersamanya"
  }
}
```

**Response - (user)updating transaksi, tidak memasukan accesstoken.**

HTTP Response: **401 Unauthorized**

```json
{
  "message": "Required Access Token"
}
```

**Response - (user)updating transaksi, inputan kurang/tidak mengirim data.**

HTTP Response : **422 Unprocessable entity**

```json
{
  "message": "Silahkan cek Kembali inputan anda"
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
  "message": "Sukses Update Data",
  "newData": {
    "id": 2,
    "userId": 5,
    "namaLukisan": "marathon anim",
    "author": "Latif",
    "tahunBuat": "2021",
    "deskripsi": "Wibuu akut"
  },
  "currentUser": {
    "nama": "gilang",
    "role": "admin"
  }
}
```

**Response - (admin)updating transaksi, tidak memasukan accesstoken.**

HTTP Response: **401 Unauthorized**

```json
{
  "message": "Required Access Token"
}
```

**Response - (admin)updating transaksi, tidak memasukan/mengirim data.**

HTTP Response: **422 Unprocessable Entity**

```json
{
  "message": "Silahkan cek Kembali inputan anda"
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

**Response - (user) Get All Lukisan**

HTTP Response: **403 forbidden**

```json
{
  "message": "Unauthorized Access"
}
```

---

**GET | Mengambil Data Transaksi By ID**

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
    "id": 12,
    "lukisanId": 12,
    "status": true,
    "tanggalSimpan": "2021-10-03T10:01:44.000Z",
    "tanggalAmbil": null,
    "rakId": 12
  }
}
```

**Response - (admin)Mengambil data transaksi berdasarkan Id.**

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

**Response - (admin)Mengambil transaksi berdasarkan Id, tidak memasukan accesstoken.**

HTTP Response: **401 Unauthorized**

```json
{
  "message": "Required Access Token"
}
```

---

**GET** | **Mengambil semua data transkasi.**

```textile
localhost:3000/transaksis
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

**Response - (admin)Get All Transaksi.**

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

**Response - (user)Get All Transaksi.**

HTTP Response : **403 Forbidden**

```json
{
  "message": "Unauthorized Access"
}
```

---

**GET | mengambil lukisan dari gudang berdasarkan id**

```textile
localhost:3000/takes/:id
```

---

**Headers**

| accesstoken | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQsImlhdCI6MTYzMzEwMTU1M30.T7hr9YGD-rYvYekzZXUm8fOoNvh7Wf8gQX6zUkJ5_Fk |
| ----------- | ------------------------------------------------------------------------------------------------------------------------ |

---

**Response - (admin) mengambil lukisan dari gudang.**

HTTP Response : **200 OK**

```json
{
  "message": "Terimakasih sudah menggunakan jasa kami",
  "Transaksi": {
    "id": 1,
    "lukisanId": 1,
    "status": false,
    "tanggalSimpan": "2021-10-03T15:03:57.000Z",
    "tanggalAmbil": "2021-10-03T15:10:29.880Z"
  },
  "currentUser": {
    "nama": "gilang",
    "role": "admin"
  }
}
```

**Response - (admin) mengambil lukisan dari gudang, tidak mengisi/mengirim access token.**

HTTP Response : **401 Unauthorized**

```json
{
  "message": "Required Access Token"
}
```

**Response - (user) mengambil lukisan dari gudang.**

HTTP Response : **200 OK**

```json
{
  "message": "Terimakasih Sudah menggunakan jasa kami"
}
```

**Response - (user) mengambil lukisan dari gudang, menggunakan id lukisan orang lain.**

HTTP Response : **403 Forbidden**

```json
{
  "message": "Anda tidak mengambil lukisan orang lain"
}
```

**Response - (user) mengambil lukisan dari gudang, tidak memasukan access token.**

HTTP Response : **401 Unauthorized**

```json
{
  "message": "Required Access Token"
}
```

---

# LEMARI

### GET | Lemari

    localhost:3000/lemaris

**Headers**

| accesstoken | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQsImlhdCI6MTYzMzEwMTU1M30.T7hr9YGD-rYvYekzZXUm8fOoNvh7Wf8gQX6zUkJ5_Fk |
| ----------- | :----------------------------------------------------------------------------------------------------------------------- |

##### Response - Sukses Login Admin

HTTP Response : **200 OK**

    {
        "message": "Sukses mengambil data",
        "data": [
            {
                "id": 1,
                "gedung": "a",
                "nomorLemari": "1"
            },
            {
                "id": 2,
                "gedung": "a",
                "nomorLemari": "2"
            },
            {
                "id": 3,
                "gedung": "a",
                "nomorLemari": "3"
            },
            {
                "id": 4,
                "gedung": "b",
                "nomorLemari": "1"
            },
            {
                "id": 5,
                "gedung": "b",
                "nomorLemari": "2"
            },
            {
                "id": 6,
                "gedung": "b",
                "nomorLemari": "3"
            },
            {
                "id": 7,
                "gedung": "c",
                "nomorLemari": "1"
            },
            {
                "id": 8,
                "gedung": "c",
                "nomorLemari": "2"
            },
            {
                "id": 9,
                "gedung": "c",
                "nomorLemari": "3"
            }
        ] }

**Response - (admin) Get All Lemari, tidak memasukan accesstoken.**

HTTP Response: **401 Unauthorized**

    {
      "message": "Required Access Token"
    }

### GET | Lemari

    localhost:3000/lemaris

**Headers**

| accesstoken | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQsImlhdCI6MTYzMzEwMTU1M30.T7hr9YGD-rYvYekzZXUm8fOoNvh7Wf8gQX6zUkJ5_Fk |
| ----------- | :----------------------------------------------------------------------------------------------------------------------- |

**Response - (user) Tidak dapat melakukan login ke dalam Get All Lemari**

HTTP Response: **403 Forbidden**

    {
      "message": "Unauthorized Access"
    }

**Response - (user)Tidak memasukan accesstoken.**

HTTP Response: **401 Unauthorized**

    {
      "message": "Required Access Token"
    }

---

# RAK

### GET | Get All Rak

    localhost:3000/raks

**Headers**

| accesstoken | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQsImlhdCI6MTYzMzEwMTU1M30.T7hr9YGD-rYvYekzZXUm8fOoNvh7Wf8gQX6zUkJ5_Fk |
| ----------- | :----------------------------------------------------------------------------------------------------------------------- |

#### Response - Sukses Login Admin

HTTP Response : **200 OK**
**Status (false) Data masih kosong | status (true) Data masih ada**

     {
         "message": "Succes get all data",
         "rak": [
             {
                 "id": 1,
                 "lemariId": 1,
                 "status": false | true
             }
         ] }
      }

**Response - (admin) Get All Rak, tidak memasukan accesstoken.**

HTTP Response: **401 Unauthorized**

    {
      "message": "Required Access Token"
    }

### GET | Get All Rak

    localhost:3000/raks

**Headers**

| accesstoken | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQsImlhdCI6MTYzMzEwMTU1M30.T7hr9YGD-rYvYekzZXUm8fOoNvh7Wf8gQX6zUkJ5_Fk |
| ----------- | :----------------------------------------------------------------------------------------------------------------------- |

**Response - (user) Tidak dapat melakukan login ke dalam Get All Rak**

HTTP Response: **403 Forbidden**

    {
      "message": "Unauthorized Access"
    }

**Response - (user)Tidak memasukan accesstoken.**

HTTP Response: **401 Unauthorized**

    {
      "message": "Required Access Token"
    }

### GET | Get Data By Id

    localhost:3000/raks/1

**Headers**

| accesstoken | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQsImlhdCI6MTYzMzEwMTU1M30.T7hr9YGD-rYvYekzZXUm8fOoNvh7Wf8gQX6zUkJ5_Fk |
| ----------- | :----------------------------------------------------------------------------------------------------------------------- |

#### Response - Sukses Login Admin

HTTP Response : **200 OK**
**Status (false) Data masih kosong | status (true) Data masih ada**

     {
         "message": "Succes get all data",
         "rak": [
             {
                 "id": 1,
                 "lemariId": 1,
                 "status": false | true
             }
         ] }
      }

### GET | Get Data By Id

      localhost:3000/raks/2

#### Response - Admin tidak menemukan data Rak

HTTP Response : **404 Not Found**

    {
        "message": "Rak tidak ditemukan"
    }

**Response - (admin) Get Data By Id Rak, tidak memasukan accesstoken.**

HTTP Response: **401 Unauthorized**

    {
      "message": "Required Access Token"
    }

### GET | Get Data By Id

    localhost:3000/raks

**Headers**

| accesstoken | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQsImlhdCI6MTYzMzEwMTU1M30.T7hr9YGD-rYvYekzZXUm8fOoNvh7Wf8gQX6zUkJ5_Fk |
| ----------- | :----------------------------------------------------------------------------------------------------------------------- |

**Get Data By Id (user)**

    localhost:3000/raks/1

**response - (user) Memasukan userId tidak sesuai user yang sedang login.**
HTTP Response : **422 Unprocessable Entity**

    {
      "message": "Anda tidak bisa mengakses data ini"
    }

**Get Data By Id (user)**

    localhost:3000/raks/3

**response - (user) Memasukan userId tidak sesuai.**
HTTP Response : **404 Not Found**

    {
      "message": "Id Rak tidak ditemukan"
    }

**Get Data By Id (user)**

    localhost:3000/raks/2

**response - (user) sudah dapat melihat data**
HTTP Response : **200 OK**

    {
            "message": "Sukses mendapatkan data",
    	    "lokasi_simpan": {
    		    "status": true,
    		    "gedung_simpan": "a",
    		    "nomor_lemari": 1,
    		    "rak_code": 2
    	    }
    }

**Response - (user) Tidak dapat melakukan login ke dalam Get All Rak**

HTTP Response: **403 Forbidden**

    {
      "message": "Unauthorized Access"
    }

**Response - (user)Tidak memasukan accesstoken.**

HTTP Response: **401 Unauthorized**

    {
      "message": "Required Access Token"
    }

---

### By: Dimas Maulana, Gilang Sebastian, Saeful Alimi
