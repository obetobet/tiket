const express = require("express")
const router = express.Router()
const informasiController = require("../controller/informasiController")

router.get("/", informasiController.index)
router.get("/create", informasiController.create)
router.post("/", informasiController.store)
router.get("/:id/edit", informasiController.edit)
router.put("/:id", informasiController.update)
router.delete("/:id", informasiController.destroy)
module.exports = router
