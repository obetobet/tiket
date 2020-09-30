const MasterHastag = require("../../../model/Admin/Master/master_hastag_model")
const var_dump = require('var_dump')
const swal = require('sweetalert')
module.exports = {
    index: function (req, res) {
        MasterHastag.get(req.con, function (err, rows) {
            
            res.render("backend/Master/Hastag/view", {
                title: 'Hastag - Hastag',
                judul: 'Data Hastag',
                breadcrumb: 'View Hastag',
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
        MasterHastag.create(req.con, data, function (err) {
            res.redirect("/master_hastag")
        })
    },
    update: function (req, res) {
        MasterHastag.update(req.con, req.body, req.body.id, function (err) {
            res.redirect("/master_hastag")
        })
    },



    destroy: function (req, res) {
        let id = req.body.id_tiket
        MasterHastag.destroy(req.con, id, function (err) {
            res.redirect("/master_hastag")
        })
    }
}
