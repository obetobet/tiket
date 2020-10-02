// var Request = require("request")
const var_dump = require('var_dump')
module.exports = {

    get: function (con, callback) {
        con.query("SELECT * FROM tb_user", callback)

    },

    getById: function (con, id, callback) {
        console.log(id)
        con.query(`SELECT * FROM tb_user WHERE id = ${id}`, callback)
    },

    validation_email: function (con, email, callback) {
        console.log(email)
        con.query("SELECT email FROM tb_user WHERE email='"+email+"'", callback)
    },

    create: function (con, data, callback) {
        con.query(
            "INSERT INTO tb_user SET ?", data, callback
        )
    },

    update: function (con, data, id, callback) {
    
        con.query(
            "UPDATE tb_user SET nama='" + data.nama + "'  WHERE id=" + id + "", callback
        )
    },

    destroy: function (con, id, callback) {
        con.query("DELETE FROM tb_user WHERE id = ?", id, callback)
    }
}
