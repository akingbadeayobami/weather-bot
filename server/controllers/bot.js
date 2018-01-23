"use strict";
const Promise = require("bluebird"),
    { Wit } = require('node-wit'),
    config = require('../config'),
    request = require('request');

/** @namespace botController */
const botController = {

    /**
     * @name getWeather
     * @description Gets The Weather In Response To A Message 
     * @param {string} message - Message From User
     * @returns {Promise<string]>} A promise of the bot's reply
     */
    getWeather(message) {

        return new Promise((resolve, reject) => {

            // Creating a Wit Instance
            const client = new Wit({ accessToken: config.wit_api_key });

            // Calling Wit to transform message to intents 
            client.message(message, {})
                .then((data) => {

                    // Setting Default Location
                    let location = "Lagos,NG";

                    const intent = data.entities;

                    // making sure we have a location intent
                    if (intent.location.length > 0) {

                        location = intent.location[0].value;

                    }

                    // Make a request to a weather api
                    request(`https://api.weatherbit.io/v2.0/current?city=${location}&key=${config.weather_bit_api_key}`, { json: true }, (err, res, body) => {

                        if (err) { return reject(err); }

                        let weatherResponse;

                        // Making sure we have a response on the weather
                        if (body && body.data.length > 0) {

                            const weatherData = body.data[0];
                            const weather = weatherData.weather.description;
                            const temperature = weatherData.temp;

                            weatherResponse = `The current weather in ${location} is ${weather} with a temperature of ${temperature}C`;

                        } else {

                            weatherResponse = "Sorry! I couldn't get the weather for your location.";

                        }

                        resolve(weatherResponse);

                    });

                })
                .catch(err => {
                    reject(err);
                });

        });

    },

};

module.exports = botController;