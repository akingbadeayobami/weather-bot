const mongoose = require('mongoose');
const config = require('../config');

module.exports = mongoose.createConnection(config.mongodb_url, function(err, con) {
    console.log("error", err);
});