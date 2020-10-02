const Konfigurasi = require("../../model/Admin/Konfigurasi_Model")
const var_dump = require('var_dump')
var uuid = require('uuid')
const qrcode = require('qrcode');
const fs = require('fs');
var qr = require('qr-image');
module.exports = {


    index: function (req, res) {
         if (req.session.loggedin) {
        Konfigurasi.get(req.con, function (err, rows) {
                res.render("backend/konfigurasi/view", {
                    title: 'Konfigurasi - Konfigurasi',
                    judul: 'Data Konfigurasi',
                    breadcrumb: 'View Konfigurasi',
                    data: rows,
                })
            })
     } else {
         res.redirect("/login");
     }
    },


    update: function (req, res) {
        const date = new Date();
        if (!req.files) {
            let data = {
                nama_web: req.body.nama_web,
                website: req.body.website,
                email: req.body.email,
                Telp: req.body.Telp,
                alamat: req.body.alamat,
                keywords: req.body.keywords,
                keterangan: req.body.keterangan,
                tagline: req.body.tagline,
                meta_text: req.body.meta_text,
                facebook: req.body.facebook,
                twitter: req.body.twitter,
                instagram: req.body.instagram,
                update_at: date
            };
            console.log(data);
            process.exit();
            Konfigurasi.update(req.con, req.body, req.body.id, function (err) {
                if (err) {
                    res.send('ggl');
                }
                res.redirect("/tiket")
            })
        } else {
            var file = req.files.favicon
            if (file.mimetype == "image/jpeg" || file.mimetype == "image/png" || file.mimetype == "image/gif") {
                // var imageName = file.name
                var uuidname = uuid.v1(); // this is used for unique file name
                var imgsrc =  uuidname + file.name
                let data = {
                    nama_web: req.body.nama_web,
                    website: req.body.website,
                    email: req.body.email,
                    Telp: req.body.Telp,
                    alamat: req.body.alamat,
                    keywords: req.body.keywords,
                    keterangan: req.body.keterangan,
                    tagline: req.body.tagline,
                    meta_text: req.body.meta_text,
                    facebook: req.body.facebook,
                    twitter: req.body.twitter,
                    instagram: req.body.instagram,
                    gambar: imgsrc,
                    favicon : 'ini favicon',
                    update_at: date
                };
                console.log(data);
                process.exit();
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
