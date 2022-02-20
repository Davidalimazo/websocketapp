const express = require('express')
const router = express.Router()
const controller = require('../controller/controller')

router.get('/register', controller.register_get)
router.post('/register', controller.login_post)
router.get('/login', controller.login_get)
router.post('/login', controller.login_post)
router.get('/dashboard', controller.dashboard_get)

module.exports = router