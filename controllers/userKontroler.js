"use strict";

const userModel = require("../models").user;
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

class userKontroler {
  static register = async (req, res, next) => {
    try {
      const { nama, kota, email, password } = req.body;

      const hashPassword = bcrypt.hashSync(password);

      const newUser = {
        nama: nama,
        kota: kota,
        email: email,
        password: hashPassword,
        role: "user",
      };

      const user = await userModel.create(newUser);
      res.status(201).json({
        message: "Akun sudah terdaftar",
        userId: user.id,
        nama: user.nama,
      });
    } catch (error) {
      const newError = new Error();
      newError.name = "ErrorInputRegister";
      newError.message = "Tolong cek lagi inputan anda!";
      next(newError);
    }
  };

  static login = async (req, res, next) => {
    try {
      const { email, password } = req.body;

      const user = await userModel.findOne({
        where: {
          email: email,
        },
      });
      if (!user) {
        const newError = new Error();
        newError.name = "UserNotFound";
        newError.message = "Email / Password Salah";

        next(errorMessage);
      }

      if (!bcrypt.compareSync(password, user.password)) {
        const newError = new Error();
        newError.name = "UserNotFound";
        newError.message = "Email / Password Salah";

        next(errorMessage);
      }

      const jwtPayload = {
        userId: user.id,
      };

      const accessToken = jwt.sign(jwtPayload, "key");

      res.status(200).send({
        message: "login success",
        YourToken: accessToken,
      });
    } catch (error) {
      const newError = new Error();
      newError.name = "AcoundNotFound";
      newError.message = "Akun ini tidak ditemukan";
      next(newError);
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
}

module.exports = userKontroler;
