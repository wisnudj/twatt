const express = require('express')
const router = express.Router()
const twitterController = require('../controllers/twittercontroller')
const cors = require('cors')

router.get('/usertimeline',twitterController.usertimeline)
router.get('/hometimeline', twitterController.hometimeline)
router.get('/searchtimeline/:id', twitterController.searchtimeline)
router.post('/post', twitterController.posting)

module.exports = router;
