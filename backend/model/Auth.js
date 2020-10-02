module.exports = {
  get: function(con, callback) {
    con.query("SELECT * FROM tb_user", callback)
  },

  getById: function(con, id, callback) {
    con.query(`SELECT * FROM tb_user WHERE id_tb_user = ${id}`, callback)
  },

  cek_user: function (con, email, callback) {
    con.query("SELECT * FROM tb_user WHERE email = '" + email + "' AND status='aktif' limit 1", callback)
    },
  

  create: function(con, data, callback) {
    con.query(
      `INSERT INTO tb_user SET 
      nama = '${data.nama}', 
      alamat = '${data.alamat}'`,
      callback
    )
  },

  update: function(con, data, id, callback) {
    con.query(
      `UPDATE biodata SET 
      nama = '${data.nama}', 
      alamat = '${data.alamat}' 
      WHERE id_biodata = ${id}`,
      callback
    )
  },

  destroy: function(con, id, callback) {
    con.query(`DELETE FROM biodata WHERE id_biodata = ${id}`, callback)
  }
}
