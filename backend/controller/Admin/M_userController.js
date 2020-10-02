const User = require("../../model/Admin/user_model")
const Swal = require('sweetalert2')
const bcrypt = require('bcrypt');
const var_dump = require("var_dump");
module.exports = {
    index: function (req, res) {
        User.get(req.con, function (err, rows) {
                    
                res.render("backend/user/view", {
                    title: 'M - User',
                    judul: 'Data User',
                    breadcrumb: 'View User',
                    pesan : {
                        alert: req.flash('messages')[2],
                        type: req.flash('messages')[0],
                        icon: req.flash('messages')[1]
                    },
                    data: rows
                })
            })
    },

    store: 
         function(req, res) {
        if (req.method === 'POST') {
            var email = req.body.email;

            User.validation_email(req.con, email, function (err, val) {
            
                if (val !=0) {
                    req.flash('messages', ['alert-danger',
                                            'mdi mdi-block-helper',
                                            'Email is alredy, please use other email!'])
                    res.redirect("/modul_user");
                } else {
                     var password = req.body.password;
                     var datetime = new Date();
                     bcrypt.hash(password, 10, function (err, hash) {
                         let data = {
                             nama: req.body.nama,
                             no_telp: req.body.no_telp,
                             tanggal_lahir: req.body.tgl_lahir,
                             email: req.body.email,
                             jenis_kelamin: req.body.jenis_kelamin,
                             role: req.body.role,
                             status: req.body.status,
                             password: hash,
                             create_at: datetime,
                         }

                         User.create(req.con, data, function (err) {
                             req.flash('messages', ['alert-success',
                                 'mdi mdi-check-all',
                                 'Success'
                             ])
                             res.redirect("/modul_user")
                         })
                     })
                }
            })
            
        } else {
            req.flash('messages', 'you must enter your username and password to login');
    }
        
      
    },

    get_id: function (req, res) {
        User.getById(req.con, req.params.id, function (err, rows) {
            // console.log(rows);
             res.json(rows);
        })
    },

    update: function (req, res) {
        User.update(req.con, req.body, req.body.id, function (err) {
            res.redirect("/master_artikel")
        })
    },


    destroy: function (req, res) {
        let id = req.body.id_tiket
        User.destroy(req.con, id, function (err) {
            req.flash('messages', ['alert-success',
                        'mdi mdi-check-all',
                        'Success'
            ])
            res.redirect("/modul_user")
        })  
    }
}
