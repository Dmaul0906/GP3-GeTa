"use strict";

const modelLukisan = require("../models").lukisan;
const modelTransaksi = require("../models").transaksi;
const modelRak = require("../models").rak;

class transaksiKontroler {
  static store = async (req, res, next) => {
    try {
      const currentUser = req.currentUser;
      const { namaLukisan, author, tahunBuat, deskripsi } = req.body;

      const cekField =
        namaLukisan != "" &&
        author != "" &&
        tahunBuat != "" &&
        deskripsi != "" &&
        namaLukisan != null &&
        author != null &&
        tahunBuat != null &&
        deskripsi != null;

      if (!cekField) {
        const customError = new Error();
        customError.name = "InvalidInput";
        customError.message = "Tolong cek lagi inputan anda";
        throw customError;
      }

      const v1 = await modelLukisan.findOne({
        where: {
          namaLukisan: namaLukisan,
        },
      });

      if (!v1) {
        const dataLukisan = {
          userId: currentUser.id,
          namaLukisan: namaLukisan,
          author: author,
          tahunBuat: tahunBuat,
          deskripsi: deskripsi,
        };

        const newLukisan = await modelLukisan.create(dataLukisan);

        const newRak = await modelRak.create({ status: true });

        const grouping = Math.ceil(newRak.id / 5);

        const latestData = await modelRak.update(
          {
            id: newRak.id,
            lemariId: grouping,
            status: newRak.status,
          },
          { where: { id: newRak.id } }
        );

        const newTransaksi = await modelTransaksi.create({
          lukisanId: newLukisan.id,
          rakId: newRak.id,
        });

        const transaction = await modelTransaksi.findOne({
          where: { id: newTransaksi.id },
        });

        res.status(201).send({
          message: "sukses membuat transaksi",
          data_Lukisan: newLukisan,
          data_transaksi: transaction,
        });
      }
      const newError = new Error();
      newError.name = "InvalidPainting";
      newError.message = "Lukisan sudah ada, silahkan masukan data lain";
      throw newError;
    } catch (error) {
      next(error);
    }
  };

