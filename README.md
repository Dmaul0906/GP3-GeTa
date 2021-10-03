# GeTa

### Gudang Lukisan

---

[![](https://github.com/Dmaul0906/assets/blob/main/lukisan_api's-Page-1.jpg?raw=true)](https://github.com/Dmaul0906/assets/blob/main/lukisan_api's-Page-1.jpg?raw=true)

Link gambar : https://github.com/Dmaul0906/assets/blob/main/lukisan_api's-Page-1.jpg?raw=true

---

```json
#table user :
field: userId(PK), kota, email, password

end-point:
1. POST "/user/register" => ["user"] user dapat melakukan resigtrasi akun, dengan  nama, kota, email, password
2. POST "/user/login" => ["user", "admin"]user dapat melakukan login, setelah selesai membuat akun. dengan memasukan email, dan password
3. GET "/user/:id" => ["user", "admin"]user dapat melihat aku dengan id miliknya sendiri.
4. GET "/user" => ["admin"] admin dapat melihat keseluruhan data.
5. PATCH "user/:id" => ["user","admin"]user dapat melakukan updating data miliknya sendiri. sedangkan admin bisa pada semua data.
```

```json
#table transaksi :
field: transaksiId(PK), lukisanId(FK), rakId(FK), status, tanggal simpan, tanggal ambil.

end-point:
1. POST "/transaksi" => ["user"]user dapat menambahkan data transaksi, dengan catatan
 harus melakukan pendataran untuk lukisan dulu, jadi user harus menginputkan data lukisan untuk melanjutakn transaksi. data yang dibutuhkan adalah namaLukisan,author,tahunBuat,deskripsi.
2. GET "/transaksi/:id" => ["user", "admin"]user hanya bisa melihat datanya sendiri
3. GET "/transaksi" => ["admin"]admin dapat melihat keseluruhan data
4. PATCH "/transaksi/:id" => ["user","admin"]user dan admin bisa melakukan upadting, tapi user hanya bisa update ke datanya sendiri.
```

```json
#table rak :
field: rakId(PK), lemariId(FK)

~end-point:
1. POST "/rak" => ["user"]user menginputkan transaksiId dari table transaksi.
2. GET "/rak/:id" => ["user","admin"]user hanya bisa melihat datanya sendiri
3. GET "/rak" => ["admin"]admin bisa melihat semua data.
4. PATCH "/rak/:id"=> ["user","admin"]dapat melakukan updating data.
```

```json
#tabel lemari :
field: lemariId(PK), rakId(FK), gedung, nomorLemari

~end-point:
1. POST "/lemari" => ["user"]user menginputkan rakId dari tabel rak, gedung, dan nomorLemari
2. GET "/lemari/:id" => ["admin", "user"]user hanya bisa melihat datanya sendiri.
3. GET "/lemari" => ["admin"]admin bisa meliat seluruh data
4. POST "/lemari/:id" => ["admin", "user"]user hanya bisa melakukan editing pada datanya sendiri.
```

### Note

#### minta saran kak, apakah ada yang bisa di optimalkan kalo dilihat kasaran seperti ini...

#### kasih saran ke : Dimas, Mas Gilang, Mas Saeful
