const mongoose = require('mongoose');
const path = require('path');
const dbConfig = require('../config/db');

require('dotenv').config({
    path: path.join(__dirname, '../../.env')
});

const env = process.env.NODE_ENV || 'development';

module.exports = mongoose.createConnection(dbConfig[env].storage, function(err, con) {
    console.log("error", err);
});