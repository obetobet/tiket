const Tiket = require("../../model/Admin/Tiket_Model")
const var_dump = require('var_dump')
var uuid = require('uuid')
const qrcode = require('qrcode');
const fs = require('fs');
var qr = require('qr-image');
module.exports = {

     kat_tiket: function (req, res) {
         var_dump('tes');
         Tiket.get_kat(req.con, function (err, rows) {
             res.send(rows)
         })
    },
    
    index: function (req, res) {
        Tiket.get(req.con, function (err, rows) {
            Tiket.get_kat(req.con, function (err,tiket) {
            res.render("backend/tiket/view", {
                title: 'Tiket - Call Center',
                judul: 'Data Tiket',
                breadcrumb: 'View Tiket',
                data: rows, 
                keta: tiket,
            })
        })})
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
                
                // var code = qr.image(req.body.nama + new Date().toString(), {
                //     type: 'svg'
                // });
                //    res.type('svg');
                //     code.pipe(res);
                // // console.log(code);
                // var_dump(code)
                // process.exit();
                file.mv('public/images/' + uuidname + file.name)
                Tiket.create(req.con, data, function (err) {
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
            Tiket.update(req.con, req.body, req.body.id, function (err) {
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
               Tiket.update_2(req.con, data, req.body.id, function (err) {
                   res.redirect("/tiket")
               })

            }
        }
    },
 
  

    destroy: function (req, res) {
        let id = req.body.id_tiket

        var_dump(id)
        // process.exit()
        Tiket.destroy(req.con, id, function (err) {
            res.redirect("/tiket")
        })
    }
}
