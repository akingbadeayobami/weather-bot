"use strict";
const mongooseConnection = require('./connection');
const Schema = require('mongoose').Schema;

var ChatSchema = new Schema({
    session_id: { type: Number, required: true },
    message: { type: String, required: true },
    message_by: { type: Number, required: true },
    created_at: Date,
    updated_at: Date
});

ChatSchema.pre('save', function(next) {

    // get the current date
    var currentDate = new Date();

    // change the updated_at field to current date
    this.updated_at = currentDate;

    // if created_at doesn't exist, add to that field
    if (!this.created_at) {
        this.created_at = currentDate;
    }
    next();
});

module.exports = mongooseConnection.model('chat', ChatSchema);