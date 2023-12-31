const express = require('express')

const router = express.Router()
const cpController = require('../controllers/cpController')

const generalMiddleWare = require('../middleware/authMiddle')

const signUpMiddle = require('../middleware/signUpMiddle')
// const multer = require('multer');
// const upload = multer({ dest: 'uploads/' });





//Routes INDUCES -> Index New Delete/Destroy Update Create Edit Show


router.get('/home/:id',generalMiddleWare,cpController.index)
router.get('/users',cpController.index)
router.delete('/profile/:id',generalMiddleWare,cpController.delete)
router.post('/register',signUpMiddle,cpController.create)
router.post('/login',signUpMiddle,cpController.loginData)
router.put('/profile/edit/:id',cpController.update)



module.exports = router