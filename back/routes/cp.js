const express = require('express')

const router = express.Router()
const cpController = require('../controllers/cpController')

const generalMiddleWare = require('../middleware/authMiddle')

const signUpMiddle = require('../middleware/signUpMiddle')






//Routes INDUCES -> Index New Delete/Destroy Update Create Edit Show


router.get('/',generalMiddleWare,cpController.index)

router.post('/register',signUpMiddle,cpController.create)


module.exports = router