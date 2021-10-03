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
      next(error);
    }
  };
}

module.exports = lemariKontroler;
