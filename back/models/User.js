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
    profileImage: {
        type: String,
        default:
        "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
        
    },
    resume: {
        data: Buffer,
        contentType: String,
        default:'https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/481/persistent-resource/london-resume-templates.jpg'
        
        
    },
    about: {
        type: String,
        default: 'n/a',
        required: false,
    },
    course: {
        type: String,
        default: 'n/a',
        required: false,
    },
    github: {
        type: String,
        default: 'n/a',
        required: false,
    },
    linkedIn: {
        type: String,
        default: 'n/a',
        required: false,
    },
});



// 1st argument is the collection, 2nd is the Schema (blueprint) 
const User = mongoose.model('Users', userSchema)
userSchema.plugin(encrypt, { secret: process.env.THANG , encryptedFields: ['password'] });
module.exports = User