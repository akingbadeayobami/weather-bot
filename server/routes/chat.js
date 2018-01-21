'use strict';
const express = require('express');
const router = express.Router();
const chatController = require('../controllers').chat;

router.get('/history', chatController.getHistory);

router.get('/messages/:history_id', chatController.getChatMessages);

router.post('/', chatController.postMessage);

module.exports = router;