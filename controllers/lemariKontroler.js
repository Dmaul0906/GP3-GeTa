"use strict";

const lemari = require("../models").lemari;
const modelLukisan = require("../models").lukisan;
const modelRak = require("../models").rak;
const modelTransaksi = require("../models").transaksi;

class lemariKontroler {
  static findAll = async (req, res, next) => {
    try {
      const data = await lemari.findAll();
      res.status(200).json({
        message: "Sukses mengambil data",
        data: data,
      });
    } catch (error) {
      console.log(error);
      next(error);
    }
  };

  //   static getId = async (req, res, next) => {
  //     try {
  //       let { id } = req.params;
  //       const currentUser = req.currentUser;

  //       if (currentUser.role == "admin") {
  //         let data = await lemari.findOne({
  //           where: {
  //             id: id,
  //           },
  //         });

  //         if (!data) {
  //           const newError = new Error();
  //           newError.name = "DataNotFound";
  //           newError.message = "Data Tidak Di Temukan";

  //           throw newError;
  //         }
  //         res.status(200).json({
  //           message: "Sukses menggambil Data",
  //           data: data,
  //           currentUser: {
  //             nama: currentUser.nama,
  //             role: currentUser.role,
  //           },
  //         });
  //       }

  //       const lemari = await lemari.findOne({
  //         where: {
  //           id: id,
  //         },
  //       });

  //       if (!lemari) {
  //         const newError = new Error();
  //         newError.name = "LemariNotFound";
  //         newError.message = "Lemari tidak ditemukan";
  //         throw newError;
  //       }

  //       const rak = await modelRak.findOne({
  //         where: {
  //           lemariId: lemari.id,
  //         },
  //       });

  //       if (!rak) {
  //         const newError = new Error();
  //         newError.name = "RakNotFound";
  //         newError.message = "Lemari tidak ditemukan";
  //         throw newError;
  //       }

  //       const transaksi = await modelTransaksi.findOne({
  //         where: {
  //           rakId: data.id,
  //         },
  //       });

  //       if (!transaksi) {
  //         const newError = new Error();
  //         newError.name = "TransactionNotFound";
  //         newError.message = "Tidak menemukan Transaksi";
  //         throw newError;
  //       }

  //       const lukisan = await modelLukisan.findOne({
  //         where: {
  //           id: transaksi.lukisanId,
  //         },
  //       });

  //       if (!lukisan) {
  //         const newError = new Error();
  //         newError.name = "PaintingNotFound";
  //         newError.message = "Data lukisan tidak ada";
  //         throw newError;
  //       }

  //       if (lukisan.userId != currentUser.id) {
  //         const newError = new Error();
  //         newError.name = "Forbidden";
  //         newError.message = "Anda tidak dapat mengakses data ini";
  //         throw newError;
  //       }

  //       const dataLemari = await modelLemari.findOne({
  //         where: {
  //           id: id,
  //         },
  //       });

  //       if (!dataLemari) {
  //         const newError = new Error();
  //         newError.name = "RakNotFound";
  //         newError.message = "Rak tidak ditemukan";
  //         throw newError;
  //       }

  //       res.status(200).json({
  //         message: "Sukses mendapatkan data",
  //         data: dataLemari,
  //       });
  //     } catch (error) {
  //       next(error);
  //     }
  //   };

  //   static update = async (req, res, next) => {
  //     try {
  //       const { id } = req.params;
  //       const { gedung, nomorLemari } = req.body;
  //       const newUpdate = {
  //         gedung,
  //         nomorLemari,
  //       };
  //       let data = await lemari.update(newUpdate, {
  //         where: {
  //           id: id,
  //         },
  //       });
  //       res.status(200).json({
  //         message: "Data berhasil di Update",
  //         data: newUpdate,
  //       });
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
}

module.exports = lemariKontroler;
