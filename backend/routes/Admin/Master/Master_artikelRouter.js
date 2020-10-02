const express = require("express")
const router = express.Router()
const Master_artikelController = require("../../../controller/Admin/Master/Master_artikelController")

router.get("/", Master_artikelController.index)
router.post("/store_Master_artikel", Master_artikelController.store)
router.post("/edit_Master_artikel", Master_artikelController.update)
router.post("/delete_Master_artikel", Master_artikelController.destroy)
module.exports = router
