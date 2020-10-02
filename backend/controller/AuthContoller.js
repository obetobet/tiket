const Auth = require("../model/Auth")
const var_dump = require('var_dump')
const bcrypt = require('bcrypt');
module.exports = {


    index: function (req, res) {
        res.render("login", {
            title: 'Login | Tiketing', 
            pesan: {
                alert: req.flash('messages')[2],
                type: req.flash('messages')[0],
                icon: req.flash('messages')[1]
            },
        })
    },

    auth: function (req, response) {
        let password = req.body.password;
        let email = req.body.email;
    
            if (password && email) {
                Auth.cek_user(req.con, email, function (err, rows) {    
                    
                    if (rows.length > 0) {
                        var string = JSON.stringify(rows);
                        var json = JSON.parse(string);
                        var user = json[0];
                        bcrypt.compare(password, user.password, function (err, res) {
                            if (res) {
                                    req.session.loggedin = true;
                                    req.session.nama = user.nama;
                                    req.session.email = user.email;
                                    req.session.id_user = user.id;
                                    req.session.role = user.role;
                                
                                if (user.role === 'admin') {
                                    response.redirect("/admin");
                                } else {
                                    response.redirect('/admin');
                                }
                            } else {
                                req.flash('messages', ['alert-danger',
                                    'mdi mdi-block-helper',
                                    'Email is alredy, please use other email!'
                                ])
                                response.redirect("/login");
                            }
                            
                        })
                    }
                })

            } else {
                req.flash('messages', ['alert-danger',
                    'mdi mdi-block-helper',
                    'Email is alredy, please use other email!'
                ])
                res.redirect("/login");
            } 
       
    },

    destroy: function (req, res) {
        // res.render("login");
        req.session.destroy();
        res.redirect("/login");
    }
}