  static update = async (req, res, next) => {
    try {
      const { id } = req.params;
      const { namaLukisan, author, tahunBuat, deskripsi } = req.body;
      const currentUser = req.currentUser;

      const cekield =
        namaLukisan != "" &&
        author != "" &&
        tahunBuat != "" &&
        deskripsi != "" &&
        namaLukisan != null &&
        author != null &&
        tahunBuat != null &&
        deskripsi != null;

      if (cekield) {
        if (currentUser.role == "admin") {
          const lukisan = await modelLukisan.findOne({
            where: {
              id: id,
            },
          });

          if (!lukisan) {
            const newError = new Error();
            newError.name = "LukisanNotFound";
            newError.message = "User ini tidak memiliki data lukisan";
            throw newError;
          }

          const newData = {
            id: lukisan.id,
            userId: lukisan.userId,
            namaLukisan: namaLukisan,
            author: author,
            tahunBuat: tahunBuat,
            deskripsi: deskripsi,
          };

          const update = await modelLukisan.update(newData, {
            where: { id: id },
          });
          res.status(200).json({
            message: "Sukses Update Data",
            newData: newData,
            currentUser: {
              nama: currentUser.nama,
              role: currentUser.role,
            },
          });
        }

        const lukisan = await modelLukisan.findOne({
          where: {
            id: id,
          },
        });

        if (!lukisan) {
          const newError = new Error();
          newError.name = "LukisanNotFound";
          newError.message = "User ini tidak memiliki data lukisan";
          throw newError;
        }

        if (lukisan.userId == currentUser.id) {
          const newData = {
            id: lukisan.id,
            userId: lukisan.userId,
            namaLukisan: namaLukisan,
            author: author,
            tahunBuat: tahunBuat,
            deskripsi: deskripsi,
          };

          const update = await modelLukisan.update(newData, {
            where: { id: id },
          });

          res.status(200).json({
            message: "Sukses updating data",
            newData: newData,
          });
        }
        const newError = new Error();
        newError.name = "Forbidden";
        newError.message =
          "Anda tidak bisa melakukan updating pada data orang lain";
        throw newError;
      }
      const newError = new Error();
      newError.name = "InvalidInput";
      newError.message = "Silahkan cek Kembali inputan anda";
      throw newError;
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
        const painting = await modelLukisan.findOne({
          where: {
            id: id,
          },
        });

        if (!painting) {
          const newError = new Error();
          newError.name = "LukisanNotFound";
          newError.message = "User ini tidak memiliki data lukisan";
          throw newError;
        }

        res.status(200).json({
          message: "Sukses mengambil data",
          data_lukisan: painting,
          currentUser: {
            nama: currentUser.nama,
            role: currentUser.role,
          },
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

      if (findPainting.userId == currentUser.id) {
        res.status(200).json({
          message: "Sukses mendapatkan data",
          data_lukisan: findPainting,
        });
      }
      const newError = new Error();
      newError.name = "Forbidden";
      newError.message = "Anda tidak bisa mengakses data ini";
      throw newError;
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
          currentUser: {
            nama: currentUser.nama,
            role: currentUser.role,
          },
        });
      }

      const getTransaction = await modelTransaksi.findOne({
        where: {
          id: id,
        },
      });

      if (!getTransaction) {
        const newError = new Error();
        newError.name = "TransactionNotFound";
        newError.message = "User ini tidak memiliki data Transaksi";
        throw newError;
      }

      const findPainting = await modelLukisan.findOne({
        where: {
          id: getTransaction.lukisanId,
        },
      });

      if (!findPainting) {
        const newError = new Error();
        newError.name = "PaintingNotFound";
        newError.message = "User ini tidak memiliki data Lukisan";
        throw newError;
      }

      if (findPainting.userId != currentUser.id) {
        const newError = new Error();
        newError.name = "Forbidden";
        newError.message = "Anda tidak bisa mengakses data ini";
        throw newError;
      }

      const userTransaksi = await modelTransaksi.findOne({
        where: {
          lukisanId: findPainting.id,
        },
      });

      res.status(200).json({
        message: "Sukses mengambil data",
        transaksi: userTransaksi,
      });
    } catch (error) {
      next(error);
    }
  };

  static take = async (req, res, next) => {
    try {
      const { id } = req.params;
      const currentUser = req.currentUser;

      if (currentUser.role == "admin") {
        const data = await modelTransaksi.findOne({
          where: {
            id: id,
          },
        });

        if (!data) {
          const newError = new Error();
          newError.name = "TransactionNotFound";
          newError.message = "User ini tidak memiliki data Transaksi";
          throw newError;
        }

        const rak = await modelRak.findOne({
          where: {
            id: data.rakId,
          },
        });

        if (!rak) {
          const newError = new Error();
          newError.name = "RakNotFound";
          newError.message = "Rak tidak di temukan";
          throw newError;
        }

        const updateRak = await modelRak.update(
          { status: false },
          {
            where: {
              id: rak.id,
            },
          }
        );

        const newData = {
          id: data.id,
          lukisanId: data.lukisanId,
          status: false,
          tanggalSimpan: data.tanggalSimpan,
          tanggalAmbil: new Date(),
        };

        const update = await modelTransaksi.update(newData, {
          where: { id: id },
        });

        res.status(200).json({
          message: "Terimakasih sudah menggunakan jasa kami",
          Transaksi: newData,
          currentUser: {
            nama: currentUser.nama,
            role: currentUser.role,
          },
        });
      }

      const data = await modelTransaksi.findOne({
        where: {
          id: id,
        },
      });

      if (!data) {
        const newError = new Error();
        newError.name = "TransactionNotFound";
        newError.message = "User ini tidak memiliki data Transaksi";
        throw newError;
      }

      const painting = await modelLukisan.findOne({
        where: {
          id: data.lukisanId,
        },
      });

      if (!data) {
        const newError = new Error();
        newError.name = "PaintingNotFound";
        newError.message = "User ini tidak memiliki data Lukisan";
        throw newError;
      }

      if (currentUser.id == painting.userId) {
        const rak = await modelRak.findOne({
          where: {
            id: data.rakId,
          },
        });

        if (!rak) {
          const newError = new Error();
          newError.name = "RakNotFound";
          newError.message = "Rak tidak di temukan";
          throw newError;
        }

        const updateRak = await modelRak.update(
          { status: false },
          { where: { id: data.rakId } }
        );

        const updateTransaksi = await modelTransaksi.update(
          { status: false, tanggalAmbil: new Date() },
          { where: { id: id } }
        );

        res.status(200).json({
          message: "Terimakasih Sudah menggunakan jasa kami",
        });
      }
      const newError = new Error();
      newError.name = "Forbidden";
      newError.message = "Anda tidak mengambil lukisan orang lain";
      throw newError;
    } catch (error) {
      next(error);
    }
  };
}

module.exports = transaksiKontroler;
