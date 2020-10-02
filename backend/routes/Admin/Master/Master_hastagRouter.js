const express = require("express")
const router = express.Router()
const Master_hastagController = require("../../../controller/Admin/Master/Master_hastagController")

router.get("/", Master_hastagController.index)
router.post("/store_Master_hastag", Master_hastagController.store)
router.post("/edit_Master_hastag", Master_hastagController.update)
router.post("/delete_Master_hastag", Master_hastagController.destroy)
module.exports = router
