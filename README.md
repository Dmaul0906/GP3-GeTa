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
1. POST "/users/register" => ["user"] user dapat melakukan resigtrasi akun, dengan  nama, kota, email, password
2. POST "/users/login" => ["user", "admin"]user dapat melakukan login, setelah selesai membuat akun. dengan memasukan email, dan password
3. GET "/users/:id" => ["user", "admin"]user dapat melihat aku dengan id miliknya sendiri.
4. GET "/users" => ["admin"] admin dapat melihat keseluruhan data.
5. PATCH "users/:id" => ["user","admin"]user dapat melakukan updating data miliknya sendiri. sedangkan admin bisa pada semua data.
```

```json
#table transaksi :
field: transaksiId(PK), lukisanId(FK), rakId(FK), status, tanggal simpan, tanggal ambil.

end-point:
1. POST "/transaksis" => ["user"]user dapat menambahkan data transaksi, dengan catatan
 harus melakukan pendataran untuk lukisan dulu, jadi user harus menginputkan data lukisan untuk melanjutakn transaksi. data yang dibutuhkan adalah namaLukisan,author,tahunBuat,deskripsi.
2. GET "/transaksi/:id" => ["user", "admin"]user hanya bisa melihat transaksi datanya sendiri
3. GET "/transaksi" => ["admin"]admin dapat melihat keseluruhan data transaksi
4. GET "/lukisans/:id" => ["user", "admin"]user hanya bisa melihat lukisan data sendiri
5. GET "/lukisans" => ["admin"]admin dapat melihat keseluruhan data lukisan
6. PATCH "/transaksis/:id" => ["user","admin"]user dan admin bisa melakukan upadting, tapi user hanya
7. GET "/takes/:id" ["user","admin"] keduanya bisa melakukan editing/menyelesaikan transaksi
```

```json
#table rak :
field: rakId(PK), lemariId(FK), status

~end-point:
1. GET "/raks/:id" => ["user","admin"]user hanya bisa melihat datanya sendiri
2. GET "/raks" => ["admin"]admin bisa melihat semua data.
```

```json
#tabel lemari :
field: lemariId(PK), rakId(FK), gedung, nomorLemari

~end-point:
1. GET "/lemaris" => ["admin"]admin bisa meliat seluruh data
```

### By: Dimas Maulana, Gilang Sebastian, Saeful Alimi
