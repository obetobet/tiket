const express = require("express")
const router = express.Router()
const AuthController = require("../../controller/AuthContoller")

router.get("/", AuthController.index)
router.get("/logout", AuthController.destroy)
router.post("/auth", AuthController.auth)
module.exports = router
