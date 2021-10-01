'use strict'

const lemari = require('../models').lemari;

class lemariKontroler {
    static findAll = async (req, res, next) => {
        try {
            const data = await lemari.findAll()
            res.status(200).json({
                message : 'sukses',
                data : data
            })
        } catch (error) {
            console.log(error);
        }
    }

    static getId = async (req, res, next) => {
        try {
            let {id} = req.params
            const data = await lemari.findOne({
                where:{
                    id : id
                }
            })
            if (data){
                res.status(200).json({
                    message : 'Sukses menggambil Data',
                    data : data
                })
            }
                const newError = new Error();
                newError.name = 'ErrorData';
                newError.message = 'Data tidak di temukan';

                throw newError
        } catch (error) {
            console.log(error);
        }
    }

    static create = async (req, res, next) => {
        try {
            const {rakId, gedung, nomorLemari} = req.body
            const newData = {
                rakId,
                gedung,
                nomorLemari
            }
            const result = await lemari.create(newData)
            res.status(201).json({
                message : 'Data Berhasil di Buat',
                result : result
            })
            
        } catch (error) {
            console.log(error);
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