const express = require('express')

const router = express.Router()
const cpController = require('../controllers/cpController')

const generalMiddleWare = require('../middleware/authMiddle')








//Routes INDUCES -> Index New Delete/Destroy Update Create Edit Show


router.get('/',generalMiddleWare,cpController.index)


module.exports = router