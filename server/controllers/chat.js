"use strict";
const Chat = require('../models').Chat,
    botController = require('./bot'),
    messageBy = require('../enums').MessageBy,
    Promise = require('bluebird');

/** @namespace chatController */
const chatController = {

    /**
     * @name getHistory
     * @description Get All Chat History
     * @param {object} req - Express Request Object
     * @param {string} req.body.username - Username submitted
     * @param {object} res - Express Response Object
     * @return {undefined}
     */
    getHistory(req, res, next) {

        return new Promise((resolve, reject) => {

            Chat.find().distinct('history_id').exec().then(historyIds => {

                resolve(historyIds);

            }).catch(err => {

                if (err) return next(err);

            });

        }).map(history_id => {

            return new Promise((resolve, reject) => {

                Chat.findOne({ history_id: history_id }).sort('-created_at').exec().then(lastChat => {

                    resolve(lastChat);

                }).catch(err => {

                    if (err) return next(err);

                });

            });

        }).then(chats => {

            res.status(200).send(chats);

        });



    },

    /**
     * @name getChatMessages
     * @description Get All Chat Messages 
     * @param {object} req - Express Request Object
     * @param {number} req.params.history_id - Chat History Id
     * @param {object} res - Express Response Object
     * @return {undefined}
     */
    getChatMessages(req, res, next) {

        Chat.find({ history_id: req.params.history_id }).exec().then(chat => {

            res.status(200).send(chat);

        }).catch(err => {

            if (err) return next(err);

        });

    },

    getLastChatHistory(req, res, next) {

        Chat.findOne().sort('-created_at').exec().then(chat => {

            let history_id;


            if (!chat) {
                history_id = 0;
            } else {
                history_id = chat.history_id;
            }

            req.params.history_id = history_id;

            next();


        }).catch(err => {
            if (err) return next(err);
        });

    },


    /**
     * @name postMessage
     * @description Saves Message, Get Bot Response, Save The reponse and return message to user
     * @param {object} req - Express Request Object
     * @param {string} req.body.message - Chat Message
     * @param {number} req.body.history_id - Chat History ID
     * @param {object} res - Express Response Object
     * @return {undefined}
     */
    postMessage(req, res) {

        Chat.create({
            message: req.body.message,
            history_id: req.body.history_id,
            message_by: messageBy.USER.value
        }, function(err, created) {

            if (err) return next(err);

            botController.getWeather(req.body.message).then(message => {

                Chat.create({
                    message: message,
                    history_id: req.body.history_id,
                    message_by: messageBy.BOT.value
                });

                res.status(200).send({
                    status: true,
                    message: message
                });

            }).catch(error => {

                return next(err);

            });

        });

    }
};

module.exports = chatController;