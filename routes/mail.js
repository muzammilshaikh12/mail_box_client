const express = require('express')

const router = express.Router()

const authenticator = require('../middleware/authenticator')

const mailController = require('../controllers/mail')

router.post('/sendmail',authenticator.authenticator,mailController.postmail)

module.exports = router