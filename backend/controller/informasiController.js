const Biodata = require("../model/Informasi")

module.exports = {
    index: function (req, res) {
        Biodata.get(req.con, function (err, rows) {
            res.render("backend/informasi/index", {
                title: 'view Informasi',
                judul : 'Informasi',
                data: rows
            })
        })
    },

    create: function (req, res) {
        res.render("backend/informasi/create", {
                title: 'create Informasi',
                judul: 'Create Informasi',
        })
    },

    store: function (req, res) {
        Biodata.create(req.con, req.body, function (err) {
            res.redirect("/informasi")
        })
    },

    edit: function (req, res) {
        Biodata.getById(req.con, req.params.id, function (err, rows) {
            res.render("backend/informasi/edit", {
                 title: 'Edit Informasi',
                judul: 'Edit Informasi',
                data: rows[0]
            })  
        })
    },

    update: function (req, res) {
        Biodata.update(req.con, req.body, req.params.id, function (err) {
            res.redirect("/informasi")
        })
    },

    destroy: function (req, res) {
        Biodata.destroy(req.con, req.params.id, function (err) {
            res.redirect("/informasi")
        })
    }
}
