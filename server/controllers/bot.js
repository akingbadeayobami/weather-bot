"use strict";
const Promise = require("bluebird");
/** @namespace botController */
const botController = {

    /**
     * @name getWeather
     * @description Gets the weather in response from a messages 
     * @param {string} message - Username submitted 
     * @return {Promise}
     */
    getWeather(message) {

        return new Promise((resolve, reject) => {

            resolve("This is a response");

        });


    },

};

module.exports = botController;