const express = require("express")
const router = express.Router()
const dashboardController = require("../controller/dashboardController")

router.get("/", dashboardController.index)
router.get("/create", dashboardController.create)
router.post("/", dashboardController.store)
router.get("/:id/edit", dashboardController.edit)
router.put("/:id", dashboardController.update)
router.delete("/:id", dashboardController.destroy)
module.exports = router
