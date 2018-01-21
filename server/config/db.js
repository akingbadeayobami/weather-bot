'use strict';
const path = require('path');
require('dotenv').config({
    path: path.join(__dirname, '../../.env')
});
module.exports = {

    "development": {
        "storage": process.env.MONGODB_URL
    },

    "production": {
        "storage": process.env.MONGODB_URL
    },

    "test": {
        "storage": process.env.MONGODB_URL
    }

};