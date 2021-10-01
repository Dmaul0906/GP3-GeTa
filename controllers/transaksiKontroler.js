"use strict";

const modelLukisan = require("../models").lukisan;
const modelTransaksi = require("../models").transaksi;

class transaksiKontroler {
  static store = async (req, res, next) => {
    try {
      const currentUser = req.currentUser;
      const { namaLukisan, author, tahunBuat, deskripsi } = req.body;

      if (
        (namaLukisan != "" || null) &&
        (author != "" || null) &&
        (tahunBuat != "" || null) &&
        (deskripsi != "" || null)
      ) {
        const dataLukisan = {
          userId: currentUser.id,
          namaLukisan: namaLukisan,
          author: author,
          tahunBuat: tahunBuat,
          deskripsi: deskripsi,
        };

        const newLukisan = await modelLukisan.create(dataLukisan);

        const dataTransaksi = {
          lukisanId: newLukisan.id,
        };
        console.log(dataTransaksi);

        const newTransaksi = await modelTransaksi.create(dataTransaksi);
        console.log(newTransaksi);
        res.status(201).send({
          message: "sukses membuat transaksi",
          data_Lukisan: newLukisan,
          data_transaksi: newTransaksi,
        });
      }
      const customError = new Error();
      customError.name = "InvalidInput";
      customError.message = "Tolong cek lagi inputan anda";
      throw customError;
    } catch (error) {
      next(error);
    }
  };

  static update = async (req, res, next) => {
    try {
      const { namaLukisan, author, tahunBuat, deskripsi } = req.body;
      const { id } = req.params;
      const currentUser = req.currentUser;

      if (currentUser.role == "admin") {
        const lastData = await modelLukisan.findOne({
          where: {
            id: id,
          },
        });

        console.log({
          test: {
            userId: lastData.userId,
            namaLukisan: namaLukisan,
            author: author,
            tahunBuat: tahunBuat,
            deskripsi: deskripsi,
          },
        });

        const updateData = {
          id: lastData.id,
          userId: lastData.userId,
          namaLukisan: namaLukisan,
          author: author,
          tahunBuat: tahunBuat,
          deskripsi: deskripsi,
        };

        const newData = await modelLukisan.update(updateData, {
          where: { id: id },
        });

        res.status(202).json({
          message: "Sukses melakukan updating data",
          DataBaru: updateData,
        });
      } else {
        const findPainting = await modelLukisan.findOne({
          where: {
            id: id,
          },
        });

        if (findPainting.userId == currentUser.id) {
          const newUpdate = {
            id: findPainting.id,
            userId: findPainting.userId,
            namaLukisan: namaLukisan,
            author: author,
            tahunBuat: tahunBuat,
            deskripsi: deskripsi,
          };

          const newPaintingData = await modelLukisan.update(newUpdate, {
            where: {
              id: id,
            },
          });

          res.status(200).json({
            message: "Sukses melakukan updating data.",
            new_data: newUpdate,
          });
        }
        const newError = new Error();
        newError.name = "Forbiden";
        newError.message = "Anda tidak bisa mengakses data ini";
        throw newError;
      }
    } catch (error) {
      next(error);
    }
  };

  static getAll = async (req, res, next) => {
    try {
      const data = await modelLukisan.findAll();
      res.status(200).json({
        message: "Sukess mendapatkan data",
        data: data,
      });
    } catch (error) {
      next(error);
    }
  };

  static getById = async (req, res, next) => {
    try {
      const { id } = req.params;
      const currentUser = req.currentUser;

      if (currentUser.role == "admin") {
        const user = await modelLukisan.findOne({
          where: {
            id: id,
          },
        });

        if (!user) {
          const newError = new Error();
          newError.name = "LukisanNotFound";
          newError.message = "User ini tidak memiliki data lukisan";
          throw newError;
        }

        res.status(200).json({
          message: "Sukses mengambil data",
          data_lukisan: user,
          currentUser: currentUser,
        });
      }

      const findPainting = await modelLukisan.findOne({
        where: {
          id: id,
        },
      });

      if (!findPainting) {
        const newError = new Error();
        newError.name = "LukisanNotFound";
        newError.message = "User ini tidak memiliki data lukisan";
        throw newError;
      }

      if (findPainting.userId != currentUser.id) {
        const newError = new Error();
        newError.name = "Forbidden";
        newError.message = "Anda tidak bisa mengakses data ini";
        throw newError;
      }

      res.status(200).json({
        message: "Sukses mendapatkan data",
        data_lukisan: findPainting,
      });
    } catch (error) {
      console.log(error);
      next(error);
    }
  };

  static trGetAll = async (req, res, next) => {
    try {
      const data = await modelTransaksi.findAll();
      res.status(200).json({
        message: "Sukses mendapatkan data",
        data: data,
      });
    } catch (error) {
      next(error);
    }
  };

  static trGetById = async (req, res, next) => {
    try {
      const { id } = req.params;
      const currentUser = req.currentUser;
      console.log(currentUser);

      if (currentUser.role == "admin") {
        const user = await modelTransaksi.findOne({
          where: {
            id: id,
          },
        });

        if (!user) {
          const newError = new Error();
          newError.name = "TransaksiNotFound";
          newError.message = "User ini tidak memiliki data Transaksi";
          throw newError;
        }

        res.status(200).json({
          message: "Sukses mengambil data",
          transaksi: user,
        });
      }

      const getTransaction = await modelTransaksi.findOne({
        where: {
          id: id,
        },
      });

      const findTransaction = await modelLukisan.findOne({
        where: {
          id: getTransaction.lukisanId,
        },
      });

      if (!findTransaction) {
        const newError = new Error();
        newError.name = "TransaksiNotFound";
        newError.message = "User ini tidak memiliki data Transaksi";
        throw newError;
      }

      if (findTransaction.userId != currentUser.id) {
        const newError = new Error();
        newError.name = "Forbidden";
        newError.message = "Anda tidak bisa mengakses data ini";
        throw newError;
      }

      res.status(200).json({
        message: "Sukses mengambil data",
        transaksi: findTransaction,
      });
    } catch (error) {
      next(error);
    }
  };
}

module.exports = transaksiKontroler;
