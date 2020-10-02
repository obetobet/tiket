const MasterArtikel = require("../../../model/Admin/Master/master_artikel_model")
const var_dump = require('var_dump')
const swal = require('sweetalert')
module.exports = {
    index: function (req, res) {
        MasterArtikel.get(req.con, function (err, rows) {
            
            res.render("backend/Master/Artikel/view", {
                title: 'Artikel - Artikel',
                judul: 'Data Artikel',
                    breadcrumb: 'View Artikel',
                data: rows
            })
        })
    },

    store: function (req, res) {
        var datetime = new Date();
        var twentyMinutesLater = new Date();
        twentyMinutesLater.setMinutes(twentyMinutesLater.getMinutes() + 10);
        let data = {
            nama: req.body.nama,
            create_at: datetime,
            update_at: datetime,
        };
         console.log(data);
        //  process.exit();
        MasterArtikel.create(req.con, data, function (err) {
            res.redirect("/master_artikel")
        })
    },
    update: function (req, res) {
        MasterArtikel.update(req.con, req.body, req.body.id, function (err) {
            res.redirect("/master_artikel")
        })
    },



    destroy: function (req, res) {
        let id = req.body.id_tiket
        MasterArtikel.destroy(req.con, id, function (err) {
            res.redirect("/master_artikel")
        })
    }
}
