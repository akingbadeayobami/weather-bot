"use strict";
const Chat = require('../models').Chat,
    botController = require('./bot'),
    messageBy = require('../enums').MessageBy;

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
    getHistory(req, res) {

        Chat.find().distinct('history_id', function(err, chats) {
            if (err) return next(err);

            // Do Some mapp to get the last date and messgae of the chat

            res.status(200).send({
                chats: chats
            });

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

        Chat.find({ history_id: req.params.history_id }, function(err, chat) {
            if (err) return next(err);

            res.status(200).send({
                chat: chat
            });

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