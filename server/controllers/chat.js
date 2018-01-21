"use strict";
const Chat = require('../models').Chat;

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

        let history = [{
            created_at: "Yesterday",
            message: "I am rock"
        }];

        res.status(201).send({
            history: history,
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

            // object of the user
            console.log(chat);

            res.status(201).send({
                status: true,
                chat: chat
            });

        });



    },


    /**
     * @name postMessage
     * @description Process Chat Message And Give a response
     * @param {object} req - Express Request Object
     * @param {string} req.body.message - Chat Message
     * @param {number} req.body.history_id - Chat History ID
     * @param {object} res - Express Response Object
     * @return {undefined}
     */
    postMessage(req, res) {

        Chat.create({
            message: 'I am rock',
            history_id: '1',
            message_by: '1'
        }, function(err, created) {

            console.log(err);

            if (err) throw err;

            console.log(created);

            console.log('User created!');

            let message = "sdsd";

            res.status(201).send({
                status: true,
                message: message
            });

        });

    }
};

module.exports = chatController;