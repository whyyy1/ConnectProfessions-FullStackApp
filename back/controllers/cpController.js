const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const axios = require("axios");

const {cloudinary}  = require('../config')
module.exports.index = async (req, res) => {
    try{
        const usersData = await User.find().select('-password');
    
        console.log(usersData.length)
    res.json(usersData)
//   console.log("Hey you made it ",users);

    }catch(e){
        res.json({error:e.message})
    }
    
};

module.exports.update = async (req, res) => {
    console.log("edit hit");
    
    try {
      const userProfile = await User.findById(req.params.id);
      const updateObject = { _id: req.params.id }; // Include _id in the updateObject
        
      Object.entries(req.body).forEach(([key, value]) => {
        if (value !== undefined && value !== null && value !== "") {
            // if (key === 'resume') {
            //     console.log(req.body.resume, req.files);
      
            //     // Upload the resume file to Cloudinary
            //     cloudinary.uploader.upload(value, (err, fileResult) => {
            //       if (err) {
            //         console.error(err);
            //       } else {
            //         // Update the user's resume URL in the updateObject
            //         updateObject.resume = fileResult.secure_url;
      
            //         // Continue with other updates or save the profile here if needed
            //       }
            //     });
            //   }
            //   if (key === 'profileImage') {
            //     console.log(req.body.profileImage);
      
            //     // Upload the profile image to Cloudinary
            //     cloudinary.uploader.upload(value, (err, imageResult) => {
            //       if (err) {
            //         console.error(err);
            //       } else {
            //         // Update the user's profile image URL in the updateObject
            //         updateObject.profileImage = imageResult.secure_url;
      
            //         // Continue with other updates or save the profile here if needed
            //       }
            //     });
            //   }
          updateObject[key] = value;
        }
      });
  
      const updatedProfile = await User.findByIdAndUpdate(
        req.params.id,
        { $set: updateObject },
        { new: true }
      );
      const payload = {
      id: updatedProfile._id,
      firstName: updatedProfile.firstName,
      lastName: updatedProfile.lastName,
      profileImage:updatedProfile.profileImage,
      email: updatedProfile.email,
      type: updatedProfile.type,
      resume: updatedProfile.resume,
      course: updatedProfile.course,
      about: updatedProfile.about,
      github: updatedProfile.github,
      linkedIn: updatedProfile.linkedIn,
    };
      console.log(updatedProfile);
      res.json({message:payload});
    } catch (e) {
      console.log(e.message);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };

module.exports.create = async (req, res) => {
  console.log("Create path", req.body);

  try {
    const {
      firstName,
      lastName,
      email,
      password,
      type,
      profileImage,
      resume,
      course,
      about,
      github,
      linkedIn,
    } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      console.log("User found");
      return res
        .status(400)
        .json({ error: "User with this email already exists" });
    }
    console.log(resume,profileImage)
    const salt = await bcrypt.genSalt(Number(process.env.SALT_ROUNDS));
    const encryptPassword = await bcrypt.hash(password, salt);
    const newUser = new User({
      firstName,
      lastName,
      email,
      password: encryptPassword,
      type,
      profileImage,
      resume,
      course,
      about,
      github,
      linkedIn,
    });

    //save user
    await newUser.save();
    // console.log(newUser, "here");
    const payload = {
      id: newUser._id,
      firstName: newUser.firstName,
      lastName: newUser.lastName,
      profileImage:newUser.profileImage,
      email: newUser.email,
      type: newUser.type,
      resume: newUser.resume,
      course: newUser.course,
      about: newUser.about,
      github: newUser.github,
      linkedIn: newUser.linkedIn,
    };
    console.log("hey he at the end of the creation");
    const token = jwt.sign(payload, process.env.THANG, {
      expiresIn: process.env.TIME_TOKEN,
    });

    res.status(200).json({ message: token, id: payload.id });
  } catch (e) {
    res.json({ error: e.message });
  }
};

module.exports.loginData = async (req, res) => {
  console.log(req.body);
  try {
    const user = req.body;
    if (user) {
      const userAcc = await User.find();
      const foundAccount = userAcc.find((account) => {
        return account.email === user.email;
      });

      if (foundAccount) {
        console.log(foundAccount, "Found user");
        const validPass = await bcrypt.compare(
          user.password,
          foundAccount.password
        );
        const payload = {
          id: foundAccount._id,
          firstName: foundAccount.firstName,
          lastName: foundAccount.lastName,
          profileImage:foundAccount.profileImage,
          email: foundAccount.email,
          type: foundAccount.type,
          resume: foundAccount.resume,
          course: foundAccount.course,
          about: foundAccount.about,
          github: foundAccount.github,
          linkedIn: foundAccount.linkedIn,
        };
        const token = jwt.sign(payload, process.env.THANG, {
          expiresIn: process.env.TIME_TOKEN,
        });

        res.status(200).json({ message: token, id: foundAccount.id });
      } else {
        res.status(403).json({ error: "Invalid credentials" });
      }
    } else {
      console.log("User not found");
      res.status(404).json({ error: "User not found" });
    }
  } catch (err) {
    console.log("Failed to fetch Users: ", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
