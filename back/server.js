const express = require('express')
require('dotenv')
const cors = require('cors')
const methodOverride = require('method-override')

const {mongoConfig}  = require('./config')
const newsData = require('./data/newsData')
mongoConfig()
const cloudinary = require('cloudinary');

const multer  = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
const stream = require('stream');
// const multer = require('multer');

// // Set up multer with a destination folder and file name customization
// const storage = multer.diskStorage({
//   destination: (req, file, callback) => {
//     callback(null, 'uploads/'); // Set the destination folder where files will be saved
//   },
//   filename: (req, file, callback) => {
//     const fileName = Date.now() + '-' + file.originalname; // Customize the file name
//     callback(null, fileName);
//   },
// });

// const upload = multer({ storage: storage });


const app = express()
const cp = require('./routes/cp')

app.use(cors())
app.use(methodOverride('_method'))
app.use(express.json())
app.use(express.static('public'))
app.use('/cp', cp)

app.get('/',(req,res) => {
    // console.log('hey',newsData)
    res.json({message:newsData})
})

app.post('/:id', upload.single('image'), function (req, res, next) {
    const image = req.body.imageP
    const upload_stream = cloudinary.v2.uploader.upload_stream(function(err,image) {   
        console.log(image.secure_url)
         res.send(image.secure_url);
   });
   console.log(upload_stream)
   const bufferStream = new stream.PassThrough();
   bufferStream.end(req.file.buffer);
   bufferStream.pipe(upload_stream);
   

   
})

app.listen(process.env.PORT,()=>{
    console.log('listen in on:',process.env.URL_)
})