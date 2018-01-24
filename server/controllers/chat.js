"use strict";
const Chat = require('../models').Chat,
    botController = require('./bot'),
    messageBy = require('../enums').MessageBy,
    Promise = require('bluebird');

/** @namespace chatController */
const chatController = {

    /**
     * @name getAllSession
     * @description Get All Chat Sessions And Their Last Message
     * @param {object} req - Express Request Object 
     * @param {object} res - Express Response Object
     * @return {undefined}
     */
    getAllSession(req, res, next) {

        return new Promise((resolve, reject) => {
            // Get all unique session ids
            Chat.find().distinct('session_id').exec().then(sessionIds => {

                resolve(sessionIds);

            }).catch(err => {

                if (err) return next(err);

            });

        }).map(session_id => {

            return new Promise((resolve, reject) => {
                // Get the last message for each session
                Chat.findOne({ session_id: session_id }).sort('-_id').exec().then(lastChat => {

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
     * @description Get All Chat Messages For A Session 
     * @param {object} req - Express Request Object
     * @param {number} req.params.session_id - Chat Session Id
     * @param {object} res - Express Response Object
     * @return {undefined}
     */
    getChatMessages(req, res, next) {

        Chat.find({ session_id: req.params.session_id }).exec().then(chat => {

            res.status(200).send(chat);

        }).catch(err => {

            if (err) return next(err);

        });

    },

    /**
     * @name getNewSession
     * @description Get new sessionID 
     * @param {object} req - Express Request Object
     * @param {object} res - Express Response Object
     * @return {undefined}
     */
    getNewSession(req, res, next) {

        Chat.findOne().sort('-session_id').exec().then(chat => {

            const defaultMessage = 'Hi! Welcome to an interactive weather bot. May I know your name?';

            let newChatMessage = {
                message: defaultMessage,
                message_by: messageBy.BOT.value
            };

            if (!chat) {

                newChatMessage = Object.assign(newChatMessage, { session_id: 1 });

                Chat.create(newChatMessage);

                return res.status(200).send(newChatMessage);

            } else {

                Chat.findOne({ session_id: chat.session_id }).sort('-_id').exec().then(lastChat => {

                    if (lastChat.message == defaultMessage) {

                        newChatMessage = Object.assign(newChatMessage, { session_id: chat.session_id });

                    } else {

                        newChatMessage = Object.assign(newChatMessage, { session_id: chat.session_id + 1 });

                        Chat.create(newChatMessage);

                    }

                    res.status(200).send(newChatMessage);

                });



            }

        }).catch(err => {
            if (err) return next(err);
        });

    },


    /**
     * @name postMessage
     * @description Saves Message, Get Bot Response, Save The reponse and return message to user
     * @param {object} req - Express Request Object
     * @param {string} req.body.message - Chat Message
     * @param {number} req.body.session_id - Chat Session ID
     * @param {object} res - Express Response Object
     * @return {undefined}
     */
    postMessage(req, res, next) {

        // Create the user's Messages
        Chat.create({
            message: req.body.message,
            session_id: req.body.session_id,
            message_by: messageBy.USER.value
        }, function(err, created) {

            if (err) return next(err);

            // Get the bot reply to the message
            botController.getWeather(req.body.message).then(message => {

                // Create the bot's reply
                Chat.create({
                    message: message,
                    session_id: req.body.session_id,
                    message_by: messageBy.BOT.value
                });

                res.status(200).send({
                    status: true,
                    message: message
                });

            }).catch(err => {

                return next(err);

            });

        });

    }
};

module.exports = chatController;