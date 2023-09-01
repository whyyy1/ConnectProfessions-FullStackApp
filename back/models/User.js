const mongoose = require('mongoose')
const encrypt = require('mongoose-encryption');
require('dotenv').config();
const Schema = mongoose.Schema


// / this Schema acts as a blueprint for our data
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: false,
        
    },
    lastName: {
        type: String,
        required: false,
       
    },
    email: {
        type: String,
        required: false,
        unique: true,
       
    },
    password: {
        type: String,
        required: false,
        
 
    },
    type: {
        type: String,
        required: false,
       
    },

});

// 1st argument is the collection, 2nd is the Schema (blueprint) 
const User = mongoose.model('Users', userSchema)
userSchema.plugin(encrypt, { secret: process.env.THANG , encryptedFields: ['password'] });
module.exports = User