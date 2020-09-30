// var Request = require("request")
const var_dump = require('var_dump')
module.exports = {

    get: function (con, callback) {
        con.query("SELECT * FROM tb_master_tiket", callback)

    },

    getById: function (con, id, callback) {
        con.query(`SELECT * FROM tb_master_tiket WHERE id = ${id}`, callback)
    },

    create: function (con, data, callback) {
        con.query(
        "INSERT INTO tb_master_tiket SET ?", data, callback
        )
    },

    update: function (con, data, id, callback) {
         var_dump(data.judul)
        con.query(
            "UPDATE tb_master_tiket SET judul='" + data.judul + "' , keterangan='" + data.keterangan + "' WHERE id=" + id + "", callback
        )
    },

    update_2: function (con, data, id, callback) {
        var_dump(data.judul)
        con.query(
            "UPDATE tb_master_tiket SET judul='" + data.judul + "' , keterangan='" + data.keterangan + "' WHERE id=" + id + "", callback
        )
    },

    destroy: function (con, id, callback) {
        con.query("DELETE FROM tb_master_tiket WHERE id = ?",id, callback)
    }
}
