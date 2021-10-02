'use strict'

const lemari = require('../models').lemari;
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");

class lemariKontroler {
    static findAll = async (req, res, next) => {
        try {

            const data = await lemari.findAll()
            if(!data){
                    const newError = new Error();
                    newError.name = "DataNotFound";
                    newError.message = "Data Tidak Di Temukan";
                    throw newError;
            }
            res.status(200).json({
                message : 'Sukses mengambil data',
                data : data,
                
            })
        } catch (error) {
            next(error);
        }
    }

    static getId = async (req, res, next) => {
        try {
                let data = await lemari.findByPk(req.params.id, {
                    where : {
                        id
                    }
                })
                
                if (!data) {
                    const newError = new Error();
                    newError.name = "DataNotFound";
                    newError.message = "Data Tidak Di Temukan";
                }
                    res.status(200).json({
                        message : 'Sukses menggambil Data',
                        data : data
                    });
            }
            catch (error) {
            next(error);
        }
    };

    static create = async (req, res, next) => {
        try {
            let {rakId, gedung, nomorLemari} = req.body
            
            if(!rakId || !gedung || !nomorLemari) {
                next({
                    message : 'DataNotFound'
                })
            } else {
                let data = await lemari.create({
                    rakId,
                    gedung,
                    nomorLemari,
                })
                res.status(201).json({
                    data,
                })
            }
            
        } catch (error) {
            next(error)
        }
    }

    static update = async (req, res, next) => {
        try {
            const {id} = req.params
            const {rakId, gedung, nomorLemari} = req.body
            const newUpdate = {
                rakId,
                gedung,
                nomorLemari
            }
            let data = await lemari.update(newUpdate, {
                where:{
                    id : id,
                }
            })
            res.status(200).json({
                message : 'Data berhasil di Update',
                data : newUpdate
            })
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = lemariKontroler