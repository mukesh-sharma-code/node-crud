const express = require("express")
const userController = require("../controllers/UserController.js")
const router = express.Router();

router.get('/getAllUsers',userController.getAllUsers)
router.post('/insertUser',userController.insertUser)
router.get('/getUserById',userController.getUserById)
router.patch('/updateById',userController.updateById)
router.post('/deleteById',userController.deleteById)

module.exports = router