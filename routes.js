const controller = require('../controllers/userController')
const passcontroller = require('../controllers/resetPassword')
const express = require('express')
const route = express.Router()

route.post('/users', controller.user)

route.post('/', passcontroller.sendEmail)

route.post('/:userId/:token', passcontroller.ResetPassword)

module.exports = route