"use strict";

const modelLukisan = require("../models").lukisan;
const modelTransaksi = require("../models").transaksi;

class transaksiKontroler {
  static store = async (req, res, next) => {
    try {
      const { namaLukisan, author, tahunBuat, deskripsi } = req.body;

      if (
        // userId.length !== 0 &&
        namaLukisan.length !== 0 &&
        author.length !== 0 &&
        tahunBuat.length !== 0 &&
        deskripsi.length !== 0
      ) {
        const dataLukisan = {
          namaLukisan,
          author,
          tahunBuat,
          deskripsi,
        };
        console.log(dataLukisan);

        const newLukisan = await modelLukisan.create(dataLukisan);

        const dataTransaksi = {
          userId: newLukisan.id,
          status: true,
          tanggalSimpan: new Date(),
          tanggalAmbil: null,
        };

        const newTransaksi = await modelTransaksi.create(dataTransaksi);

        res.status(201).send({
          message: "sukses membuat transaksi",
          data_Lukisan: newLukisan,
          dat_transaksi: newTransaksi,
        });
      }
    } catch (error) {
      const customError = new Error();
      customError.name = "InvalidInput";
      customError.message = "Tolong cek lagi inputan anda";

      next(customError);
    }
  };
}

module.exports = transaksiKontroler;
