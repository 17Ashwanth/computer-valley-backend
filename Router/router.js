const express = require('express')

const userController = require('../Controller/usersController')

const router = new express.Router()

//register
router.post("/user/register",userController.register)

//login
router.post("/user/login",userController.login)

module.exports = router


