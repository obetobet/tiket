// var Request = require("request")
const var_dump = require('var_dump')
module.exports = {

    get: function (con, callback) {
        con.query("SELECT * FROM tb_master_artikel", callback)

    },

    getById: function (con, id, callback) {
        con.query(`SELECT * FROM tb_master_artikel WHERE id = ${id}`, callback)
    },

    create: function (con, data, callback) {
        con.query(
            "INSERT INTO tb_master_artikel SET ?", data, callback
        )
    },

    update: function (con, data, id, callback) {
    
        con.query(
            "UPDATE tb_master_artikel SET nama='" + data.nama + "'  WHERE id=" + id + "", callback
        )
    },

    destroy: function (con, id, callback) {
        con.query("DELETE FROM tb_master_artikel WHERE id = ?", id, callback)
    }
}
