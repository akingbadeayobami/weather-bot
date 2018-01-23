'use strict';
const path = require('path');
require('dotenv').config({
    path: path.join(__dirname, '../../.env')
});
const env = process.env.NODE_ENV || 'development';

const config = {

    "development": {
        "mongodb_url": process.env.MONGODB_URL,
        "wit_api_key": process.env.WIT_API_KEY,
        "weather_bit_api_key": process.env.WEATHER_BIT_API_KEY
    },

    "production": {
        "mongodb_url": process.env.MONGODB_URL,
        "wit_api_key": process.env.WIT_API_KEY,
        "weather_bit_api_key": process.env.WEATHER_BIT_API_KEY
    },

    "test": {
        "mongodb_url": process.env.MONGODB_URL,
        "wit_api_key": "XXXXXXXXXXXXXXXXXXX",
        "weather_bit_api_key": "XXXXXXXXXXXXXXXXXXX",
    }

};

module.exports = config[env];