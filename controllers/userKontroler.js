"use strict";

require("dotenv").config();
const userModel = require("../models").user;
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

class userKontroler {
  static register = async (req, res, next) => {
    try {
      const { nama, kota, email, password } = req.body;

      const cekField =
        nama != "" &&
        kota != "" &&
        email != "" &&
        password != "" &&
        nama != null &&
        kota != null &&
        email != null &&
        password != null;

      if (!cekField) {
        const newError = new Error();
        newError.name = "InputRequired";
        newError.message = "Silahkan cek inputan anda kembali";
        throw newError;
      }

      const cekEmail = await userModel.findOne({
        where: {
          email: email,
        },
      });

      if (cekEmail) {
        const newError = new Error();
        newError.name = "AcountRegistered";
        newError.message = "Email sudah terdaftar";
        throw newError;
      }
      const hashPassword = bcrypt.hashSync(password);

      const newUser = {
        nama: nama,
        kota: kota,
        email: email,
        password: hashPassword,
      };

      const user = await userModel.create(newUser);
      res.status(201).json({
        message: "Sukses mendaftarkan akun",
        userId: user.id,
        nama: user.nama,
      });
    } catch (error) {
      next(error);
    }
  };

  static login = async (req, res, next) => {
    try {
      const { email, password } = req.body;

      const cekField =
        email != "" && password != "" && email != null && password != null;

      if (!cekField) {
        const newError = new Error();
        newError.name = "InputRequired";
        newError.message = "Silahkan cek inputan anda kembali";
        throw newError;
      }
      const user = await userModel.findOne({
        where: {
          email: email,
        },
      });

      if (!user) {
        const newError = new Error();
        newError.name = "UserNotFound";
        newError.message = "Email / Password Salah";

        throw newError;
      }

      if (!bcrypt.compareSync(password, user.password)) {
        const newError = new Error();
        newError.name = "UserNotFound";
        newError.message = "Email / Password Salah";

        throw newError;
      }

      const jwtPayload = {
        userId: user.id,
      };

      const accessToken = jwt.sign(jwtPayload, process.env.JWT_SECREAT);

      res.status(200).send({
        message: "login success",
        YourToken: accessToken,
      });
    } catch (error) {
      next(error);
    }
  };

  static getAll = async (req, res, next) => {
    try {
      const currentUser = req.currentUser;

      const user = await userModel.findAll();
      res.status(200).json({
        message: "sukses mengambil data",
        data: user,
        currentUser,
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
        const user = await userModel.findOne({
          where: {
            id: id,
          },
        });

        if (!user) {
          const newError = new Error();
          newError.name = "UserNotFound";
          newError.message = "User tidak di temukan";
          throw newError;
        }

        res.status(200).json({
          message: "Sukses mengambil data",
          user: user,
        });
      }
      if (Number(id) != currentUser.id) {
        const newError = new Error();
        newError.name = "Forbidden";
        newError.message = "Anda tidak bisa mengakses data ini";
        throw newError;
      }

      const user = await userModel.findOne({
        where: {
          id: id,
        },
      });

      if (!user) {
        const newError = new Error();
        newError.name = "UserNotFound";
        newError.message = "User tidak di temukan";
        throw newError;
      }

      res.status(200).json({
        message: "Sukses mengambil data",
        user: user,
      });
    } catch (error) {
      next(error);
    }
  };

  static update = async (req, res, next) => {
    try {
      const { id } = req.params;
      const { nama, kota, email, password } = req.body;
      const currentUser = req.currentUser;

      if (currentUser.role == "admin") {
        const hashPassword = bcrypt.hashSync(password);
        const newData = {
          nama: nama,
          kota: kota,
          email: email,
          password: hashPassword,
        };

        const user = await userModel.update(newData, { where: { id: id } });
        res.status(200).json({
          message: "Updating data",
        });
      }

      if (Number(id) == currentUser.id) {
        const hashPassword = bcrypt.hashSync(password);
        const newData = {
          nama: nama,
          kota: kota,
          email: email,
          password: hashPassword,
        };

        const user = await userModel.update(newData, { where: { id: id } });
        res.status(200).json({
          message: "Updating data",
        });
      }
      const newError = new Error();
      newError.name = "ErrorUpdateUser";
      newError.message = "Anda tidak bisa mengupdate data orang lain";
      throw newError;
    } catch (error) {
      next(error);
    }
  };
}

module.exports = userKontroler;
