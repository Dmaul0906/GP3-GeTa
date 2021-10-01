'use strict'

const lemari = require('../models').lemari;
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

class lemariKontroler {
    static findAll = async (req, res, next) => {
        try {
            const currentData = req.currentData;

            const data = await lemari.findAll()
            res.status(200).json({
                message : 'Sukses mengambil data',
                data : data,
                currentData,
            })
        } catch (error) {
            const newError = new Error();
            newError.name = 'TidakAdaData';
            newError.message = "Data Anda tidak ada"
            next(newError);
        }
    }

    static getId = async (req, res, next) => {
        try {
            let {id} = req.params
            const currentData = req.currentData;
            console.log(id);

            if (currentData.role == "admin") {
                const data = await lemari.findOne({
                    where:{
                        id : id
                    }
                }); 
                
                if (!data) {
                    const newError = new Error();
                    newError.name = "DataTidakAda";
                    newError.message = "Data tidak di Temukan";
                    throw newError;
                }

                    res.status(200).json({
                        message : 'Sukses menggambil Data',
                        data : data
                    });
                } else {
                    if (Number(id) != currentData.id){
                        const newError = new Error();
                        newError.name = 'ErrorData';
                        newError.message = 'Data tidak di temukan';
                        throw newError;
                    }
                }
            }
            catch (error) {
            next(error);
        }
    };

    static create = async (req, res, next) => {
        try {
            const {rakId, gedung, nomorLemari} = req.body
            const currentData = req.currentData;

            if(
                rakId.length !== 0 &&
                gedung.length !== 0 &&
                nomorLemari.length !== 0
            ) {

                const newData = {
                    rakId,
                    gedung,
                    nomorLemari
                }
                const result = await lemari.create(newData)

                const dataLemari = {
                    lemariId : newLemari.id,
                };
                console.log(dataLemari);

                const newLemari = await lemari.create(dataLemari);
                console.log(newLemari);
                res.status(201).json({
                    message : 'Data Berhasil di Buat',
                    result : result,
                    data_lemari : newLemari,
                })
            }
            
        } catch (error) {
            const newError = new Error();
            newError.name = 'SalahInput';
            newError.message = 'Tolong cek kembali data Anda';

            next(newError);
        }
    }

    static update = async (req, res, next) => {
        try {
            const {id} = req.params
            const {rakId, gedung, nomorLemari} = req.body
            const currentData = req.currentData;

            if(currentData.role == "admin"){
                const newUpdate = {
                    rakId,
                    gedung,
                    nomorLemari,
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
            }
            if (Number(id) == currentData.id){
                const data = {
                    rakId,
                    gedung,
                    nomorLemari,
                };
                const newData = await lemari.update(data, {
                    where : {
                        id: id
                    },
                })
                res.status(202).json({
                    message : "sukses melakukan update data",
                    newData = data,
                })
            }
            const newError = new Error();
            newError.name = "DataTidakTerupdate";
            newError.message = "Data tidak bisa di update";
            throw newError;
        } catch (error) {
            next(error);
        }
    }
}

module.exports = lemariKontroler