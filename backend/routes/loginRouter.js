const express = require("express")
const router = express.Router()
const loginController = require("../controller/loginController")

router.get("/", loginController.index)
router.get("/create", loginController.create)
router.post("/", loginController.store)
router.get("/:id/edit", loginController.edit)
router.put("/:id", loginController.update)
router.delete("/:id", loginController.destroy)
module.exports = router
