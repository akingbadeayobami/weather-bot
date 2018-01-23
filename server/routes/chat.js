'use strict';
const express = require('express');
const router = express.Router();
const chatController = require('../controllers').chat;

router.get('/session', chatController.getSession);

router.get('/session/new', chatController.getNewSession);

router.get('/messages/last', chatController.getLastChatSession, chatController.getChatMessages);

router.get('/messages/:session_id', chatController.getChatMessages);

router.post('/', chatController.postMessage);

module.exports = router;