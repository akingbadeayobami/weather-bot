"use strict";
const Promise = require("bluebird"),
    { Wit } = require('node-wit'),
    config = require('../config'),
    request = require('request');

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

            const client = new Wit({ accessToken: config.wit_api_key });

            client.message(message, {})
                .then((data) => {

                    let location = "Lagos,NG";

                    const intent = data.entities;

                    if (intent.location.length > 0) {

                        location = intent.location[0].value;

                    }

                    request(`https://api.weatherbit.io/v2.0/current?city=${location}&key=${config.weather_bit_api_key}`, { json: true }, (err, res, body) => {

                        if (err) { return reject(err); }

                        let weatherResponse;

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