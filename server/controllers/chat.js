"use strict";
const Chat = require('../models').Chat,
    botController = require('./bot'),
    messageBy = require('../enums').MessageBy,
    Promise = require('bluebird');

/** @namespace chatController */
const chatController = {

    /**
     * @name getAllSession
     * @description Get All Chat Session
     * @param {object} req - Express Request Object
     * @param {string} req.body.username - Username submitted
     * @param {object} res - Express Response Object
     * @return {undefined}
     */
    getAllSession(req, res, next) {

        return new Promise((resolve, reject) => {

            Chat.find().distinct('session_id').exec().then(sessionIds => {

                resolve(sessionIds);

            }).catch(err => {

                if (err) return next(err);

            });

        }).map(session_id => {

            return new Promise((resolve, reject) => {

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
     * @description Get All Chat Messages 
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

    getNewSession(req, res, next) {

        Chat.findOne().sort('-session_id').exec().then(chat => {

            let session_id;

            if (!chat) {
                session_id = 1;
            } else {
                session_id = chat.session_id + 1;
            }

            res.status(200).send({
                session_id: session_id
            });

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
        Chat.create({
            message: req.body.message,
            session_id: req.body.session_id,
            message_by: messageBy.USER.value
        }, function(err, created) {

            if (err) return next(err);

            botController.getWeather(req.body.message).then(message => {

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