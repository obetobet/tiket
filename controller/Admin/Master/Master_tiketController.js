const MasterTiket = require("../../../model/Admin/Master/master_tiket_model")
const var_dump = require('var_dump')
const swal = require('sweetalert')
module.exports = {
    index: function (req, res) {
        MasterTiket.get(req.con, function (err, rows) {
            
            res.render("backend/Master/Tiket/view", {
                title: 'Kategori_Tiket - Kategori_Tiket',
                judul: 'Data Kategori_Tiket',
                breadcrumb: 'View Kategori_Tiket',
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
        MasterTiket.create(req.con, data, function (err) {
            res.redirect("/master_tiket")
        })
    },
    update: function (req, res) {
        MasterTiket.update(req.con, req.body, req.body.id, function (err) {
            res.redirect("/master_tiket")
        })
    },



    destroy: function (req, res) {
        let id = req.body.id_tiket
        MasterTiket.destroy(req.con, id, function (err) {
            res.redirect("/master_tiket")
        })
    }
}
