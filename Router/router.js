const express = require('express')

const userController = require('../Controller/usersController')

const formUserController = require('../Controller/formUserController')

const jwtMiddleWare = require('../Middileware/jwtMiddileware')

const multerConfig = require('../Middileware/multerMiddileware')


const router = new express.Router()

//register
router.post("/user/register",userController.register)

//login
router.post("/user/login",userController.login)

module.exports = router

// adding user details
router.post("/user/add",jwtMiddleWare,multerConfig.single("img"),formUserController.addUserDetails)

// editprofile
router.put('/user/edit',jwtMiddleWare,multerConfig.single('profile'),userController.editUser)
