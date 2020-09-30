const express = require("express")
const router = express.Router()
const tiketController = require("../../controller/Admin/tiketController")

router.get("/", tiketController.index)
router.post("/store_tiket", tiketController.store)
router.post("/edit_tiket", tiketController.update)
router.post("/delete_tiket/", tiketController.destroy)
router.get("/kat_tiket", tiketController.kat_tiket)
module.exports = router
