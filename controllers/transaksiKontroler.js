"use strict";

const modelLukisan = require("../models").lukisan;
const modelTransaksi = require("../models").transaksi;

class transaksiKontroler {
  static store = async (req, res, next) => {
    try {
      const currentUser = req.currentUser;
      const { namaLukisan, author, tahunBuat, deskripsi } = req.body;

      if (
        namaLukisan.length !== 0 &&
        author.length !== 0 &&
        tahunBuat.length !== 0 &&
        deskripsi.length !== 0
      ) {
        const dataLukisan = {
          userId: currentUser.id,
          namaLukisan: namaLukisan,
          author: author,
          tahunBuat: tahunBuat,
          deskripsi: deskripsi,
        };

        const newLukisan = await modelLukisan.create(dataLukisan);

        const thisDay = new Date();
        const dataTransaksi = {
          lukisanId: newLukisan.id,
          status: true,
          tanggalAmbil: null,
        };
        console.log(dataTransaksi);
        const newTransaksi = await modelTransaksi.create(dataTransaksi);
        console.log(newTransaksi);
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
      console.log(error);
    }
  };
}

module.exports = transaksiKontroler;
