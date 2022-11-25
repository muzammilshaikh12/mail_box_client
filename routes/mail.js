const express = require('express')

const router = express.Router()

const authenticator = require('../middleware/authenticator')

const mailController = require('../controllers/mail')

router.post('/sendmail',authenticator.authenticator,mailController.postmail)

router.get('/getmail',authenticator.authenticator,mailController.getMails)

router.put('/updateinbox/:id',mailController.updateInbox)

router.delete('/deleteinbox/:id',mailController.deleteInbox)

router.delete('/deletesent/:id',mailController.deleteSentmail)

module.exports = router