const express = require("express")
const router = express.Router()
const Master_tiketController = require("../../../controller/Admin/Master/Master_tiketController")

router.get("/", Master_tiketController.index)
router.post("/store_Master_tiket", Master_tiketController.store)
router.post("/edit_Master_tiket", Master_tiketController.update)
router.post("/delete_Master_tiket", Master_tiketController.destroy)
module.exports = router
