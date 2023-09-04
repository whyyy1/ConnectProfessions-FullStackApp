const express = require('express')

const router = express.Router()
const cpController = require('../controllers/cpController')

const generalMiddleWare = require('../middleware/authMiddle')

const signUpMiddle = require('../middleware/signUpMiddle')
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });





//Routes INDUCES -> Index New Delete/Destroy Update Create Edit Show


router.get('/home/:id',generalMiddleWare,cpController.index)

router.post('/register',signUpMiddle,cpController.create)
router.post('/login',signUpMiddle,cpController.loginData)
router.put('/profile/edit/:id',upload.single('resume'),cpController.update)


module.exports = router