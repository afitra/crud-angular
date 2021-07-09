const router = require("express").Router()
const adminController = require("../controllers/adminController")
const auth = require("../middlewares/auth")
// router.get("/", function (req, res, next) {
//   res.redirect("/admin/signin")
// })

router.get("/queue", adminController.getQueue)
router.post("/signin", adminController.actionSignIn)
router.get("/signout", adminController.actionLogout)
router.post("/visitor", adminController.actionAddVisitor)
router.get("/visitor", adminController.getVisitor)
router.get("/visitor/:id", adminController.getOneVisitor)
router.put("/visitor/:id", adminController.editVisitor)
router.delete("/visitor/:id", adminController.deleteVisitor)
module.exports = router
