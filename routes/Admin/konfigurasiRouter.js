const express = require("express")
const router = express.Router()
const KonfigurasiController = require("../../controller/Admin/KonfigurasiController")

router.get("/", KonfigurasiController.index)
router.post("/store_Konfigurasi", KonfigurasiController.store)
router.post("/edit_Konfigurasi", KonfigurasiController.update)
router.post("/delete_Konfigurasi/", KonfigurasiController.destroy)
module.exports = router
