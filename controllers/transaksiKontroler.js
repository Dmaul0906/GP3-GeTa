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

        const dataTransaksi = {
          lukisanId: newLukisan.id,
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
    }
  };

  static update = async (req, res, next) => {
    try {
      const { namaLukisan, author, tahunBuat, deskripsi } = req.body;
      const { id } = req.params;
      const currentUser = req.currentUser;

      if (currentUser.role == "admin") {
        const data = {
          userId: currentUser.id,
          namaLukisan,
          author,
          tahunBuat,
          deskripsi,
        };

        const newData = await modelLukisan.update(data, { where: { id: id } });

        res.status(202).json({
          message: "Sukses melakukan updating data",
          DataBaru: data,
        });
      }

      if (Number(id) == currentUser.id) {
        const data = {
          userId: currentUser.id,
          namaLukisan,
          author,
          tahunBuat,
          deskripsi,
        };
        const newData = await modelLukisan.update(data, { where: { id: id } });
        res.status(202).json({
          message: "Sukses melakukan updating data",
          DataBaru: data,
        });
      }
      const newError = new Error();
      newError.name = "ForbiddenUpdatingData";
      newError.message = "Anda tidak bisa mengupdate data milik orang lain";
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
      console.log(id);

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
          user: user,
        });
      } else {
        if (Number(id) != currentUser.id) {
          const newError = new Error();
          newError.name = "Forbiden";
          newError.message = "Anda tidak bisa mengakses data ini";
          throw newError;
        }

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
          user: user,
        });
      }
    } catch (error) {
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
      console.log(id);

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
          user: user,
        });
      } else {
        if (Number(id) != currentUser.id) {
          const newError = new Error();
          newError.name = "Forbiden";
          newError.message = "Anda tidak bisa mengakses data ini";
          throw newError;
        }

        const user = await modelLukisan.findOne({
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
          user: user,
        });
      }
    } catch (error) {
      next(error);
    }
  };
}

module.exports = transaksiKontroler;
