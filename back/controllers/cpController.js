const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const axios = require("axios");

module.exports.index = async (req,res) =>{
    console.log('Hey you made it ')
}


module.exports.update = async (req,res) =>{
    console.log('edit hit',req.params.id, req.body)
    try{
        const userProfile = await User.findById(req.params.id)
        const updatedProfile = await User.findByIdAndUpdate(req.params.id, req.body)
        console.log(userProfile,updatedProfile)
    }
    catch(e){
        console.log(e.message)
    }
}



module.exports.create = async (req,res) => {

    console.log('Create path',req.body)

    try{
        const {firstName ,lastName, email, password, type ,resume,course,about,github,linkedIn} = req.body
        const existingUser = await User.findOne({ email });
      if (existingUser) {
        console.log("User found");
        return res
          .status(400)
          .json({ error: "User with this email already exists" });
      }
      
      
      const salt = await bcrypt.genSalt(Number(process.env.SALT_ROUNDS))
      const encryptPassword = await bcrypt.hash(password, salt);
      const newUser = new User({
        firstName ,lastName, email, password:encryptPassword, type,resume,course,about,github,linkedIn
      })

      //save user 
      await newUser.save();
      console.log(newUser,'here')
      const payload = {
        id: newUser._id,
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        email: newUser.email,
        type: newUser.type,
        resume: newUser.resume,
        course:newUser.course,
        about:newUser.about,
        github:newUser.github,
        linkedIn:newUser.linkedIn

      };
        console.log('hey he at the end of the creation')
        const token = jwt.sign(payload, process.env.THANG, { expiresIn: process.env.TIME_TOKEN });
  
        res.status(200).json({message: token , id:payload.id });
    }catch(e){
        res.json({error:e.message})
    }
}

