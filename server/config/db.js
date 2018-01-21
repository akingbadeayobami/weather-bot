'use strict';
const path = require('path');
require('dotenv').config({
    path: path.join(__dirname, '../../.env')
});
module.exports = {

    "development": {
        "storage": process.env.DB_USER
    },

    "production": {
        "username": process.env.DB_USER
    },

    "test": {
        "storage": process.env.DB_USER
    }

};