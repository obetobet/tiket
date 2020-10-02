const express = require("express")
const router = express.Router()
const homeController = require("../controller/homeController")

router.get("/", homeController.index)
router.get("/create", homeController.create)
router.get("/:id/edit", homeController.edit)
router.put("/:id", homeController.update)
router.delete("/:id", homeController.destroy)
module.exports = router
