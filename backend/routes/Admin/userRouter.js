const express = require("express")
const router = express.Router()
const M_userController = require("../../controller/Admin/M_userController")

router.get("/", M_userController.index)
router.post("/create_user", M_userController.store)
router.post("/edit_user", M_userController.update)
router.get("/edit/:id", M_userController.get_id)
router.post("/delete_user", M_userController.destroy)
module.exports = router
