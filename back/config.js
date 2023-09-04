const mongoose = require('mongoose');
const cloudinary = require('cloudinary').v2;
require('dotenv').config();

// Define a function to configure and connect to MongoDB
const mongoConfig = async () => {
    try {
        const result = await mongoose.connect(process.env.MONGO_URL);
        console.log('Database connected:', result.connection.host);
    } catch (err) {
        console.error('MongoDB error:', err);
    }
};

// Configure Cloudinary with your credentials
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
});

// Export both the MongoDB configuration and Cloudinary configuration
module.exports = { mongoConfig,cloudinary };
