const Konfigurasi = require("../../model/Admin/Konfigurasi_Model")
const var_dump = require('var_dump')
var uuid = require('uuid')
const qrcode = require('qrcode');
const fs = require('fs');
var qr = require('qr-image');
module.exports = {


    index: function (req, res) {
        Konfigurasi.get(req.con, function (err, rows) {
                res.render("backend/konfigurasi/view", {
                    title: 'Konfigurasi - Konfigurasi',
                    judul: 'Data Konfigurasi',
                    breadcrumb: 'View Konfigurasi',
                    data: rows,
                })
            })
    
    },

    store: function (req, res) {
        if (!req.files) {
            res.send("No file upload")
        } else {
            var file = req.files.gambar
            if (file.mimetype == "image/jpeg" || file.mimetype == "image/png" || file.mimetype == "image/gif") {
                // var imageName = file.name
                var uuidname = uuid.v1(); // this is used for unique file name
                var imgsrc = 'http://localhost:3001/assets/images/' + uuidname + file.name
                const now = new Date();
                const date = new Date();
                let data = {
                    nama: req.body.nama,
                    id_jenistiket: req.body.id_jenistiket,
                    qty: req.body.qty,
                    status: req.body.status,
                    harga_1: req.body.harga_1,
                    discount: req.body.discount,
                    keterangan: req.body.keterangan,
                    create_at: now,
                    gambar: imgsrc,
                    update_at: date
                };

                file.mv('public/images/' + uuidname + file.name)
                Konfigurasi.create(req.con, data, function (err) {
                    res.redirect("/tiket")
                })

            }
        }


    },

    update: function (req, res) {
        const date = new Date();
        if (!req.files) {
            let data = {
                nama: req.body.nama,
                id_jenistiket: req.body.id_jenistiket,
                qty: req.body.qty,
                status: req.body.status,
                harga_1: req.body.harga_1,
                discount: req.body.discount,
                keterangan: req.body.keterangan,
                update_at: date
            };
            //  console.log(req.body);
            //  process.exit();
            Konfigurasi.update(req.con, req.body, req.body.id, function (err) {
                if (err) {
                    res.send('ggl');
                }
                res.redirect("/tiket")
            })
        } else {
            var file = req.files.gambar
            if (file.mimetype == "image/jpeg" || file.mimetype == "image/png" || file.mimetype == "image/gif") {
                // var imageName = file.name
                var uuidname = uuid.v1(); // this is used for unique file name
                var imgsrc = 'http://localhost:3001/assets/images/' + uuidname + file.name
                let data = {
                    nama: req.body.nama,
                    id_jenistiket: req.body.id_jenistiket,
                    qty: req.body.qty,
                    status: req.body.status,
                    harga_1: req.body.harga_1,
                    discount: req.body.discount,
                    keterangan: req.body.keterangan,
                    gambar: imgsrc,
                    update_at: date
                };
                // console.log(data);
                // process.exit();
                file.mv('public/images/' + uuidname + file.name)
                Konfigurasi.update_2(req.con, data, req.body.id, function (err) {
                    res.redirect("/tiket")
                })

            }
        }
    },



    destroy: function (req, res) {
        let id = req.body.id_tiket

        var_dump(id)
        // process.exit()
        Konfigurasi.destroy(req.con, id, function (err) {
            res.redirect("/tiket")
        })
    }
}
