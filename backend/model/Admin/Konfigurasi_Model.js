// var Request = require("request")
const var_dump = require('var_dump')
module.exports = {

    get: function (con, callback) {
        con.query(
            "select * from tb_konfigurasi limit 1", callback)
    },

   

    create: function (con, data, callback) {
        con.query(
            "INSERT INTO tb_konfigurasi SET ?", data, callback
        )
    },

    update: function (con, data, id, callback) {

         con.query(
             "UPDATE tb_konfigurasi SET nama='" + data.nama + "' , keterangan='" + data.keterangan + "' , status='" + data.status + "' , qty='" + data.qty + "' , harga_1='" + data.harga_1 + "' , discount='" + data.discount + "' , id_jenistiket='" + data.id_jenistiket + "'  WHERE id=" + id + "", callback
         )
    },

     update_2: function (con, data, id, callback) {
        // console.log(data);
        // process.exit();
         con.query(
             "UPDATE tb_konfigurasi SET nama='" + data.nama + "' , keterangan='" + data.keterangan + "' , status='" + data.status + "' , qty='" + data.qty + "' , harga_1='" + data.harga_1 + "' , discount='" + data.discount + "' , id_jenistiket='" + data.id_jenistiket + "' , gambar='" + data.gambar + "' WHERE id=" + id + "", callback
         )
     },

    destroy: function (con, id, callback) {
        con.query("DELETE FROM tb_konfigurasi WHERE id = ?", id, callback)
    }
}
