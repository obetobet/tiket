// var Request = require("request")
module.exports = {

    get: function (con, callback) {
        con.query("SELECT * FROM tb_informasi", callback)

    },

    getById: function (con, id, callback) {
        con.query(`SELECT * FROM tb_informasi WHERE id = ${id}`, callback)
    },

    create: function (con, data, callback) {
     
        con.query(
            `INSERT INTO tb_informasi SET 
      judul = '${data.judul}', 
      keterangan = '${data.keterangan}`,
     callback
        )
    },

    update: function (con, data, id, callback) {
        con.query(
            `UPDATE tb_informasi SET 
      judul = '${data.judul}',
      keterangan = '${data.keterangan}',
      WHERE id = ${id}`,
            callback
        )
    },

    destroy: function (con, id, callback) {
        con.query(`DELETE FROM tb_informasi WHERE id = ${id}`, callback)
    }
}
