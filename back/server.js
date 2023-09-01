const express = require('express')
require('dotenv')
const cors = require('cors')
const methodOverride = require('method-override')
const mongoConfig  = require('./config')

mongoConfig()



const app = express()
const cp = require('./routes/cp')

app.use(cors())
app.use(methodOverride('_method'))
app.use(express.json())
app.use(express.static('public'))
app.use('/cp', cp)

app.get('/',(req,res) => {
    console.log('hey')
})


app.listen(process.env.PORT,()=>{
    console.log('listen in on:',process.env.URL_+ ":"+ process.env.PORT)
})