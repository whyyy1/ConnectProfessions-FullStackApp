const mongoose = require('mongoose');
require('dotenv').config();

const mongoConfig = async () => {
    try {
        const result = await mongoose.connect(process.env.MONGO_URL);
        console.log('Database connected: ', result.connection.host);
    } catch (err) {
        console.log('mongo error: ', err);
    }
};

module.exports = mongoConfig;
